import { useState } from 'react'
import { View, Text, Image, ScrollView, Swiper, SwiperItem, Navigator } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './index.css'

// 模拟数据
const banners = [
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20woman%20with%20long%20black%20hair%20salon%20beauty%20purple%20theme&image_size=landscape_16_9',
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20salon%20beauty%20model%20professional%20styling&image_size=landscape_16_9',
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20hair%20salon%20interior%20professional%20stylist&image_size=landscape_16_9'
]

const getServices = (t) => [
  { id: 1, name: t('haircut'), icon: '✂️', desc: '专业剪发', path: '/pages/services/services', size: 'large' },
  { id: 2, name: t('permDye'), icon: '💇', desc: '健康烫染', path: '/pages/services/services', size: 'large' },
  { id: 3, name: t('coupon'), icon: '🎫', desc: '', path: '/pages/coupons/coupons' },
  { id: 4, name: t('myPoints'), icon: '🪙', desc: '', path: '/pages/member/member' },
  { id: 5, name: t('giftCard'), icon: '💳', desc: '', path: '/pages/giftcard/giftcard' },
  { id: 6, name: '洗护产品', icon: '🧴', desc: '', path: '/pages/mall/mall' }
]

const getProducts = (t) => [
  {
    id: 1,
    name: '单人烫染直',
    price: 65,
    originalPrice: 438,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20salon%20perm%20dye%20styling%20service&image_size=square',
    tags: ['体验价'],
    sold: 0,
    discount: '限时优惠'
  },
  {
    id: 2,
    name: '设计师洗剪吹',
    price: 28.88,
    originalPrice: 88.8,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20haircut%20salon%20stylist%20working&image_size=square',
    tags: ['体验价'],
    sold: 0,
    discount: '限时优惠'
  }
]

const getGiftCards = (t) => [
  {
    id: 1,
    name: '剪发月卡',
    price: 200,
    desc: '不限次数',
    subDesc: '单人烫染直',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=purple%20gradient%20gift%20card%20voucher%20design&image_size=square',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)'
  },
  {
    id: 2,
    name: '烫染年卡',
    price: 2000,
    desc: '不限次数',
    subDesc: '设计师洗剪吹',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=golden%20luxury%20gift%20card%20voucher%20design&image_size=square',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)'
  }
]

const Index = () => {
  const [currentBanner, setCurrentBanner] = useState(0)
  const { t, isRtl } = useLanguage()
  
  const services = getServices(t)
  const products = getProducts(t)
  const giftCards = getGiftCards(t)

  const handleSwipeChange = (e) => {
    setCurrentBanner(e.detail.current)
  }

  const navigateToOrder = (product) => {
    // 跳转到订单确认页
  }

  return (
    <ScrollView className='home-page' scrollY style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      {/* 顶部区域 - 标题 */}
      <View className='header-wrapper'>
        <View className='header'>
          <Text className='title'>{t('appName')}</Text>
          <LanguageSwitcher />
        </View>
      </View>

      {/* 轮播图 */}
      <View className='banner-section'>
        <Swiper
          className='banner-swiper'
          indicatorDots
          indicatorColor='rgba(255,255,255,0.5)'
          indicatorActiveColor='#ffffff'
          autoplay
          circular
          interval={3000}
          duration={500}
          onChange={handleSwipeChange}
        >
          {banners.map((banner, index) => (
            <SwiperItem key={index}>
              <Image
                className='banner-image'
                src={banner}
                mode='aspectFill'
              />
              <View className='banner-overlay'>
                <Text className='banner-title'>美发沙龙</Text>
                <Text className='banner-subtitle'>释放百变造型</Text>
                <View className='banner-features'>
                  <Text className='feature-item'>✓ 发型设计</Text>
                  <Text className='feature-item'>✓ 专业烫染</Text>
                  <Text className='feature-item'>✓ 无痕接发</Text>
                  <Text className='feature-item'>✓ 精准造型</Text>
                </View>
              </View>
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      {/* 店铺公告 */}
      <View className='notice-section'>
        <View className='notice-tag'>店铺公告</View>
        <Text className='notice-text'>周三会员日，洗剪吹低至9.9起...</Text>
      </View>

      {/* 服务入口 */}
      <View className='services-section'>
        <View className='services-grid-top'>
          {services.slice(0, 2).map(service => (
            <Navigator
              key={service.id}
              url={service.path}
              className='service-item-large'
            >
              <Text className='service-icon-large'>{service.icon}</Text>
              <Text className='service-name-large'>{service.name}</Text>
              <Text className='service-desc-large'>{service.desc}</Text>
            </Navigator>
          ))}
        </View>
        <View className='services-grid-bottom'>
          {services.slice(2, 6).map(service => (
            <Navigator
              key={service.id}
              url={service.path}
              className='service-item-small'
            >
              <Text className='service-icon-small'>{service.icon}</Text>
              <Text className='service-name-small'>{service.name}</Text>
            </Navigator>
          ))}
        </View>
      </View>

      {/* 搜索框 */}
      <View className='search-box'>
        <Text className='search-icon'>🔍</Text>
        <Text className='search-placeholder'>{t('search')}</Text>
      </View>

      {/* 新品体验 */}
      <View className='section'>
        <Text className='section-title'>新品体验</Text>
        <View className='products-list'>
          {products.map(product => (
            <View key={product.id} className='product-card'>
              <Image
                className='product-image'
                src={product.image}
                mode='aspectFill'
              />
              <View className='product-info'>
                <Text className='product-name'>{product.name}</Text>
                <View className='product-tags'>
                  <View className='timer'>
                    <Text className='timer-label'>活动仅剩</Text>
                    <View className='timer-values'>
                      <View className='timer-item'>
                        <Text className='timer-num'>2786</Text>
                      </View>
                      <Text className='timer-colon'>:</Text>
                      <View className='timer-item'>
                        <Text className='timer-num'>12</Text>
                      </View>
                      <Text className='timer-colon'>:</Text>
                      <View className='timer-item'>
                        <Text className='timer-num'>30</Text>
                      </View>
                      <Text className='timer-colon'>:</Text>
                      <View className='timer-item'>
                        <Text className='timer-num'>04</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className='price-row'>
                  <View className='price-info'>
                    <Text className='price-tag'>体验价</Text>
                    <Text className='price'>¥{product.price}</Text>
                    <Text className='original-price'>¥{product.originalPrice}</Text>
                  </View>
                  <View className='buy-btn' onClick={() => navigateToOrder(product)}>
                    <Text className='buy-text'>去购买</Text>
                  </View>
                </View>
                <Text className='sold-text'>已售{product.sold}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* 广告横幅 */}
      <View className='ad-banner'>
        <Image
          className='ad-image'
          src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beauty%20salon%20banner%20purple%20fashion%20model%20with%20white%20hair&image_size=landscape_16_9'
          mode='aspectFill'
        />
        <View className='ad-overlay'>
          <Text className='ad-title'>Custom fashion</Text>
          <Text className='ad-subtitle'>定制时尚造型</Text>
          <Text className='ad-desc'>只为打造独特的你</Text>
        </View>
      </View>

      {/* 礼品卡 */}
      <View className='section'>
        <Text className='section-title'>礼品卡</Text>
        <View className='gift-cards'>
          {giftCards.map(card => (
            <View key={card.id} className='gift-card'>
              <View className='card-image-container'>
                <Image
                  className='card-image'
                  src={card.image}
                  mode='aspectFill'
                />
                <View className='card-overlay' style={{ background: card.gradient }}>
                  <Text className='card-name'>{card.name}</Text>
                  <Text className='card-subdesc'>{card.subDesc}</Text>
                  <View className='card-price-row'>
                    <Text className='card-price'>¥{card.price}</Text>
                    <Text className='card-desc'>/{card.desc}</Text>
                  </View>
                  <Text className='card-sold'>已售0</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* 拼团优惠 */}
      <View className='section'>
        <Text className='section-title'>拼团优惠</Text>
        <View className='placeholder-area'>
          <Image
            className='placeholder-image'
            src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20care%20products%20shampoo%20bottle%20display&image_size=square'
            mode='aspectFill'
          />
        </View>
      </View>

      {/* 底部安全距离 */}
      <View className='bottom-padding' />
    </ScrollView>
  )
}

export default Index
