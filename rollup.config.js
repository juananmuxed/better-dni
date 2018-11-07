import { version } from "./package.json";
import babel from "rollup-plugin-babel";

const banner =
  "//  Better DNI v" +
  version +
  "\n" +
  "//  https://github.com/singuerinc/better-dni\n" +
  "//  (c) 2017-" +
  new Date().getFullYear() +
  " Nahuel Scotti\n" +
  "//  Better DNI may be freely distributed under the MIT license.\n";

export default {
  input: "src/index.js",
  output: {
    sourcemap: true,
    banner,
    format: "umd",
    file: "dist/index.js",
    name: "betterDni"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ],
  watch: {
    include: "src/**",
    exclude: "node_modules/**"
  }
};
