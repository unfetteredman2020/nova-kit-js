# dīffBothTime

## 介绍

> 获取两个时间点时间差值

## 示例

```javascript
import { diffBothTime } from 'nova-kit-lib';

const { year, month, day, hour, minute, second } = diffBothTime('2020-01-01 00:00:00', '2020-01-01 00:00:00');
```

## 参数说明

| 参数名称  | 参数类型 | 参数描述                            |
| --------- | -------- | ----------------------------------- |
| startTime | String   | 开始时间，格式：yyyy-MM-dd HH:mm:ss |
| endTime   | String   | 结束时间，格式：yyyy-MM-dd HH:mm:ss |
