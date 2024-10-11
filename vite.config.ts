import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { crx } from "@crxjs/vite-plugin";
// import { copyTo } from "./vite-custom-plugin-vendors";

import manifest from "./src/manifest";

export default defineConfig(() => ({
  resolve: {
    alias: {
      src: resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    outDir: "build",
    /* rollupOptions: {
      input: {
        popup: resolve(__dirname, "popup.html"),
        background: resolve(__dirname, "src/background/index.ts"),
      },
      output: {
        entryFileNames: (entry) => {
          if (entry.name.includes("background")) {
            return "background.js";
          }
          return "assets/[name]-[hash].js";
        },
      },
    }, */
  },
  plugins: [
    reactPlugin(),
    crx({ manifest }),
    /* copyTo([
      {
        from: "manifest.json",
        to: "manifest.json",
      },
    ]), */
  ],
}));
