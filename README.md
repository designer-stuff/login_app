# Login app
A very basic and simple project which perform various authorizationa and authentications. It allows the user to register as a new user. If the user is already registered then allow him to login and also provides the facility to reset password.
## Getting Started
To run this app on your local machine download the files and follow below steps:
### Prerequisites
To run backend successfully on your local machine you need to install
```
MongoDB
```
[MongoDb - Community Server Edition](https://www.mongodb.com/download-center/community)

**Remember**: Check the checkbox to install Atlas

Start MongoDb server on your local machine in __CMD__
```
mongod
```

### Installing
Install dependencies for backend as well as frontend
```
npm install
```
Open __CMD__ and go to the folder containing backend

Set the private key
```
SET privateKey='ANYSECRETKEY'
```
This private key is required for JSON web tokens that will define a unique signation. [Learn more](https://jwt.io/)
Start backend server
```
node index.js
```

Start frontend server
```
npm run start
```

Open your favourite browser and goto ```localhost:PORT_NUMBER```

# Built With
- [Node.js](https://nodejs.org/en/download/) - To build backend
- [MongoDB](https://www.mongodb.com/download-center/community) - Database used
- [React](https://github.com/facebook/create-react-app) - To build fronted
