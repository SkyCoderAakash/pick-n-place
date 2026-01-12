import esbuild from "rollup-plugin-esbuild";

export default {
  input: "index.ts",
  output: {
    dir: "dist",
    format: "es",
    sourcemap: true,
  },
  external: ["react", "react-dom"],
  plugins: [
    esbuild({
      jsx: "automatic",
      target: "es2020",
      tsconfig: "tsconfig.json",
    }),
  ],
};
