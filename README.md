# WORK IN PROGRESS



## Create React App
This boiler is currently aligned with Facebook's [Create React App](https://github.com/facebookincubator/create-react-app) and from now in these docs I will refer to it as CRA. 

## ES6
I am using ES6 and ES6 class syntax for components as per 2017 react community conventions 


## Important out of the box CRA commands

    npm run start                       // dev server localhost:3000
    npm run build                       // compile src files to build folder
    npm install -g serve                // install serve
    serve -s build                      // serve the build folder to localhost:5000

Please note that in order to allow absolute paths as well as relative paths [issue #741](https://github.com/facebookincubator/create-react-app/issues/741) the line of code `NODE_PATH=./src` has been added to package.json and this will work for Mac and Linux. For Windows users an `&&` may need to be added, refer to CRA docs. Hoping a better solution comes with future iterations of CRA.


## CDN hosting of images
https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#building-for-relative-paths

Alteration to package.json so currently we are using "homepage" : "." see CRA docs

## Naming conventions
The only time I start anything (var, css class, css ID) with a capital is for an ES6 React component and this is per the CRA convention. Everything else including filenames I start with lowercase.

## Window level objects

- window.appStatus
- window.dc
- window.stores
- window._ (underscore/lodash)
- dispatcher


## Rough WIP notes
Pulling in vendor libraries for client side runtime that are packaged through npm. For example we want the use of Underscore _ or window._ we will import the npm package lodash only once in the app and assign it to the window level object

Pulling in vendor libraries that are downloaded as .js or .min.js and stored in the public folder
For examples of how to do this I am linking to testvendor.js and normalize.css

