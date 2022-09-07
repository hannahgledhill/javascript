/**
 * install with npm install parcel --save-dev (ie. it's not going to be part of the live public version of the app --> this is a "dev dependency", it is used to build the application)
 * parcel is now installed LOCALLY within the project, not GLOBALLY on your computer
 * so have to use npx to run through the command line (npm execute)
 * 
 * run npx parcel index.html (index.html has our parent script included as a <script type="module">)
 * also creates a localhost live preview (free equivalent to ngrok)
 * 
 * if getting parcel errors, might need to change <script> tag to remove the type="module"
 * parcel creates a dist folder which has all the bundled files
 * 
 * this is the dev step so it hasn't been fully built and compressed yet
 * 
 * can change our files and will be reloaded
 * 
 * 
 * HOT MODULE REPLACEMENT
 * 
 * if (module.hot) {
 *  module.hot.accept()
 * }
 * 
 * can write this within module - will only make sense to parcel, won't make it into final bundle
 * whenever we change one of the modules it will automatically get rebuilt and will be injected into the browser without triggering a full page reload
 * 
 * can also simply specify the folder on imports
 * 
 * import cloneDeep from 'lodash-es';
 * 
 * parcel will find the path for us!
 * 
 * can also add an npm script in package.json
 * eg. "start": "parcel index.html"
 * 
 * for full product build
 * "build": "parcel build index.html"
 * 
 * then npm run start or npm run build - this gets you fully minified, compressed code
 * 
 * 
 * 
 */