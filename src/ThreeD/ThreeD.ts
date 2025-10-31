import { DATA, THREEDCONFIG } from "./ThreeD.types";
import ForceGraph3D, { ForceGraph3DInstance } from '3d-force-graph';


export class ThreeDWrapper {
  private container: HTMLElement | null = null;
  private graph: ForceGraph3DInstance | null | any = null;

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

    let graphData = {
        nodes:[],
        links:[]
    }

    this.graph = new ForceGraph3D(this.container)
    config?.width ?? this.graph.width(config?.width);
    config?.height ?? this.graph.height(config?.height);

    this.graph.graphData(data);

  }
}
