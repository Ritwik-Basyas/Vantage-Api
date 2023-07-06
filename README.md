# Vantage-Api
This repo is for the assignment given by VANTAGE CIRCLE.

For this project I have used NodeJs, ExpressJs, Mongodb Database, Mongoose, and Postman.
Also I have installed nodemon and dotenv.

To run the project first you need to install all dependencies using npm i. After that you can write the command " npm run dev " in the terminal. 
If the database is connected then you will see a message " Database is connected " in the terminal. 
If everything goes as expected you will see a message " 5000 port is connected " in the terminal.

You can experience an error in the last phase because your IP address should be present in the IP Access List of my Database to work properly.
You can use your own MongoDb Database instead of mine and solve this problem. Only thing needed is that you have to replace the url in the .env file with your url.

Now you can go to to Postman app and use GET and POST request in localhost:5000/task and use PATCH and DELETE in localhost:5000/task/{_id}.
if you are using postman in a web browser then make sure to use the Postman Desktop Agent because the browser agent is very limited and may not work properly in your device.
