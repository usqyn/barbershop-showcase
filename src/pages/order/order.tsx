import { useState } from 'react'
import { View, Text, Image, Navigator } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './order.css'

const Order = () => {
  const { t, isRtl } = useLanguage()
  const [selectedPayMethod, setSelectedPayMethod] = useState(0)

  const payMethods = [
    { icon: '💳', name: t('wechatPay') },
    { icon: '💰', name: t('balancePay') },
    { icon: '🎁', name: t('giftCard') }
  ]

  return (
    <View className='order-container' style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <View className='language-wrapper'>
        <LanguageSwitcher />
      </View>
      
      <View className='section'>
        <View className='user-info'>
          <Image className='user-avatar' src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait&image_size=square' mode='aspectFill' />
          <View className='user-detail'>
            <Text className='user-name'>张小明</Text>
            <Text className='user-phone'>138****8888</Text>
          </View>
          <Text className='info-arrow'>›</Text>
        </View>
      </View>

      <View className='section'>
        <View className='order-detail'>
          <Image className='order-avatar' src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20hairdresser%20portrait&image_size=square' mode='aspectFill' />
          <View className='order-info'>
            <Text className='order-service'>{t('newHaircut')}</Text>
            <Text className='order-stylist'>阿杰 - 首席造型师</Text>
            <Text className='order-time'>2024年1月12日 10:00</Text>
          </View>
        </View>
      </View>

      <View className='section'>
        <View className='coupon-row'>
          <View className='coupon-left'>
            <Text className='coupon-icon'>🎫</Text>
            <Text className='coupon-text'>{t('coupon')}</Text>
          </View>
          <View className='coupon-right'>
            <Text className='coupon-count'>3张可用</Text>
            <Text className='coupon-arrow'>›</Text>
          </View>
        </View>
      </View>

      <View className='section'>
        <View className='price-row'>
          <Text className='price-label'>{t('serviceAmount')}</Text>
          <Text className='price-value'>{t('price')}68.00</Text>
        </View>
        <View className='price-row'>
          <Text className='price-label'>{t('coupon')}</Text>
          <Text className='price-value discount'>-{t('price')}10.00</Text>
        </View>
        <View className='price-total'>
          <Text className='total-label'>{t('actualPay')}</Text>
          <Text className='total-value'><span>{t('price')}</span>58.00</Text>
        </View>
      </View>

      <View className='section'>
        <View className='pay-methods'>
          {payMethods.map((method, index) => (
            <View 
              key={index} 
            className='pay-item'
              onClick={() => setSelectedPayMethod(index)}
            >
              <View className='pay-left'>
                <Text className='pay-icon'>{method.icon}</Text>
                <Text className='pay-name'>{method.name}</Text>
              </View>
              <View className={`pay-radio ${selectedPayMethod === index ? 'active' : ''}`}></View>
            </View>
          ))}
        </View>
      </View>

      <View className='order-footer'>
        <View className='footer-info'>
          <Text className='footer-total'>{t('actualPay')}</Text>
          <Text className='footer-price'><span>{t('price')}</span>58.00</Text>
        </View>
        <Navigator url='/pages/payment/payment' className='pay-btn'>
          {t('confirmPay')}
        </Navigator>
      </View>
    </View>
  )
}

export default Order
