    Follow the instructions to install pgAdmin based on your operating system:
        Linux: Use the package manager.
        Windows/macOS: Download and run the installer.

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

Install Dependencies

Inside the cloned repository directory, install the required dependencies:

npm install

Run the Application

Start the server using the following command:

npm start

The server should now be running at http://localhost:3000.
API Documentation
1. User Registration

POST http://localhost:3000/api/register

This endpoint allows you to register a new user.
Request Body:

{
  "username": "testuser1",
  "email": "testuser1@example.com",
  "password": "password123"
}

Response (Success):

{
  "message": "User registered successfully",
  "user": {
    "created_at": "2024-12-24T08:41:31.836Z",
    "updated_at": "2024-12-24T08:41:31.836Z",
    "id": 5,
    "username": "testuser1",
    "email": "testuser1@example.com",
    "password_hash": "$2b$10$9MyUiw3FuV0qTeuY9vUXR.T0mDHbAOsy3ZVhTea1GaQLTl7G62rTy"
  }
}

Response (Error):

If there is an error (e.g., missing or invalid parameters), the response will contain an error message:

{
  "message": "Error message"
}

Step-by-Step Instructions
Step 1: Install PostgreSQL and pgAdmin

    Follow the instructions to install PostgreSQL and pgAdmin based on your operating system.
        PostgreSQL: You can download it from the official website.
        pgAdmin: You can download it from the official website.

    After installation, verify PostgreSQL by running:

    psql --version

    Open pgAdmin and connect to your PostgreSQL server.

Step 2: Restore the Database Dump (urp.sql)

    Download the urp.sql database dump file (provided separately).
    In pgAdmin, create a new database:
        Right-click on Databases and select Create > Database.
        Name the database urp (or any name).
    After creating the database, right-click and select Restore.
    Select the urp.sql file to restore and click Restore.

Step 3: Clone the Repository

Clone the repository to your local machine:

git clone https://github.com/Arunpandian2306/Jwt_user_role.git
cd Jwt_user_role

Step 4: Install Dependencies

Inside the cloned repository directory, install the required dependencies:

npm install

Step 5: Run the Application

To start the server, run:

npm start

The application will be available at http://localhost:3000.
