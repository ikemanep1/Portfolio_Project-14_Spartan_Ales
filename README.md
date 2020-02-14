<!-- 
# _Ike's solar calculator!_

### _A place for learning about your age in relation to planets in our solar system._

### By _**Ike Esquivel-Pilloud**_

# Description

_This program is an age calculator. The user submits their age, and the result shows how old they would be on some different planets in our solar system, Mercury for example._

### Setup/Installation Requirements

* _1: download from Github_
* _2: open index.html in the browser_
* _3: navigate the page_
* _4: Submit an age for some educational information!_

# Known Bugs

_Tests 7 through 14 fail, though the code still works._

# specs
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| The program will take an age. | "21" | "21" |
| The program will take a life expectancy. | "100" | "100" |
| The program will divide the age by four different numbers, each representing a year's length on different planetary bodies in the solar system. | "21" | "87", "33", "11", "1"|
| The program will round down each of the numbers to a whole value. | "21" | "87", "33", "11", "1" |
| The program will subtract the age from the expectancy, and divide it by four different numbers, each representing a year's length on different planetary bodies in the solar system. | "100" | "329", "127", "42", "6"|
| The program will round down each of the life expectancy numbers to the nearest whole number. | "100" | "329", "127", "42", "6" |
| The program will display each of the four age numbers with a description of what they mean. | "21" | "age on mercury: 87 years", "age on venus: 33 years", "age on Mars: 11 years", "age on Jupiter: 1 years" |
| The program will display the expected life remainder for each planet | "100" | "Expected years to live on Mercury: 329 years", "Expected years to live on Venus: 127 years", "Expected years to live on Mars: 42 years", "Expected years to live on Jupiter: 6 years" |

### Support and contact details

_ike.esquivelpilloud@gmail.com_

### Technologies Used

_I used jquery, javaScript, and bootstrap along with atom and github. I also used the following:

-Babel
-ESlint
-Code Uglification
-Jest
-Webpack
-Plugins
-other


# License

_MIT licensing_

Copyright (c) 2019 **_Ike Esquivel-Pilloud_** -->

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
