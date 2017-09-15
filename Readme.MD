Andromeda2

A Flask backend with a React frontend.

Currently, the backend isn't utilized (no saving to/from database yet).

To run, you will need to have node (using nvm is highly recommended), npm, & bower installed.
```
npm install -g bower
```

From main directory:
```
bower install
npm install
```

Once dependencies are installed, you can run the development server on port 8080 by typing:
```
npm run dev
```
Then, go to http://localhost:8080/app/templates/dev.html

Or, you can run:
```
npm build
```
This will build the necessary files, and you'll be able to view the site at whatever URL you set your server to.


