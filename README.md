# novaKitJS 新星工具包

A library for building web applications.

这里会更新一些开发过程中经常用到的 utils 方法，欢迎大家一起维护。

文档
[document](https://nova-kit-js.github.io/nova-kit-js/)

## 安装

```bash
npm i nova-kit-js
```

## 使用

```javascript
import { diffBothTime } from 'nova-kit-js';

const { days, hours, minutes, seconds } = diffBothTime(new Date('2019-01-01 22:11:11'), new Date());
```
