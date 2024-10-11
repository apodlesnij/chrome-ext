(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/index.tsx-f33ced33.js")
    );
  })().catch(console.error);

})();
