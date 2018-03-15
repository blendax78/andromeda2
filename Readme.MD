Andromeda2

A Flask backend with a React frontend.

Currently, the backend isn't utilized (no saving to/from database yet).

To run, you will need to have node (using nvm is highly recommended) & npm installed.

From main directory:
```
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


Note: The backend is used for saving data. This game can be demoed without running the service. Also, my backend uses an API (outside this repo) for authentication. In order to use this layer, some kind of user login management will have to be built to handle this.

To set up the Python side, please note that setting up a virtualenv is **highly** recommended.

Install necessary packages:
```
pip install -r requirements.txt
```

Once the packages are install, the server can be run with the following command:
```
python run.py
```
