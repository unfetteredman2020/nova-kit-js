/**
 * @description 计算两个时间发间隔，并返回对象，对象包括days,hours,minutes,seconds,milliseconds
 */

export default function diffTime(startTime: string, endTime: string) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const diff = end.getTime() - start.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds: diff,
  };
}
