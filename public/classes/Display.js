export class Display {
    constructor(container, hiddenDiv, btnPrint) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.btnPrint = btnPrint;
        this.formContainer = document.getElementById("form-container");
    }
    render(docObj, docType) {
        this.formContainer.innerHTML = "";
        const htmlString = docObj.htmlFormat();
        this.container.innerHTML = htmlString;
        if (docType === "invoice") {
            this.btnPrint.innerText = "Imprimer la Facture";
        }
        else {
            this.btnPrint.innerText = "Imprimer le Devis";
        }
        this.hiddenDiv.classList.remove("invisible");
    }
}
