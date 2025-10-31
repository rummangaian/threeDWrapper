import { Edge, GraphInput, Node, THREEDCONFIG } from "./ThreeD.types";
import ForceGraph3D, { ForceGraph3DInstance } from "3d-force-graph";

export class ThreeDWrapper {
  private container: HTMLElement | null = null;
  private graph: ForceGraph3DInstance | null | any = null;

  renderGraph(
    context: HTMLElement | string,
    data: GraphInput,
    config: THREEDCONFIG
  ) {
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

    this.graph = new ForceGraph3D(this.container);
    config?.width ?? this.graph.width(config?.width);
    config?.height ?? this.graph.height(config?.height);

    this.graph.graphData(this.prepareGraphData(data));

    return this.graph;
  }

  private prepareGraphData(data: GraphInput) {
    let graphData = {
      nodes: [] as Node[],
      links: [] as Edge[],
    };

    if (Array.isArray(data.nodes) && Array.isArray(data.edges)) {
      graphData.nodes = data.nodes;
      graphData.links = data.edges;
    } else {
      console.warn("Invalid data: expected { nodes: [], edges: [] }");
    }
    return graphData;
  }
}
