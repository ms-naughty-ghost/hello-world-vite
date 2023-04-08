# MUI Working with Tailwind CSS
https://mui.com/base/guides/working-with-tailwind-css/
## インストール
```
yarn add --dev tailwindcss
```
## 初期化
```
yarn tailwindcss init
```
## 設定ファイルに追加
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
+   './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
## ./src/index.cssに以下を追加
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## サーバ起動
もし起動済みなら再起動
```
yarn dev
```

## MUI Base インストール
```
yarn add @mui/base
```