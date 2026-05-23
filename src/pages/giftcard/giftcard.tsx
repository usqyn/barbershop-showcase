import { useState } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './giftcard.css'

interface GiftCard {
  id: number
  value: number
  name: string
  price: number
  type: string
  expiry: string
}

const getGiftCards = (t) => [
  {
    id: 1,
    value: 100,
    name: t('newUserCard'),
    price: 88,
    type: '',
    expiry: t('validAfterPurchase')
  },
  {
    id: 2,
    value: 200,
    name: t('premiumCard'),
    price: 168,
    type: 'gold',
    expiry: t('validAfterPurchase')
  },
  {
    id: 3,
    value: 500,
    name: t('vipCard'),
    price: 398,
    type: 'purple',
    expiry: t('validAfterPurchase')
  },
  {
    id: 4,
    value: 1000,
    name: t('diamondCard'),
    price: 768,
    type: '',
    expiry: t('validAfterPurchase')
  }
]

const myCards = [
  {
    id: 101,
    value: 200,
    name: '已购轻奢体验卡',
    price: 0,
    type: '',
    expiry: '剩余180天'
  }
]

const GiftCard = () => {
  const { t, isRtl } = useLanguage()
  const giftCards = getGiftCards(t)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <View className='giftcard-container' style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <View className='giftcard-header'>
        <LanguageSwitcher />
        <Text className='header-title'>{t('giftCards')}</Text>
        <Text className='header-desc'>好礼相送，美丽随行</Text>
      </View>

      <View className='giftcard-tabs'>
        <View 
          className={`tab-item ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => setActiveTab(0)}
        >
          {t('buyGiftCard')}
        </View>
        <View 
          className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => setActiveTab(1)}
        >
          {t('myGiftCards')}
        </View>
      </View>

      {activeTab === 0 ? (
        <ScrollView className='giftcard-list'>
          {giftCards.map(card => (
            <View key={card.id} className='giftcard-item'>
              <View className={`giftcard-card ${card.type}`}>
                <Text className='giftcard-value'><span>{t('price')}</span>{card.value}</Text>
                <Text className='giftcard-name'>{card.name}</Text>
                <View className='giftcard-meta'>
                  <Text>{t('giftCard')}</Text>
                  <Text>{card.expiry}</Text>
                </View>
              </View>
              <View className='giftcard-footer'>
                <Text className='giftcard-price'><span>{t('price')}</span>{card.price}</Text>
                <View className='buy-btn'>{t('buyNowBtn')}</View>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View className='my-cards'>
          <Text className='section-title'>{t('myGiftCards')}</Text>
          {myCards.map(card => (
            <View key={card.id} className='my-card-item'>
              <View className='my-card-info'>
                <Text className='my-card-value'><span>{t('price')}</span>{card.value}</Text>
                <Text className='my-card-desc'>{card.expiry}</Text>
              </View>
              <View className='use-btn'>{t('useNow')}</View>
            </View>
          ))}
        </View>
      )}
    </View>
  )
}

export default GiftCard
