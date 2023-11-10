// 获取指定长度的字符串，要求生成uuid一样不可重复的字符串
export default function generateRandomString(length: number): string {
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const strLength = str.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += str.charAt(Math.floor(Math.random() * strLength));
  }
  return result;
}
