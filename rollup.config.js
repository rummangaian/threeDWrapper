import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/threedwrapper.js',
    format: 'esm', // or 'umd' if you want global variable
    name: 'ThreeDWrapperLib'
  },
  plugins: [typescript()],
  external: ['3d-force-graph', 'three']
};
