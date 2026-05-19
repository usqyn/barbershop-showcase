import { Scissors, Sparkles, Users, MapPin, Phone, Clock } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Scissors className="w-10 h-10 text-gold-500" />,
    title: '精剪造型',
    description: '专业发型师为您打造时尚造型，剪出您的个人风格',
  },
  {
    id: 2,
    icon: <Sparkles className="w-10 h-10 text-gold-500" />,
    title: '烫染护理',
    description: '采用高品质产品，提供专业烫染和头发护理服务',
  },
  {
    id: 3,
    icon: <Users className="w-10 h-10 text-gold-500" />,
    title: '会员服务',
    description: '尊享会员专属优惠，享受优质服务体验',
  },
];

const stylists = [
  {
    id: 1,
    name: 'David Chen',
    role: '首席造型师',
    bio: '10年从业经验，曾在国际发型大赛获奖',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Emma Liu',
    role: '高级设计师',
    bio: '专注于女性发型设计，擅长日韩风格',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Mike Zhang',
    role: '资深发型师',
    bio: '擅长男士复古油头和现代造型',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
  },
];

const prices = [
  { service: '精剪设计', price: '¥68' },
  { service: '精剪+洗吹', price: '¥88' },
  { service: '女士烫染', price: '¥268起' },
  { service: '男士烫染', price: '¥198起' },
  { service: '头发护理', price: '¥158起' },
  { service: '儿童剪发', price: '¥48' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-900/60 to-transparent" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-xl text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              时尚<wbr />
              <span className="text-gold-400">造型</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              专业发型设计，让您的每一刻都光彩照人
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                立即预约
              </button>
              <button className="px-8 py-4 border-2 border-white hover:bg-white hover:text-primary-950 text-white font-bold rounded-full transition-all duration-300">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">我们的服务</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="mb-6 p-4 bg-primary-50 rounded-full w-fit mx-auto group-hover:bg-gold-50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-900 text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylists Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">专业团队</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stylists.map((stylist) => (
              <div 
                key={stylist.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={stylist.image} 
                    alt={stylist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{stylist.name}</h3>
                  <p className="text-gold-400 font-medium mb-2">{stylist.role}</p>
                  <p className="text-primary-100 text-sm">{stylist.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-primary-900 to-primary-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">价格表</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden">
              {prices.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center px-8 py-5 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors"
                >
                  <span className="text-white text-lg">{item.service}</span>
                  <span className="text-gold-400 font-bold text-xl">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">联系我们</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">地址</h3>
              <p className="text-gray-600">北京市朝阳区建国路88号</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">电话</h3>
              <p className="text-gray-600">010-8888-8888</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">营业时间</h3>
              <p className="text-gray-600">09:00 - 21:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-300">© 2024 时尚造型 Salon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}