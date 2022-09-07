/**
 * we used to include public libraries from unpkg, cloudcdn etc. into our html using <script> which exposed a global variable which we could use
 * but this becomes unmanageable in huge projects and you have to update to new versions manually
 * 
 * need to install nodejs and npm
 * 
 * do npm init to create a package
 * hit enter to accept all the defaults
 * 
 * the "main" is like the parent script that is going to be look at first
 * 
 * as you install packages, they will appear in package.json as dependencies, creating a node_modules folder
 * 
 * not really easy to use these without a bundler as they can't be directly imported into code
 * 
 * REALLY GREAT PACKAGE --> LODASH
 * has loads of useful functions for handling dates, cloning objects and other things
 * make sure to use lodash-es for es6 modules (unless using webpack)
 * 
 */