# SUश्रुत 

> Healthcare service platform using MERN stack

![screenshot](https://github.com/amanverma644/IOSDWinterHack/blob/master/uploads/Screenshot%202022-01-09%20at%2017-04-24%20Sushrut.png)
![screenshot](https://github.com/amanverma644/IOSDWinterHack/blob/master/uploads/Screenshot%202022-01-09%20at%2017-04-41%20Sushrut.png)
![screenshot](https://github.com/amanverma644/IOSDWinterHack/blob/master/uploads/Screenshot%202022-01-09%20at%2017-04-50%20Sushrut.png)
![screenshot](https://github.com/amanverma644/IOSDWinterHack/blob/master/uploads/Screenshot%202022-01-09%20at%2017-05-09%20Sushrut.png)

## Deployment Link:

> https://sushrutdtu.herokuapp.com

## Features

- Full featured 3-way login (doctors,patients,admin) website
- Order medicines online
- Book appointments with doctor
- storing medical reports of users on our database
- Doctor's profile with option to upload medical report to patient's profile
- Doctor's profile with option to access previous uploaded medical reports
- Admin profile for database managment
- Database seeder (users)



## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri

```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev
# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import
# Destroy data
npm run data:destroy
```

```
Sample User Logins
admin@example.com (Admin)
123456
john@example.com (Customer)
123456
jane@example.com (Customer)
123456
```
