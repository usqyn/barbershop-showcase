import { View, Text, Navigator } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './payment.css'

const Payment = () => {
  const { t, isRtl } = useLanguage()

  return (
    <View className='payment-container' style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <View className='language-wrapper'>
        <LanguageSwitcher />
      </View>
      
      <View className='success-header'>
        <Text className='success-icon'>✓</Text>
        <Text className='success-title'>{t('paySuccess')}</Text>
        <Text className='success-desc'>{t('orderConfirmed')}</Text>
      </View>

      <View className='points-gift'>
        <Text className='gift-icon'>🎁</Text>
        <View className='gift-content'>
          <Text className='gift-title'>{t('getPoints').replace('+58', '+58')}</Text>
          <Text className='gift-desc'>{t('pointsExchange')}</Text>
        </View>
      </View>

      <View className='order-info'>
        <View className='order-row'>
          <Text className='order-label'>{t('orderNumber')}</Text>
          <Text className='order-value'>2024011210001</Text>
        </View>
        <View className='order-row'>
          <Text className='order-label'>{t('payMethod')}</Text>
          <Text className='order-value'>{t('wechatPay')}</Text>
        </View>
        <View className='order-row'>
          <Text className='order-label'>{t('payAmount')}</Text>
          <Text className='order-value price'><span>{t('price')}</span>58.00</Text>
        </View>
      </View>

      <View className='service-detail'>
        <Text className='detail-title'>{t('serviceDetail')}</Text>
        <View className='detail-row'>
          <Text className='detail-label'>{t('serviceItem')}</Text>
          <Text className='detail-value'>{t('newHaircut')}</Text>
        </View>
        <View className='detail-row'>
          <Text className='detail-label'>{t('stylist')}</Text>
          <Text className='detail-value'>阿杰 - 首席造型师</Text>
        </View>
        <View className='detail-row'>
          <Text className='detail-label'>{t('serviceTime')}</Text>
          <Text className='detail-value'>2024年1月12日 10:00</Text>
        </View>
        <View className='detail-row'>
          <Text className='detail-label'>{t('serviceStore')}</Text>
          <Text className='detail-value'>潮流造型（朝阳店）</Text>
        </View>
      </View>

      <View className='payment-buttons'>
        <Navigator url='/pages/index/index' className='btn btn-secondary'>
          {t('backHome')}
        </Navigator>
        <Navigator url='/pages/member/member' className='btn btn-primary'>
          {t('viewOrder')}
        </Navigator>
      </View>
    </View>
  )
}

export default Payment
