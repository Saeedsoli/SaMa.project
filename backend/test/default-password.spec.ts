import { generateDefaultPassword } from '../src/utils/default-password';

describe('generateDefaultPassword', () => {
  it('generates default password for latin name + english digits', () => {
    expect(generateDefaultPassword('Ali', '1234567890')).toBe('A7890');
  });

  it('generates default password for persian name + persian digits', () => {
    expect(generateDefaultPassword('علی', '۱۲۳۴۵۶۷۸۹۰')).toBe('ع7890');
  });

  it('handles empty name and short national id safely', () => {
    expect(generateDefaultPassword('', '۱۲۳۴')).toBe('X1234');
  });
});
