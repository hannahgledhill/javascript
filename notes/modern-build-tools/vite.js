/**
 * prebundles dependencies with esbuild because they don't change very often
 * uses esmodules in browser but with the build bundles them fully
 * 
 * don't have to use a react router
 * simply add a folder with an index.html file like "about" folder containing index.html and your /about route already works in the dev server
 * 
 * to build for production add extra entry points in vite.config.js file
 * 
 * has automatic css code splitting - only loads the part of the css needed for the part of the app you are using
 * 
 */

const { resolve } = require("path");

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about/index.html")
            }
        }
    }
}

/** 
 * to get up and going npm init @vitejs/app
 * choose framework
 * npm i to install dependencies
 * npm run dev to run dev file
 * npm run build builds the dist file
 * 
 * can have rebuild on file changes (see vite documentation)
 * 
 * then copy the scripts, links and <div id="app"> into app
 * 
 */