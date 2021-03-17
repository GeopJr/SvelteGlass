<p align="center">
  <img alt="svelteglass branding" src="https://i.imgur.com/6VtLFQU.png">
</p>
<h4 align="center">Analyze Svelte Apps</h4>
<p align="center">
  <br />
    <a href="https://github.com/marketplace/actions/action-accessibility"><img src="https://img.shields.io/badge/ACTION-ACCESSIBILITY-ff3e00.svg?style=for-the-badge&labelColor=f8eae3" alt="action accessibility" /></a>
    <a href="https://github.com/GeopJr/svelteglass/blob/main/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff3e00.svg?style=for-the-badge&labelColor=f8eae3" alt="CoC" /></a>
</p>
<p align="center">
  <br />
    <a href="https://addons.mozilla.org/en-US/firefox/addon/svelteglass/"><img src="https://i.imgur.com/UkbNoME.png" alt="firefox addon" /></a>
</p>

This extension will show you what a Svelte App consists of.

## Screenshots
<p align="center">
  <img alt="screenshot showing svelteglass on firefox" src="https://i.imgur.com/ASnSOfx.png">
  <img alt="screenshot showing svelteglass on chrome" src="https://i.imgur.com/JuYMhmX.png">
</p>

## Info
The extension is made with Vue and uses regex to detect the technologies a page consists of.
At the time of writing this it's almost impossible for me to detect more technologies like UI, Svelte version, plugins etc.

The extension is heavily inspired by [VueTelescope](https://vuetelescope.com/) and [Wappalyzer](https://www.wappalyzer.com/). Show them some love!

## Project setup
You are going to need the font which is not included.
You can get it from [Google Fonts](https://fonts.google.com/specimen/Overpass). After downloading, place it in `src/assets/Overpass.woff2`.

### Installs dependencies
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
