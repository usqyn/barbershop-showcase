import { View, Text, Image } from '@tarojs/components'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './profile.css'

const Profile = () => {
  const { t, isRtl } = useLanguage()

  const infoItems1 = [
    { label: t('nickname'), value: '张小明' },
    { label: t('phone'), value: '138****8888' },
    { label: t('gender'), value: t('male') }
  ]

  const infoItems2 = [
    { label: t('birthday'), value: t('notSet') },
    { label: t('city'), value: '北京市' }
  ]

  const infoItems3 = [
    { label: t('memberCode'), value: '' },
    { label: t('changePassword'), value: '' }
  ]

  return (
    <View className='profile-container' style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
      <View className='language-wrapper'>
        <LanguageSwitcher />
      </View>
      
      <View className='avatar-section'>
        <View className='avatar-left'>
          <Image className='avatar-img' src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait&image_size=square' mode='aspectFill' />
          <Text className='avatar-text'>{t('avatar')}</Text>
        </View>
        <Text className='avatar-arrow'>›</Text>
      </View>

      <View className='info-section'>
        {infoItems1.map((item, index) => (
          <View key={index} className='info-item'>
            <Text className='info-label'>{item.label}</Text>
            <View className='info-right'>
              <Text className='info-value'>{item.value}</Text>
              <Text className='info-arrow'>›</Text>
            </View>
          </View>
        ))}
      </View>

      <View className='info-section'>
        {infoItems2.map((item, index) => (
          <View key={index} className='info-item'>
            <Text className='info-label'>{item.label}</Text>
            <View className='info-right'>
              <Text className='info-value'>{item.value}</Text>
              <Text className='info-arrow'>›</Text>
            </View>
          </View>
        ))}
      </View>

      <View className='info-section'>
        {infoItems3.map((item, index) => (
          <View key={index} className='info-item'>
            <Text className='info-label'>{item.label}</Text>
            <View className='info-right'>
              <Text className='info-arrow'>›</Text>
            </View>
          </View>
        ))}
      </View>

      <View className='save-btn'>
        {t('save')}
      </View>
    </View>
  )
}

export default Profile
