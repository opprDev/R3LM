# R3MEN

<img src="banners/banner.png"/>

A starter boilerplate for a universal webapp using [React](https://reactjs.org/), [Redux](https://redux.js.org/), [Router](https://reacttraining.com/react-router/), [LoopBack](https://loopback.io/) and [MongoDB](https://www.mongodb.com/).

## Instructions

```
lb datasource mongoDS --connector mongoDB
```

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

```
lb model
```

```
? Enter the model name: reeelm
? Select the datasource to attach reeelm to: db (mongodb)
? Select model's base class PersistedModel
? Expose reeelm via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? common
Let's add some reeelm properties now.

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
