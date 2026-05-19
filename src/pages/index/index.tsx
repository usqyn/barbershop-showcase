import { Component } from 'react'
import { View, Text, Image, Button, ScrollView } from '@tarojs/components'
import './index.css'

const services = [
  {
    id: 1,
    icon: 'https://img.icons8.com/ios-filled/50/ffc107/scissors.png',
    title: '精剪造型',
    description: '专业发型师为您打造时尚造型，剪出您的个人风格'
  },
  {
    id: 2,
    icon: 'https://img.icons8.com/ios-filled/50/ffc107/hair-dryer.png',
    title: '烫染护理',
    description: '采用高品质产品，提供专业烫染和头发护理服务'
  },
  {
    id: 3,
    icon: 'https://img.icons8.com/ios-filled/50/ffc107/user-group.png',
    title: '会员服务',
    description: '尊享会员专属优惠，享受优质服务体验'
  }
]

const stylists = [
  {
    id: 1,
    name: 'David Chen',
    role: '首席造型师',
    bio: '10年从业经验，曾在国际发型大赛获奖',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Emma Liu',
    role: '高级设计师',
    bio: '专注于女性发型设计，擅长日韩风格',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Mike Zhang',
    role: '资深发型师',
    bio: '擅长男士复古油头和现代造型',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
  }
]

const prices = [
  { service: '精剪设计', price: '¥68' },
  { service: '精剪+洗吹', price: '¥88' },
  { service: '女士烫染', price: '¥268起' },
  { service: '男士烫染', price: '¥198起' },
  { service: '头发护理', price: '¥158起' },
  { service: '儿童剪发', price: '¥48' }
]

class Index extends Component {
  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    return (
      <ScrollView className='index' scrollY>
        {/* Hero Section */}
        <View className='hero'>
          <Image 
            className='hero-bg'
            src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920'
            mode='aspectFill'
          />
          <View className='hero-overlay' />
          <View className='hero-content'>
            <Text className='hero-title'>时尚{' '}造型</Text>
            <Text className='hero-subtitle'>专业发型设计，让您的每一刻都光彩照人</Text>
            <View className='hero-buttons'>
              <Button className='btn-primary'>立即预约</Button>
              <Button className='btn-secondary'>了解更多</Button>
            </View>
          </View>
        </View>

        {/* Services Section */}
        <View className='section'>
          <Text className='section-title'>我们的服务</Text>
          <View className='divider' />
          <View className='services-grid'>
            {services.map(service => (
              <View key={service.id} className='service-card'>
                <Image className='service-icon' src={service.icon} />
                <Text className='service-title'>{service.title}</Text>
                <Text className='service-desc'>{service.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Stylists Section */}
        <View className='section'>
          <Text className='section-title'>专业团队</Text>
          <View className='divider' />
          <View className='stylists-grid'>
            {stylists.map(stylist => (
              <View key={stylist.id} className='stylist-card'>
                <Image 
                  className='stylist-avatar'
                  src={stylist.avatar}
                  mode='aspectFill'
                />
                <View className='stylist-info'>
                  <Text className='stylist-name'>{stylist.name}</Text>
                  <Text className='stylist-role'>{stylist.role}</Text>
                  <Text className='stylist-bio'>{stylist.bio}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Pricing Section */}
        <View className='section pricing-section'>
          <Text className='section-title text-white'>价格表</Text>
          <View className='divider-white' />
          <View className='price-list'>
            {prices.map((item, index) => (
              <View key={index} className='price-item'>
                <Text className='price-service'>{item.service}</Text>
                <Text className='price-value'>{item.price}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contact Section */}
        <View className='section'>
          <Text className='section-title'>联系我们</Text>
          <View className='divider' />
          <View className='contact-grid'>
            <View className='contact-item'>
              <Image 
                className='contact-icon'
                src='https://img.icons8.com/ios-filled/50/0ea5e9/place-marker.png'
              />
              <Text className='contact-label'>地址</Text>
              <Text className='contact-value'>北京市朝阳区建国路88号</Text>
            </View>
            <View className='contact-item'>
              <Image 
                className='contact-icon'
                src='https://img.icons8.com/ios-filled/50/0ea5e9/phone.png'
              />
              <Text className='contact-label'>电话</Text>
              <Text className='contact-value'>010-8888-8888</Text>
            </View>
            <View className='contact-item'>
              <Image 
                className='contact-icon'
                src='https://img.icons8.com/ios-filled/50/0ea5e9/time.png'
              />
              <Text className='contact-label'>营业时间</Text>
              <Text className='contact-value'>09:00 - 21:00</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className='footer'>
          <Text className='footer-text'>© 2024 时尚造型 Salon. All rights reserved.</Text>
        </View>
      </ScrollView>
    )
  }
}

export default Index
