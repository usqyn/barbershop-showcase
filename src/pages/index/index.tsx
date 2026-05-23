import { useState } from 'react'
import { View, Text, Image, ScrollView, Swiper, SwiperItem, Navigator } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './index.css'

// 模拟数据
const banners = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a36e?auto=format&fit=crop&q=80&w=1200&h=600',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a36e?auto=format&fit=crop&q=80&w=1200&h=600',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a36e?auto=format&fit=crop&q=80&w=1200&h=600'
]

const getServices = (t) => [
  { id: 1, name: t('haircut'), icon: '✂️', desc: '', path: '/pages/services/services' },
  { id: 2, name: t('permDye'), icon: '💇', desc: '', path: '/pages/services/services' },
  { id: 3, name: t('coupon'), icon: '🎫', desc: '', path: '/pages/coupons/coupons' },
  { id: 4, name: t('myPoints'), icon: '⭐', desc: '', path: '/pages/member/member' },
  { id: 5, name: t('giftCard'), icon: '💳', desc: '', path: '/pages/giftcard/giftcard' },
  { id: 6, name: t('nursing'), icon: '🧴', desc: '', path: '/pages/mall/mall' }
]

const getProducts = (t) => [
  {
    id: 1,
    name: t('newHaircut'),
    price: 65,
    originalPrice: 138,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a36e?auto=format&fit=crop&q=80&w=400',
    tags: ['体验价'],
    sold: 0,
    discount: '限时优惠'
  },
  {
    id: 2,
    name: t('washCutDry'),
    price: 28.88,
    originalPrice: 88.8,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400',
    tags: ['体验价'],
    sold: 0,
    discount: '限时优惠'
  }
]

const getGiftCards = (t) => [
  {
    id: 1,
    name: t('newUserCard'),
    price: 200,
    desc: '不限次数',
    subDesc: t('permDye'),
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a36e?auto=format&fit=crop&q=80&w=400',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)'
  },
  {
    id: 2,
    name: t('premiumCard'),
    price: 2000,
    desc: '不限次数',
    subDesc: t('washCutDry'),
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400',
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
      {/* 顶部区域 - 包含语言切换 */}
      <View className='header-wrapper'>
        <View className='header'>
          <LanguageSwitcher />
          <Text className='title'>{t('appName')}</Text>
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
                <Text className='banner-title'>{t('appName')}</Text>
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
        <View className='notice-icon'>📢</View>
        <View className='notice-content'>
          <Text className='notice-info'>周三会员日，洗剪吹低至9.9起，烫染护全场5折，新客专享首次体验价</Text>
        </View>
        <View className='notice-close'>✕</View>
      </View>

      {/* 服务入口 */}
      <View className='services-grid'>
        {services.map(service => (
          <Navigator
            key={service.id}
            url={service.path}
            className='service-item'
          >
            <View className='service-icon-box'>
              <Text className='service-icon'>{service.icon}</Text>
            </View>
            <Text className='service-name'>{service.name}</Text>
            {service.desc && <Text className='service-desc'>{service.desc}</Text>}
          </Navigator>
        ))}
      </View>

      {/* 搜索框 */}
      <View className='search-box'>
        <Text className='search-icon'>🔍</Text>
        <Text className='search-placeholder'>{t('search')}</Text>
      </View>

      {/* 新品体验 */}
      <View className='section'>
        <Text className='section-title'>{t('hotService')}</Text>
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
                  <Text className='discount-tag'>{product.discount}</Text>
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
                    <Text className='price'>{t('price')}{product.price}</Text>
                    <Text className='original-price'>{t('price')}{product.originalPrice}</Text>
                  </View>
                  <View className='buy-btn' onClick={() => navigateToOrder(product)}>
                    <Text className='buy-text'>{t('buyNow')}</Text>
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
          src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200&h=400'
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
        <Text className='section-title'>{t('giftCard')}</Text>
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
                    <Text className='card-price'>{t('price')}{card.price}</Text>
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
            src='https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=400'
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
