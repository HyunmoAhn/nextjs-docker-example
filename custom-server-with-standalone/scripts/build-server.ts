import { build } from "esbuild";

build({
  entryPoints: ["server/index.ts"],
  outfile: "dist-server/index.js",
  bundle: true,
  platform: "node",
  target: "node22",
  minify: true,
  sourcemap: false,
  external: ["next"],
}).catch(() => process.exit(1));
