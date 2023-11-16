// 生成指定区间和长度切不能重复的随机数，
export default function (min, max, length) {
  let arr = [];
  while (arr.length < length) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    if (arr.indexOf(num) === -1) {
      arr.push(num);
    }
  }
  return arr;
}
