This is my react project template set up with `create react app` and its `redux-typescript` template; added with `eslint` & `prettier` for linting and formating, `jest dom` and `jest axe` for testing, `styled-components` for styling, `storybook` with its various add-ons for component developing.

## Structure

This react redux template adopts `ducks` pattern, see ref: https://github.com/erikras/ducks-modular-redux. Also, style guide coming from redux starter kit should be followed, see ref: https://redux-toolkit.js.org/
The folders are structured as below:

```
├── .storybook
└── src
    ├── components
    │   └── my-component
    │       ├── my-component.stories.tsx
    │       ├── my-component.test.tsx
    │       ├── my-component.styles.tsx
    │       ├── index.tsx (where the component lives)
    │       └── utils
    │           ├── helpers.ts
    │           └── helpers.test.ts
    ├── containers
    │   └── feature-a
    │       ├── components
    │       │   └── feature-a-component.tsx
    │       ├── feature-a.styles.tsx
    │       └── index.tsx
    ├── stores
    │   ├── store.ts
    │   └── feature-a
    │       ├── slice.ts
    │       ├── thunks.ts
    │       ├── selector.ts
    │       ├── constants.ts
    │       ├── types.ts
    │       ├── feature-a.test.ts (test all store item: reducers, selectors, actions etc)
    │       └── api.ts
    ├── styled-components
    │   ├── theme.ts
    │   ├── global-styles.ts
    │   └── styled.d.ts (override styled component type)
    ├── types (global types)
    └── utils (pure functions as global helpers)
```

Note that the project is set up with `husky` and `lint-staged` do every commit needs to pass linting and formatting rules.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook`

Builds the storybook for all the stories, can be used to develop components in isolation.

### `npm run build-storybook`

Useful for deploying storybook individually.

### `npm prettier`

Manually fix formatting issues for all files. Incuded in the lint-staged setting.

### `npm lint`

Manually lint for all files. Included in the lint-staged setting.
