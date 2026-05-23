export default {
  pages: [
    'pages/index/index',
    'pages/services/services',
    'pages/stylists/stylists',
    'pages/mall/mall',
    'pages/giftcard/giftcard',
    'pages/reserve/reserve',
    'pages/order/order',
    'pages/payment/payment',
    'pages/member/member',
    'pages/profile/profile'
  ],
  window: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '美发店',
    navigationBarBackgroundColor: '#ffffff',
    backgroundColor: '#f5f5f5'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#a855f7',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/tab-home.png',
        selectedIconPath: 'assets/tab-home-active.png'
      },
      {
        pagePath: 'pages/services/services',
        text: '美发服务',
        iconPath: 'assets/tab-services.png',
        selectedIconPath: 'assets/tab-services-active.png'
      },
      {
        pagePath: 'pages/mall/mall',
        text: '商城',
        iconPath: 'assets/tab-mall.png',
        selectedIconPath: 'assets/tab-mall-active.png'
      },
      {
        pagePath: 'pages/reserve/reserve',
        text: '预约',
        iconPath: 'assets/tab-reserve.png',
        selectedIconPath: 'assets/tab-reserve-active.png'
      },
      {
        pagePath: 'pages/member/member',
        text: '我的',
        iconPath: 'assets/tab-member.png',
        selectedIconPath: 'assets/tab-member-active.png'
      }
    ]
  },
  sitemapLocation: 'sitemap.json',
  lazyCodeLoading: 'requiredComponents'
}
