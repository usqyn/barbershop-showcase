import { View, Text } from '@tarojs/components';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../locales';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'zh', label: '中文' },
    { code: 'kkArabic', label: 'قازاقشا' },
    { code: 'kk', label: 'Казакша' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <View className="language-switcher">
      {languages.map((lang) => (
        <View
          key={lang.code}
          className={`language-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => handleLanguageChange(lang.code)}
        >
          <Text className="language-text">{lang.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default LanguageSwitcher;
