(() => {
  "use strict";
  class t {
    constructor(t, e, n, s, i, o, r, a, d, l, c, h) {
      (this.documentType = t),
        (this.firstName = e),
        (this.lastName = n),
        (this.address = s),
        (this.country = i),
        (this.town = o),
        (this.zip = r),
        (this.product = a),
        (this.price = d),
        (this.quantity = l),
        (this.tva = c),
        (this.date = h);
    }
    subtotal(t, e, n) {
      return t * (t * (n / 100)) * e;
    }
    htmlFormat() {
      const t = this.subtotal(this.price, this.quantity, this.tva);
      return `\n<div class="row p-5">\n      <div class="col-md-6">\n    <h2 class="text-left">LOGO</h2>\n     </div>\n\n<div class="col-md-6 text-right">\n    <p class="font-weight-bold mb-1">${
        "invoice" === this.documentType ? "Facture" : "Devis"
      }<span class="font-weight-normal"> </span></p>\n    <p class="font-weight-bold mb-1">${this.date.toLocaleDateString()} <span class="font-weight-normal">${
        101 * Math.floor(Math.random())
      }</span></p>\n</div>\n</div>\n\n<div class="row pb-5 p-5">\n<div class="col-sm-6 text-left">\n    <p class="font-weight-bold">Entreprise de Toto</p>\n    <p class="mb-1">22 boulevard Moe Szyslak</p>\n    <p>75008 - Paris</p>\n    <p class="mb-1">Tél: 00.00.00.00.00</p>\n</div>\n\n<div class="col-sm-6 text-right">\n    <p class="font-weight-bold">Informations du client</p>\n    <p class="mb-1">Mr/Mme ${
        this.firstName
      } ${this.lastName}</p>\n    <p class="mb-1">${this.address}</p>\n    <p>${
        this.zip
      }</p>\n    <p>${this.town}</p>\n    <p>${
        this.country
      }</p>\n</div>\n</div>\n\n<div class="row p-5">\n<div class="col-md-12">\n    <table class="table">\n    <thead>\n        <tr>\n        <th class="border-0 text-uppercase small font-weight-bold">Produit/Service</th>\n        <th class="border-0 text-uppercase small font-weight-bold">Prix unitaire HT</th>\n        <th class="border-0 text-uppercase small font-weight-bold">Quantité</th>\n        <th class="border-0 text-uppercase small font-weight-bold">Total HT</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n        <td>${
        this.product
      }</td>\n        <td>${this.price} € HT</td>\n        <td>${
        this.quantity
      }</td>\n        <td>${
        this.price * this.quantity
      } € HT</td>\n        </tr>\n    </tbody>\n    </table>\n</div>\n</div>\n\n<div class="d-flex flex-row-reverse bg-light p-4">\n<div class="py-3 px-5">\n    <div class="mb-2">TOTAL TTC</div>\n    <div class="h2 font-weight-light">${t.toFixed(
        2
      )} €</div>\n</div>\n</div>`;
    }
  }
  class e {
    constructor(t, e) {
      (this.oldData = []), this.setItem(t, e);
    }
    static checkLocalStorage() {
      null === localStorage.getItem("invoice") &&
        localStorage.setItem("invoice", "[]"),
        null === localStorage.getItem("estimate") &&
          localStorage.setItem("estimate", "[]");
    }
    setItem(t, e) {
      let n;
      (n = localStorage.getItem(t)),
        null !== n
          ? ((this.oldData = JSON.parse(n)),
            this.oldData.push(e),
            localStorage.setItem(t, JSON.stringify(this.oldData)))
          : document.location.reload();
    }
  }
  class n {
    constructor(t, e, n) {
      (this.container = t),
        (this.hiddenDiv = e),
        (this.btnPrint = n),
        (this.formContainer = document.getElementById("form-container"));
    }
    render(t, n) {
      const s = t.htmlFormat();
      (this.container.innerHTML = s),
        new e(n, s),
        (this.btnPrint.innerText =
          "invoice" === n ? "Imprimer la Facture" : "Imprimer le Devis"),
        this.hiddenDiv.classList.remove("invisible"),
        (this.formContainer.innerHTML = "");
    }
  }
  class s {
    constructor(t) {
      this.el = t;
    }
    print() {
      (document.body.innerHTML = this.el.innerHTML),
        window.print(),
        document.location.reload();
    }
  }
  class i {
    constructor() {
      (this.form = document.getElementById("form")),
        (this.type = document.getElementById("type")),
        (this.firstName = document.getElementById("type")),
        (this.lastName = document.getElementById("lastName")),
        (this.address = document.getElementById("address")),
        (this.country = document.getElementById("country")),
        (this.town = document.getElementById("town")),
        (this.zip = document.getElementById("zip")),
        (this.product = document.getElementById("product")),
        (this.price = document.getElementById("price")),
        (this.quantity = document.getElementById("quantity")),
        (this.tva = document.getElementById("tva")),
        (this.docContainer = document.getElementById("document-container")),
        (this.hiddenDiv = document.getElementById("hiddenDiv")),
        (this.storedE1 = document.getElementById("stored-data")),
        (this.btnPrint = document.getElementById("print")),
        (this.btnReload = document.getElementById("reload")),
        (this.btnStoredInvoices = document.getElementById("stored-invoices")),
        (this.btnStoredEstimates = document.getElementById("stored-estimates")),
        this.submitFormListeners(),
        this.printListener(this.btnPrint, this.docContainer),
        this.deleteListener(this.btnReload),
        this.getStoredDocsListener();
    }
    submitFormListeners() {
      this.form.addEventListener("submit", this.handleFormSubmit);
    }
    printListener(t, e) {
      t.addEventListener("click", () => {
        let t;
        (t = new s(e)), t.print();
      });
    }
    deleteListener(t) {
      t.addEventListener("click", () => {
        document.location.reload(), window.scrollTo(0, 0);
      });
    }
    getStoredDocsListener() {
      this.btnStoredInvoices.addEventListener("click", () =>
        this.getItems("invoice")
      ),
        this.btnStoredEstimates.addEventListener("click", () =>
          this.getItems("estimate")
        );
    }
    getItems(t) {
      if (
        (this.storedE1.hasChildNodes() && (this.storedE1.innerHTML = ""),
        localStorage.getItem(t))
      ) {
        let e;
        if (((e = localStorage.getItem(t)), null != e && e.length > 2)) {
          let t;
          (t = JSON.parse(e)),
            t.map((t) => {
              let e = document.createElement("div"),
                n = document.createElement("div");
              e.classList.add("card", "mt-5"),
                n.classList.add("cardB-body"),
                (n.innerHTML = t),
                e.append(n),
                this.storedE1.append(e);
            });
        } else
          this.storedE1.innerHTML =
            '<div class="p-5">Aucune data disponnible</div>';
      }
    }
    handleFormSubmit(e) {
      e.preventDefault(), console.log(this);
      const s = this.inputDatas();
      if (Array.isArray(s)) {
        const [e, i, o, r, a, d, l, c, h, m, u] = s;
        let p,
          v,
          g = new Date();
        (p = new t(e, i, o, r, a, d, l, c, h, m, u, g)),
          (v = new n(this.docContainer, this.hiddenDiv, this.btnPrint)),
          v.render(p, e);
      }
    }
    inputDatas() {
      const t = this.type.value,
        e = this.firstName.value,
        n = this.lastName.value,
        s = this.address.value,
        i = this.country.value,
        o = this.town.value,
        r = this.zip.valueAsNumber,
        a = this.product.value,
        d = this.price.valueAsNumber,
        l = this.quantity.valueAsNumber,
        c = this.tva.valueAsNumber;
      return r > 0 && d > 0 && l > 0 && c > 0
        ? [t, e, n, s, i, o, r, a, d, l, c]
        : void alert("Les valeurs numériques doivent être > 0 !");
    }
  }
  (function (t, e, n, s) {
    var i,
      o = arguments.length,
      r =
        o < 3
          ? e
          : null === s
          ? (s = Object.getOwnPropertyDescriptor(e, n))
          : s;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      r = Reflect.decorate(t, e, n, s);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, n, r) : i(e, n)) || r);
    o > 3 && r && Object.defineProperty(e, n, r);
  })(
    [
      function (t, e, n) {
        const s = n.value;
        return {
          get() {
            return s.bind(this);
          },
        };
      },
    ],
    i.prototype,
    "handleFormSubmit",
    null
  ),
    new i(),
    e.checkLocalStorage(),
    console.log("git504");
})();
