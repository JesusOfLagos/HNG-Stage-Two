# HNG-Stage-Two

# Simple REST API with Express.js and MongoDB

This is a simple REST API built with Express.js that performs CRUD operations on a "person" resource, using MongoDB as the database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running locally.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/JesusOfLagos/HNG-Stage-Two.git
2. Navigate to the project directory:
   ```
   cd HNG-Stage-Two

3. Install dependencies:
   ```
   npm install

4. Start the server
   ```
   npm start


## Endpoints

1. Create a new Person:
   ```
   POST /api

a. Request Body:
```
   {
     "name": "John Doe"
   }
```

b. Response Body
```
{
  "id": "icidoi988988v9iu"
  "name": "John Doe"
}

```
2. Get A Person By Id

   ```
   GET /api/:id


a. Response Body
```
{
  "name": "John Doe"
}

```
3. Update A Person By Id

   ```
   PUT /api/:id


a. Request Body
```
{
  "name": "John Doe"
}
```

b. Response Body:
```
   {
     "message": "Person Updated Successfully"
   }
```

4. Delete A Person By Id

   ```
   DELETE /api/:id


a. Response Body
```
{
  "message": "Person Deleted Successfully"
}

```
