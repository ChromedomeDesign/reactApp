<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<br />
<div align="center">

<h3 align="center">ReactApp Starter Project</h3>

  <p align="center">
    React Starter Project
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


This is our sample starter project for React.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![React][React.js]][React-url]
[![Webpack][Webpack.js]][Webpack-url]
[![Babel][Babeljs.io]][Babel-url]
[![Typescript][Typescript.org]][Typescript-url]
[![DotENV][DotENV.org]][DotENV-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This starter project will get you going with a basic setup to begin a React project. We aren't providing a backend solution with this project as it is assumed that we will be layering on top of something that exists. To get started you will need to download these files and place the in your projects folder. Then follow the steps below.

### Prerequisites

First you will need to download and install Node, if you don't already have it on your system.
* [Node Installers](https://nodejs.org/en/download)

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lawremp/reactApp.git
   ```
2. Make sure you are in the root of our project in your chosen terminal
    ```sh
    cd path/to/reactApp
    ```
2. Make sure you have the correct Node Version active. The target version of Node is declared in the ``.npmrc`` file in the project folder. The ``use`` command is not available on Windows.
   ```sh
   nvm use
   ```
3. Install NPM packages. The dependant packages are declared in the ``package.json`` file in the project folder.
   ```sh
   npm install
   ```
4. Test-run the project. The project commands are declared in the ``package.json`` file in the project folder.
    ```sh
    npm start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This project comes with several pre-configured utilities to get you started.

- VS Code Profile
    - Included in this project is a ``.code-profile`` file. If you are using Visual Studio Code as your IDE you can load this profile. It includes several useful extensions and configurations.
- TS Config
    - This file declares a basic configuration for Typescript compiling and Intellisense. It extends the Node 18 basic TS config.
- Webpack Config
    - This file declares the settings for webpack to compress and deliver the site assets when the project is built or run locally. It also includes a utility that will allow @aliases defined in the TS Config file to flow through.
- Package JSON
    - This file has several configurations for NPM to run properly. The dependant packages and their versions are declared here, as well as the commands that the project will need to run properly.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature Placeholder

See the [open issues](https://github.com/lawremp/reactApp/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Webpack.js]: https://img.shields.io/badge/webpack.js-2b3a42?style=for-the-badge&logo=webpack&logoColor=1d78c1
[Webpack-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Babeljs.io]: https://img.shields.io/badge/babel.js-3b3c38?style=for-the-badge&logo=babel&logoColor=f5da55
[Babel-url]: https://babeljs.io/
[Typescript.org]: https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[DotENV.org]: https://img.shields.io/badge/Dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=yellow
[DotENV-url]: https://www.dotenv.org/
