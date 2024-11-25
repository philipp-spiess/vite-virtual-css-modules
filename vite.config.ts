import { defineConfig } from "vite";

const VIRTUAL_MODULE_ID = "virtual:virtual.css";
const RESOLVED_VIRTUAL_MODULE_ID = "\0" + VIRTUAL_MODULE_ID;

export default defineConfig({
  plugins: [
    {
      name: "vite-virtual",

      resolveId(id: string) {
        if (id !== VIRTUAL_MODULE_ID) {
          return;
        }

        return RESOLVED_VIRTUAL_MODULE_ID;
      },

      load(id: string) {
        if (id !== RESOLVED_VIRTUAL_MODULE_ID) {
          return;
        }

        return {
          code: `.foo {color: green;}`,
        };
      },
    },
  ],
});
