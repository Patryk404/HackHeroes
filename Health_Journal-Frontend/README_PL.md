# Health Journal App
<img src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/logo.png">

Aplikacja o zdrowiu, na androida korzystająca z mojego API.
Dokładniejszy opis: <a href="https://github.com/Patryk404/Health_Journal/blob/master/README_PL.md">tutaj</a>

🇺🇸 <a  href="https://github.com/Patryk404/Health_Journal/blob/master/Health_Journal-Frontend/README.md">Click here to see English readme</a> | 🇵🇱 Polish
## Technologie 
Front-end został stworzony dzięki: 
* <a href="https://reactnative.dev/">React Native</a>
* <a href="https://react-redux.js.org/">React Redux</a>
* <a href="https://reactnavigation.org/">React Navigation</a>
* <a href="https://github.com/oblador/react-native-keychain">React Native Keychain</a>
* <a href="https://reactnativeelements.com/">React Native Elements</a>
* <a href="https://github.com/oblador/react-native-vector-icons">React Native Vector Icons</a>
* <a href="https://www.npmjs.com/package/react-native-material-dropdown-v2">React Native Material Dropdown v2</a>
* <a href="https://www.npmjs.com/package/react-native-percentage-circle">React Native Percentage Circle</a>
* <a href="https://redux.js.org/">Redux</a>
* <a href="https://github.com/axios/axios">Axios</a>
## Instalacja
Jeśli chcesz zobaczyć projekt od kuchni musisz zainstalować <a href="https://developer.android.com/studio">Android Studio</a>. 
Później postępuj zgodnie z intrukcjami:  https://reactnative.dev/docs/environment-setup.
Zainstaluj <a href="https://nodejs.org/en/">node.js</a>.
W folderze wywołaj `npm install`.
Wejdź do folderu `node_modules`, znajdź folder o nazwie `react-native-percentage-circle` i edytuj plik `index.js`, usuwając z niego:
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
Następnie wygeneruj plik `debug.keystore` w folderze `android/app` poprzez komendę `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
Na końcu skompiluj aplikacje w Android Studio oraz uruchom w folderze komendę `npm start`.

## Zrzuty ekranu
<img height="300" width="175" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/login.png">
<img height="300" width="175"  src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/register.png">
<img height="300" width="175" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/calories.png">
<img height="300" width="175" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/products.png">
<img height="300" width="175" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/addproduct.png">
<img height="300" width="175" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/calorieshistory.png">
<img height="300" width="175" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/water.png">
<img height="300" width="175" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/waterhistory.png">
<img height="300" width="175" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/sleep.png">
<img height="300" width="175" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/sleephistory.png">
<img height="300" width="175"  src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/covid.png">
<img height="300" width="175"  src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/profile.png">
<img height="300" width="175"  src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/bmiinfo.png">
<img height="300" width="175"  src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/bmicalculator.png">