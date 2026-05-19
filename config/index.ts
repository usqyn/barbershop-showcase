import type { IConfig } from '@tarojs/taro'

const config: IConfig = {
  projectName: 'barbershop-miniprogram',
  date: '2026-5-19',
  designWidth: 375,
  deviceRatio: {
    '375': 2 / 1,
    '750': 1,
    '828': 945 / 828,
    '640': 960 / 640,
    '375': 730 / 375
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false
    }
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024
        }
      },
      cssModules: {
        enable: false
      }
    }
  },
  h5: {
    devServer: {
      port: 10086,
      disableHostCheck: true
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false
      }
    }
  }
}

export default config
