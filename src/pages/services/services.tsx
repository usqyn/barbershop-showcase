import { useState } from 'react'
import { View, Text, Image, ScrollView, Navigator } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './services.css'

const getCategories = (t) => [
  { id: 1, name: t('allServices'), active: true },
  { id: 2, name: t('haircut'), active: false },
  { id: 3, name: t('perm'), active: false },
  { id: 4, name: t('nursing'), active: false },
  { id: 5, name: t('styling'), active: false },
  { id: 6, name: t('care'), active: false },
  { id: 7, name: t('permDye'), active: false },
  { id: 8, name: '儿童', active: false },
]

const getServices = (t) => [
  {
    id: 1,
    name: '无痕隐形接发',
    originalPrice: 188,
    salePrice: 188,
    sales: 97,
    description: '2店通用，品质保障，提供免费WIFI',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: '蛋白矫正护理',
    originalPrice: 135,
    salePrice: 135,
    sales: 35,
    description: '2店通用，品质保障，提供免费WIFI',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a36e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: '单人健康烫',
    originalPrice: 119,
    salePrice: 119,
    sales: 27,
    description: '2店通用，品质保障，提供免费WIFI',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    name: '头发养发护理',
    originalPrice: 199,
    salePrice: 199,
    sales: 117,
    description: '2店通用，品质保障，提供免费WIFI',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a36e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 5,
    name: '店长精剪+洗吹+造型',
    originalPrice: 99,
    salePrice: 99,
    sales: 140,
    description: '2店通用，品质保障，提供免费WIFI',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 6,
    name: '单人烫染直三选一',
    originalPrice: 138,
    salePrice: 138,
    sales: 194,
    description: '2店通用，品质保障，提供免费WIFI',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a36e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 7,
    name: '设计师洗剪吹',
    originalPrice: 88.8,
    salePrice: 88.8,
    sales: 129,
    description: '2店通用，品质保障，提供免费WIFI',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=400',
  },
]

const Services = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(1)
  const { t, isRtl } = useLanguage()
  
  const categories = getCategories(t)
  const services = getServices(t)

  const selectCategory = (id) => {
    setActiveCategoryId(id)
  }

  const goBack = () => {
    // 返回上一页
  }

  return (
    <View className='services-page' style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      {/* 头部 */}
      <View className='header'>
        <View className='back-btn' onClick={goBack}>
          <Text className='back-icon'>{isRtl ? '›' : '‹'}</Text>
        </View>
        <View className='header-middle'>
          <LanguageSwitcher />
          <Text className='title'>{t('serviceCategory')}</Text>
        </View>
        <View className='header-right' />
      </View>

      {/* 主体内容 */}
      <View className='content'>
        {/* 左侧分类 */}
        <ScrollView className='category-sidebar' scrollY>
          {categories.map(category => (
            <View
              key={category.id}
              className={`category-item ${
                activeCategoryId === category.id ? 'active' : ''
              }`}
              onClick={() => selectCategory(category.id)}
            >
              <Text className='category-name'>{category.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* 右侧服务列表 */}
        <ScrollView className='services-list' scrollY>
          {services.map(service => (
            <Navigator
              key={service.id}
              url='/pages/order/order'
              className='service-item'
            >
              <Image
                className='service-image'
                src={service.image}
                mode='aspectFill'
              />
              <View className='service-info'>
                <Text className='service-name' numberOfLines={2}>
                  {service.name}
                </Text>
                <Text className='service-desc' numberOfLines={2}>
                  {service.description}
                </Text>
                <View className='service-bottom'>
                  <View className='price-row'>
                    <Text className='sale-price'>{t('price')}{service.salePrice}</Text>
                    <Text className='original-price'>{t('price')}{service.originalPrice}</Text>
                  </View>
                  <Text className='sales-count'>已售{service.sales}</Text>
                </View>
              </View>
            </Navigator>
          ))}
        </ScrollView>
      </View>

      {/* 底部悬浮按钮 */}
      <View className='floating-buttons'>
        <View className='floating-btn'>
          <Text className='floating-icon'>💬</Text>
        </View>
        <View className='floating-btn'>
          <Text className='floating-icon'>🛒</Text>
          <View className='cart-badge'>
            <Text className='badge-text'>3</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Services
