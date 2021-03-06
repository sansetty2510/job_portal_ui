# REACT JS PROJECT - MY DREAM JOB

It is a job portal where users can search, view details and apply for jobs. 
The design is responsive.

# Use of this repository

This project is a simple ReactJS project which demonstrates the following:

1. Creating a Component in React
2. Making HTTP calls with fetch
3. Communicating between parent and child component
4. Using Bootstrap along with React (ReactStrap)
5. Using Routing in React with Reat Router dom.
6. Integrating redux with react
7. Using Saga as middleware
8. Using React hooks like useState, useEffect
9. Using styled component
10. Unit test cases using karma, Mocha and chai
11. Maintaining code standards using Eslint
12. Creating production build using webpack.

# Live Application URL

The Application is deployed in http://mydreamjob.appexwebsolutions.com/

Click on the link to see the application

# Technology used in this project

React js , Redux, node js, webpack , babel , eslint, mocha, karma

    react : 16.12.0,
    redux: 4.0.5
    redux-saga: 1.1.3
    webpack:  4.41.5
    mocha: 7.0.0
    chai: 4.2.0
    @babel/core:  7.8.3
    karma: 4.4.1
    node 10.x
    
# Prerequisites

   Please install node js in your system https://nodejs.org/en/
   
# Cloning and Running the application in local

    Clone the project into local

    Install all the npm packages. Go into the project folder and type the following command to install all npm packages
    
    1. npm install

    2. npm start

    This application will run on 3000 port, if you want to change the port you can change it in build/scripts/start.js file.

    By default it will run here: http://localhost:3000

# To run the unit test cases you can run 
     
     npm run test
     
# To run the eslint and check the error 
     
     npm run lint
     
     To fix the errors:-
     
     npm run lint --fix
     
# To run the prod build 
     
     npm run build  

# Others

   If you want to check the same application's implementation without using redux for state management then try this link:  https://github.com/avickmukh/React_Hooks 
   I am using react hooks and context APIs.
   
   (Under development)


# Assumptions 
   1. For now I am reading the static data from json file from Redux-saga api call
   ```json
    {
            "id": 1,
            "title": "Frontend Developer",
            "location": "Bangalore",
            "skills": " javascript, css, asp.net, react",
            "description": "Comfortable with modern JS stack, experience with React.",
            "employment_type": "Full Time",
            "company": {
                "name": "ABCD TECH System Private Limited",
                "about": "Lorem ipsum dolor sit amet.",
                "ceo": "A M mamam",
                "founded": "2015"
            }
        }
```
        
  # Resources
  Resources for reference:--  
    React Js : Refer to https://reactjs.org/ to understand the concepts of ReactJS                                                        
    create-react-app : The following link has all the commands that can be used with create-react-app                   https://github.com/facebook/create-react-app                                                                                              
    Redux : Refer to https://redux.js.org/introduction/getting-started to understand 
    the concepts of Redux
    
  # Contributing
   Feel free to open issues and pull requests!

# In Progress work List

   1. Integrate with backend services ( https://github.com/avickmukh/job_portal_service )
   2. Pagination in Joblist
   3. Writting more test cases and adding code coverage
   4. Adding Authorization so user can apply the job 
   5. Adding more validation
   6. Adding error boundary
      


