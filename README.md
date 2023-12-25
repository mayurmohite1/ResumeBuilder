# Resume Builder

Designed and developed a responsive Resume Builder Web App using MongoDB,
Express.js, EJS, and CSS. This innovative platform empowers users to effortlessly
create professional resumes tailored to their unique skillsets and experiences.
Leveraging MongoDB for seamless data storage and retrieval, Express.js ensures a
robust and scalable backend, while EJS facilitates dynamic and visually appealing
resume templates. The user-friendly interface, crafted with CSS, guarantees an
intuitive experience for users to input, edit, and format their information. This project demonstrates my proficiency in full-stack development and commitment to delivering user-centric solutions in a collaborative environment.

## Tech Stack

**Client:** HTML, CSS , JavaScript, Bootstrap.

**Server:** Node, Express

## Installation

First install node js in your computer. Afterwards install modules such as express, moongoose, bcrypt, ejs using the following comand.

```bash
  npm install express moongoose bcrypt ejs
```

## Documentation

Following are the links to the documentation of the modules and framework used in the project.

[express](https://www.npmjs.com/package/express)

[mongoose](https://www.npmjs.com/package/mongoose)

[bcrypt](https://www.npmjs.com/package/bcrypt)

[ejs](https://www.npmjs.com/package/ejs)

[Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

## Run Locally

Download the zip file of the project and extract it. Create database in the MongoDBCompass of name "resumebuilder" and then create collection of name "users". Then follow the below steps..

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install express moongoose bcrypt ejs
```

Start the server

```bash
  nodemon src/index.js
```

## Appendix

If you want to change the template of the resume you just have to change the ejs file of the respective template. If you want to add new template according the design you want just add another template.ejs file in the views folder and call the file in the index.js file like I have called other templates file.
