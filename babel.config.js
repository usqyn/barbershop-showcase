export default function (api) {
  api.cache(true)
  return {
    presets: [
      ['taro', {
        framework: 'react',
        ts: true
      }]
    ],
    plugins: [
      ['transform-react-remove-prop-types', {
        'removePropTypes': true
      }]
    ]
  }
}
