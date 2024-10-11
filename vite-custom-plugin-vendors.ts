// eslint-disable-next-line import/no-unresolved
import { copySync } from "fs-extra/esm";
import path from "node:path";

type Paths = {
  from: string;
  to: string;
};

const PLUGIN_NAME = "vite-custom-plugin-vendors";

const __dirname = import.meta.dirname;

export function copyTo(paths: Paths[]) {
  return {
    name: PLUGIN_NAME,
    async generateBundle() {
      for (const packetsPath of paths) {
        const from = path.resolve(__dirname, path.join(packetsPath.from));
        const to = path.resolve(__dirname, path.join("build", packetsPath.to));

        console.log(from);
        console.log(to);

        try {
          copySync(from, to, {
            overwrite: true,
          });

          console.log(`vendor ${to} prepared`);
        } catch (err) {
          console.error(err);
        }
      }
    },
  };
}
