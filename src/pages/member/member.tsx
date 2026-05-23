import { View, Text, Image, Navigator } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './member.css'

const Member = () => {
  const { t, isRtl } = useLanguage()

  const orderTabs = [
    { icon: '⏰', text: t('pendingService') },
    { icon: '✅', text: t('completed') },
    { icon: '💬', text: t('pendingReview') },
    { icon: '🔄', text: t('refund') }
  ]

  const menuItems1 = [
    { icon: '🏪', text: t('pointsMall'), url: '/pages/mall/mall' },
    { icon: '🎁', text: t('giftCards'), url: '/pages/giftcard/giftcard' },
    { icon: '💇', text: t('myStylists'), url: null },
    { icon: '📍', text: t('myStores'), url: null }
  ]

  const menuItems2 = [
    { icon: '👤', text: t('profile'), url: '/pages/profile/profile' },
    { icon: '⚙️', text: t('settings'), url: null }
  ]

  return (
    <View className='member-container' style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <View className='member-header'>
        <LanguageSwitcher />
        <View className='member-info'>
          <Image className='member-avatar' src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait&image_size=square' mode='aspectFill' />
          <View className='member-detail'>
            <Text className='member-name'>张小明</Text>
            <Text className='member-level'>VIP会员</Text>
          </View>
        </View>
        <View className='member-stats'>
          <View className='stat-item'>
            <Text className='stat-value'>2,580</Text>
            <Text className='stat-label'>{t('points')}</Text>
          </View>
          <View className='stat-item'>
            <Text className='stat-value'>12</Text>
            <Text className='stat-label'>{t('coupons')}</Text>
          </View>
          <View className='stat-item'>
            <Text className='stat-value'>{t('price')}200</Text>
            <Text className='stat-label'>{t('balance')}</Text>
          </View>
        </View>
      </View>

      <View className='order-section'>
        <View className='order-header'>
          <Text className='order-title'>{t('myOrders')}</Text>
          <Text className='order-more'>{t('viewAll')} ›</Text>
        </View>
        <View className='order-tabs'>
          {orderTabs.map((tab, index) => (
            <View key={index} className='order-tab'>
              <Text className='order-icon'>{tab.icon}</Text>
              <Text className='order-text'>{tab.text}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className='menu-section'>
        {menuItems1.map((item, index) => (
          item.url ? (
            <Navigator key={index} url={item.url} className='menu-item'>
              <View className='menu-left'>
                <Text className='menu-icon'>{item.icon}</Text>
                <Text className='menu-text'>{item.text}</Text>
              </View>
              <Text className='menu-arrow'>›</Text>
            </Navigator>
          ) : (
            <View key={index} className='menu-item'>
              <View className='menu-left'>
                <Text className='menu-icon'>{item.icon}</Text>
                <Text className='menu-text'>{item.text}</Text>
              </View>
              <Text className='menu-arrow'>›</Text>
            </View>
          )
        ))}
      </View>

      <View className='menu-section'>
        {menuItems2.map((item, index) => (
          item.url ? (
            <Navigator key={index} url={item.url} className='menu-item'>
              <View className='menu-left'>
                <Text className='menu-icon'>{item.icon}</Text>
                <Text className='menu-text'>{item.text}</Text>
              </View>
              <Text className='menu-arrow'>›</Text>
            </Navigator>
          ) : (
            <View key={index} className='menu-item'>
              <View className='menu-left'>
                <Text className='menu-icon'>{item.icon}</Text>
                <Text className='menu-text'>{item.text}</Text>
              </View>
              <Text className='menu-arrow'>›</Text>
            </View>
          )
        ))}
      </View>
    </View>
  )
}

export default Member
