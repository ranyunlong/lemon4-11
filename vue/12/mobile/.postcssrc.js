// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px-to-viewport": {
      viewportWidth: 720,       // 设计稿的宽度
      viewportHeight: 1325,     // 设计稿的高度 可选
      viewportUnit: 'vmin',     // 使用哪一个边来计算 vmin vmax vw vh
      unitPrecision: 5,         // 计算精度 保留小数点后几位
      selectorBlackList: [      // 黑名单 要忽略处理px单位为vp单位的选择器
        'mint'
      ],    
      // mediaQuery: false      //要不要处理媒介查询里的px单位
    }
  }
}
