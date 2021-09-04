'use strict';

import { expect, it } from '@jest/globals';
import { solution } from './05';

describe('05', () => {
  const testCases = [
    {
      input: [
        {
          om: 'SVKbtj',
          moms: 'uYkCFh',
          pops: ['PpYWzC', 'dfkUeN'],
        },
        {
          om: 'PpYWzC',
          moms: 'TfzCpD',
          pops: ['fEXMpe', 'dfkUeN'],
        },
        {
          om: 'fEXMpe',
          moms: 'qFAngG',
        },
        {
          om: 'dfkUeN',
          moms: 'qUAMjy',
        },
        {
          om: 'DnLHEG',
          moms: 'EycUXu',
          pops: ['PpYWzC', 'SVKbtj'],
        },
      ],
      output: 'qFAngGqUAMjyTfzCpDuYkCFhEycUXu',
    },
    {
      input: [
        {
          om: 'SVKbtj',
          moms: 'uYkCFh',
          pops: [
            'PpYWzC',
            {
              om: 'dfkUeN',
              moms: 'qUAMjy',
            },
          ],
        },
        {
          om: 'fEXMpe',
          moms: 'qFAngG',
        },
        {
          om: 'DnLHEG',
          moms: 'EycUXu',
          pops: [
            {
              om: 'PpYWzC',
              moms: 'TfzCpD',
              pops: ['fEXMpe', 'dfkUeN'],
            },
            'SVKbtj',
          ],
        },
      ],
      output: 'qFAngGqUAMjyTfzCpDuYkCFhEycUXu',
    },
    {
      input: [
        {
          om: 'SVKbtj',
          moms: 'uYkCFh',
          pops: ['PpYWzC', 'dfkUeN'],
        },
        {
          om: 'PpYWzC',
          moms: 'TfzCpD',
          pops: [
            {
              om: 'fEXMpe',
              moms: 'qFAngG',
            },
            'dfkUeN',
          ],
        },
        {
          om: 'dfkUeN',
          moms: 'qUAMjy',
          pops: [
            {
              om: 'DnLHEG',
              moms: 'EycUXu',
              pops: ['PpYWzC', 'SVKbtj'],
            },
          ],
        },
      ],
      output: 'ShkaQCnErbKZdqsjX',
    },
    {
      input: [
        {
          om: 'SVKbtj',
          moms: 'uYkCFh',
          pops: ['PpYWzC', 'dfkUeN'],
        },
        {
          om: 'PpYWzC',
          moms: 'TfzCpD',
        },
        {
          om: 'DnLHEG',
          moms: 'EycUXu',
          pops: ['PpYWzC', 'SVKbtj'],
        },
      ],
      output: 'GTjkzarWpDEcLegKy-dfkUeN',
    },
    {
      input: [
        {
          om: 'SVKbtj',
          moms: 'uYkCFh',
          pops: [
            {
              om: 'PpYWzC',
              moms: 'TfzCpD',
            },
            'dfkUeN',
          ],
        },
        {
          om: 'PpYWzC',
          moms: 'TfzCpD',
        },
        {
          om: 'DnLHEG',
          moms: 'EycUXu',
          pops: ['PpYWzC', 'SVKbtj'],
        },
      ],
      output: 'pxPdgDeKHRvuVCnWj-PpYWzC',
    },
  ];

  testCases.forEach((testCase) => {
    const { input, output } = testCase;

    it(JSON.stringify({ input, output }), async () => {
      expect(solution(input)).toEqual(output);
    });
  });
});
