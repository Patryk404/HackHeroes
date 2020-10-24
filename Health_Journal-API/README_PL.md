# Health Journal API
<img src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/logo.png">

#### API pozwala na pobieranie informacji i wykonywanie operacji na użytkowniku, który znajduje się w bazie danych.

## Przegląd
1. Do poprawnego posługiwania się API, potrzebujesz `token`, który możesz uzyskać poprzez zalogowanie się lub zarejestrowanie.
2. API operuje na formacie `JSON`.
3. Wywołania API będą odpowiadać odpowiednimi kodami stanu HTTP dla wszystkich żądań.

## Uwierzytelnianie
Token API musi być wysłany jako część każdego żądania w postaci nagłówka `Authorization` zawierającego przed wartością tokena tekst `Bearer`. Więcej o tokenizacji można znaleźć tutaj: https://jwt.io/introduction/
* Przykład: 
`Bearer egjhfdyjtoken`

## Dokumentacja API

### Auth
* #### POST 
`https://healthjournalapi.herokuapp.com/auth/login`
* * Nagłówki:
```sh
"Content-Type": "application/json"
```
* * Ciało: 
```json
{
	"username": "your_username",
	"password": "your_password"
}
```
*  * Przykładowa odpowiedź: 
```jsjson
{
	"message": "Logged",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTAzYWI4MmFhOWNmMWYwY2NiMzk5ZSIsImlhdCI6MTYwMzUyODUxOX0.jhWyNF3wbbhQt94D1ZUp0YNhBFqnjveiPefWzN1Sgfdshg"
}
```
* * Opis:
Loguje użytkownika.
* #### POST
`https://healthjournalapi.herokuapp.com/auth/signup`
* * Nagłówki: 
```sh
"Content-Type": "application/json"
```
* * Ciało: 
```json
{
	"email": "example@email",
	"username": "your_username",
	"password": "your_password",
	"gender": "Male"
}
```
*  * Przykładowa odpowiedź: 
```json
{
	"message": "Succesfully created account",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTAzYWI4MmFhOWNmMWYwY2NiMzk5ZSIsImlhdCI6MTYwMzUyODUxOX0.jgfdlhgkdsfhgkjshgishgasd"
}
```
* * Opis:
Rejestruje użytkownika.
***
### Me
* #### GET
`https://healthjournalapi.herokuapp.com/me`
* * Nagłówki: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Przykładowa odpowiedź:
```json
{
	"gender":  "Male",
	"height":  180,
	"weight":  72,
	"BMI":  22.22,
	"hours":  9,
	"minutes":  10,
	"water":  3,
	"calorie":  1000
}
```
* * Opis:
Pobiera dane na temat użytkownika.
* #### PUT

`https://healthjournalapi.herokuapp.com/me`
* * Nagłówki: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Ciało:
```json
{
	"Height": 180,
	"Weight": 72,
	"BMI": 22.22
}
```
* * Przykładowa odpowiedź:
```json
{
	"message": "Successfuly updated Informations"
}
```
* * Opis:
	Aktualizuje dane takie jak wzrost, waga oraz BMI.
***
### Calories
* #### GET
`https://healthjournalapi.herokuapp.com/calories`
* * Nagłówki: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Przykładowa odpowiedź :
```json
{
	"calories": 0,
	"calories_range": 2500
}
```
* * Opis:
	Pobiera kalorie oraz ich zakres.
* #### GET
`https://healthjournalapi.herokuapp.com/calories/average`
* * Nagłówki: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Przykładowa odpowiedź: 
```json
{
	"average": 1000
}
```
* * Opis:
	Pobiera Średnią kalorii z ostatnich 7 dni.
* #### GET
`https://healthjournalapi.herokuapp.com/calories/food`
* * Nagłówki:
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Przykładowa odpowiedź:
```json
{
	"food": [
		{
		"_id":  "5f93efbd27e740000443f421",
		"title":  "bread",
		"calories":  1000,
		"person":  "5f93e8c26cff6c0004289999",
		"__v":  0
		}
	]
}
```
* * Opis:
	Pobiera wszystkie produkty użytkownika.
* #### GET
`https://healthjournalapi.herokuapp.com/calories/history`
* * Nagłówki:
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Przykładowa odpowiedź: 
```json
{
	"history":  [
		{
		"meet":  false,
		"_id":  "5f9409ecf202be000446bc9q",
		"calories":  0,
		"calories_range":  2500,
		"date":  "2020-10-23T10:41:38.632Z"
		}
	]
}
```
* * Opis:
	Pobiera historie kalorii użytkownika.
* #### POST 
`https://healthjournalapi.herokuapp.com/calories/food`
* * Nagłówki:
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Ciało:
```json
{
	"title": "bread",
	"calories": 100
}
```
* * Przykładowa odpowiedź: 
```json
{
	"message":  "Succesfully created Product"
}
```
* * Opis:
	Tworzy nowy produkt.
* #### PUT
`https://healthjournalapi.herokuapp.com/calories/eatfood/:id`
* * Nagłówki:
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Ciało:
```json
{

}
```
* * Przykładowa odpowiedź:
```json
{
	"message":  "Food was eaten"
}
```
* * Opis:
	Aktualizuje kalorie użytkownika poprzez dodanie kalorii produktu.
* #### DELETE
`https://healthjournalapi.herokuapp.com/calories/food/:id`
* * Nagłówki:
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Przykładowa odpowiedź:
```json
{
	"message": "Succesfully deleted product"
}
```
* * Opis:
	Usuwa produkt.
* #### PATCH
`https://healthjournalapi.herokuapp.com/calories/intake`
* * Nagłówki: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Ciało:
```json
{
	"intake": 2000
}
```
* * Przykładowa odpowiedź:
```json
{
	"message":  "Succesfully patch caloriesIntake"
}
```
* * Opis:
	Aktualizuje zakres kalorii użytkownika.
***
### Sleep
* #### GET
`https://healthjournalapi.herokuapp.com/sleep`
* * Nagłówki: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
 * * Przykładowa odpowiedź: 
 ```json
 {
	"sleep": false	 
 }
 ```
 * * Opis
	 Pobiera, czy użytkownik śpi
 * #### GET
 `https://healthjournalapi.herokuapp.com/sleep/history`
 * * Nagłówki: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
 * * Przykładowa odpowiedź: 
 ```json
 {
	"sleep": false	 
 }
 ```
 * * Opis:
	Pobiera historie snu.
 * #### GET
 `https://healthjournalapi.herokuapp.com/sleep/average`
 * * Nagłówki:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
 * * Przykładowa odpowiedź
 ```json
 {
	"hours":  9,
	"minutes":  20
}
 ```
  * * Opis:
	Pobiera średnią snu z 7 dni. 
 * #### PUT
`https://healthjournalapi.herokuapp.com/sleep/gotosleep`
 * * Nagłówki:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Ciało: 
```json
{
	
}
```
* * Przykładowa odpowiedź: 
```json
{
	"message":  "You sleep"
}
```
 * * Opis:
	Aktualizuje stan snu użytkownika na `true`.
* #### PUT
`https://healthjournalapi.herokuapp.com/sleep/wakeup`
 * * Nagłówki:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Ciało: 
```json
{
	
}
```
* * Przykładowa odpowiedź: 
```json
{
	"hours":  0,
	"minutes":  3	
}
```
 * * Opis:
	Aktualizuje stan snu użytkownika na `false`.
***
### Water
* #### GET
`https://healthjournalapi.herokuapp.com/water`
 * * Nagłówki:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Przykładowa odpowiedź: 
```json
{
	"cups":  0
}
```
 * * Opis:
	Pobiera ilość kubków wody.
* #### GET 
`https://healthjournalapi.herokuapp.com/water/history`
 * * Nagłówki:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Przykładowa odpowiedź: 
```json
{
	"history":  [
		{
		"_id":  "5f9409ecf202be000446bc20",
		"cups":  10,
		"date":  "2020-10-23T10:41:38.632Z"
		}
	]
}
```
* * Opis:
	Pobiera historie ilości kubków wody.
* #### PUT
`https://healthjournalapi.herokuapp.com/water/plus`
 * * Nagłówki:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Ciało:
```json
{

}
```
* * Przykładowa odpowiedź: 
```json
{
	"message":  "updated cups"
}
```
* * Opis:
	Aktualizuje ilość kubków wody poprzez dodanie jednego.
* #### PUT
`https://healthjournalapi.herokuapp.com/water/minus`
 * * Nagłówki:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Ciało:
```json
{

}
```
* * Przykładowa odpowiedź: 
```json
{
	"message":  "updated cups"
}
```
* * Opis:
	Aktualizuje ilość kubków wody poprzez odjęcie jednego.

## Technologie
* <a href="https://nodejs.org/en/">node.js</a>
* <a href="https://expressjs.com/">express.js</a>
* <a href="https://www.npmjs.com/package/body-parser">body-parser</a>
* <a href="https://helmetjs.github.io/">helmet</a>
* <a href="https://mongoosejs.com/">mongoose</a>
* <a href="https://jwt.io/">jsonwebtoken</a>
* <a href="https://www.npmjs.com/package/bcrypt">bcrypt</a>

## Instalacja lokalna
Jeśli chcesz zainstalować API lokalnie pobierz <a href="https://nodejs.org/en/">node.js</a>. Uruchom `npm install` w tym folderze, a następnie polecenie `npm start`.