import { Datas } from "../classes/Datas.js";
import { HasHtmlFormat } from "../interfaces/HasHtmlFormat";
import { HasRender } from "../interfaces/HasRender.js";
import { Display } from "./Display.js";
import { HasPrint } from "../interfaces/HasPrint.js";
import { Print } from "./Print.js";
import { bind } from "../decorators/Bind.js";

export class FormInput {
  form: HTMLFormElement;
  type: HTMLSelectElement;
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  address: HTMLInputElement;
  country: HTMLInputElement;
  town: HTMLInputElement;
  zip: HTMLInputElement;
  product: HTMLInputElement;
  price: HTMLInputElement;
  quantity: HTMLInputElement;
  tva: HTMLInputElement;
  docContainer: HTMLDivElement;
  hiddenDiv: HTMLDivElement;
  btnPrint: HTMLButtonElement;
  btnReload: HTMLButtonElement;
  btnStoredInvoices: HTMLButtonElement;
  btnStoredEstimates: HTMLButtonElement;
  storedE1: HTMLDivElement;

  constructor() {
    this.form = document.getElementById("form") as HTMLFormElement;
    this.type = document.getElementById("type") as HTMLSelectElement;
    this.firstName = document.getElementById("type") as HTMLInputElement;
    this.lastName = document.getElementById("lastName") as HTMLInputElement;
    this.address = document.getElementById("address") as HTMLInputElement;
    this.country = document.getElementById("country") as HTMLInputElement;
    this.town = document.getElementById("town") as HTMLInputElement;
    this.zip = document.getElementById("zip") as HTMLInputElement;
    this.product = document.getElementById("product") as HTMLInputElement;
    this.price = document.getElementById("price") as HTMLInputElement;
    this.quantity = document.getElementById("quantity") as HTMLInputElement;
    this.tva = document.getElementById("tva") as HTMLInputElement;
    this.docContainer = document.getElementById(
      "document-container"
    ) as HTMLDivElement;
    this.hiddenDiv = document.getElementById("hiddenDiv") as HTMLDivElement;
    this.storedE1 = document.getElementById("stored-data") as HTMLDivElement;

    // btn
    this.btnPrint = document.getElementById("print") as HTMLButtonElement;
    this.btnReload = document.getElementById("reload") as HTMLButtonElement;
    this.btnStoredInvoices = document.getElementById(
      "stored-invoices"
    ) as HTMLButtonElement;
    this.btnStoredEstimates = document.getElementById(
      "stored-estimates"
    ) as HTMLButtonElement;

    // Listener
    this.submitFormListeners();
    this.printListener(this.btnPrint, this.docContainer);
    this.deleteListener(this.btnReload);
    this.getStoredDocsListener();
  }

  //Listeners

  // private submitFormListeners(): void {
  //   this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
  // }

  private submitFormListeners(): void {
    this.form.addEventListener("submit", this.handleFormSubmit);
  }

  private printListener(btn: HTMLButtonElement, docContainer: HTMLDivElement) {
    btn.addEventListener("click", () => {
      let availableDoc: HasPrint;
      availableDoc = new Print(docContainer);
      availableDoc.print();
    });
  }

  private deleteListener(btn: HTMLButtonElement) {
    btn.addEventListener("click", () => {
      document.location.reload();
      window.scrollTo(0, 0);
    });
  }

  private getStoredDocsListener(): void {
    this.btnStoredInvoices.addEventListener(
      "click",
      this.getItems.bind(this, "invoice")
    );

    this.btnStoredEstimates.addEventListener(
      "click",
      this.getItems.bind(this, "estimate")
    );
  }

  private getItems(doctype: string) {
    if (this.storedE1.hasChildNodes()) {
      this.storedE1.innerHTML = "";
    }

    if (localStorage.getItem(doctype)) {
      let array: string | null;
      array = localStorage.getItem(doctype);

      if (array != null && array.length > 2) {
        let arrayData: string[];
        arrayData = JSON.parse(array);
        arrayData.map((doc: string): void => {
          let card: HTMLDivElement = document.createElement("div");
          let cardBody: HTMLDivElement = document.createElement("div");
          let cardClasses: Array<string> = ["card", "mt-5"];
          let cardBodyClasses: string = "cardB-body";
          card.classList.add(...cardClasses);
          cardBody.classList.add(cardBodyClasses);
          cardBody.innerHTML = doc;
          card.append(cardBody);
          this.storedE1.append(card);
        });
      } else {
        this.storedE1.innerHTML =
          '<div class="p-5">Aucune data disponnible</div>';
      }
    }
  }

  @bind
  private handleFormSubmit(e: Event) {
    e.preventDefault();
    console.log(this); // forminputs

    const inputs = this.inputDatas();

    if (Array.isArray(inputs)) {
      const [
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
      ] = inputs;

      let docData: HasHtmlFormat;
      let date: Date = new Date();

      docData = new Datas(
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
        date
      );
      let template: HasRender;
      template = new Display(this.docContainer, this.hiddenDiv, this.btnPrint);
      template.render(docData, type);
    }
  }

  private inputDatas():
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        number,
        string,
        number,
        number,
        number
      ]
    | void {
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
    } else {
      alert("Les valeurs numériques doivent être > 0 !");
      return;
    }
  }
}
