import { generateRandomArray, generateRandomChinese } from '@/index';

export default function getRandomSentence(count: number) {
  let str = '';
  for (let index = 0; index < count; index++) {
    const [rd] = generateRandomArray(Math.abs(index - 2), index + 2, 1);
    if (rd === index) {
      str += index / 2 === 0 ? '，' : '。';
    }
    str += generateRandomChinese();
  }
  return str + '。';
}
