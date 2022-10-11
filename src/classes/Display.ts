import { HasRender } from "../interfaces/HasRender.js";
import { HasHtmlFormat } from "../interfaces/HasHtmlFormat.js";

export class Display implements HasRender {
  formContainer: HTMLDivElement;

  constructor(
    private container: HTMLDivElement,
    private hiddenDiv: HTMLDivElement,
    private btnPrint: HTMLButtonElement
  ) {
    this.formContainer = document.getElementById(
      "form-container"
    ) as HTMLDivElement;
  }

  render(docObj: HasHtmlFormat, docType: string) {
    this.formContainer.innerHTML = "";
    const htmlString: string = docObj.htmlFormat();
    this.container.innerHTML = htmlString;
    if (docType === "invoice") {
      this.btnPrint.innerText = "Imprimer la Facture";
    } else {
      this.btnPrint.innerText = "Imprimer le Devis";
    }
    this.hiddenDiv.classList.remove("invisible");
  }
}
