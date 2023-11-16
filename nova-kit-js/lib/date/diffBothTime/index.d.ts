/**
 * @description 计算两个时间发间隔，并返回对象，对象包括days,hours,minutes,seconds,milliseconds
 */
export default function diffTime(
  startTime: string,
  endTime: string,
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};
