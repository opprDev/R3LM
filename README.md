# R3MEN

<img src="banners/banner.png"/>

A starter boilerplate for a universal webapp using [React](https://reactjs.org/), [Redux](https://redux.js.org/), [Router](https://reacttraining.com/react-router/), [LoopBack](https://loopback.io/) and [MongoDB](https://www.mongodb.com/).

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
? database: reeelm
```

1. Cleate a LoopBack new model:

```
lb model
```

2. Give the new model a name:

```
? Enter the model name: reeelm
? Select the datasource to attach reeelm to: db (mongodb)
? Select model's base class PersistedModel
? Expose reeelm via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? common
Let's add some reeelm properties now.
```

3. Create several properties:

```
Enter an empty property name when done.
? Property name: property_a
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]:

Let's add another reeelm property.
Enter an empty property name when done.
? Property name: property_b
   invoke   loopback:property
? Property type: string
? Required? Yes
? Default value[leave blank for none]:

Let's add another reeelm property.
Enter an empty property name when done.
? Property name: property_c
   invoke   loopback:property
? Property type: string
? Required? No
? Default value[leave blank for none]:

Let's add another reeelm property.
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
reeelm  0.000GB
> use reeelm
switched to db reeelm
> show collections
reeelm
> db.reeelm.find()
```
