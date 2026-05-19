export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '时尚造型',
    navigationBarBackgroundColor: '#ffffff',
    backgroundColor: '#f8f8f8'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#d69e2e',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      }
    ]
  },
  sitemapLocation: 'sitemap.json',
  lazyCodeLoading: 'requiredComponents'
}
