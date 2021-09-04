import { expect, it } from '@jest/globals';
import { solution } from './04';

describe('04', () => {
  const testCases = [
    { amount: 1, costs: [], result: '' },
    { amount: 0, costs: [1, 1, 1, 1, 1, 1, 1, 1, 1], result: '' },
    { amount: 7, costs: [6], result: '1' },
    { amount: 5, costs: [5, 4, 3, 2, 1, 2, 3, 4, 5], result: '55555' },
    { amount: 5, costs: [5, 4, 3, 2, 1, 2, 3, 4, 1], result: '99999' },
    { amount: 2, costs: [9, 11, 1, 12, 5, 8, 9, 10, 6], result: '33' },
    { amount: 5, costs: [2, 3], result: '21' },
    { amount: 5, costs: [3, 2], result: '22' },
    { amount: 15, costs: [100, 2, 3], result: '3222222' },
    { amount: 15, costs: [100, 100, 100, 4, 5], result: '555' },
    { amount: 19, costs: [100, 100, 100, 4, 5], result: '5554' },
    { amount: 20, costs: [100, 100, 100, 4, 5], result: '44444' },
    { amount: 23, costs: [4, 5], result: '22211' },
    {
      amount: 1000,
      costs: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      result: '9'.repeat(1000),
    },
    {
      amount: 1000,
      costs: [9, 8, 7, 6, 5, 4, 3, 2, 1],
      result: '9'.repeat(1000),
    },
    {
      amount: 1000,
      costs: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: '1'.repeat(1000),
    },
    {
      amount: 1000,
      costs: [90, 80, 70, 60, 50, 40, 30, 20, 10],
      result: '9'.repeat(100),
    },
    {
      amount: 997,
      costs: [11, 13, 17, 19, 23, 29, 31, 37],
      result: '3' + '1'.repeat(89),
    },
    {
      amount: 1000,
      costs: [11, 13, 17, 19, 23, 29, 31, 37],
      result: '42' + '1'.repeat(88),
    },
  ];

  testCases.forEach((testCase) => {
    const { amount, costs, result } = testCase;

    it(JSON.stringify({ amount, costs }), async () => {
      expect(solution(amount, costs)).toEqual(result);
    });
  });
});
