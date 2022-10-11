import { HasRender } from "../interfaces/HasRender.js";
import { HasHtmlFormat } from "../interfaces/HasHtmlFormat.js";

export class Display implements HasRender {
  formContainer: HTMLDivElement;

  constructor(
    private container: HTMLDivElement,
    private hiddenDiv: HTMLDivElement
  ) {
    this.formContainer = document.getElementById(
      "form-container"
    ) as HTMLDivElement;
  }

  render(docObj: HasHtmlFormat, docType: string) {
    const htmlString: string = docObj.htmlFormat();
    this.container.innerHTML = htmlString;
    this.hiddenDiv.classList.remove("invisible");
    this.formContainer.innerHTML = "";
  }
}


