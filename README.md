# IF.Japanese

This repository presents frontend application for my Japanese APP

- [Development](#development)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Running](#running)
  - [Build](#build)
  - [Updating packages](#updating-packages)
  - [Test & linters](#test--linters)
  - [Versioning](#versioning)
- [Environments](#environments)
- [Browsers](#browsers-support)
- [Tests](#tests)
- [Links](#links)


## Development

### Requirements

- NodeJS >= v10.14.1
- npm >= 6.4.1
- Git Bash (for [versioning](#Versioning))

### Installation

1. Clone project from GitHub repository `git clone git@github.com:furdzik/if.japanese.git` or `git clone https://github.com/furdzik/if.japanese.git`
2. Add alias to your `hosts` file: `127.0.0.1         if.japanese.local`
3. `cd if.japanese`
5. Install dependencies `npm install`

### Running

Run

```sh
npm start
```

for starting dev server. Navigate to `http://if.japanese.local:2017/`. The app will automatically reload if you change any of the source files.

### Build

Run

```sh
npm run build
```

to build project.

\* The build artifacts will be stored in the `dist/` directory.

To run project locally run

```sh
cd dist
```

then

```
npm run serve
```

### Updating packages

Package.json is strictly connected with package-lock.json. Updating package should have reflection in package-lock. Also take care of installing exactly specified package version (see package.json [suffix](https://docs.npmjs.com/files/package.json#dependencies))

### Test & linters

This project used tools such as:

- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)
- [Sinon](https://sinonjs.org/)

for unit testing.

Run

```sh
npm run lint
```

to execute code style analysis (Eslint, SASS Lint etc.).

Run

```sh
npm test
```

to execute the unit tests via Jest

\* unit tests and linters are run on every `git push` (add `--no-validate` flag to omit it)

Run

```sh
npm run test:update
```

to update [snapshots](https://jestjs.io/docs/en/snapshot-testing)

## Versioning

This project uses auto-generated changelog. It should be generated per release. If you want to create new release make it via runnig:

`npm version [major|minor|patch]`

Don't forget to upload git tag via runnig:  

`git push origin <tagname>` (push specified tag)  

or  

`git push origin --tags` (to push all new tags)  

## Environments

| Environment | Url                                                                      |
|-------------|--------------------------------------------------------------------------|
| Local       | [http://if.japanese.local:2017](http://if.japanese.local:2017) |


## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last version| last version| last version| last version

## Tests

We use snapshots to test components (it's automated, not need to create .spec.js file), also when component need more test because it more complicated, create a .spec.js file and write additional tests.

All redux logic need to be covered by tests.

## Links

- [Style guide](docs/STYLEGUIDE.md)
- [Project structure](docs/PROJECT_STRUCTURE.md)
