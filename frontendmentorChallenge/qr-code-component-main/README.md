# Frontend Mentor - QR code component solution
---
 這是一個[QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H)的解決方案，Frontend Mentor challenges可以藉由實際案例幫助你增進你的編碼技能。

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## 目錄/Table of contents
---
- [Frontend Mentor - QR code component solution](#frontend-mentor---qr-code-component-solution)
  - [目錄/Table of contents](#目錄table-of-contents)
  - [概述/Overview](#概述overview)
    - [截圖/Screenshot](#截圖screenshot)
    - [連結/Links](#連結links)
  - [流程/My process](#流程my-process)
    - [使用工具/Built with](#使用工具built-with)
    - [學習紀錄/What I learned](#學習紀錄what-i-learned)
      - [CSS Reset](#css-reset)
      - [flexbox](#flexbox)
        - [外容器](#外容器)
        - [內元件](#內元件)



## 概述/Overview
---
### 截圖/Screenshot

![快照](image.png)

![快照](mobile.png)

### 連結/Links

- [solution URL](https://github.com/sora2919/frontendmentorChallenge/tree/main/frontendmentorChallenge/qr-code-component-main)
- [live site URL](https://sora2919.github.io/frontendmentorChallenge/frontendmentorChallenge/qr-code-component-main/)


## 流程/My process
---
### 使用工具/Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### 學習紀錄/What I learned
#### CSS Reset
```css
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
```
- 瀏覽器會有自己預設的CSS樣式，所以當我們想要照著自己的設計稿來做時，需要把這些預設樣式都拿掉。網路上有很多人整理出CSS Reset，可以找自己喜歡的來套用。不過因為這裡只是小練習，使用*來設定Reset即可。

#### flexbox
##### 外容器
```CSS
    display: flex | inline-flex; 
    flex-direction: row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    justify-content: flex-start | flex-end | center | space-between | space-around;
    align-items: flex-start | flex-end | center | baseline | stretch;
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```
##### 內元件
```CSS
    
```