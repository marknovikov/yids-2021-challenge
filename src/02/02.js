((global) => {
  const timeout = 20;

  const _async = (fn, cb) => {
    setTimeout(() => {
      cb(fn());
    }, Math.random() * timeout);
  };

  const Folder = function (a = []) {
    if (!new.target) {
      return new Folder(a);
    }

    this.read = (index, cb) => _async(() => a[index], cb);
    this.size = (cb) => _async(() => a.length, cb);
  };

  Object.freeze(Folder);
  global.Folder = Folder;
})(typeof window === 'undefined' ? global : window);

export const solution = async (input) => {
  const size = async (input) => {
    return new Promise((resolve) => input.size((size) => resolve(size)));
  };

  const read = async (idx, input) => {
    return new Promise((resolve) => input.read(idx, (file) => resolve(file)));
  };

  const isBroken = (fileName) => {
    if (typeof fileName !== 'string') {
      return false;
    }
    const chars = fileName.split('');
    return chars.reduce((isBroken, char, idx) => {
      if (isBroken) {
        return isBroken;
      }

      return idx < chars.length - 1 && char === chars[idx + 1];
    }, false);
  };

  const walk = async (input) => {
    const brokenFiles = [];
    if (!(input instanceof Folder)) {
      return brokenFiles;
    }

    const length = await size(input);
    const nodes = await Promise.all(new Array(length).fill(0).map((_, idx) => read(idx, input)));

    for (const node of nodes) {
      if (isBroken(node)) {
        brokenFiles.push(node);
        continue;
      }
      brokenFiles.push(...(await walk(node)));
    }
    return brokenFiles;
  };

  return (await walk(input)).sort();
};
