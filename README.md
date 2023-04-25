# Welcome to the project API Talker Manager repositorie!

This project was made using the TDD (Test Driven Development) method. It simulates a control backend program to an talker website. It has many API endpoints, you can test it using VsCode extensions like 'Thunder-Client', or in the browser. This project use an simulated database, which is the talker.json file.

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
  <summary><strong>👉 Endpoints</strong></summary><br />

    <details>
      <summary><strong>/talker</strong></summary><br />
  
        This is an GET http endpoint, that will get every talkers that exists in the database.

</details>

</details>
