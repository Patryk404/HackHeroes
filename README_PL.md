# Health Journal
<img src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/logo.png">

#### Aplikacja na androida, która kontroluje twoje podstawowe funkcje życiowe, takie jak: spanie, ilość kalorii oraz szklanki wody, liczy wskaźnik masy ciała. Śledzi również rozprzestrzenianie się groźnego wirusa, który obecnie panuje na całym świecie.

## O Projekcie
Projekt ma na celu pomóc nam kontrolować funkcje życiowe takie jak dieta, czas snu, czy ilość wody. Użytkownik posiada swój katalog produktów, który może dowolnie modyfikować i dostosowywać do swoich potrzeb oraz diety. Ma on także możliwość kontroli ilości snu czy też wody. Automatyczna historia pozwala na zobaczenie ile w danym dniu spaliśmy, wypiliśmy lub zjedliśmy. Kalkulator wskaźnika masy ciała pozwala nam kontrolować, czy jesteśmy w dobrej kondycji. Użytkownik może również obserwować sytuację pandemiczną w różnych krajach.

<img height="500" width="300" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/login.png">
<img height="500" width="300" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/calories.png">
<img height="500" width="300" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/covid.png">
<img height="500" width="300" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/water.png">
<img height="500" width="300" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/about.png">
<img height="500" width="300" src="https://raw.githubusercontent.com/Patryk404/Health_Journal/master/images/sleep.png">

## Technologia 
W swoim rozwiązaniu zdecydowałem się na użycie frameworka <a href="https://reactnative.dev/">React Native</a>. Dzięki niemu byłem w stanie stworzyć front-end swojej aplikacji, która korzysta z mojego autorskiego API oraz publicznego API <a href="https://disease.sh/">Covid-19</a>. Mój back-end wykorzystuje <a href="https://expressjs.com/">express.js</a> oraz komunikuje się z nierelacyjną bazą danych <a href="https://www.mongodb.com/">mongoDB</a>.
* Więcej o <a href="https://github.com/Patryk404/Health_Journal/blob/master/Health_Journal-API/README_PL.md">API</a>
* Więcej o <a href="https://github.com/Patryk404/Health_Journal/blob/master/Health_Journal-Frontend/README_PL.md">Aplikacji</a>

## Instalacja
Gotowy plik `.apk` znajduje się w folderze `build`, wystarczy go tylko wrzucić na swoje urządzenie z androidem i zainstalować. Gotowe rozwiązanie korzysta z API, które jest dostępne pod tym linkiem: https://healthjournalapi.herokuapp.com/.

## Konto do celów testowych
Jeśli nie chcesz rejestrować się w mojej aplikacji, możesz użyć konta testowego:
Nazwa Użytkownika: test
Hasło: test

## Przyszłość
* Historia produktów, które użytkownik spożył w dany dzień i o której godzinie. 
* Wykresy na ostatnie 7 dni, 1 miesiąc czy nawet cały rok, jeśli chodzi o średnią ilość snu czy kalorii. 
* Powiększenie możliwości katologu produktów, między innymi sortowanie ich według nazwy dnia dodania czy też częstości spożycia.
* Możliwość grupowania produktów według określonych warunków użytkownika czy też pór dnia. 
* Zakładka samopoczucie kontrolująca zdrowie psychiczne osoby.
* Więcej krajów i kontynentów w zakładce Covid-19
* Apka na IOS oraz rozwiązanie Webowe.