# Project structure

[Folder structure](#folder-structure)

- [src/](#src)
  - [components/](#components)
    - [ExampleComponent/](#component-file-structure)
      - [index.js](#indexjs)
      - [ExampleComponent.jsx](#component-namejsx)
      - [ExampleComponent.stories.jsx](#component-namestoriesjsx)
      - [ExampleComponent.spec.(js|jsx)](#component-namespecjsjsx)
      - [ExampleComponent.style.scss](#component-namestylesscss)
      - [ExampleComponent.types.js](#component-nametypesjs)
      - [ExampleComponent.messages.js](#component-namemessagesjs)
  - [config/](#config)
  - [static/](#static)
  - [styles/](#styles)
- [.storybook/](#storybook)
- [config/](#config)
    - [config/webpack](#configwebpack)
- [scripts/](#scripts)
- [static/](#static)
- [.azure/](#azure)

## Folder structure

### 📂`src/`

Source Folder

#### 📂`src/components/`

Contains **dumb components** are also called *presentational* components because their only responsibility is to present something to the DOM

#### 📂`src/config/`

Contains configurations used in `src/` folder scope (e.g. constants, environment variables etc.)

#### 📂`src/containers/`

Contains **smart components** (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.

#### 📂`src/partials`

Contains partials files

#### 📂`src/static/`

Contains static files eg. images

#### 📂`src/styles/`

Contains styles files  
[Style guide](./STYLEGUIDE.md#styles)

#### 📂`src/utils/`

Contains hooks, apis connections and other general function (e.g. hundleError, defaultMessages, currencyFormatter etc.)

#### 📂`src/utils/types`

Contains general types for all application

---

### 📂`.storybook/`

Contains [storybook](https://storybook.js.org/) configuration files.  
[Storybook style guide](./STYLEGUIDE.md#storybook)

---

### 📂`config/`

Contains eg. configurations of packages from npm, often used functions etc.

#### 📂`config/webpack/`

Contains [webpack](https://webpack.js.org/) configuration files

---

### 📂`scripts/`

Other scripts not related to app logic

---

### 📂`.azure/`

Config files used by Azure DevOps services

---

## Component file structure

### 📄`index.js`

Contains only export eg.

```javascript
export { default } from './[component-name]';
```

Then you can import `[component-name].jsx` file via

```javascript
import ComponentName from 'components/[component-name]';
```

instead of

```javascript
import ComponentName from 'components/[component-name]/[component-name]';
```

But errors in console contains path to `[component-name].jsx` where error has been thrown

### ⚛️`[component-name].jsx`

Contains React component with JXS

### 📕`[component-name].stories.jsx`

Contains storybook stories for component

### 💉`[component-name].spec.(js|jsx)`

Contains tests for component

### 💅`[component-name].styles.js`

Contains styles that are unique to component

### 🤝`[component-name].types.js`

Contains component prop-types shapes

### 💬`[component-name].messages.js`

Contains literals used in component
