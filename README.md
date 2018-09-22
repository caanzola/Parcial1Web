# Parcial1Web

### Description

### Motivation
This is a project for a [web development class](http://johnguerra.co/classes/webDevelopment_spring_2018/) in [Uniandes](https://www.uniandes.edu.co). The objective is to make a quick project using **MongoDB, Express, ReactJS and Node js**.

### My app looks like:
![](https://github.com/caanzola/DalgoProyect/blob/master/Captura%20de%20pantalla%202018-09-22%20a%20la(s)%207.52.00%20a.%20m..png?raw=true)

## Getting Started
For this proyect to run you will need a couple of things first. First of all, a package manager. You can use [npm](https://www.npmjs.com/) for this project or [yarn](https://yarnpkg.com/en/docs/install).

Once you have a package manager you can now download this repo on any folder you want on your computer.

## Data Base
If you want to import a json file in a data base on mongo you have to go to the folder data (`cd data') and run the next command:

`mongoimport --db dbName --collection dbName --type json --jsonArray --file fileName.json

## Deployment

### See an Already deployed demo

If you don't feel like deploying this project or preparing everythin listed on the *getting started* section, there is a deployed version of this project [LINK DE HEROKU.](PONER MI LINK DE HEROKU)

### Deploy Yourself
Once you have everything ready open the terminal on the root folder where this project is downloaded in your pc and then enter on the `frontend` folder and run:
* ```yarn install```
* ```yarn run build```

that way you will have the Reactjs front end application ready. Now, open a new terminal, go back to the main folder and run:
* ```yarn install```
* ```yarn start```

Then the node-express server will be up and running. Once you are finish with this you can open `localhost:3000` on your favorite browser and you will se the homepage of the app (The back-end is going to run on 3001 port).


## Authors
* [__Camilo Anzola__](https://github.com/caanzola/)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository has the standard MIT license. You can find it [here.](https://github.com/caanzola/Parcial1Web/blob/master/LICENSE)

