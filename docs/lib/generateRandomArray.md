# generateRandomArray

## 介绍

> 获取指定大小区间，数量的随机数组。

## 示例

```javascript
import { generateRandomArray } from 'nova-kit-lib';

const array = generateRandomArray(10, 100, 2); //[10, 39]
```

## 参数说明

| 参数名称 | 参数类型 | 参数描述 |
| -------- | -------- | -------- |
| min      | Number   | 最小值   |
| max      | Number   | 最大值   |
| count    | Number   | 数量     |
