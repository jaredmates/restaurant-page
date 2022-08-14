/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactPage() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n\r\n  const contactContainer = document.createElement(\"div\");\r\n  contactContainer.classList.add(\"contact-container\");\r\n\r\n  const contactPage = document.createElement(\"h2\");\r\n  contactPage.classList.add(\"contact-page-text\");\r\n  contactPage.textContent = \"Contact Page\";\r\n\r\n  contactContainer.appendChild(contactPage);\r\n\r\n  const contactInfoContainer = document.createElement(\"div\");\r\n  contactInfoContainer.classList.add(\"contact-info-container\");\r\n\r\n  const textContainer = document.createElement(\"div\");\r\n  textContainer.classList.add(\"text-container\");\r\n\r\n  // -----------------\r\n\r\n  const addressContainer = document.createElement(\"div\");\r\n  addressContainer.classList.add(\"info-container\");\r\n\r\n  const addressText = document.createElement(\"p\");\r\n  addressText.classList.add(\"address-text\");\r\n  addressText.textContent = \"1875 S Centre City, Escondido, CA 92025\";\r\n\r\n  const addressIcon = document.createElement(\"i\");\r\n  addressIcon.classList.add(\"address-icon\", \"bx\", \"bxs-location-plus\");\r\n\r\n  addressContainer.appendChild(addressIcon);\r\n  addressContainer.appendChild(addressText);\r\n  textContainer.appendChild(addressContainer);\r\n\r\n  // ---------------------------\r\n\r\n  const hoursContainer = document.createElement(\"div\");\r\n  hoursContainer.classList.add(\"info-container\");\r\n\r\n  const hoursText = document.createElement(\"p\");\r\n  hoursText.classList.add(\"hours-text\");\r\n  hoursText.textContent = \"Mon-Sun: 8am-8pm\";\r\n\r\n  const hoursIcon = document.createElement(\"i\");\r\n  hoursIcon.classList.add(\"hours-icon\", \"bx\", \"bx-time\");\r\n\r\n  hoursContainer.appendChild(hoursIcon);\r\n  hoursContainer.appendChild(hoursText);\r\n  textContainer.appendChild(hoursContainer);\r\n\r\n  // ---------------------------\r\n\r\n  const phoneContainer = document.createElement(\"div\");\r\n  phoneContainer.classList.add(\"info-container\");\r\n\r\n  const phoneText = document.createElement(\"p\");\r\n  phoneText.classList.add(\"phone-text\");\r\n  phoneText.textContent = \"(333) 444-5555\";\r\n\r\n  const phoneIcon = document.createElement(\"i\");\r\n  phoneIcon.classList.add(\"phone-icon\", \"bx\", \"bxs-phone\");\r\n\r\n  phoneContainer.appendChild(phoneIcon);\r\n  phoneContainer.appendChild(phoneText);\r\n  textContainer.appendChild(phoneContainer);\r\n\r\n  contactInfoContainer.appendChild(textContainer);\r\n\r\n  // ---------------------------\r\n\r\n  const mapContainer = document.createElement(\"div\");\r\n  mapContainer.classList.add(\"map-responsive\");\r\n\r\n  const map = document.createElement(\"iframe\");\r\n  map.setAttribute(\r\n    \"src\",\r\n    \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208.89557720467633!2d-117.07500470816025!3d33.100427250215574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf35634209a6b%3A0x48a13c5356c462db!2sChina%20bros!5e0!3m2!1sen!2sus!4v1656026988342!5m2!1sen!2sus\"\r\n  );\r\n  map.setAttribute(\"width\", \"600\");\r\n  map.setAttribute(\"height\", \"450\");\r\n  map.setAttribute(\"style\", \"border:0\");\r\n  map.setAttribute(\"allowfullscreen\", \"\");\r\n  map.setAttribute(\"loading\", \"lazy\");\r\n  map.setAttribute(\"referrerpolicy\", \"no-referrer-when-downgrade\");\r\n  map.setAttribute(\"aria-hidden\", \"false\");\r\n  map.setAttribute(\"tabindex\", \"0\");\r\n\r\n  mapContainer.appendChild(map);\r\n  contactInfoContainer.appendChild(mapContainer);\r\n\r\n  // ---------------------------\r\n\r\n  contactContainer.appendChild(contactInfoContainer);\r\n  main.appendChild(contactContainer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction header() {\r\n  const headerContainer = document.createElement(\"div\");\r\n  headerContainer.classList.add(\"header-container\");\r\n\r\n  const restName = document.createElement(\"h1\");\r\n  restName.classList.add(\"restaurant-name\");\r\n  restName.textContent = \"Très Tacos\";\r\n\r\n  const dropDownMenu = document.createElement(\"input\");\r\n  dropDownMenu.setAttribute(\"id\", \"menu-btn\");\r\n  dropDownMenu.setAttribute(\"class\", \"menu-btn\");\r\n  dropDownMenu.setAttribute(\"type\", \"checkbox\");\r\n\r\n  const dropDownMenuLabel = document.createElement(\"label\");\r\n  dropDownMenuLabel.setAttribute(\"for\", \"menu-btn\");\r\n  dropDownMenuLabel.setAttribute(\"class\", \"menu-icon\");\r\n\r\n  const dropDownMenuSpan = document.createElement(\"span\");\r\n  dropDownMenuSpan.setAttribute(\"class\", \"navicon\");\r\n\r\n  dropDownMenuLabel.appendChild(dropDownMenuSpan);\r\n  headerContainer.appendChild(restName);\r\n  headerContainer.appendChild(dropDownMenu);\r\n  headerContainer.appendChild(dropDownMenuLabel);\r\n  headerContainer.appendChild(nav());\r\n\r\n  return headerContainer;\r\n}\r\n\r\nfunction nav() {\r\n  const buttonContainer = document.createElement(\"ul\");\r\n  buttonContainer.classList.add(\"button-container\");\r\n\r\n  const homeBtn = document.createElement(\"li\");\r\n  homeBtn.classList.add(\"home-btn\", \"btn-nav\");\r\n  homeBtn.textContent = \"Home\";\r\n\r\n  const menuBtn = document.createElement(\"li\");\r\n  menuBtn.classList.add(\"food-menu-btn\", \"btn-nav\");\r\n  menuBtn.textContent = \"Menu\";\r\n\r\n  const contactBtn = document.createElement(\"li\");\r\n  contactBtn.classList.add(\"contact-btn\", \"btn-nav\");\r\n  contactBtn.textContent = \"Contact\";\r\n\r\n  buttonContainer.appendChild(homeBtn);\r\n  buttonContainer.appendChild(menuBtn);\r\n  buttonContainer.appendChild(contactBtn);\r\n\r\n  return buttonContainer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n\r\n  const homeContainer = document.createElement(\"div\");\r\n  homeContainer.classList.add(\"home-container\");\r\n\r\n  const tagline = document.createElement(\"h2\");\r\n  tagline.textContent = \"World Famous Tacos!\";\r\n\r\n  const orderBtn = document.createElement(\"button\");\r\n  orderBtn.classList.add(\"order-btn\");\r\n  orderBtn.textContent = \"Order Online\";\r\n\r\n  homeContainer.appendChild(tagline);\r\n  homeContainer.appendChild(orderBtn);\r\n\r\n  main.appendChild(homeContainer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n\r\n\r\n\r\n\r\n\r\nfunction navEvents() {\r\n  const homeBtn = document.querySelector(\".home-btn\");\r\n  const menuBtn = document.querySelector(\".food-menu-btn\");\r\n  const contactBtn = document.querySelector(\".contact-btn\");\r\n\r\n  homeBtn.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    activeButton(homeBtn);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  menuBtn.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    activeButton(menuBtn);\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  contactBtn.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    activeButton(contactBtn);\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n}\r\n\r\nfunction activeButton(button) {\r\n  const buttons = document.querySelectorAll(\".btn-nav\");\r\n\r\n  buttons.forEach((button) => {\r\n    if (button !== this) {\r\n      button.classList.remove(\"active\");\r\n    }\r\n  });\r\n\r\n  button.classList.add(\"active\");\r\n}\r\n\r\nfunction main() {\r\n  const mainContent = document.createElement(\"main\");\r\n  mainContent.classList.add(\"main\");\r\n  mainContent.setAttribute(\"id\", \"main\");\r\n  return mainContent;\r\n}\r\n\r\nfunction initialize() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n  content.appendChild(main());\r\n\r\n  activeButton(document.querySelector(\".btn-nav\"));\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  navEvents();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\n(0,_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/initialize.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuPage() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n\r\n  const menuContainer = document.createElement(\"div\");\r\n  menuContainer.classList.add(\"menu-container\");\r\n\r\n  const menuPage = document.createElement(\"h2\");\r\n  menuPage.classList.add(\"menu-page-text\");\r\n  menuPage.textContent = \"Menu Page\";\r\n\r\n  menuContainer.appendChild(menuPage);\r\n\r\n  const menuItemsContainer = document.createElement(\"div\");\r\n  menuItemsContainer.classList.add(\"menu-items-container\");\r\n\r\n  // -----------------\r\n\r\n  const cornTacosContainer = document.createElement(\"div\");\r\n  cornTacosContainer.classList.add(\"corn-tacos-container\", \"items-container\");\r\n\r\n  const cornTacosImg = document.createElement(\"img\");\r\n  cornTacosImg.classList.add(\"corn-tacos-img\", \"menu-img\");\r\n  cornTacosImg.src = \"images/cornTacos.jpeg\";\r\n\r\n  const cornTacosText = document.createElement(\"h3\");\r\n  cornTacosText.textContent = \"Elote (Mexican Street Corn) Tacos\";\r\n\r\n  cornTacosContainer.appendChild(cornTacosImg);\r\n  cornTacosContainer.appendChild(cornTacosText);\r\n  menuItemsContainer.appendChild(cornTacosContainer);\r\n\r\n  // ---------------------------\r\n\r\n  const alPastorTacosContainer = document.createElement(\"div\");\r\n  alPastorTacosContainer.classList.add(\r\n    \"alpastor-tacos-container\",\r\n    \"items-container\"\r\n  );\r\n\r\n  const alPastorTacosImg = document.createElement(\"img\");\r\n  alPastorTacosImg.classList.add(\"alpastor-tacos-img\", \"menu-img\");\r\n  alPastorTacosImg.src = \"images/alpastor.jpg\";\r\n\r\n  const alPastorTacosText = document.createElement(\"h3\");\r\n  alPastorTacosText.textContent = \"Tacos Al Pastor\";\r\n\r\n  alPastorTacosContainer.appendChild(alPastorTacosImg);\r\n  alPastorTacosContainer.appendChild(alPastorTacosText);\r\n  menuItemsContainer.appendChild(alPastorTacosContainer);\r\n\r\n  // ---------------------\r\n\r\n  const limeTacosContainer = document.createElement(\"div\");\r\n  limeTacosContainer.classList.add(\"lime-tacos-container\", \"items-container\");\r\n\r\n  const limeTacosImg = document.createElement(\"img\");\r\n  limeTacosImg.classList.add(\"lime-tacos-img\", \"menu-img\");\r\n  limeTacosImg.src = \"images/chickenlimetacos.jpeg\";\r\n\r\n  const limeTacosText = document.createElement(\"h3\");\r\n  limeTacosText.textContent = \"Tequila-Lime Chicken Tacos\";\r\n\r\n  limeTacosContainer.appendChild(limeTacosImg);\r\n  limeTacosContainer.appendChild(limeTacosText);\r\n  menuItemsContainer.appendChild(limeTacosContainer);\r\n\r\n  // --------------------\r\n\r\n  const porkTacosContainer = document.createElement(\"div\");\r\n  porkTacosContainer.classList.add(\"pork-tacos-container\", \"items-container\");\r\n\r\n  const porkTacosImg = document.createElement(\"img\");\r\n  porkTacosImg.classList.add(\"pork-tacos-img\", \"menu-img\");\r\n  porkTacosImg.src = \"images/pulledporktacos.jpg\";\r\n\r\n  const porkTacosText = document.createElement(\"h3\");\r\n  porkTacosText.textContent = \"Pulled Pork Tacos with Pineapple Slaw\";\r\n\r\n  porkTacosContainer.appendChild(porkTacosImg);\r\n  porkTacosContainer.appendChild(porkTacosText);\r\n  menuItemsContainer.appendChild(porkTacosContainer);\r\n\r\n  // ---------------------\r\n\r\n  const buffaloTacosContainer = document.createElement(\"div\");\r\n  buffaloTacosContainer.classList.add(\r\n    \"buffalo-tacos-container\",\r\n    \"items-container\"\r\n  );\r\n\r\n  const buffaloTacosImg = document.createElement(\"img\");\r\n  buffaloTacosImg.classList.add(\"buffalo-tacos-img\", \"menu-img\");\r\n  buffaloTacosImg.src = \"images/buffalocauliflowertacos.jpg\";\r\n\r\n  const buffaloTacosText = document.createElement(\"h3\");\r\n  buffaloTacosText.textContent = \"Buffalo Cauliflower Tacos\";\r\n\r\n  buffaloTacosContainer.appendChild(buffaloTacosImg);\r\n  buffaloTacosContainer.appendChild(buffaloTacosText);\r\n  menuItemsContainer.appendChild(buffaloTacosContainer);\r\n\r\n  menuContainer.appendChild(menuItemsContainer);\r\n  main.appendChild(menuContainer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/initialize.js");
/******/ 	
/******/ })()
;