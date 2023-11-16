/**
 * @description 计算两个时间发间隔，并返回对象，对象包括days,hours,minutes,seconds,milliseconds
 */

export default function diffTime(startTime, endTime) {
  let start = new Date(startTime);
  let end = new Date(endTime);
  let diff = end.getTime() - start.getTime();
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: diff,
  };
}
