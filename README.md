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
you must ensure your node version is latest or greater than **upgrade to Node.js v14 or later**
Ensure you have the following installed on your system: 
- **[Node.js](https://nodejs.org/)** (LTS version recommended)  
- **npm** (Comes with Node.js)  
### install node js 
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```
