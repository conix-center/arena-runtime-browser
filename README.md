# ARENA Browser Runtime Manager

Presents the browser as an available runtime, allowing the [ARENA Runtime Supervisor](https://github.com/conix-center/arts/) to send request to execute WASM (or python) applications. Also sends requests to ARTS to start applications, according to scene/user config/requests.

See an example on [how to start a program from a scene](https://docs.google.com/document/d/1E2llB7h0ZoKarMMXO7OnJNeg1iibstVo5eKk_GUzHnU/edit?usp=sharing)

See [ARTS](https://github.com/conix-center/arts/)

## Developer Quick Start 

If you want to develop code for the ARENA Browser Runtime Manager, you will need [Parcel](https://parceljs.org/), and [npm](https://www.npmjs.com/) installed for your environment.  

1. Install dependencies:  
```
npm install 
```
On a Mac, you will need the [Xcode Command Line Tools](https://developer.apple.com/download/more/?=for%20Xcode) *before* installing parcel.
Check more details at: https://docs.wasmer.io/integrations/js/wasi/browser

2. Create the output folder and start the dev server:  
```
mkdir runtime-mngr
npm run dev
```
Point your browser to http://localhost:1234 and you should see [index_dev.html](index_dev.html).

You can build and deploy (check the deploy server/path in [package.json](package.json))
```
npm run build
npm run deploy
```

