// 生成指定区间和长度切不能重复的随机数，
export default function (min: number, max: number, length: number) {
  const arr = [];
  while (arr.length < length) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    if (arr.indexOf(num) === -1) {
      arr.push(num);
    }
  }
  return arr;
}
