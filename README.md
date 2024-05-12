# My-OWN-REACT-UI

my-own-react-ui is a graphical components library, which contains components that can be imported into react projects. It is designed for the creation of web graphical user interfaces in a simple and consistent way between projects.

## Table of Contents

- [Starting](#starting)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Use](#use)
- [Development](#development)
  - [Local settings](#local-settings)
  - [Running](#running)
  - [Testing](#testing)
  - [Coverage](#coverage)
- [Licence](#licence)
- [Credits](#credits)
- [Contact](#contact)

## Starting

These are the basic tools that you must have to work with this project:

### Prerequisites

- [Node.js &nbsp;&nbsp; v22.1.0](https://nodejs.org/en/download)
- [Pnpm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; v9.1.0](https://pnpm.io/installation#using-npm)
- [Docker](https://www.docker.com/products/docker-desktop/)

### Installation

In order to install this library, simply execute the following command:

```bash
pnpm install my-own-react-ui
```

## Use

TODO

## Development

To work with my-own-react-ui you must follow the following steps:

### Local settings

Install project dependencies

```bash
pnpm install
```

Create environment variables file. You must assign the corresponding values to the different variables.

```bash
Linux/Mac:  cp .env.example .env
Windows:    copy .env.example .env
```

To create the container where sonar will be running, just run the following command in the root of this project

```bash
docker-compose up
```

The sonar Token can be generated by entering sonar, once you finish creating the container in docker

```bash
http://localhost:9000/account/security

Or by following these steps:
  - Enter http://localhost:9000/
  - My account -> Security -> Generate tokens
```

If you are a Linux/Mac user, the sonar script should look like this

```bash
"scripts": {
    "sonar": "dotenv -- sonar-scanner -Dsonar.projectKey=my-react-app -Dsonar.sources=src -Dsonar.host.url=http://localhost:9000 -Dsonar.login=$SONAR_TOKEN"
}
```

### Running

To run the project you need to run the following command

```bash
pnpm run dev
```

Running in [localhost:5173](http://localhost:5173/)

### Testing

To run the tests of the entire project you must execute

```bash
pnpm run test
```

### Coverage

To create a project coverage report run

```bash
pnpm run test:coverage
```

## Licence

MIT Licence

## Credits

Developers who contributed to this project

- Carlos Gamboa - Fullstack developer

## Contact

- GitHub: ingcarlosgm
