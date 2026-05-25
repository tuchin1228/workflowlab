const { isValidEmail, isStrongPassword, toSlug, truncate } = require('./index');

describe('isValidEmail', () => {
  test('接受正確的 email', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  test('拒絕缺少 @ 的 email', () => {
    expect(isValidEmail('userexample.com')).toBe(false);
  });

  test('拒絕空字串', () => {
    expect(isValidEmail('')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('接受包含大小寫與數字且長度足夠的密碼', () => {
    expect(isStrongPassword('Abcdef1!')).toBe(true);
  });

  test('拒絕太短的密碼', () => {
    expect(isStrongPassword('Ab1')).toBe(false);
  });

  test('拒絕沒有大寫的密碼', () => {
    expect(isStrongPassword('abcdefg1')).toBe(false);
  });

  test('拒絕沒有數字的密碼', () => {
    expect(isStrongPassword('Abcdefgh')).toBe(false);
  });
});

describe('toSlug', () => {
  test('將標題轉為 slug', () => {
    expect(toSlug('Hello World')).toBe('hello-world');
  });

  test('移除特殊字元', () => {
    expect(toSlug('Hello, World!')).toBe('hello-world');
  });

  test('處理多餘空白', () => {
    expect(toSlug('  too   many   spaces  ')).toBe('too-many-spaces');
  });
});

describe('truncate', () => {
  test('短字串不截斷', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  test('超過長度時加上省略號', () => {
    expect(truncate('this is a long sentence', 10)).toBe('this is a ...');
  });
});
