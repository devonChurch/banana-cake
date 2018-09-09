# Banana Cake

An investigation into how [Cypress](https://www.cypress.io/) compares to [Puppeteer](https://developers.google.com/web/tools/puppeteer/) around **Integration** and **End-to-End** testing.

I chose to mimic a [previously created](https://github.com/devonChurch/kettle-corn/blob/master/README.md#end-to-end-tests) _Puppeteer_ implementation of mine in the _Cypress_ ecosystem.

## Infrastructure

Ingestion into AWS [CodePipeline](https://aws.amazon.com/codepipeline/) / [CodeBuild](https://aws.amazon.com/codebuild/) was a necessity as well as the ability to work on this repository independently and slot in where required as part of the existing CI / CD system.

![banana-cake](https://user-images.githubusercontent.com/15273233/45260595-bf496e00-b43f-11e8-908f-61307cf582a6.png)

## Installation

- Clone this repository

  ```
  $ git clone https://github.com/devonChurch/banana-cake.git
  $ cd ./banana-cake
  ```

- Install project dependancies

  ```
  $ nvm use
  $ npm install
  ```

- Open the [Cypress GUI](https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-2-Visit-Your-Server) for an interactive development experience.

  ```
  $ npm start
  ```

  ![cypress-start](https://user-images.githubusercontent.com/15273233/45260587-8f01cf80-b43f-11e8-86c1-d2632bb0c6f6.png)

## Test

- Run all _Cypress_ tests _(good when verification with [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks))_.

  ```
  $ npm test
  ```

  ![cypress-test](https://user-images.githubusercontent.com/15273233/45260580-742f5b00-b43f-11e8-9fe3-2f7f53d08c5d.png)

## Deploy

- Deploy package to [AWS S3](https://aws.amazon.com/s3/) for reference when running the _CodeBuild_ **CI / CD** sequence.

  ```
  $ npm run deploy
  ```
