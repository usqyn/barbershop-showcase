import { Component, ReactNode } from 'react'
import { View, Text } from '@tarojs/components'
import './app.css'

class App extends Component<{children?: ReactNode}> {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      <View id="app">
        {this.props.children}
      </View>
    )
  }
}

export default App
