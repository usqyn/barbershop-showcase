import { Component, ReactNode } from 'react'
import { View } from '@tarojs/components'
import { LanguageProvider } from './contexts/LanguageContext'
import './app.css'

class App extends Component<{children?: ReactNode}> {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      <LanguageProvider>
        <View id="app">
          {this.props.children}
        </View>
      </LanguageProvider>
    )
  }
}

export default App
