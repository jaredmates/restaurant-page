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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactPage() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n\r\n  const contactContainer = document.createElement(\"div\");\r\n  contactContainer.classList.add(\"contact-container\");\r\n\r\n  const contactPage = document.createElement(\"h1\");\r\n  contactPage.textContent = \"Contact Page\";\r\n\r\n  contactContainer.appendChild(contactPage);\r\n\r\n  main.appendChild(contactContainer);\r\n\r\n  // return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n\r\n  const homeContainer = document.createElement(\"div\");\r\n  homeContainer.classList.add(\"home-container\");\r\n\r\n  const tagline = document.createElement(\"h3\");\r\n  tagline.textContent = \"World Famous Tacos!\";\r\n\r\n  const orderBtn = document.createElement(\"button\");\r\n  orderBtn.classList.add(\"order-btn\");\r\n  orderBtn.textContent = \"Order Online\";\r\n\r\n  const tacoImg = document.createElement(\"img\");\r\n  tacoImg.classList.add(\"home-background\");\r\n  tacoImg.src = \"images/tacos.jpg\";\r\n\r\n  homeContainer.appendChild(tagline);\r\n  homeContainer.appendChild(orderBtn);\r\n  homeContainer.appendChild(tacoImg);\r\n\r\n  main.appendChild(homeContainer);\r\n\r\n  // return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction header() {\r\n  const headerContainer = document.createElement(\"div\");\r\n  headerContainer.classList.add(\"header-container\");\r\n\r\n  const restName = document.createElement(\"h1\");\r\n  restName.classList.add(\"restaurant-name\");\r\n  restName.textContent = \"Tres Tacos\";\r\n\r\n  headerContainer.appendChild(restName);\r\n  headerContainer.appendChild(nav());\r\n\r\n  return headerContainer;\r\n}\r\n\r\nfunction nav() {\r\n  const buttonContainer = document.createElement(\"div\");\r\n  buttonContainer.classList.add(\"button-container\");\r\n\r\n  const homeBtn = document.createElement(\"button\");\r\n  homeBtn.classList.add(\"home-btn\", \"btn-nav\");\r\n  homeBtn.textContent = \"Home\";\r\n  homeBtn.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(homeBtn);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  const menuBtn = document.createElement(\"button\");\r\n  menuBtn.classList.add(\"menu-btn\", \"btn-nav\");\r\n  menuBtn.textContent = \"Menu\";\r\n  menuBtn.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(menuBtn);\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  const contactBtn = document.createElement(\"button\");\r\n  contactBtn.classList.add(\"contact-btn\", \"btn-nav\");\r\n  contactBtn.textContent = \"Contact\";\r\n  contactBtn.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(contactBtn);\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n\r\n  buttonContainer.appendChild(homeBtn);\r\n  buttonContainer.appendChild(menuBtn);\r\n  buttonContainer.appendChild(contactBtn);\r\n\r\n  return buttonContainer;\r\n}\r\n\r\nfunction setActiveButton(button) {\r\n  const buttons = document.querySelectorAll(\".btn-nav\");\r\n\r\n  buttons.forEach((button) => {\r\n    if (button !== this) {\r\n      button.classList.remove(\"active\");\r\n    }\r\n  });\r\n\r\n  button.classList.add(\"active\");\r\n}\r\n\r\nfunction main() {\r\n  const mainContent = document.createElement(\"main\");\r\n  mainContent.classList.add(\"main\");\r\n  mainContent.setAttribute(\"id\", \"main\");\r\n  return mainContent;\r\n}\r\n\r\nfunction initialize() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  content.appendChild(header());\r\n  content.appendChild(main());\r\n\r\n  setActiveButton(document.querySelector(\".btn-nav\"));\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);\r\n\r\n// --------------------------------------------------------\r\n\r\n// Put the header and nav in another file and call it in the main\r\n// keep the active button function in index.js\r\n// const homeButton = document.querySelector(\"#header-total-logo\");\r\n// const menuButton = document.querySelector(\"#menu-web\");\r\n// const aboutButton = document.querySelector(\"#about-web\");\r\n\r\n// homeButton.addEventListener(\"click\", function () {\r\n//   render();\r\n//   home();\r\n//   pageLoad();\r\n// });\r\n\r\n// menuButton.addEventListener(\"click\", function () {\r\n//   render();\r\n//   menu();\r\n//   pageLoad();\r\n// });\r\n\r\n// aboutButton.addEventListener(\"click\", function () {\r\n//   render();\r\n//   about();\r\n//   pageLoad();\r\n// });\r\n\r\n// const render = function () {\r\n//   const content = document.querySelector(\"#content\");\r\n//   content.style = \"\";\r\n//   while (content.children.length > 1) {\r\n//     content.children[1].remove();\r\n//   }\r\n// };\r\n\r\n// ---------------------\r\n\r\n// init();\r\n\r\n// function addNavEvents() {\r\n//   const homeBtn = document.getElementById(\"home\");\r\n//   const menuBtn = document.getElementById(\"menu\");\r\n//   const contactBtn = document.getElementById(\"contact\");\r\n\r\n//   homeBtn.addEventListener(\"click\", loadHome);\r\n//   menuBtn.addEventListener(\"click\", loadMenu);\r\n//   contactBtn.addEventListener(\"click\", loadContact);\r\n// }\r\n// function init() {\r\n//   loadPage();\r\n//   loadHome();\r\n//   addNavEvents();\r\n// }\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuPage() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n\r\n  const menuContainer = document.createElement(\"div\");\r\n  menuContainer.classList.add(\"menu-container\");\r\n\r\n  const menuPage = document.createElement(\"h1\");\r\n  menuPage.textContent = \"Menu Page\";\r\n\r\n  menuContainer.appendChild(menuPage);\r\n\r\n  const menuItemsContainer = document.createElement(\"div\");\r\n  menuItemsContainer.classList.add(\"menu-items-container\");\r\n\r\n  // -----------------\r\n\r\n  const cornTacosContainer = document.createElement(\"div\");\r\n  cornTacosContainer.classList.add(\"corn-tacos-container\");\r\n\r\n  const cornTacosImg = document.createElement(\"img\");\r\n  cornTacosImg.classList.add(\"corn-tacos-img\");\r\n  cornTacosImg.src = \"images/cornTacos.jpeg\";\r\n\r\n  const cornTacosText = document.createElement(\"h3\");\r\n  cornTacosText.textContent = \"Elote (Mexican Street Corn) Tacos\";\r\n\r\n  cornTacosContainer.appendChild(cornTacosImg);\r\n  cornTacosContainer.appendChild(cornTacosText);\r\n  menuItemsContainer.appendChild(cornTacosContainer);\r\n\r\n  // ---------------------------\r\n\r\n  const alPastorTacosContainer = document.createElement(\"div\");\r\n  alPastorTacosContainer.classList.add(\"alPastor-tacos-container\");\r\n\r\n  const alPastorTacosImg = document.createElement(\"img\");\r\n  alPastorTacosImg.classList.add(\"alpastor-tacos-img\");\r\n  alPastorTacosImg.src = \"images/alpastor.jpg\";\r\n  const alPastorTacosText = document.createElement(\"h3\");\r\n  alPastorTacosText.textContent = \"Tacos Al Pastor\";\r\n\r\n  alPastorTacosContainer.appendChild(alPastorTacosImg);\r\n  alPastorTacosContainer.appendChild(alPastorTacosText);\r\n  menuItemsContainer.appendChild(alPastorTacosContainer);\r\n\r\n  // ---------------------\r\n\r\n  const limeTacosContainer = document.createElement(\"div\");\r\n  limeTacosContainer.classList.add(\"lime-tacos-container\");\r\n\r\n  const limeTacosImg = document.createElement(\"img\");\r\n  limeTacosImg.classList.add(\"lime-tacos-img\");\r\n  limeTacosImg.src = \"images/chickenlimetacos.jpeg\";\r\n  const limeTacosText = document.createElement(\"h3\");\r\n  limeTacosText.textContent = \"Tequila-Lime Chicken Tacos\";\r\n\r\n  limeTacosContainer.appendChild(limeTacosImg);\r\n  limeTacosContainer.appendChild(limeTacosText);\r\n  menuItemsContainer.appendChild(limeTacosContainer);\r\n\r\n  // --------------------\r\n\r\n  const porkTacosContainer = document.createElement(\"div\");\r\n  porkTacosContainer.classList.add(\"pork-tacos-container\");\r\n\r\n  const porkTacosImg = document.createElement(\"img\");\r\n  porkTacosImg.classList.add(\"pork-tacos-img\");\r\n  porkTacosImg.src = \"images/pulledporktacos.jpg\";\r\n  const porkTacosText = document.createElement(\"h3\");\r\n  porkTacosText.textContent = \"Pulled Pork Tacos with Pineapple Slaw\";\r\n\r\n  porkTacosContainer.appendChild(porkTacosImg);\r\n  porkTacosContainer.appendChild(porkTacosText);\r\n  menuItemsContainer.appendChild(porkTacosContainer);\r\n\r\n  // ---------------------\r\n\r\n  const buffaloTacosContainer = document.createElement(\"div\");\r\n  buffaloTacosContainer.classList.add(\"buffalo-tacos-container\");\r\n\r\n  const buffaloTacosImg = document.createElement(\"img\");\r\n  buffaloTacosImg.classList.add(\"buffalo-tacos-img\");\r\n  buffaloTacosImg.src = \"images/buffalocauliflowertacos.jpg\";\r\n  const buffaloTacosText = document.createElement(\"h3\");\r\n  buffaloTacosText.textContent = \"Buffalo Cauliflower Tacos\";\r\n\r\n  buffaloTacosContainer.appendChild(buffaloTacosImg);\r\n  buffaloTacosContainer.appendChild(buffaloTacosText);\r\n  menuItemsContainer.appendChild(buffaloTacosContainer);\r\n\r\n  menuContainer.appendChild(menuItemsContainer);\r\n  main.appendChild(menuContainer);\r\n\r\n  // return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\r\n\r\n// function createMenu() {\r\n//   const menu = document.createElement(\"div\");\r\n//   menu.classList.add(\"menu\");\r\n\r\n//   menu.appendChild(\r\n//     createMenuItem(\r\n//       \"Salsiccia\",\r\n//       \"Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil\"\r\n//     )\r\n//   );\r\n//   menu.appendChild(\r\n//     createMenuItem(\r\n//       \"Gamberi\",\r\n//       \"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil\"\r\n//     )\r\n//   );\r\n//   menu.appendChild(\r\n//     createMenuItem(\r\n//       \"Pepe\",\r\n//       \"Tomato sauce, Mozarella, Chilli flakes, Olives, Basil\"\r\n//     )\r\n//   );\r\n//   menu.appendChild(\r\n//     createMenuItem(\r\n//       \"Disgustoso\",\r\n//       \"Tomato sauce, Bacon, Pineapple, Olives, Basil\"\r\n//     )\r\n//   );\r\n//   menu.appendChild(\r\n//     createMenuItem(\r\n//       \"Colorato\",\r\n//       \"Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil\"\r\n//     )\r\n//   );\r\n//   menu.appendChild(\r\n//     createMenuItem(\r\n//       \"Pomodoro\",\r\n//       \"Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli\"\r\n//     )\r\n//   );\r\n//   menu.appendChild(\r\n//     createMenuItem(\r\n//       \"Crema\",\r\n//       \"White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil\"\r\n//     )\r\n//   );\r\n//   menu.appendChild(\r\n//     createMenuItem(\r\n//       \"Carne\",\r\n//       \"Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli\"\r\n//     )\r\n//   );\r\n\r\n//   return menu;\r\n// }\r\n\r\n// function createMenuItem(name, description) {\r\n//   const menuItem = document.createElement(\"div\");\r\n//   menuItem.classList.add(\"menu-item\");\r\n\r\n//   const foodName = document.createElement(\"h2\");\r\n//   foodName.textContent = name;\r\n\r\n//   const foodDescription = document.createElement(\"p\");\r\n//   foodDescription.textContent = description;\r\n\r\n//   const foodImage = document.createElement(\"img\");\r\n//   foodImage.src = `images/pizzas/${name.toLowerCase()}.png`;\r\n//   foodImage.alt = `${name}`;\r\n\r\n//   menuItem.appendChild(foodImage);\r\n//   menuItem.appendChild(foodName);\r\n//   menuItem.appendChild(foodDescription);\r\n\r\n//   return menuItem;\r\n// }\r\n\r\n// -----------------------------\r\n\r\n// const foods = [\r\n//   createFood(\r\n//     \"https://starwarsblog.starwars.com/wp-content/uploads/2018/07/ackbar-ice-cream-tall.jpg\",\r\n//     \"acbar ice Cream\",\r\n//     \"10CR\",\r\n//     \"acbar ice cream\"\r\n//   ),\r\n//   createFood(\r\n//     \"https://starwarsblog.starwars.com/wp-content/uploads/2019/06/corellian-coffee-tall.jpg\",\r\n//     \"corellian coffee\",\r\n//     \"4CR\",\r\n//     \"corellian coffee\"\r\n//   ),\r\n//   createFood(\r\n//     \"https://starwarsblog.starwars.com/wp-content/uploads/2019/03/darth-maul-quinoa-tall.jpg\",\r\n//     \"darth maul quinoa\",\r\n//     \"20CR\",\r\n//     \"darth maul quinoa\"\r\n//   ),\r\n//   createFood(\r\n//     \"https://starwarsblog.starwars.com/wp-content/uploads/2018/10/ewok-cookies-tall.jpg\",\r\n//     \"ewok cookies\",\r\n//     \"4CR\",\r\n//     \"ewok cookies\"\r\n//   ),\r\n//   createFood(\r\n//     \"https://starwarsblog.starwars.com/wp-content/uploads/2018/12/lemon-tart-tall.jpg\",\r\n//     \"lemon tart\",\r\n//     \"6CR\",\r\n//     \"lemon tart\"\r\n//   ),\r\n//   createFood(\r\n//     \"https://starwarsblog.starwars.com/wp-content/uploads/2018/03/porg-puffs-tall.jpg\",\r\n//     \"porg puffs\",\r\n//     \"12CR\",\r\n//     \"porg puffs\"\r\n//   ),\r\n//   createFood(\r\n//     \"https://starwarsblog.starwars.com/wp-content/uploads/2019/08/sith-trooper-float-tall-b.jpg\",\r\n//     \"sith trooper root beer\",\r\n//     \"9CR\",\r\n//     \"sith trooper root beer\"\r\n//   ),\r\n//   createFood(\r\n//     \"https://starwarsblog.starwars.com/wp-content/uploads/2019/06/vader-peanut-butter-blossoms-tall.jpg\",\r\n//     \"vader peanut butter blossoms\",\r\n//     \"20CR\",\r\n//     \"vader peanut butter blossoms\"\r\n//   ),\r\n// ];\r\n\r\n// foods.forEach((food) => {\r\n//   content.appendChild(food);\r\n// });\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;