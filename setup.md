# セットアップ
## Viteプロジェクトの作成
react-tsテンプレートを使用してプロジェクトを作成します。
```
yarn create vite hello-world-vite --template react-ts
```
## Linterのセットアップ
ESLintインストール。
```
yarn add --dev eslint
```
`yarn eslint --init`コマンドで対話式で構成ファイルを作成する。
```
You can also run this command directly using 'npm init @eslint/config'.
? How would you like to use ESLint? … 
▸ To check syntax and find problems

? What type of modules does your project use? … 
▸ JavaScript modules (import/export)

? Which framework does your project use? … 
▸ React

? Does your project use TypeScript? 
‣ Yes

? Where does your code run?
✔ Browser

? What format do you want your config file to be in? … 
▸ JSON

? Would you like to install them now?
▸ Yes

? Which package manager do you want to use?
▸ yarn
```
pluginの追加。
```
yarn add --dev eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```
.eslintrc.jsonに書き加える。
```
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
+       "plugin:jsx-a11y/recommended",
+       "plugin:react/jsx-runtime",
+       "plugin:react-hooks/recommended"
    ],
...
    "plugins": [
        "react",
        "@typescript-eslint",
+       "jsx-a11y",
+       "react-hooks"
    ],
```
## Prettierのセットアップ
Prettierインストール。
```
yarn add --dev prettier eslint-config-prettier
```
.eslint.jsにPrettierの項目を追加する。
```
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
+       "prettier"
    ],
```
フォーマットの設定ファイルを作成します。
```
touch .prettierrc.json
```
```
{
  "trailingComma": "es5",
  "printWidth": 80,
  "singleQuote": true,
  "tabWidth": 2,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "always"
}
```
eslintとprettierの競合ルールを検出する。
```
yarn eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}'
```
package.jsonにコマンドを追加します。
```
    "format": "prettier --write src/**/*.{js,jsx,ts,tsx,json,html,css}",
    "lint": "eslint src/**/*.{js,jsx,ts,tsx}",
    "lint:fix": "eslint --fix src/**/*.{js,jsx,ts,tsx}",
    "fix": "yarn run format && yarn run lint:fix"
```
## stylelint
stylelintとプラグインをインストールします。
```
yarn add --dev stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order
```
設定ファイルを作成します。
```
touch .stylelintrc.json
```
以下の設定をします。
```
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recess-order"
  ],
  "ignoreFiles": [
    "**/node_modules/**/*",
    "**/dist/**/*",
    "**/build/**/*"
  ],
  "plugins": ["stylelint-order"],
  "rules": {
    "string-quotes": "single"
  }
}
```
package.jsonのコマンドを書き換えます。
```
    "format": "prettier --write src/**/*.{js,jsx,ts,tsx,json,html,css}",
    "lint:es": "eslint src/**/*.{js,jsx,ts,tsx}",
    "lint:es:fix": "eslint --fix src/**/*.{js,jsx,ts,tsx}",
    "lint:style": "stylelint src/**/*.{css,scss,less}",
    "lint:style:fix": "stylelint --fix src/**/*.{css,scss,less}",
    "lint:fix": "yarn run lint:es:fix && yarn run lint:style:fix",
    "fix": "yarn run format && yarn run lint:fix"
```