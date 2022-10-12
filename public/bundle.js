/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Datas.ts":
/*!******************************!*\
  !*** ./src/classes/Datas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Datas": () => (/* binding */ Datas)
/* harmony export */ });
class Datas {
    constructor(documentType, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date) {
        this.documentType = documentType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.country = country;
        this.town = town;
        this.zip = zip;
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.tva = tva;
        this.date = date;
    }
    subtotal(price, quantity, tva) {
        const tvaPercent = tva / 100;
        const totalTva = price * tvaPercent;
        return price * totalTva * quantity;
    }
    htmlFormat() {
        const totalePrice = this.subtotal(this.price, this.quantity, this.tva);
        return `
<div class="row p-5">
      <div class="col-md-6">
    <h2 class="text-left">LOGO</h2>
     </div>

<div class="col-md-6 text-right">
    <p class="font-weight-bold mb-1">${this.documentType === "invoice" ? "Facture" : "Devis"}<span class="font-weight-normal"> </span></p>
    <p class="font-weight-bold mb-1">${this.date.toLocaleDateString()} <span class="font-weight-normal">${Math.floor(Math.random()) * 101}</span></p>
</div>
</div>

<div class="row pb-5 p-5">
<div class="col-sm-6 text-left">
    <p class="font-weight-bold">Entreprise de Toto</p>
    <p class="mb-1">22 boulevard Moe Szyslak</p>
    <p>75008 - Paris</p>
    <p class="mb-1">Tél: 00.00.00.00.00</p>
</div>

<div class="col-sm-6 text-right">
    <p class="font-weight-bold">Informations du client</p>
    <p class="mb-1">Mr/Mme ${this.firstName} ${this.lastName}</p>
    <p class="mb-1">${this.address}</p>
    <p>${this.zip}</p>
    <p>${this.town}</p>
    <p>${this.country}</p>
</div>
</div>

<div class="row p-5">
<div class="col-md-12">
    <table class="table">
    <thead>
        <tr>
        <th class="border-0 text-uppercase small font-weight-bold">Produit/Service</th>
        <th class="border-0 text-uppercase small font-weight-bold">Prix unitaire HT</th>
        <th class="border-0 text-uppercase small font-weight-bold">Quantité</th>
        <th class="border-0 text-uppercase small font-weight-bold">Total HT</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>${this.product}</td>
        <td>${this.price} € HT</td>
        <td>${this.quantity}</td>
        <td>${this.price * this.quantity} € HT</td>
        </tr>
    </tbody>
    </table>
</div>
</div>

<div class="d-flex flex-row-reverse bg-light p-4">
<div class="py-3 px-5">
    <div class="mb-2">TOTAL TTC</div>
    <div class="h2 font-weight-light">${totalePrice.toFixed(2)} €</div>
</div>
</div>`;
    }
}


/***/ }),

/***/ "./src/classes/Display.ts":
/*!********************************!*\
  !*** ./src/classes/Display.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Storage */ "./src/classes/Storage.ts");

class Display {
    constructor(container, hiddenDiv, btnPrint) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.btnPrint = btnPrint;
        this.formContainer = document.getElementById("form-container");
    }
    render(docObj, docType) {
        const htmlString = docObj.htmlFormat();
        this.container.innerHTML = htmlString;
        new _classes_Storage__WEBPACK_IMPORTED_MODULE_0__.Storage(docType, htmlString);
        if (docType === "invoice") {
            this.btnPrint.innerText = "Imprimer la Facture";
        }
        else {
            this.btnPrint.innerText = "Imprimer le Devis";
        }
        this.hiddenDiv.classList.remove("invisible");
        this.formContainer.innerHTML = "";
    }
}


/***/ }),

/***/ "./src/classes/FormInputs.ts":
/*!***********************************!*\
  !*** ./src/classes/FormInputs.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInput": () => (/* binding */ FormInput)
/* harmony export */ });
/* harmony import */ var _classes_Datas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Datas */ "./src/classes/Datas.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display */ "./src/classes/Display.ts");
/* harmony import */ var _Print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Print */ "./src/classes/Print.ts");
/* harmony import */ var _decorators_Bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators/Bind */ "./src/decorators/Bind.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class FormInput {
    constructor() {
        this.form = document.getElementById("form");
        this.type = document.getElementById("type");
        this.firstName = document.getElementById("type");
        this.lastName = document.getElementById("lastName");
        this.address = document.getElementById("address");
        this.country = document.getElementById("country");
        this.town = document.getElementById("town");
        this.zip = document.getElementById("zip");
        this.product = document.getElementById("product");
        this.price = document.getElementById("price");
        this.quantity = document.getElementById("quantity");
        this.tva = document.getElementById("tva");
        this.docContainer = document.getElementById("document-container");
        this.hiddenDiv = document.getElementById("hiddenDiv");
        this.storedE1 = document.getElementById("stored-data");
        this.btnPrint = document.getElementById("print");
        this.btnReload = document.getElementById("reload");
        this.btnStoredInvoices = document.getElementById("stored-invoices");
        this.btnStoredEstimates = document.getElementById("stored-estimates");
        this.submitFormListeners();
        this.printListener(this.btnPrint, this.docContainer);
        this.deleteListener(this.btnReload);
        this.getStoredDocsListener();
    }
    submitFormListeners() {
        this.form.addEventListener("submit", this.handleFormSubmit);
    }
    printListener(btn, docContainer) {
        btn.addEventListener("click", () => {
            let availableDoc;
            availableDoc = new _Print__WEBPACK_IMPORTED_MODULE_2__.Print(docContainer);
            availableDoc.print();
        });
    }
    deleteListener(btn) {
        btn.addEventListener("click", () => {
            document.location.reload();
            window.scrollTo(0, 0);
        });
    }
    getStoredDocsListener() {
        this.btnStoredInvoices.addEventListener("click", () => this.getItems("invoice"));
        this.btnStoredEstimates.addEventListener("click", () => this.getItems("estimate"));
    }
    getItems(doctype) {
        if (this.storedE1.hasChildNodes()) {
            this.storedE1.innerHTML = "";
        }
        if (localStorage.getItem(doctype)) {
            let array;
            array = localStorage.getItem(doctype);
            if (array != null && array.length > 2) {
                let arrayData;
                arrayData = JSON.parse(array);
                arrayData.map((doc) => {
                    let card = document.createElement("div");
                    let cardBody = document.createElement("div");
                    let cardClasses = ["card", "mt-5"];
                    let cardBodyClasses = "cardB-body";
                    card.classList.add(...cardClasses);
                    cardBody.classList.add(cardBodyClasses);
                    cardBody.innerHTML = doc;
                    card.append(cardBody);
                    this.storedE1.append(card);
                });
            }
            else {
                this.storedE1.innerHTML =
                    '<div class="p-5">Aucune data disponnible</div>';
            }
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this);
        const inputs = this.inputDatas();
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva,] = inputs;
            let docData;
            let date = new Date();
            docData = new _classes_Datas__WEBPACK_IMPORTED_MODULE_0__.Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);
            let template;
            template = new _Display__WEBPACK_IMPORTED_MODULE_1__.Display(this.docContainer, this.hiddenDiv, this.btnPrint);
            template.render(docData, type);
        }
    }
    inputDatas() {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const address = this.address.value;
        const country = this.country.value;
        const town = this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [
                type,
                firstName,
                lastName,
                address,
                country,
                town,
                zip,
                product,
                price,
                quantity,
                tva,
            ];
        }
        else {
            alert("Les valeurs numériques doivent être > 0 !");
            return;
        }
    }
}
__decorate([
    _decorators_Bind__WEBPACK_IMPORTED_MODULE_3__.bind
], FormInput.prototype, "handleFormSubmit", null);


/***/ }),

/***/ "./src/classes/Print.ts":
/*!******************************!*\
  !*** ./src/classes/Print.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Print": () => (/* binding */ Print)
/* harmony export */ });
class Print {
    constructor(el) {
        this.el = el;
    }
    print() {
        document.body.innerHTML = this.el.innerHTML;
        window.print();
        document.location.reload();
    }
}


/***/ }),

/***/ "./src/classes/Storage.ts":
/*!********************************!*\
  !*** ./src/classes/Storage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
class Storage {
    constructor(typeVal, htmlString) {
        this.oldData = [];
        this.setItem(typeVal, htmlString);
    }
    static checkLocalStorage() {
        if (localStorage.getItem("invoice") === null) {
            localStorage.setItem("invoice", "[]");
        }
        if (localStorage.getItem("estimate") === null) {
            localStorage.setItem("estimate", "[]");
        }
    }
    setItem(typeVal, htmlString) {
        let array;
        array = localStorage.getItem(typeVal);
        if (array !== null) {
            this.oldData = JSON.parse(array);
            this.oldData.push(htmlString);
            localStorage.setItem(typeVal, JSON.stringify(this.oldData));
        }
        else {
            document.location.reload();
        }
    }
}


/***/ }),

/***/ "./src/decorators/Bind.ts":
/*!********************************!*\
  !*** ./src/decorators/Bind.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bind": () => (/* binding */ bind)
/* harmony export */ });
function bind(_target, _name, descriptor) {
    const originalMethode = descriptor.value;
    const newDescriptor = {
        get() {
            return originalMethode.bind(this);
        },
    };
    return newDescriptor;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/FormInputs */ "./src/classes/FormInputs.ts");
/* harmony import */ var _classes_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Storage */ "./src/classes/Storage.ts");


new _classes_FormInputs__WEBPACK_IMPORTED_MODULE_0__.FormInput();
_classes_Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.checkLocalStorage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNMO0FBQzVDLElBQUksMERBQVMsRUFBRSxDQUFDO0FBQ2hCLHVFQUF5QixFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWN0dXJpZXJfdHlwZXNjcmlwdC8uL3NyYy9jbGFzc2VzL0RhdGFzLnRzIiwid2VicGFjazovL2ZhY3R1cmllcl90eXBlc2NyaXB0Ly4vc3JjL2NsYXNzZXMvRGlzcGxheS50cyIsIndlYnBhY2s6Ly9mYWN0dXJpZXJfdHlwZXNjcmlwdC8uL3NyYy9jbGFzc2VzL0Zvcm1JbnB1dHMudHMiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyX3R5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9QcmludC50cyIsIndlYnBhY2s6Ly9mYWN0dXJpZXJfdHlwZXNjcmlwdC8uL3NyYy9jbGFzc2VzL1N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyX3R5cGVzY3JpcHQvLi9zcmMvZGVjb3JhdG9ycy9CaW5kLnRzIiwid2VicGFjazovL2ZhY3R1cmllcl90eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZhY3R1cmllcl90eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mYWN0dXJpZXJfdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZhY3R1cmllcl90eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmFjdHVyaWVyX3R5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzSHRtbEZvcm1hdCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc0h0bWxGb3JtYXRcIjtcblxuZXhwb3J0IGNsYXNzIERhdGFzIGltcGxlbWVudHMgSGFzSHRtbEZvcm1hdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZG9jdW1lbnRUeXBlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBmaXJzdE5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIGxhc3ROYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBhZGRyZXNzOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBjb3VudHJ5OiBzdHJpbmcsXG4gICAgcHJpdmF0ZSB0b3duOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSB6aXA6IG51bWJlcixcbiAgICBwcml2YXRlIHByb2R1Y3Q6IHN0cmluZyxcbiAgICBwcml2YXRlIHByaWNlOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBxdWFudGl0eTogbnVtYmVyLFxuICAgIHByaXZhdGUgdHZhOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBkYXRlOiBEYXRlXG4gICkge31cblxuICBwcml2YXRlIHN1YnRvdGFsKHByaWNlOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIsIHR2YTogbnVtYmVyKSB7XG4gICAgY29uc3QgdHZhUGVyY2VudCA9IHR2YSAvIDEwMDsgLy8gMjAlID0gMC4yXG4gICAgY29uc3QgdG90YWxUdmEgPSBwcmljZSAqIHR2YVBlcmNlbnQ7XG4gICAgcmV0dXJuIHByaWNlICogdG90YWxUdmEgKiBxdWFudGl0eTtcbiAgfVxuXG4gIGh0bWxGb3JtYXQoKSB7XG4gICAgY29uc3QgdG90YWxlUHJpY2UgPSB0aGlzLnN1YnRvdGFsKHRoaXMucHJpY2UsIHRoaXMucXVhbnRpdHksIHRoaXMudHZhKTtcblxuICAgIHJldHVybiBgXG48ZGl2IGNsYXNzPVwicm93IHAtNVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgPGgyIGNsYXNzPVwidGV4dC1sZWZ0XCI+TE9HTzwvaDI+XG4gICAgIDwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLW1kLTYgdGV4dC1yaWdodFwiPlxuICAgIDxwIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZCBtYi0xXCI+JHtcbiAgICAgIHRoaXMuZG9jdW1lbnRUeXBlID09PSBcImludm9pY2VcIiA/IFwiRmFjdHVyZVwiIDogXCJEZXZpc1wiXG4gICAgfTxzcGFuIGNsYXNzPVwiZm9udC13ZWlnaHQtbm9ybWFsXCI+IDwvc3Bhbj48L3A+XG4gICAgPHAgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIG1iLTFcIj4ke3RoaXMuZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX0gPHNwYW4gY2xhc3M9XCJmb250LXdlaWdodC1ub3JtYWxcIj4ke1xuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKSAqIDEwMVxuICAgIH08L3NwYW4+PC9wPlxuPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInJvdyBwYi01IHAtNVwiPlxuPGRpdiBjbGFzcz1cImNvbC1zbS02IHRleHQtbGVmdFwiPlxuICAgIDxwIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkVudHJlcHJpc2UgZGUgVG90bzwvcD5cbiAgICA8cCBjbGFzcz1cIm1iLTFcIj4yMiBib3VsZXZhcmQgTW9lIFN6eXNsYWs8L3A+XG4gICAgPHA+NzUwMDggLSBQYXJpczwvcD5cbiAgICA8cCBjbGFzcz1cIm1iLTFcIj5Uw6lsOiAwMC4wMC4wMC4wMC4wMDwvcD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLXNtLTYgdGV4dC1yaWdodFwiPlxuICAgIDxwIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkluZm9ybWF0aW9ucyBkdSBjbGllbnQ8L3A+XG4gICAgPHAgY2xhc3M9XCJtYi0xXCI+TXIvTW1lICR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX08L3A+XG4gICAgPHAgY2xhc3M9XCJtYi0xXCI+JHt0aGlzLmFkZHJlc3N9PC9wPlxuICAgIDxwPiR7dGhpcy56aXB9PC9wPlxuICAgIDxwPiR7dGhpcy50b3dufTwvcD5cbiAgICA8cD4ke3RoaXMuY291bnRyeX08L3A+XG48L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwicm93IHAtNVwiPlxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgIDx0aCBjbGFzcz1cImJvcmRlci0wIHRleHQtdXBwZXJjYXNlIHNtYWxsIGZvbnQtd2VpZ2h0LWJvbGRcIj5Qcm9kdWl0L1NlcnZpY2U8L3RoPlxuICAgICAgICA8dGggY2xhc3M9XCJib3JkZXItMCB0ZXh0LXVwcGVyY2FzZSBzbWFsbCBmb250LXdlaWdodC1ib2xkXCI+UHJpeCB1bml0YWlyZSBIVDwvdGg+XG4gICAgICAgIDx0aCBjbGFzcz1cImJvcmRlci0wIHRleHQtdXBwZXJjYXNlIHNtYWxsIGZvbnQtd2VpZ2h0LWJvbGRcIj5RdWFudGl0w6k8L3RoPlxuICAgICAgICA8dGggY2xhc3M9XCJib3JkZXItMCB0ZXh0LXVwcGVyY2FzZSBzbWFsbCBmb250LXdlaWdodC1ib2xkXCI+VG90YWwgSFQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgIDx0ZD4ke3RoaXMucHJvZHVjdH08L3RkPlxuICAgICAgICA8dGQ+JHt0aGlzLnByaWNlfSDigqwgSFQ8L3RkPlxuICAgICAgICA8dGQ+JHt0aGlzLnF1YW50aXR5fTwvdGQ+XG4gICAgICAgIDx0ZD4ke3RoaXMucHJpY2UgKiB0aGlzLnF1YW50aXR5fSDigqwgSFQ8L3RkPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1yb3ctcmV2ZXJzZSBiZy1saWdodCBwLTRcIj5cbjxkaXYgY2xhc3M9XCJweS0zIHB4LTVcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWItMlwiPlRPVEFMIFRUQzwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJoMiBmb250LXdlaWdodC1saWdodFwiPiR7dG90YWxlUHJpY2UudG9GaXhlZCgyKX0g4oKsPC9kaXY+XG48L2Rpdj5cbjwvZGl2PmA7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhhc1JlbmRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc1JlbmRlclwiO1xuaW1wb3J0IHsgSGFzSHRtbEZvcm1hdCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc0h0bWxGb3JtYXRcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy9TdG9yYWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBEaXNwbGF5IGltcGxlbWVudHMgSGFzUmVuZGVyIHtcbiAgZm9ybUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxuICAgIHByaXZhdGUgaGlkZGVuRGl2OiBIVE1MRGl2RWxlbWVudCxcbiAgICBwcml2YXRlIGJ0blByaW50OiBIVE1MQnV0dG9uRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZm9ybS1jb250YWluZXJcIlxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cblxuICByZW5kZXIoZG9jT2JqOiBIYXNIdG1sRm9ybWF0LCBkb2NUeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBodG1sU3RyaW5nOiBzdHJpbmcgPSBkb2NPYmouaHRtbEZvcm1hdCgpO1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG5cbiAgICBuZXcgU3RvcmFnZShkb2NUeXBlLCBodG1sU3RyaW5nKTtcblxuICAgIGlmIChkb2NUeXBlID09PSBcImludm9pY2VcIikge1xuICAgICAgdGhpcy5idG5QcmludC5pbm5lclRleHQgPSBcIkltcHJpbWVyIGxhIEZhY3R1cmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idG5QcmludC5pbm5lclRleHQgPSBcIkltcHJpbWVyIGxlIERldmlzXCI7XG4gICAgfVxuICAgIHRoaXMuaGlkZGVuRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgdGhpcy5mb3JtQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFzIH0gZnJvbSBcIi4uL2NsYXNzZXMvRGF0YXNcIjtcbmltcG9ydCB7IEhhc0h0bWxGb3JtYXQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9IYXNIdG1sRm9ybWF0XCI7XG5pbXBvcnQgeyBIYXNSZW5kZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9IYXNSZW5kZXJcIjtcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9EaXNwbGF5XCI7XG5pbXBvcnQgeyBIYXNQcmludCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc1ByaW50XCI7XG5pbXBvcnQgeyBQcmludCB9IGZyb20gXCIuL1ByaW50XCI7XG5pbXBvcnQgeyBiaW5kIH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvQmluZFwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybUlucHV0IHtcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xuICB0eXBlOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgZmlyc3ROYW1lOiBIVE1MSW5wdXRFbGVtZW50O1xuICBsYXN0TmFtZTogSFRNTElucHV0RWxlbWVudDtcbiAgYWRkcmVzczogSFRNTElucHV0RWxlbWVudDtcbiAgY291bnRyeTogSFRNTElucHV0RWxlbWVudDtcbiAgdG93bjogSFRNTElucHV0RWxlbWVudDtcbiAgemlwOiBIVE1MSW5wdXRFbGVtZW50O1xuICBwcm9kdWN0OiBIVE1MSW5wdXRFbGVtZW50O1xuICBwcmljZTogSFRNTElucHV0RWxlbWVudDtcbiAgcXVhbnRpdHk6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHR2YTogSFRNTElucHV0RWxlbWVudDtcbiAgZG9jQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgaGlkZGVuRGl2OiBIVE1MRGl2RWxlbWVudDtcbiAgYnRuUHJpbnQ6IEhUTUxCdXR0b25FbGVtZW50O1xuICBidG5SZWxvYWQ6IEhUTUxCdXR0b25FbGVtZW50O1xuICBidG5TdG9yZWRJbnZvaWNlczogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGJ0blN0b3JlZEVzdGltYXRlczogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHN0b3JlZEUxOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIHRoaXMudHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMubGFzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhc3ROYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5hZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRyZXNzXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5jb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudHJ5XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy50b3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3duXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy56aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInppcFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMucHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMucHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaWNlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5xdWFudGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVhbnRpdHlcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLnR2YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHZhXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5kb2NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiZG9jdW1lbnQtY29udGFpbmVyXCJcbiAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIHRoaXMuaGlkZGVuRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRkZW5EaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgdGhpcy5zdG9yZWRFMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcmVkLWRhdGFcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAvLyBidG5cbiAgICB0aGlzLmJ0blByaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmludFwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB0aGlzLmJ0blJlbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVsb2FkXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuYnRuU3RvcmVkSW52b2ljZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwic3RvcmVkLWludm9pY2VzXCJcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHRoaXMuYnRuU3RvcmVkRXN0aW1hdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcInN0b3JlZC1lc3RpbWF0ZXNcIlxuICAgICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICAvLyBMaXN0ZW5lclxuICAgIHRoaXMuc3VibWl0Rm9ybUxpc3RlbmVycygpO1xuICAgIHRoaXMucHJpbnRMaXN0ZW5lcih0aGlzLmJ0blByaW50LCB0aGlzLmRvY0NvbnRhaW5lcik7XG4gICAgdGhpcy5kZWxldGVMaXN0ZW5lcih0aGlzLmJ0blJlbG9hZCk7XG4gICAgdGhpcy5nZXRTdG9yZWREb2NzTGlzdGVuZXIoKTtcbiAgfVxuXG4gIC8vTGlzdGVuZXJzXG5cbiAgLy8gcHJpdmF0ZSBzdWJtaXRGb3JtTGlzdGVuZXJzKCk6IHZvaWQge1xuICAvLyAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuaGFuZGxlRm9ybVN1Ym1pdC5iaW5kKHRoaXMpKTtcbiAgLy8gfVxuXG4gIHByaXZhdGUgc3VibWl0Rm9ybUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLmhhbmRsZUZvcm1TdWJtaXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmludExpc3RlbmVyKGJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQsIGRvY0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCBhdmFpbGFibGVEb2M6IEhhc1ByaW50O1xuICAgICAgYXZhaWxhYmxlRG9jID0gbmV3IFByaW50KGRvY0NvbnRhaW5lcik7XG4gICAgICBhdmFpbGFibGVEb2MucHJpbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlTGlzdGVuZXIoYnRuOiBIVE1MQnV0dG9uRWxlbWVudCkge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFN0b3JlZERvY3NMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAvLyB0aGlzLmJ0blN0b3JlZEludm9pY2VzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgLy8gICBcImNsaWNrXCIsXG4gICAgLy8gICB0aGlzLmdldEl0ZW1zLmJpbmQodGhpcywgXCJpbnZvaWNlXCIpXG4gICAgLy8gKTtcblxuICAgIC8vIHRoaXMuYnRuU3RvcmVkRXN0aW1hdGVzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgLy8gICBcImNsaWNrXCIsXG4gICAgLy8gICB0aGlzLmdldEl0ZW1zLmJpbmQodGhpcywgXCJlc3RpbWF0ZVwiKVxuICAgIC8vICk7XG4gICAgdGhpcy5idG5TdG9yZWRJbnZvaWNlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuZ2V0SXRlbXMoXCJpbnZvaWNlXCIpXG4gICAgKTtcblxuICAgIHRoaXMuYnRuU3RvcmVkRXN0aW1hdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgdGhpcy5nZXRJdGVtcyhcImVzdGltYXRlXCIpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SXRlbXMoZG9jdHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc3RvcmVkRTEuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICB0aGlzLnN0b3JlZEUxLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRvY3R5cGUpKSB7XG4gICAgICBsZXQgYXJyYXk6IHN0cmluZyB8IG51bGw7XG4gICAgICBhcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRvY3R5cGUpO1xuXG4gICAgICBpZiAoYXJyYXkgIT0gbnVsbCAmJiBhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgICAgIGxldCBhcnJheURhdGE6IHN0cmluZ1tdO1xuICAgICAgICBhcnJheURhdGEgPSBKU09OLnBhcnNlKGFycmF5KTtcbiAgICAgICAgYXJyYXlEYXRhLm1hcCgoZG9jOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgICBsZXQgY2FyZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGxldCBjYXJkQm9keTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGxldCBjYXJkQ2xhc3NlczogQXJyYXk8c3RyaW5nPiA9IFtcImNhcmRcIiwgXCJtdC01XCJdO1xuICAgICAgICAgIGxldCBjYXJkQm9keUNsYXNzZXM6IHN0cmluZyA9IFwiY2FyZEItYm9keVwiO1xuICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCguLi5jYXJkQ2xhc3Nlcyk7XG4gICAgICAgICAgY2FyZEJvZHkuY2xhc3NMaXN0LmFkZChjYXJkQm9keUNsYXNzZXMpO1xuICAgICAgICAgIGNhcmRCb2R5LmlubmVySFRNTCA9IGRvYztcbiAgICAgICAgICBjYXJkLmFwcGVuZChjYXJkQm9keSk7XG4gICAgICAgICAgdGhpcy5zdG9yZWRFMS5hcHBlbmQoY2FyZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9yZWRFMS5pbm5lckhUTUwgPVxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwicC01XCI+QXVjdW5lIGRhdGEgZGlzcG9ubmlibGU8L2Rpdj4nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBiaW5kXG4gIHByaXZhdGUgaGFuZGxlRm9ybVN1Ym1pdChlOiBFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTsgLy8gZm9ybWlucHV0c1xuXG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5pbnB1dERhdGFzKCk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dHMpKSB7XG4gICAgICBjb25zdCBbXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIGNvdW50cnksXG4gICAgICAgIHRvd24sXG4gICAgICAgIHppcCxcbiAgICAgICAgcHJvZHVjdCxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIHF1YW50aXR5LFxuICAgICAgICB0dmEsXG4gICAgICBdID0gaW5wdXRzO1xuXG4gICAgICBsZXQgZG9jRGF0YTogSGFzSHRtbEZvcm1hdDtcbiAgICAgIGxldCBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgZG9jRGF0YSA9IG5ldyBEYXRhcyhcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgY291bnRyeSxcbiAgICAgICAgdG93bixcbiAgICAgICAgemlwLFxuICAgICAgICBwcm9kdWN0LFxuICAgICAgICBwcmljZSxcbiAgICAgICAgcXVhbnRpdHksXG4gICAgICAgIHR2YSxcbiAgICAgICAgZGF0ZVxuICAgICAgKTtcbiAgICAgIGxldCB0ZW1wbGF0ZTogSGFzUmVuZGVyO1xuICAgICAgdGVtcGxhdGUgPSBuZXcgRGlzcGxheSh0aGlzLmRvY0NvbnRhaW5lciwgdGhpcy5oaWRkZW5EaXYsIHRoaXMuYnRuUHJpbnQpO1xuICAgICAgdGVtcGxhdGUucmVuZGVyKGRvY0RhdGEsIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5wdXREYXRhcygpOlxuICAgIHwgW1xuICAgICAgICBzdHJpbmcsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICBzdHJpbmcsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICBudW1iZXIsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgbnVtYmVyLFxuICAgICAgICBudW1iZXIsXG4gICAgICAgIG51bWJlclxuICAgICAgXVxuICAgIHwgdm9pZCB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZS52YWx1ZTtcbiAgICBjb25zdCBmaXJzdE5hbWUgPSB0aGlzLmZpcnN0TmFtZS52YWx1ZTtcbiAgICBjb25zdCBsYXN0TmFtZSA9IHRoaXMubGFzdE5hbWUudmFsdWU7XG4gICAgY29uc3QgYWRkcmVzcyA9IHRoaXMuYWRkcmVzcy52YWx1ZTtcbiAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5jb3VudHJ5LnZhbHVlO1xuICAgIGNvbnN0IHRvd24gPSB0aGlzLnRvd24udmFsdWU7XG4gICAgY29uc3QgemlwID0gdGhpcy56aXAudmFsdWVBc051bWJlcjtcbiAgICBjb25zdCBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0LnZhbHVlO1xuICAgIGNvbnN0IHByaWNlID0gdGhpcy5wcmljZS52YWx1ZUFzTnVtYmVyO1xuICAgIGNvbnN0IHF1YW50aXR5ID0gdGhpcy5xdWFudGl0eS52YWx1ZUFzTnVtYmVyO1xuICAgIGNvbnN0IHR2YSA9IHRoaXMudHZhLnZhbHVlQXNOdW1iZXI7XG5cbiAgICBpZiAoemlwID4gMCAmJiBwcmljZSA+IDAgJiYgcXVhbnRpdHkgPiAwICYmIHR2YSA+IDApIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIGNvdW50cnksXG4gICAgICAgIHRvd24sXG4gICAgICAgIHppcCxcbiAgICAgICAgcHJvZHVjdCxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIHF1YW50aXR5LFxuICAgICAgICB0dmEsXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIkxlcyB2YWxldXJzIG51bcOpcmlxdWVzIGRvaXZlbnQgw6p0cmUgPiAwICFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBIYXNQcmludCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc1ByaW50XCI7XG5cbmV4cG9ydCBjbGFzcyBQcmludCBpbXBsZW1lbnRzIEhhc1ByaW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogSFRNTERpdkVsZW1lbnQpIHt9XG5cbiAgcHJpbnQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB3aW5kb3cucHJpbnQoKTtcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGFzU2V0SXRlbSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc1NldEl0ZW1cIjtcblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2UgaW1wbGVtZW50cyBIYXNTZXRJdGVtIHtcbiAgb2xkRGF0YTogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0eXBlVmFsOiBzdHJpbmcsIGh0bWxTdHJpbmc6IHN0cmluZykge1xuICAgIHRoaXMuc2V0SXRlbSh0eXBlVmFsLCBodG1sU3RyaW5nKTtcbiAgfVxuICBzdGF0aWMgY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW52b2ljZVwiKSA9PT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbnZvaWNlXCIsIFwiW11cIik7XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXN0aW1hdGVcIikgPT09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXN0aW1hdGVcIiwgXCJbXVwiKTtcbiAgICB9XG4gIH1cblxuICBzZXRJdGVtKHR5cGVWYWw6IHN0cmluZywgaHRtbFN0cmluZzogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGFycmF5OiBzdHJpbmcgfCBudWxsO1xuICAgIGFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odHlwZVZhbCk7XG4gICAgaWYgKGFycmF5ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9sZERhdGEgPSBKU09OLnBhcnNlKGFycmF5KTtcbiAgICAgIHRoaXMub2xkRGF0YS5wdXNoKGh0bWxTdHJpbmcpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZVZhbCwgSlNPTi5zdHJpbmdpZnkodGhpcy5vbGREYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gTWV0aG9kZSBkZWNvcmF0b3JcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQoXG4gIF90YXJnZXQ6IGFueSxcbiAgX25hbWU6IHN0cmluZyxcbiAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yXG4pIHtcbiAgY29uc3Qgb3JpZ2luYWxNZXRob2RlID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgY29uc3QgbmV3RGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0ge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbE1ldGhvZGUuYmluZCh0aGlzKTtcbiAgICB9LFxuICB9O1xuICByZXR1cm4gbmV3RGVzY3JpcHRvcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRm9ybUlucHV0IH0gZnJvbSBcIi4vY2xhc3Nlcy9Gb3JtSW5wdXRzXCI7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vY2xhc3Nlcy9TdG9yYWdlXCI7XG5uZXcgRm9ybUlucHV0KCk7XG5TdG9yYWdlLmNoZWNrTG9jYWxTdG9yYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=