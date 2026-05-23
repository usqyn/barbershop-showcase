import { useState } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './mall.css'

interface Product {
  id: number
  name: string
  image: string
  price: number
  originalPrice: number
}

const getProducts = () => [
  {
    id: 1,
    name: '氨基酸洗发水',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shampoo%20bottle%20cosmetic%20product%20beauty&image_size=square',
    price: 128,
    originalPrice: 168
  },
  {
    id: 2,
    name: '护发素 500ml',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20conditioner%20bottle%20beauty%20product&image_size=square',
    price: 98,
    originalPrice: 128
  },
  {
    id: 3,
    name: '护发精油 100ml',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20essential%20oil%20serum%20product&image_size=square',
    price: 158,
    originalPrice: 198
  },
  {
    id: 4,
    name: '发膜护理套装',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20mask%20treatment%20set%20beauty&image_size=square',
    price: 268,
    originalPrice: 358
  },
  {
    id: 5,
    name: '造型啫喱膏',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20styling%20gel%20product%20beauty&image_size=square',
    price: 68,
    originalPrice: 88
  },
  {
    id: 6,
    name: '干洗喷雾',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dry%20shampoo%20spray%20product%20beauty&image_size=square',
    price: 78,
    originalPrice: 98
  },
  {
    id: 7,
    name: '弹力素 300ml',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hairs%20mousse%20foam%20styling%20product&image_size=square',
    price: 58,
    originalPrice: 78
  },
  {
    id: 8,
    name: '染发套装',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hair%20dye%20kit%20coloring%20product&image_size=square',
    price: 188,
    originalPrice: 238
  }
]

const Mall = () => {
  const { t, isRtl } = useLanguage()
  const products = getProducts()
  const [activeCategory, setActiveCategory] = useState(0)
  
  const categories = [t('allProducts'), t('shampoo'), t('conditioner'), t('styling')]

  return (
    <View className='mall-container' style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <View className='points-header'>
        <LanguageSwitcher />
        <View className='header-right'>
          <View className='header-icon'>🛒</View>
          <View className='header-icon'>👤</View>
        </View>
      </View>

      <View className='mall-banner'>
        <Image className='banner-img' src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=美妆商城%20促销活动%20banner%20紫色主题&image_size=landscape_16_9' mode='aspectFill' />
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
              <View className='product-price'>
                <Text className='current-price'>¥{product.price}</Text>
                <Text className='original-price'>¥{product.originalPrice}</Text>
              </View>
              <View className='exchange-btn'>{t('buyNow')}</View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Mall
