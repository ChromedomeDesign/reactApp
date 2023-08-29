<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<br />
<div align="center">

<h3 align="center">Chromedome Design React Template</h3>

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
        <li><a href="#code-standards">Code Standards</a></li>
      </ul>
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
    <li><a href="#code-testing">Code Testing</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


This is our sample starter project for React.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![React][React.js]][React-url]

React is a free and open-source front-end JavaScript library for building user interfaces based on components.

[![Material Design][MDB]][MDB-url]

Material Design UI kits provide a uniform UI component set that can be themed easily. We are using MDBootstrap in this implementation. Why MDBootstrap? Because Dustin said so.
NOTE: Depending on the use case, the client may need to purchase a license.

[![Webpack][Webpack.js]][Webpack-url]

Webpack is a module bundler for JavaScript. It takes modules with dependencies and generates static assets representing those modules. The important configurations are contained in the <a href="#webpack-config">Webpack Config</a>

[![Babel][Babeljs.io]][Babel-url]

Babel is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. It also provides polyfills for features that are not supported in certain browsers.

[![Typescript][Typescript.org]][Typescript-url]

TypeScript is a strongly typed programming language that builds on JavaScript. It provides tools to make your code easier to read and more predictable, as well as making it easier to catch errors sooner within your chosen code editor. The important configurations are contained in the <a href="#typescript-config">Typescript Config</a>

[![DotENV][DotENV.org]][DotENV-url]

DotENV provides a system for storing and syncing developer "secrets", or sensitive information. This is a good place to store things like API tokens, third party keys and other information that needs to be synchronized between developers and environments, but hidden from user.

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
- TypeScript Config <a name="typescript-config"></a>
    - This file declares a basic configuration for Typescript compiling and Intellisense. It extends the Node 18 basic TypeScript config.
- Webpack Config <a name="webpack-config"></a>
    - This file declares the settings for webpack to compress and deliver the site assets when the project is built or run locally. It also includes a utility that will allow @aliases defined in the TypeScript Config file to flow through.
- Package JSON
    - This file has several configurations for NPM to run properly. The dependant packages and their versions are declared here, as well as the commands that the project will need to run properly.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- TESTING -->
## Code Testing
The current setup does not yet include any testing support. It would be recommended for larger, long-lived projects that some automated testing be implemented. The two main options for this would be Unit Tests and End-to-end Tests. 

Unit tests are intentionally written to be self-contained and avoid having any dependencies within the code, thus "unit". Each test is written to work independently and asynchronosly with all other tests and should work on only a single unit of functionality. All needed data for the test should be "mocked". Our suggested unit testing framework is (TBD).

End-to-end (e2e) tests are designed to take a user-like path through certain parts of the project. An example of an e2e test would be to choose a product and go all the way through the purchase process. E2e tests usually are written to work against a test or development environment so they don't obstruct the actual users. Our suggested platform for e2e tests is (TBD).

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
[MDB]: https://img.shields.io/badge/Material%20Design-007acc?style=for-the-badge&logo=material-design&logoColor=white
[MDB-url]: https://mdbootstrap.com/
[Babeljs.io]: https://img.shields.io/badge/babel.js-3b3c38?style=for-the-badge&logo=babel&logoColor=f5da55
[Babel-url]: https://babeljs.io/
[Typescript.org]: https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[DotENV.org]: https://img.shields.io/badge/Dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=yellow
[DotENV-url]: https://www.dotenv.org/
