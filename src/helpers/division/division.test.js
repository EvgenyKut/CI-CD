import { division } from './division';

describe('minus', function () {
  test('positive', () => {
    expect(division(5, 5)).toBe(1);
  });

  test('positive2', () => {
    expect(division(-5, -5)).toBe(1);
  });
});
