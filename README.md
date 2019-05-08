This was created for an [article about use memo](https://tsh.io/blog/). It goes through every scenario listed in scenarios.ts, rendering the given components 10000 times, and measuring how long did it take. It reloads itself a lot, to test mount performance as well.

Every scenario consists of a component to render, that has an int passed as a prop, and a couple of parameters:

- limit: how many tames will the component render,
- frequency: how often will the actual prop value change,
- name: scenario name,
- repeat: how many times will the scenario be perofrmed. Each new repeat is started by a reload, so the number of repeats should be high when measuring mount performance.

The project may (or not, nobody knows the future :) ) get upgraded in the future, for easier scenarios customization and prettier looks.

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

#### Profiler is disabled in production builds - there won't be any profiling going on. App can be built and used for profiling if NODE_ENV is forced to not be "production" in react-scripts

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
