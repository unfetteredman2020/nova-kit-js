/**
 *  获取随机
 */
export default function generateRandomChinese() {
  const start = 0x4e00; // 中文字符的起始 Unicode 编码
  const end = 0x9fa5; // 中文字符的结束 Unicode 编码

  const randomCode = Math.floor(Math.random() * (end - start + 1)) + start;
  const randomChinese = String.fromCharCode(randomCode);

  return randomChinese;
}
