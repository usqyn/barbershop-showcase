import { useState } from 'react'
import { View, Text, Image, ScrollView, Navigator } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './reserve.css'

interface Service {
  id: number
  name: string
  time: string
  price: number
}

interface TimeSlot {
  time: string
  disabled: boolean
}

const getServices = (t) => [
  { id: 1, name: t('newHaircut'), time: '约40分钟', price: 68 },
  { id: 2, name: t('permDye'), time: '约180分钟', price: 368 },
  { id: 3, name: t('nursing'), time: '约60分钟', price: 168 },
  { id: 4, name: t('styling'), time: '约30分钟', price: 48 }
]

const getDates = (t) => [
  { week: t('today'), day: '12' },
  { week: t('tomorrow'), day: '13' },
  { week: '周五', day: '14' },
  { week: '周六', day: '15' },
  { week: '周日', day: '16' }
]

const timeSlots: TimeSlot[] = [
  { time: '09:00', disabled: false },
  { time: '10:00', disabled: false },
  { time: '11:00', disabled: true },
  { time: '13:00', disabled: false },
  { time: '14:00', disabled: false },
  { time: '15:00', disabled: false },
  { time: '16:00', disabled: true },
  { time: '17:00', disabled: false },
  { time: '18:00', disabled: false },
  { time: '19:00', disabled: false },
  { time: '20:00', disabled: true },
  { time: '21:00', disabled: false }
]

const Reserve = () => {
  const { t, isRtl } = useLanguage()
  const services = getServices(t)
  const dates = getDates(t)
  
  const [selectedService, setSelectedService] = useState(0)
  const [selectedDate, setSelectedDate] = useState(0)
  const [selectedTime, setSelectedTime] = useState(1)

  return (
    <View className='reserve-container' style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <View className='language-wrapper'>
        <LanguageSwitcher />
      </View>
      
      <View className='section'>
        <Text className='section-title'>{t('selectStylist')}</Text>
        <View className='stylist-select'>
          <Image className='stylist-avatar' src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20hairdresser%20portrait&image_size=square' mode='aspectFill' />
          <View className='stylist-info'>
            <Text className='stylist-name'>阿杰 - 首席造型师</Text>
            <Text className='stylist-desc'>擅长：潮流烫染、造型设计</Text>
          </View>
          <Text className='select-arrow'>›</Text>
        </View>
      </View>

      <View className='section'>
        <Text className='section-title'>{t('selectService')}</Text>
        <View className='service-list'>
          {services.map((service, index) => (
            <View 
              key={service.id} 
              className={`service-item ${selectedService === index ? 'active' : ''}`}
              onClick={() => setSelectedService(index)}
            >
              <View className='service-info'>
                <Text className='service-name'>{service.name}</Text>
                <Text className='service-time'>{service.time}</Text>
              </View>
              <Text className='service-price'>{t('price')}{service.price}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className='section'>
        <Text className='section-title'>{t('selectDate')}</Text>
        <ScrollView className='date-select' scrollX>
          {dates.map((date, index) => (
            <View 
              key={index} 
              className={`date-item ${selectedDate === index ? 'active' : ''}`}
              onClick={() => setSelectedDate(index)}
            >
              <Text className='date-week'>{date.week}</Text>
              <Text className='date-day'>{date.day}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View className='section'>
        <Text className='section-title'>{t('selectTime')}</Text>
        <View className='time-grid'>
          {timeSlots.map((slot, index) => (
            <View 
              key={index} 
              className={`time-item ${selectedTime === index ? 'active' : ''} ${slot.disabled ? 'disabled' : ''}`}
              onClick={() => !slot.disabled && setSelectedTime(index)}
            >
              <Text>{slot.time}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className='section'>
        <Text className='section-title'>{t('remarks')}</Text>
        <View className='remark-input' style={{color: '#999'}}>{t('placeholderRemarks')}</View>
      </View>

      <View className='reserve-footer'>
        <View className='footer-info'>
          <Text className='total-label'>{t('total')}</Text>
          <Text className='total-price'><span>{t('price')}</span>{services[selectedService].price}</Text>
        </View>
        <Navigator url='/pages/order/order' className='reserve-btn'>
          {t('bookNowBtn')}
        </Navigator>
      </View>
    </View>
  )
}

export default Reserve
