import { DATA, THREEDCONFIG } from "./ThreeD.types";

export class ThreeDWrapper {
  private container: HTMLElement | null = null;
  renderGraph(context: HTMLElement | string, data: DATA, config: THREEDCONFIG) {
    let containerElement: HTMLElement;
    if (typeof context === "string") {
      containerElement = document.getElementById(context) as HTMLElement;
      if (!containerElement) {
        console.error(`Container element with ID '${context}' not found`);
        return;
      }
    } else {
      containerElement = context;
    }

    if (!this.container || this.container !== containerElement) {
      this.container = containerElement;
    }

  }
}
