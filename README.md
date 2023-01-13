# APP OVERVIEW
This is a full stack application that displays and creates time sheet data for a fictional company. The app is comprised of a React front-end that uses
npm as the package manager, and a Spring Boot back-end that uses Maven as the package manager. The data is stored and persisted across runs of the app
across uses via a MySQL database.

# DEPENDENCIES
The application, which was built on MacOS 12.1.1, relies on various technologies, so please ensure the following are installed on your machine prior to
running the code:

1. Java 17.0.5
2. MySQL 8.0.31
3. npm 9.2.0
4. Maven 3.8.6 (w/ JAVA_HOME variable point to JDK 17)
5. Spring Boot 3.0.1
6. intelliJ IDEA 2022.1.3
7. VS CODE 1.6 (or higher)

# RUN INSTRUCTIONS
The app is coomprised of three microservices: The database filler, the backend, and the front-end, and the back-end. To ensure the app works properly, 
please run them sequentially as outlined below.

## Database Filler
Make sure that your MySQL server is running on your computer on port localhost:3306, and that there is a "root" user with no password on the server.
This should be a default setting, so you needn't worry if you have explicitly done something to change this. Also, the app will be creating a database
called "giantmachines", so if such a database already exists on your server, be sure to account for that and protect your data appropriately.

Open the project in intelliJ. Ensure that the MySQL connector jar (found in the source file) is added to the project libraries. You can do so by following
these steps: File > Project structure > libraries > Add mysql-connector-j-8.0.312

Run the file.

## RESTFUL API (Back-end)
Open the project in intelliJ. Go to the POM.XML file to ensure all dependencies for the project are downloaded. If not, refresh the POM.XML to download them.
Maven defaults to localhost:8080, so plase be sure nothing else is occupying this port.

Run the application ('mvn spring-boot:run' in terminal).

## CLIENT SIDE (Front-End)
Open up the project in VS CODE. Ensure all project dependencies are downloaded by typing 'npm install' in the terminal. The application will default to
localhost:3000, so ensure the port is not occupied.

Run the application with 'npm run start'.
