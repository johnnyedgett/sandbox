# wow-gold-swap

This app is my first attempt at an open-source type webapp! 
Note that as of right now this is more of a sandbox for me than anything else. :)

Currenty following the graphql guiode at https://www.robinwieruch.de/graphql-apollo-server-tutorial/#apollo-server-setup-express

# Usage
## Deploy the Backend
To deploy the backend, cd into the backend folder create a .env document

```ini
dbSocketPath=YOUR_GCLOUD_SOCKET_PATH
dbUser=YOUR_DB_USERNAME
dbPassword=YOUR_DB_PASSWORD
dbDatabase=YOUR_DB_SCHEMA
```

Then, install the dependencies

```js
npm install
```

Finally, deploy using 

```s
gcloud app deploy
```

## Deploy the Frontend
¯\_(ツ)_/¯

