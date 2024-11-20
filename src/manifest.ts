import { defineManifest } from '@crxjs/vite-plugin';

export default defineManifest({
  manifest_version: 3,
  name: 'Hello World',
  description: 'First EXT',
  version: '1.0',
  action: {
    default_popup: 'popup.html',
  },
  options_page: "options.html",
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/ContentScript/index.tsx'],
    },
  ],
});
