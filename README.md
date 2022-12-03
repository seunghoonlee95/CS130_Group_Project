# CS130_Group_Project

# Links

[Proposal](https://docs.google.com/document/d/121xmPaLOenfvDO8JuA1cckpeetHr0g3Aj8t2bRJcYNc/edit)

# To run locally

Set up environment variables by running
1.1. $ cd backend
1.2. $ source ./config/twilio.env

Open up two terminals

## 1. Frontend: Navigate to .../bruinpal

1.1. $ npm install

1.2. $ npm start
-Keep terminal open for auto reloads

## 2. Backend: Navigate to ../backend

    2.1 $ node server.js

## 3. Open http://localhost:3000/ in browser

    3.3 If setup correctly will see YOUR EXPRESS BACKEND IS CONNECTED TO REACT in Console
## API Documentation

For this project, we used swagger-ui to autogenrate API documentation

To see it for yourself, please navigate to ./backend and run

npm install
npm run swagger-autogen

Then run project as detailed below.
Navigate to http://localhost:5000/doc/ to see interactive documentation.

https://firebase.google.com/docs/auth/web/firebaseui?authuser=0
