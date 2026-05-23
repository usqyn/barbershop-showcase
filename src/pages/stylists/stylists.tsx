import { useState } from 'react'
import { View, Text, Image, ScrollView, Navigator } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './stylists.css'

interface Stylist {
  id: number
  name: string
  level: string
  avatar: string
  specialty: string
  services: number
  rating: number
  experience: string
  tags: string[]
}

const getStylists = (t) => [
  {
    id: 1,
    name: '阿杰',
    level: t('chief'),
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20hairdresser%20portrait&image_size=square',
    specialty: t('specialty') + '：潮流烫染、造型设计',
    services: 1280,
    rating: 4.9,
    experience: '8年经验',
    tags: ['潮流烫染', '造型设计', '网红同款']
  },
  {
    id: 2,
    name: '小美',
    level: t('director'),
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20hairdresser%20portrait&image_size=square',
    specialty: t('specialty') + '：韩式造型、精致剪发',
    services: 960,
    rating: 4.8,
    experience: '6年经验',
    tags: ['韩式造型', '精致剪发', '新娘发型']
  },
  {
    id: 3,
    name: '大伟',
    level: t('senior'),
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20male%20hairdresser%20portrait&image_size=square',
    specialty: t('specialty') + '：男士发型、油头雕刻',
    services: 820,
    rating: 4.7,
    experience: '5年经验',
    tags: ['男士发型', '油头雕刻', '渐变修剪']
  },
  {
    id: 4,
    name: '婷婷',
    level: t('chief'),
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20young%20asian%20female%20hairdresser%20portrait&image_size=square',
    specialty: t('specialty') + '：无痕接发、色彩搭配',
    services: 1150,
    rating: 4.9,
    experience: '7年经验',
    tags: ['无痕接发', '色彩搭配', '沙龙护理']
  }
]

const Stylists = () => {
  const { t, isRtl } = useLanguage()
  const stylists = getStylists(t)
  const [activeFilter, setActiveFilter] = useState(0)
  
  const filterNames = [t('allStylists'), t('chief'), t('director'), t('senior'), '新人']

  return (
    <View className='stylists-container' style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <View className='search-bar'>
        <LanguageSwitcher />
        <View className='search-input'>
          <Text className='search-icon'>🔍</Text>
          <Text style={{color: '#999', fontSize: '26rpx'}}>{t('searchStylist')}</Text>
        </View>
      </View>

      <ScrollView className='filter-tabs' scrollX>
        {filterNames.map((name, index) => (
          <View 
            key={index} 
            className={`filter-tab ${activeFilter === index ? 'active' : ''}`}
            onClick={() => setActiveFilter(index)}
          >
            {name}
          </View>
        ))}
      </ScrollView>

      <View className='stylists-list'>
        {stylists.map(stylist => (
          <View key={stylist.id} className='stylist-card'>
            <Image className='stylist-avatar' src={stylist.avatar} mode='aspectFill' />
            <View className='stylist-info'>
              <View className='stylist-name-row'>
                <Text className='stylist-name'>{stylist.name}</Text>
                <Text className='stylist-level'>{stylist.level}</Text>
              </View>
              <Text className='stylist-specialty'>{stylist.specialty}</Text>
              <View className='stylist-stats'>
                <View className='stat-item'>
                  <Text className='stat-value'>{stylist.services}</Text>
                  <Text className='stat-label'>{t('servicesCount')}</Text>
                </View>
                <View className='stat-item'>
                  <Text className='stat-value'>{stylist.rating}</Text>
                  <Text className='stat-label'>{t('rating')}</Text>
                </View>
                <View className='stat-item'>
                  <Text className='stat-value'>{stylist.experience}</Text>
                  <Text className='stat-label'>{t('experience')}</Text>
                </View>
              </View>
              <View className='stylist-tags'>
                {stylist.tags.map((tag, i) => (
                  <Text key={i} className='tag'>{tag}</Text>
                ))}
              </View>
              <Navigator url='/pages/reserve/reserve' className='book-btn'>
                {t('bookNow')}
              </Navigator>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Stylists
