### ✅ Prerequisites
your frontend , Backend and Db are on same server  
install mongodb from following link
```
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
once mongodb is installed ensure you make a change in /etc/mongod.conf
vim /etc/mongod.conf
ensure you make this change in the configuration file
# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0

```
**you must ensure your node version is latest or greater than **upgrade to Node.js v14 or later****
Ensure you have the following installed on your system: 
- **[Node.js](https://nodejs.org/)** (LTS version recommended)  
- **npm** (Comes with Node.js)  
### install node js 
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```
### to get groceryapi production grade ready install pm2 for daemon service running on server 
```
npm install
npm init -y
npm install express mongoose cors
npm install dotenv
npm install -g pm2
pm2 start server.js --name todos-backend
pm2 save
pm2 startup
pm2 list
#pm2 stop grocery-backend  #will stop your pm2 backend api 
#[PM2] Freeze a process list on reboot via: few additional commands  
#$ pm2 save #to save process

#[PM2] Remove init script via:
#$ pm2 unstartup systemd  #to remove the pm2 service from startup when server restarts or boots
```
### run your backend using these commands in runtime but its mostly not needed
```
npm init -y
npm install express mongoose cors
npm install dotenv
node server.js
```
###

### run following command on mongodb view your data
```
mongosh
use todosdb
db.todos.find()
```

### note :- ensure you enlist mongodb://IPOfMongoDbServer:27017/todosdb in the .env file or if you want to create mongodb server seprately ensure you enlist the mongodbserver ip in .env file.
```
// Connect to MongoDB
MONGO_URI=mongodb://IPOfMongoDbServer:27017/todosdb
```

### final api deployment ref :-
<img width="955" alt="image" src="https://github.com/user-attachments/assets/5898aa80-18f3-4a14-b0ef-8d5b95ecc565" />

## Contributions

- **Source Code Development**: The core functionality, application logic, and coding have been designed and implemented by Anup Dudhe.
- **Infrastructure Setup**: Infrastructure components, such as server configurations, cloud services, and network setups, have been established and managed by Anup Dudhe.
- **Deployment**: The deployment process, including CI/CD pipeline setup and environment configuration, was executed by Anup Dudhe to ensure seamless application deployment.

## Developer Information

- **Anup Dudhe**  
  Software and Infrastructure Consultant  
  CodeCloud Systems  
  www.linkedin.com/in/anup-dudhe-3670331b1
