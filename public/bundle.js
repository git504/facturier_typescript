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

/***/ "./src/classes/Datas.ts":
/*!******************************!*\
  !*** ./src/classes/Datas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Datas\": () => (/* binding */ Datas)\n/* harmony export */ });\nclass Datas {\n    constructor(documentType, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date) {\n        this.documentType = documentType;\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.address = address;\n        this.country = country;\n        this.town = town;\n        this.zip = zip;\n        this.product = product;\n        this.price = price;\n        this.quantity = quantity;\n        this.tva = tva;\n        this.date = date;\n    }\n    subtotal(price, quantity, tva) {\n        const tvaPercent = tva / 100;\n        const totalTva = price * tvaPercent;\n        return price * totalTva * quantity;\n    }\n    htmlFormat() {\n        const totalePrice = this.subtotal(this.price, this.quantity, this.tva);\n        return `\n<div class=\"row p-5\">\n      <div class=\"col-md-6\">\n    <h2 class=\"text-left\">LOGO</h2>\n     </div>\n\n<div class=\"col-md-6 text-right\">\n    <p class=\"font-weight-bold mb-1\">${this.documentType === \"invoice\" ? \"Facture\" : \"Devis\"}<span class=\"font-weight-normal\"> </span></p>\n    <p class=\"font-weight-bold mb-1\">${this.date.toLocaleDateString()} <span class=\"font-weight-normal\">${Math.floor(Math.random()) * 101}</span></p>\n</div>\n</div>\n\n<div class=\"row pb-5 p-5\">\n<div class=\"col-sm-6 text-left\">\n    <p class=\"font-weight-bold\">Entreprise de Toto</p>\n    <p class=\"mb-1\">22 boulevard Moe Szyslak</p>\n    <p>75008 - Paris</p>\n    <p class=\"mb-1\">Tél: 00.00.00.00.00</p>\n</div>\n\n<div class=\"col-sm-6 text-right\">\n    <p class=\"font-weight-bold\">Informations du client</p>\n    <p class=\"mb-1\">Mr/Mme ${this.firstName} ${this.lastName}</p>\n    <p class=\"mb-1\">${this.address}</p>\n    <p>${this.zip}</p>\n    <p>${this.town}</p>\n    <p>${this.country}</p>\n</div>\n</div>\n\n<div class=\"row p-5\">\n<div class=\"col-md-12\">\n    <table class=\"table\">\n    <thead>\n        <tr>\n        <th class=\"border-0 text-uppercase small font-weight-bold\">Produit/Service</th>\n        <th class=\"border-0 text-uppercase small font-weight-bold\">Prix unitaire HT</th>\n        <th class=\"border-0 text-uppercase small font-weight-bold\">Quantité</th>\n        <th class=\"border-0 text-uppercase small font-weight-bold\">Total HT</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n        <td>${this.product}</td>\n        <td>${this.price} € HT</td>\n        <td>${this.quantity}</td>\n        <td>${this.price * this.quantity} € HT</td>\n        </tr>\n    </tbody>\n    </table>\n</div>\n</div>\n\n<div class=\"d-flex flex-row-reverse bg-light p-4\">\n<div class=\"py-3 px-5\">\n    <div class=\"mb-2\">TOTAL TTC</div>\n    <div class=\"h2 font-weight-light\">${totalePrice.toFixed(2)} €</div>\n</div>\n</div>`;\n    }\n}\n\n\n//# sourceURL=webpack://facturier_typescript/./src/classes/Datas.ts?");

/***/ }),

/***/ "./src/classes/Display.ts":
/*!********************************!*\
  !*** ./src/classes/Display.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Display\": () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Storage */ \"./src/classes/Storage.ts\");\n\nclass Display {\n    constructor(container, hiddenDiv, btnPrint) {\n        this.container = container;\n        this.hiddenDiv = hiddenDiv;\n        this.btnPrint = btnPrint;\n        this.formContainer = document.getElementById(\"form-container\");\n    }\n    render(docObj, docType) {\n        const htmlString = docObj.htmlFormat();\n        this.container.innerHTML = htmlString;\n        new _classes_Storage__WEBPACK_IMPORTED_MODULE_0__.Storage(docType, htmlString);\n        if (docType === \"invoice\") {\n            this.btnPrint.innerText = \"Imprimer la Facture\";\n        }\n        else {\n            this.btnPrint.innerText = \"Imprimer le Devis\";\n        }\n        this.hiddenDiv.classList.remove(\"invisible\");\n        this.formContainer.innerHTML = \"\";\n    }\n}\n\n\n//# sourceURL=webpack://facturier_typescript/./src/classes/Display.ts?");

/***/ }),

/***/ "./src/classes/FormInputs.ts":
/*!***********************************!*\
  !*** ./src/classes/FormInputs.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormInput\": () => (/* binding */ FormInput)\n/* harmony export */ });\n/* harmony import */ var _classes_Datas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Datas */ \"./src/classes/Datas.ts\");\n/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display */ \"./src/classes/Display.ts\");\n/* harmony import */ var _Print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Print */ \"./src/classes/Print.ts\");\n/* harmony import */ var _decorators_Bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators/Bind */ \"./src/decorators/Bind.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n\nclass FormInput {\n    constructor() {\n        this.form = document.getElementById(\"form\");\n        this.type = document.getElementById(\"type\");\n        this.firstName = document.getElementById(\"type\");\n        this.lastName = document.getElementById(\"lastName\");\n        this.address = document.getElementById(\"address\");\n        this.country = document.getElementById(\"country\");\n        this.town = document.getElementById(\"town\");\n        this.zip = document.getElementById(\"zip\");\n        this.product = document.getElementById(\"product\");\n        this.price = document.getElementById(\"price\");\n        this.quantity = document.getElementById(\"quantity\");\n        this.tva = document.getElementById(\"tva\");\n        this.docContainer = document.getElementById(\"document-container\");\n        this.hiddenDiv = document.getElementById(\"hiddenDiv\");\n        this.storedE1 = document.getElementById(\"stored-data\");\n        this.btnPrint = document.getElementById(\"print\");\n        this.btnReload = document.getElementById(\"reload\");\n        this.btnStoredInvoices = document.getElementById(\"stored-invoices\");\n        this.btnStoredEstimates = document.getElementById(\"stored-estimates\");\n        this.submitFormListeners();\n        this.printListener(this.btnPrint, this.docContainer);\n        this.deleteListener(this.btnReload);\n        this.getStoredDocsListener();\n    }\n    submitFormListeners() {\n        this.form.addEventListener(\"submit\", this.handleFormSubmit);\n    }\n    printListener(btn, docContainer) {\n        btn.addEventListener(\"click\", () => {\n            let availableDoc;\n            availableDoc = new _Print__WEBPACK_IMPORTED_MODULE_2__.Print(docContainer);\n            availableDoc.print();\n        });\n    }\n    deleteListener(btn) {\n        btn.addEventListener(\"click\", () => {\n            document.location.reload();\n            window.scrollTo(0, 0);\n        });\n    }\n    getStoredDocsListener() {\n        this.btnStoredInvoices.addEventListener(\"click\", () => this.getItems(\"invoice\"));\n        this.btnStoredEstimates.addEventListener(\"click\", () => this.getItems(\"estimate\"));\n    }\n    getItems(doctype) {\n        if (this.storedE1.hasChildNodes()) {\n            this.storedE1.innerHTML = \"\";\n        }\n        if (localStorage.getItem(doctype)) {\n            let array;\n            array = localStorage.getItem(doctype);\n            if (array != null && array.length > 2) {\n                let arrayData;\n                arrayData = JSON.parse(array);\n                arrayData.map((doc) => {\n                    let card = document.createElement(\"div\");\n                    let cardBody = document.createElement(\"div\");\n                    let cardClasses = [\"card\", \"mt-5\"];\n                    let cardBodyClasses = \"cardB-body\";\n                    card.classList.add(...cardClasses);\n                    cardBody.classList.add(cardBodyClasses);\n                    cardBody.innerHTML = doc;\n                    card.append(cardBody);\n                    this.storedE1.append(card);\n                });\n            }\n            else {\n                this.storedE1.innerHTML =\n                    '<div class=\"p-5\">Aucune data disponnible</div>';\n            }\n        }\n    }\n    handleFormSubmit(e) {\n        e.preventDefault();\n        console.log(this);\n        const inputs = this.inputDatas();\n        if (Array.isArray(inputs)) {\n            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva,] = inputs;\n            let docData;\n            let date = new Date();\n            docData = new _classes_Datas__WEBPACK_IMPORTED_MODULE_0__.Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);\n            let template;\n            template = new _Display__WEBPACK_IMPORTED_MODULE_1__.Display(this.docContainer, this.hiddenDiv, this.btnPrint);\n            template.render(docData, type);\n        }\n    }\n    inputDatas() {\n        const type = this.type.value;\n        const firstName = this.firstName.value;\n        const lastName = this.lastName.value;\n        const address = this.address.value;\n        const country = this.country.value;\n        const town = this.town.value;\n        const zip = this.zip.valueAsNumber;\n        const product = this.product.value;\n        const price = this.price.valueAsNumber;\n        const quantity = this.quantity.valueAsNumber;\n        const tva = this.tva.valueAsNumber;\n        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {\n            return [\n                type,\n                firstName,\n                lastName,\n                address,\n                country,\n                town,\n                zip,\n                product,\n                price,\n                quantity,\n                tva,\n            ];\n        }\n        else {\n            alert(\"Les valeurs numériques doivent être > 0 !\");\n            return;\n        }\n    }\n}\n__decorate([\n    _decorators_Bind__WEBPACK_IMPORTED_MODULE_3__.bind\n], FormInput.prototype, \"handleFormSubmit\", null);\n\n\n//# sourceURL=webpack://facturier_typescript/./src/classes/FormInputs.ts?");

/***/ }),

/***/ "./src/classes/Print.ts":
/*!******************************!*\
  !*** ./src/classes/Print.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Print\": () => (/* binding */ Print)\n/* harmony export */ });\nclass Print {\n    constructor(el) {\n        this.el = el;\n    }\n    print() {\n        document.body.innerHTML = this.el.innerHTML;\n        window.print();\n        document.location.reload();\n    }\n}\n\n\n//# sourceURL=webpack://facturier_typescript/./src/classes/Print.ts?");

/***/ }),

/***/ "./src/classes/Storage.ts":
/*!********************************!*\
  !*** ./src/classes/Storage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n    constructor(typeVal, htmlString) {\n        this.oldData = [];\n        this.setItem(typeVal, htmlString);\n    }\n    static checkLocalStorage() {\n        if (localStorage.getItem(\"invoice\") === null) {\n            localStorage.setItem(\"invoice\", \"[]\");\n        }\n        if (localStorage.getItem(\"estimate\") === null) {\n            localStorage.setItem(\"estimate\", \"[]\");\n        }\n    }\n    setItem(typeVal, htmlString) {\n        let array;\n        array = localStorage.getItem(typeVal);\n        if (array !== null) {\n            this.oldData = JSON.parse(array);\n            this.oldData.push(htmlString);\n            localStorage.setItem(typeVal, JSON.stringify(this.oldData));\n        }\n        else {\n            document.location.reload();\n        }\n    }\n}\n\n\n//# sourceURL=webpack://facturier_typescript/./src/classes/Storage.ts?");

/***/ }),

/***/ "./src/decorators/Bind.ts":
/*!********************************!*\
  !*** ./src/decorators/Bind.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\nfunction bind(_target, _name, descriptor) {\n    const originalMethode = descriptor.value;\n    const newDescriptor = {\n        get() {\n            return originalMethode.bind(this);\n        },\n    };\n    return newDescriptor;\n}\n\n\n//# sourceURL=webpack://facturier_typescript/./src/decorators/Bind.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/FormInputs */ \"./src/classes/FormInputs.ts\");\n/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Storage */ \"./src/classes/Storage.ts\");\n\n\nnew _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__.FormInput();\n_classes_Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.checkLocalStorage();\n\n\n//# sourceURL=webpack://facturier_typescript/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;