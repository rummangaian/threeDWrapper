export type THREEDCONFIG = {
    width:string;
    height:string;
}
export type Node = {
  id: string | number;
  label?: string;
  [key: string]: any; // optional extra properties
};

export type Edge = {
  source: string | number;
  target: string | number;
  [key: string]: any; // optional extra properties
};

export type GraphInput = {
  nodes?: Node[];
  edges?: Edge[];
};