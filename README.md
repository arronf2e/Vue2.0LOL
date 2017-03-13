### Vue2.0版英雄联盟助手

vuejs League of Legends  project

[项目源码](https://github.com/arronf2e/Vue2.0LOL)  
[在线地址](http://omeme.me/demos/lol/)
<p><img src="http://o9xap42x4.bkt.clouddn.com/lol.png" width="200" height="200"/></p>
<p>微信扫一扫，查看在线DEMO</p>


#### 1. 技术栈

由 [vue-cli](https://github.com/vuejs/vue-cli) + [muse-ui](https://github.com/museui/muse-ui) 构建，使用 [axios](https://github.com/mzabriskie/axios) 进行数据的请求，使用 [vuex](https://github.com/vuejs/vuex) 进行状态管理，图片懒加载: [vue-lazyload](https://github.com/hilongjw/vue-lazyload)，轮播组件：[vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)，上拉加载: [vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll)。


#### 2.Build Setup

	
	# install dependencies
	npm install

	# serve with hot reload at localhost:8888
	npm run dev
	
	# build for production with minification
	npm run build

	# build for production and view the bundle analyzer report
	npm run build --report
	
#### 3. 已经完成的模块

- [x] Landing page
- [x] 英雄列表页
- [x] 英雄详情页
- [x] 召唤师搜索页面
- [x] 召唤师详情页（内含战绩列表）
- [x] 召唤师详情页战绩列表的下拉刷新(还不流畅)
- [x] 单场比赛对局信息
- [x] 关于页面
- [x] 新建新闻页，作为首页
- [x] 视频页加载iframe卡 (用正则匹配出视频地址)
- [x] UI优化 (替换成muse-ui)
- [x] 英雄详情布局
- [x] 点击返回按钮时tab的正确显示

#### 4. 效果图

<img src="http://o9xap42x4.bkt.clouddn.com/landing.png" width="200" height="350"/>
<img src="http://o9xap42x4.bkt.clouddn.com/news.png" width="200" height="350"/>
<img src="http://o9xap42x4.bkt.clouddn.com/w2.png" width="200" height="350"/>
<img src="http://o9xap42x4.bkt.clouddn.com/w3.png" width="200" height="350"/>
<img src="http://o9xap42x4.bkt.clouddn.com/w4.png" width="200" height="350"/>
<img src="http://o9xap42x4.bkt.clouddn.com/w5.png" width="200" height="350"/>
<img src="http://o9xap42x4.bkt.clouddn.com/w6.png" width="200" height="350"/>
<img src="http://o9xap42x4.bkt.clouddn.com/w7.png" width="200" height="350"/>
<img src="http://o9xap42x4.bkt.clouddn.com/w8.png" width="200" height="350"/>

#### 5. 待完成与优化

- [ ] 单场比赛信息的完善
- [ ] 完善API文档
- [ ] 召唤师搜索页内容的丰富
- [ ] 页面切换时的动画效果
- [ ] footerfixed，输入法问题
- [ ] 丰富视频页内容
- [ ] 视频页播放时候是否考虑直接在当前页面弹出层播放，方便关闭
- [ ] 周免
- [ ] 段位图标
- [ ] 英雄的搜索
- [ ] 一些图片请求的bug

#### 6. 结语

在github上看了那么多的vue项目，自己的看过其中的部分，当然肯定也仿过，可是一直没坚持下去。本项目是自己第一个完整的开源小项目，然后会有很多的不足，也是自己第一次使用vuex，希望大家可以多提意见，我也会一直更新这个项目，喜欢的朋友可以star一下。最后感谢[带玩游戏平台](http://www.games-cube.com/)提供的API！


	