# Jwt_user_role

This project implements a JWT-based user registration and authentication system with role-based access control. It uses PostgreSQL as the database and Node.js for the backend.

## Prerequisites

Before setting up the project, ensure the following are installed on your system:

- **Node.js**: [Download Node.js](https://nodejs.org/en/download/)
- **PostgreSQL**: [Download PostgreSQL](https://www.postgresql.org/download/)
- **pgAdmin**: [Download pgAdmin](https://www.pgadmin.org/download/)

### Install PostgreSQL and pgAdmin

1. Follow the instructions to install **PostgreSQL** based on your operating system.
2. After installing PostgreSQL, verify by running the following command:

   ```bash
   psql --version
    Open pgAdmin and connect to your PostgreSQL server.

Restore the Database Dump (urp.sql)

    Download the urp.sql database dump file (provided separately).
    Open pgAdmin and connect to your PostgreSQL server.
    Create a new database:
        Right-click on Databases and select Create > Database.
        Name the database (e.g., urp).
    After creating the database, right-click on it and select Restore.
    Select the urp.sql file and click Restore.


Clone the Repository

Clone the repository to your local machine:

git clone https://github.com/Arunpandian2306/Jwt_user_role.git
cd Jwt_user_role


nstall Dependencies

Inside the cloned repository directory, install the required dependencies:

npm install

Run the Application

Start the server using the following command:

npm start

The server should now be running at http://localhost:3000.



