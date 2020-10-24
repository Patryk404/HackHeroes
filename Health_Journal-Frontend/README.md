# Health Journal App
<img src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/logo.png">

Android health app using my API.
More detailed description: <a href="https://github.com/Patryk404/Health_Journal/blob/master/README_PL.md"> here </a>

🇺🇸 English | 🇵🇱 <a  href="https://github.com/Patryk404/Health_Journal/blob/master/Health_Journal-Frontend/README_PL.md">Click here to see Polish readme</a>
## Technologies
The front-end was created thanks to:
* <a  href="https://reactnative.dev/">React Native</a>
* <a  href="https://react-redux.js.org/">React Redux</a>
* <a  href="https://reactnavigation.org/">React Navigation</a>
* <a  href="https://github.com/oblador/react-native-keychain">React Native Keychain</a>
* <a  href="https://reactnativeelements.com/">React Native Elements</a>
* <a  href="https://github.com/oblador/react-native-vector-icons">React Native Vector Icons</a>
* <a  href="https://www.npmjs.com/package/react-native-material-dropdown-v2">React Native Material Dropdown v2</a>
* <a  href="https://www.npmjs.com/package/react-native-percentage-circle">React Native Percentage Circle</a>
* <a  href="https://redux.js.org/">Redux</a>
* <a  href="https://github.com/axios/axios">Axios</a>
## Installation
If you want to see the project from the kitchen you have to install <a  href="https://developer.android.com/studio">Android Studio</a>. 
Then follow the instructions: https://reactnative.dev/docs/environment-setup. 
Install <a  href="https://nodejs. org/en/">node. js</a>.
 In the folder call `npm install`.
 Go to the `node_modules` folder, find the folder called `react-native-percentage-circle` and edit the file `index.js`, removing from it:
```JavaScript
propTypes: {
	color: React.PropTypes.string,
	bgcolor: React.PropTypes.string,
	innerColor: React.PropTypes.string,
	radius: React.PropTypes.number,
	percent: React.PropTypes.number,
	borderWidth: React.Proptypes.number,
	textStyle: React.Proptypes.array,
	disabled: React.PropTypes.bool,
}
```
Then generate the file `debug.keystore` in the `android/app` folder through the command `keytool -genkey -v -keystore debug.keystore -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`.
Finally, compile the application in the Android Studio and run in the folder command `npm start`.
