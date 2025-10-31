import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/threedwrapper.bundle.js",
    format: "esm",
    name: "ThreeDWrapperLib",
  },
  plugins: [resolve(), commonjs(), typescript()],
};
