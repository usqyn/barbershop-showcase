import { useState } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './mall.css'

interface Product {
  id: number
  name: string
  image: string
  points: number
}

const getProducts = () => [
  {
    id: 1,
    name: '免费洗吹一次',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20salon%20free%20washing%20service%20voucher&image_size=square',
    points: 500
  },
  {
    id: 2,
    name: '护发精油一瓶',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20care%20essential%20oil%20product&image_size=square',
    points: 1200
  },
  {
    id: 3,
    name: '造型师定制剪发',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20haircut%20service%20salon&image_size=square',
    points: 2000
  },
  {
    id: 4,
    name: '高端染发套餐',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20hair%20coloring%20package&image_size=square',
    points: 3500
  },
  {
    id: 5,
    name: '发膜护理套装',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20mask%20treatment%20set%20products&image_size=square',
    points: 1800
  },
  {
    id: 6,
    name: 'VIP会员月卡',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vip%20membership%20card%20premium&image_size=square',
    points: 5000
  }
]

const Mall = () => {
  const { t, isRtl } = useLanguage()
  const products = getProducts()
  const [activeCategory, setActiveCategory] = useState(0)
  
  const categories = [t('allProducts'), t('serviceExchange'), t('peripheral'), t('couponExchange')]

  return (
    <View className='mall-container' style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <View className='points-header'>
        <LanguageSwitcher />
        <Text className='points-balance'>2,580</Text>
        <Text className='points-label'>{t('myPoints')}</Text>
        <View className='points-actions'>
          <View className='points-btn'>{t('pointsDetails')}</View>
          <View className='points-btn'>{t('earnPoints')}</View>
        </View>
      </View>

      <View className='mall-banner'>
        <Image className='banner-img' src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=积分商城%20促销活动%20banner%20紫色主题&image_size=landscape_16_9' mode='aspectFill' />
      </View>

      <ScrollView className='category-tabs' scrollX>
        {categories.map((category, index) => (
          <View 
            key={index}
            className={`category-tab ${activeCategory === index ? 'active' : ''}`}
            onClick={() => setActiveCategory(index)}
          >
            {category}
          </View>
        ))}
      </ScrollView>

      <View className='products-grid'>
        {products.map(product => (
          <View key={product.id} className='product-card'>
            <Image className='product-img' src={product.image} mode='aspectFill' />
            <View className='product-info'>
              <Text className='product-name'>{product.name}</Text>
              <Text className='product-points'>{product.points}<span>{t('points')}</span></Text>
              <View className='exchange-btn'>{t('exchangeNow')}</View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Mall
