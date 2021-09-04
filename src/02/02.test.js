'use strict';

import { expect, it } from '@jest/globals';
import { solution } from './02';

describe('solution', () => {
  it('success', async () => {
    const input = Folder([
      'file',
      'ffffile',
      Folder(['file']),
      Folder(['fiiile']),
      Folder([{}, null, 'file', 'ffiillee', 'ffiillee']),
      Folder([Folder(['filllle', 'file', null]), {}, Folder([])]),
    ]);

    const actual = await solution(input);

    const expected = ['ffffile', 'ffiillee', 'ffiillee', 'fiiile', 'filllle'];

    expect(actual).toEqual(expected);
  });
});
