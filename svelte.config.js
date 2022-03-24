import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { createRequire } from "module";
import { join } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
    scss: {
      importer(file, __, done) {
        if (file.startsWith("$lib/")) {
          file = file.replace("$lib", "lib");
          file = join("src", file);
          done({ file });
          return;
        } else {
          const require = createRequire(import.meta.url);
          try {
            file = require.resolve(file);
          } catch {
            return null;
          }
        }
        done({ file });
      }
    }
  }),

	kit: {
		adapter: adapter()
	}
};

export default config;
