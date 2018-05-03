[弹幕](https://juejin.im/post/5ae56927f265da0b7e0c0968)

弹幕的核心原理是什么呢？

> 文章，在封面图提供一个弹幕效果，让大家的评论滚动输出，如果有新的评论，立即输出

- 数据流 data flow
数据的可视化，以时间点为因素的弹幕 ，数据流 评论 可视化 弹幕

- 技术分析
评论 数组  动态

1. ajax fetch
2. dom appendChild 动态DOM
3. 上面一点，下面一点，弹幕之间不要重叠，随机但是可控的弹幕效果。定位 随机 math.random()
4. 位置更新 setInterval 定时器

