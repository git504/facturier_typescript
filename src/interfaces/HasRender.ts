import { HasHtmlFormat } from "./HasHtmlFormat";
export interface HasRender {
  render(docObj: HasHtmlFormat, docType: string): void;
}
