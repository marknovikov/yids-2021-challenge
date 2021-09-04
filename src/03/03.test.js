import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { expect, it } from '@jest/globals';
import { solution } from './03';

// @disable
const testDataPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'testdata');

describe('03', () => {
  // 7 1111 1111
  // 711 1111 11
  describe('success', () => {
    const testCases = [
      { input: '', output: false },
      { input: '7', output: true },
      { input: '71', output: false },
      { input: '77', output: true },
      { input: '7711', output: true },
      { input: '71111', output: true },
      { input: '711111111', output: true },
      { input: '711111177711', output: true },
      { input: '7111111777111', output: false },
    ];

    testCases.forEach((testCase) => {
      const { input, output } = testCase;

      it(JSON.stringify({ input, output }), () => {
        expect(solution(input)).toEqual(output);
      });
    });
  });

  describe('handles input in O(log(n)) time', () => {
    it('success', () => {
      const data = fs.readFileSync(path.join(testDataPath, 'input-length-9999999-success'), {
        encoding: 'utf-8',
      });

      expect(solution(data.toString())).toEqual(true);
    });
  });
});
