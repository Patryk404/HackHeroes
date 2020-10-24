# Health Journal API

<img  src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/logo.png">

#### API allows you to retrieve information and perform operations on a user who is in the database.

## Overview

1. To use the API correctly, you need a `token` which you can get by logging in or registering.
2. The API works in the `JSON` format.
3. API calls will match the corresponding HTTP state codes for all requests.

## Authentication
The API token must be sent as part of any request in the form of a `Authorization` header containing the `Bearer` text before the token value. More about tokenization can be found here: https://jwt.io/introduction/.

Example:

`Bearer egjhfdyjtoken`

## API documentation

### Auth
* #### POST 
`https://healthjournalapi.herokuapp.com/auth/login`
* * Headers:
```sh
"Content-Type": "application/json"
```
* * Body: 
```json
{
	"username": "your_username",
	"password": "your_password"
}
```
*  * Example Response: 
```jsjson
{
	"message": "Logged",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTAzYWI4MmFhOWNmMWYwY2NiMzk5ZSIsImlhdCI6MTYwMzUyODUxOX0.jhWyNF3wbbhQt94D1ZUp0YNhBFqnjveiPefWzN1Sgfdshg"
}
```
* * Description:
Logs the user in.
* #### POST
`https://healthjournalapi.herokuapp.com/auth/signup`
* * Headers: 
```sh
"Content-Type": "application/json"
```
* * Body: 
```json
{
	"email": "example@email",
	"username": "your_username",
	"password": "your_password",
	"gender": "Male"
}
```
*  * Example Response: 
```json
{
	"message": "Succesfully created account",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTAzYWI4MmFhOWNmMWYwY2NiMzk5ZSIsImlhdCI6MTYwMzUyODUxOX0.jgfdlhgkdsfhgkjshgishgasd"
}
```
* * Description:
Registers the user.
***
### Me
* #### GET
`https://healthjournalapi.herokuapp.com/me`
* * Headers: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Example Response:
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
* * Description:
Retrieves data about the user.
* #### PUT

`https://healthjournalapi.herokuapp.com/me`
* * Headers: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Body:
```json
{
	"Height": 180,
	"Weight": 72,
	"BMI": 22.22
}
```
* * Example Response:
```json
{
	"message": "Successfuly updated Informations"
}
```
* * Description:
Updates data such as height, weight and BMI.
***
### Calories
* #### GET
`https://healthjournalapi.herokuapp.com/calories`
* * Headers: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Example Response :
```json
{
	"calories": 0,
	"calories_range": 2500
}
```
* * Description:
Gets calories and their range.
* #### GET
`https://healthjournalapi.herokuapp.com/calories/average`
* * Headers: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Example Response: 
```json
{
	"average": 1000
}
```
* * Description:
Gets the average of calories for the last 7 days.
* #### GET
`https://healthjournalapi.herokuapp.com/calories/food`
* * Headers:
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Example Response:
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
* * Description:
Retrieves all of the user's products.
* #### GET
`https://healthjournalapi.herokuapp.com/calories/history`
* * Headers:
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Example Response: 
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
* * Description:
Gets the user's calorie history.
* #### POST 
`https://healthjournalapi.herokuapp.com/calories/food`
* * Headers:
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Body:
```json
{
	"title": "bread",
	"calories": 100
}
```
* * Example Response: 
```json
{
	"message":  "Succesfully created Product"
}
```
* * Description:
Creates a new product.
* #### PUT
`https://healthjournalapi.herokuapp.com/calories/eatfood/:id`
* * Headers:
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Body:
```json
{

}
```
* * Example Response:
```json
{
	"message":  "Food was eaten"
}
```
* * Description:
Updates user calories by adding product calories.
* #### DELETE
`https://healthjournalapi.herokuapp.com/calories/food/:id`
* * Headers:
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Example Response:
```json
{
	"message": "Succesfully deleted product"
}
```
* * Description:
	Usuwa produkt.
* #### PATCH
`https://healthjournalapi.herokuapp.com/calories/intake`
* * Headers: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Body:
```json
{
	"intake": 2000
}
```
* * Example Response:
```json
{
	"message":  "Succesfully patch caloriesIntake"
}
```
* * Description:
Updates the user's calorie range.
***
### Sleep
* #### GET
`https://healthjournalapi.herokuapp.com/sleep`
* * Headers: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
 * * Example Response: 
 ```json
 {
	"sleep": false	 
 }
 ```
 * * Description
Gets whether the user is sleeping
 * #### GET
 `https://healthjournalapi.herokuapp.com/sleep/history`
 * * Headers: 
```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
 * * Example Response: 
 ```json
 {
	"sleep": false	 
 }
 ```
 * * Description:
Retrieves sleep histories.
 * #### GET
 `https://healthjournalapi.herokuapp.com/sleep/average`
 * * Headers:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
 * * Example Response
 ```json
 {
	"hours":  9,
	"minutes":  20
}
 ```
  * * Description:
Gets your average sleep for 7 days.
 * #### PUT
`https://healthjournalapi.herokuapp.com/sleep/gotosleep`
 * * Headers:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Body: 
```json
{
	
}
```
* * Example Response: 
```json
{
	"message":  "You sleep"
}
```
 * * Description:
Updates the user's sleep state to `true`.
* #### PUT
`https://healthjournalapi.herokuapp.com/sleep/wakeup`
 * * Headers:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Body: 
```json
{
	
}
```
* * Example Response: 
```json
{
	"hours":  0,
	"minutes":  3	
}
```
 * * Description:
Updates the user's sleep state to `false`.
***
### Water
* #### GET
`https://healthjournalapi.herokuapp.com/water`
 * * Headers:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Example Response: 
```json
{
	"cups":  0
}
```
 * * Description:
Takes a number of cups of water.
* #### GET 
`https://healthjournalapi.herokuapp.com/water/history`
 * * Headers:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Example Response: 
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
* * Description:
Gets a history of the number of cups of water.
* #### PUT
`https://healthjournalapi.herokuapp.com/water/plus`
 * * Headers:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Body:
```json
{

}
```
* * Example Response: 
```json
{
	"message":  "updated cups"
}
```
* * Description:
Updates the number of cups of water by adding one.
* #### PUT
`https://healthjournalapi.herokuapp.com/water/minus`
 * * Headers:
 ```sh
"Content-Type": "application/json",
"Authorization": "Bearer mytoken"
```
* * Body:
```json
{

}
```
* * Example Response: 
```json
{
	"message":  "updated cups"
}
```
* * Description:
Updates the number of cups of water by subtracting one.
## Technologies
* <a href="https://nodejs.org/en/">node.js</a>
* <a href="https://expressjs.com/">express.js</a>
* <a href="https://www.npmjs.com/package/body-parser">body-parser</a>
* <a href="https://helmetjs.github.io/">helmet</a>
* <a href="https://mongoosejs.com/">mongoose</a>
* <a href="https://jwt.io/">jsonwebtoken</a>
* <a href="https://www.npmjs.com/package/bcrypt">bcrypt</a>

## Local installation

If you want to install the API locally download <a href="https://nodejs.org/en/">node.js</a>. Start the `npm install` in this folder and then the `npm start` command.