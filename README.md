# React QR Code Generator

A React QR Code Generator with a download feature.

![image info](./img/1.png)

## _Project setup:_

```sh
npm create vite@latest
```

Setup tailwind

```sh
npx tailwindcss init
npm install -D tailwindcss postcss autoprefixer
```

Add the paths to all of your template files in your tailwind.config.js file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add the @tailwind directives for each of Tailwind’s layers to your main/index CSS file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create a file named postcss.config.cjs.

```js
module.exports = {
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
    // ...
  ],
};
```
