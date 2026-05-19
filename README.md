# 理发店微信小程序

这是一个使用 Taro 框架开发的理发店微信小程序，可以直接在微信开发者工具中打开。

## 功能特性

### 1. 首页英雄区
- 精美的背景图
- 品牌标语
- 预约和了解更多按钮

### 2. 服务展示
- 精剪造型
- 烫染护理
- 会员服务

### 3. 专业团队
- 首席造型师 David Chen
- 高级设计师 Emma Liu
- 资深发型师 Mike Zhang

### 4. 价格表
- 透明的价格展示
- 精剪、烫染、护理等多种服务

### 5. 联系方式
- 地址、电话、营业时间

## 技术栈

- **框架**: Taro 4.x
- **UI库**: Taro Components
- **语言**: TypeScript
- **样式**: CSS

## 如何在微信开发者工具中打开

### 方法一：直接导入项目

1. 下载或克隆本项目到本地
2. 打开微信开发者工具
3. 点击"导入项目"
4. 选择项目根目录（即包含 `project.config.json` 的目录）
5. AppID 输入框可以输入测试号：`touristappid`，或者使用您自己的小程序 AppID
6. 点击"确认"即可

### 方法二：编译后导入

1. 项目已编译，编译后的代码在 `dist` 目录
2. 打开微信开发者工具
3. 点击"导入项目"
4. 选择 `dist` 目录
5. 输入 AppID
6. 点击"确认"即可

## 项目结构

```
barbershop-miniprogram/
├── dist/                    # 编译输出目录
│   ├── app.js              # 小程序入口
│   ├── app.json            # 小程序配置
│   ├── pages/
│   │   └── index/          # 首页
│   │       ├── index.js
│   │       ├── index.wxml
│   │       ├── index.wxss
│   │       └── index.json
│   └── ...
├── src/                     # 源代码目录
│   ├── app.config.ts       # 小程序全局配置
│   ├── app.tsx             # 小程序入口组件
│   ├── app.css             # 全局样式
│   └── pages/
│       └── index/
│           ├── index.tsx   # 首页组件
│           ├── index.css   # 首页样式
│           └── index.config.ts # 页面配置
├── config/
│   └── index.ts            # Taro 构建配置
├── project.config.json     # 微信小程序项目配置
├── package.json
├── tsconfig.json
└── babel.config.js
```

## 开发命令

```bash
# 安装依赖
npm install

# 开发微信小程序（监听模式）
npm run dev:weapp

# 构建微信小程序
npm run build:weapp

# 开发 H5（浏览器预览）
npm run dev:h5

# 构建 H5
npm run build:h5
```

## 预览效果

### 微信小程序预览
使用微信开发者工具打开 `dist` 目录即可预览。

### H5 预览
运行 `npm run dev:h5`，然后在浏览器中打开 http://localhost:10086

## 注意事项

1. **图片资源**：项目使用网络图片，需要确保手机能够访问外网
2. **AppID**：如果使用测试号，部分功能可能受限
3. **域名配置**：如果需要调用接口，需要在微信公众平台配置合法域名

## 自定义修改

### 修改门店信息
编辑 `src/pages/index/index.tsx` 中的数据：
- `stylists`: 发型师信息
- `services`: 服务项目
- `prices`: 价格列表
- `contactInfo`: 联系方式

### 修改样式
编辑对应的 `.css` 文件

### 添加新页面
1. 在 `src/pages/` 下创建新页面目录
2. 在 `src/app.config.ts` 的 `pages` 数组中添加路径
3. 创建 `index.tsx`、`index.css`、`index.config.ts`

## 许可证

MIT License

## 联系方式

如有问题或建议，请提交 Issue 或 Pull Request。
