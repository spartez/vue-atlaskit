# Contributing

## Usage

```bash
# Install dependencies
npm install

# Build 
npm run build

# Run development server with storybook
npm run storybook

# Run all tests with lint/jest
npm run test

# Run test in watch mode
npm run test:watch

# Run linter
npm run lint

# Run linter with auto fix
npm run lint:fix

```
## Workflow

- Create a component in the src/components folder
- Add tests in the tests folder
- Register this component in src/index.js
- Write stories which use your component as a template in src/stories
- Run `npm run storybook` to author your components by having a development environment
- Run lint and tests before commiting anything


