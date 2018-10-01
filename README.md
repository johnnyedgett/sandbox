# wow-gold-swap

This app is my first attempt at an open-source type webapp! 

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