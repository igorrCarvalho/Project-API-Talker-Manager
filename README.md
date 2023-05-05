# Welcome to the project API Talker Manager repositorie!

This project was made using the TDD (Test Driven Development) method. It simulates a control backend program to an talker website. It has many API endpoints, you can test it using VsCode extensions like 'Thunder-Client', or in the browser. This project use an simulated database, which is the talker.json file. <br />
<br />
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/64559670/236532711-48385a3b-0c7e-4d83-ace9-f20cca8e124b.gif)

# Development

This project was developed by [Igor Carvalho](https://www.linkedin.com/in/dev-igor-carvalho/) while studying at Trybe.

# Details about the project

<details>
  <summary><strong>👨‍💻 Used tecnologies</strong></summary><br />

  - Node.js
  - JavaScript
  - Express
  - JavaScript
  - Docker

</details>

<details>
  <summary><strong>👉 How to use my project</strong></summary><br />

  First of all, clone the repositorie<br />
  - `git clone git@github.com:igorrCarvalho/Project-API-Talker-Manager.git`<br />
  Then, enter the cloned repositorie<br />
  - `cd directorie_name` <br />
  Then, install the project dependencies in the terminal <br />
  - `npm install`<br />
  Then, use docker to run up the server container<br />
  - `docker-compose up -d`<br />
  Then, use the container bash<br />
  - `docker exec -it talker_manager bash`<br />
  Finally, start the server<br />
  - `npm start`

</details>

<details>
  <summary><strong>GET /talker</strong></summary><br />
  
  This is an GET http endpoint, that will get every talkers that exists in the database and an status 200.<br /><br />
  You can use it with Thunder-Client or in the browser, generally the endpoint will be:<br /><br />
  `localhost:3000/talker`

</details>

<details>
  <summary><strong>GET /talker/:id</strong></summary><br />
  
  This is an GET http endpoint, that will get the talker that exists in the database with the id used and an status 200.<br /><br />
  
  You can use it with Thunder-Client or in the browser, you should use the id in the url, generally the endpoint will be:<br /><br />
  `localhost:3000/talker/id`

</details>

<details>
  <summary><strong>POST /login</strong></summary><br />
  
  This is an POST http endpoint, that will make the user login validate.<br /><br />
  
  If the email and password exists in the database and are correct, the endpoint will return a token, with an status 200
  
  You can use it with Thunder-Client, you should use the email and password in the body, generally the endpoint will be:<br /><br />
  `localhost:3000/login`

</details>

<details>
  <summary><strong>POST /login</strong></summary><br />
  
  This is an POST http endpoint, that will make the user login validate.<br /><br />
  
  If the email and password exists in the database and are correct, the endpoint will return a token, with an status 200
  
  You can use it with Thunder-Client, you should use the email and password in the body, generally the endpoint will be:<br /><br />
  `localhost:3000/login`

</details>

<details>
  <summary><strong>POST /talker</strong></summary><br />
  
  This is an POST http endpoint, that will generate a new talker.<br /><br />
  
  If the token exists and the data are correct a new user is added to the database, it return the new user, with an status 200<br /><br />
  
  You can use it with Thunder-Client, you should use the email and password in the body, generally the endpoint will be:<br /><br />
  `localhost:3000/talker`

</details>

<details>
  <summary><strong>PUT /talker/:id</strong></summary><br />

  This is an PUT http endpoint, that will edit the talker with the id used.<br /><br />

  The body should look like this:
  
  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```
  If the token exists and the data are correct a the talker is edited in the database, it return the new talker, with an status 200<br /><br />
  
  You can use it with Thunder-Client, generally the endpoint will be:<br /><br />
  `localhost:3000/talker/:id`

</details>

<details>
  <summary><strong>DELETE /talker/:id</strong></summary><br />

  This is an DELETE http endpoint, that will delete the talker with the id in the database.<br /><br />

  The body should look like this:

  If the token exists and the id are correct the talker is deleted from the database, with an status 204<br /><br />
  
  You can use it with Thunder-Client, generally the endpoint will be:<br /><br />
  `localhost:3000/talker/:id`

</details>


<details>
  <summary><strong>GET /talker/search?q=searchTerm</strong></summary><br />

  This is an get http endpoint, that will show you talkers with the name used in the query (placed after '=').<br /><br />

  If the name exists the talkers are shown, with an status 200<br /><br />
  
  You can use it with Thunder-Client or your browser, generally the endpoint will be:<br /><br />
  `localhost:3000/talker/search?q=searchTerm`

</details>
</details>
