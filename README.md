# R3LM

<a href="#issues" alt="Issues">
<img src="https://img.shields.io/github/issues/opprDev/R3LM.svg?style=flat-square" />
</a>
<a href="#forks" alt="Forks">
<img src="https://img.shields.io/github/forks/opprDev/R3LM.svg?style=flat-square" />
</a>
<a href="#stars" alt="Stars">
<img src="https://img.shields.io/github/stars/opprDev/R3LM.svg?style=flat-square" />
</a>
<a href="#license" alt="License">
<img src="https://img.shields.io/github/license/opprDev/R3LM.svg?style=flat-square" />
</a>
<a href="#dependency_status" alt="dependencies">
<img src="https://david-dm.org/opprDev/R3LM.svg?style=flat-square" />
</a>
<a href="#dev_dependency_status" alt="devDependencies">
<img src="https://david-dm.org/opprDev/R3LM/dev-status.svg?style=flat-square" />
</a>
<a href="#demo" alt="Demo">
<img src="https://img.shields.io/badge/demo-link-blue.svg?style=flat-square" />
</a>

<img src="banners/banner.png"/>

A starter boilerplate for a universal webapp using [React](https://reactjs.org/), [Redux](https://redux.js.org/), [Router](https://reacttraining.com/react-router/), [LoopBack](https://loopback.io/) and [MongoDB](https://www.mongodb.com/).

<center>
<a href="https://www.patreon.com/oppr" target="_blank">
<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>
<center>

## Instructions

1. Create a MongoDB data source connector to the MongoDB:

```
lb datasource mongoDS --connector mongoDB
```

2. Follow the next step as an example to the data source and data base configuration.

#### Example

```
? Enter the datasource name: mongoDS
? Select the connector for mongoDS: MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database):
? host: localhost
? port: 27017
? user:
? password:
? database: rrrlm
```

1. Cleate a LoopBack new model:

```
lb model
```

2. Give the new model a name:

```
? Enter the model name: rrrlm_model
? Select the datasource to attach rrrlm_model to: db (mongodb)
? Select model's base class PersistedModel
? Expose rrrlm_model via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? common
Let's add some rrrlm_model properties now.
```

3. Create several properties:

```
Enter an empty property name when done.
? Property name: property_a
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]:

Let's add another rrrlm_model property.
Enter an empty property name when done.
? Property name: property_b
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]:

Let's add another rrrlm_model property.
Enter an empty property name when done.
? Property name: property_c
   invoke   loopback:property
? Property type: string
? Required? No
? Default value[leave blank for none]:

Let's add another rrrlm_model property.
Enter an empty property name when done.
? Property name:
```

### Usage

1. From the root folder, install the dependencies.

```
npm install
```

2. To run the server

```
npm start
```

#### App

```
http://localhost:3000
```

#### Loopback Explorer:

```
http://localhost:3000/explorer
```

### Mongo Shell

1. Start MongoDB Shell by the following command:

```
mongo
```

2. Next you have several useful `mongo` commands:

```bash
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
rrrlm  0.000GB
> use rrrlm
switched to db rrrlm
> show collections
rrrlm
> db.rrrlm.find()
```
