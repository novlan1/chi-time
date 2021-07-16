import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    exports: 'auto'
  },
  plugins: [
    babel(),
    commonjs()
  ],
};
