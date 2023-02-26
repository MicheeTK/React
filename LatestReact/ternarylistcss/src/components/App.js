import "./App.css";
import Empty from "./Empty";
import SilentGen from "./SilentGen";
import BabyBoomers from "./BabyBoomers";
import GenX from "./GenX";
import Millenials from "./Millennials";
import GenZ from "./GenZ";
import GenAlpha from "./GenAlpha";
import AllCitizens from "./AllCitizens";
//Assume we have a database of people then we want to render the list of people in the data base based on there generation.
function App() {
  const users = [
    { name: "Jean", age: 74, height: 1.76, race: "blonde" },
    { name: "Marie", age: 21, height: 1.74, race: "ginger" },
    { name: "Jules", age: 55, height: 1.82, race: "african" },
    { name: "Adele", age: 9, height: 1.23, race: "brunette" },
    { name: "Micah", age: 42, height: 1.71, race: "indian" },
    { name: "Megan", age: 110, height: 1.68, race: "caucasian" },
    { name: "Arthur", age: 19, height: 1.68, race: "black" },
    { name: "Mark", age: 108, height: 1.75, race: "hispanic" },
    { name: "Louise", age: 94, height: 1.76, race: "blonde" },
    { name: "Elizabeth", age: 81, height: 1.64, race: "ginger" },
    { name: "Anele", age: 35, height: 1.77, race: "african" },
    { name: "Kate", age: 28, height: 1.56, race: "brunette" },
    { name: "Micael", age: 52, height: 1.91, race: "indian" },
    { name: "Muller", age: 24, height: 1.88, race: "caucasian" },
    { name: "Chris", age: 17, height: 1.68, race: "Bantu" },
    { name: "Grace", age: 12, height: 1.45, race: "hispanic" },
  ];
  const typeOfcitizens = "genAlpha";

  let allCitizens,
    traditionalists,
    babyBoomers,
    genX,
    millenials,
    genZ,
    genAlpha = false;

  switch (typeOfcitizens) {
    case "traditionalists":
      traditionalists = true;
      break;

    case "babyBoomers":
      babyBoomers = true;
      break;

    case "genX":
      genX = true;
      break;

    case "millenials":
      millenials = true;
      break;

    case "genZ":
      genZ = true;
      break;

    case "genAlpha":
      genAlpha = true;
      break;

    default:
      allCitizens = true;
      break;
  }
  return (
    <div className="App">
      {traditionalists ? <h2>Citizens born between 1928-1945</h2> : <></>}
      {traditionalists ? users.map((user, key) => <SilentGen name={user.name} age={user.age} race={user.race} key={key} />) : <Empty />}

      {babyBoomers ? <h2>Citizens born between 1946-1964</h2> : <></>}
      {babyBoomers ? users.map((user, key) => <BabyBoomers name={user.name} age={user.age} race={user.race} key={key} />) : <Empty />}

      {genX ? <h2>Citizens born between 1965-1980</h2> : <></>}
      {genX ? users.map((user, key) => <GenX name={user.name} age={user.age} race={user.race} key={key} />) : <Empty />}

      {millenials ? <h2>Citizens born between 1981-1996</h2> : <></>}
      {millenials ? users.map((user, key) => <Millenials name={user.name} age={user.age} race={user.race} key={key} />) : <Empty />}

      {genZ ? <h2>Citizens born between 1997-2012</h2> : <></>}
      {genZ ? users.map((user, key) => <GenZ name={user.name} age={user.age} race={user.race} key={key} />) : <Empty />}

      {genAlpha ? <h2>Citizens born between 2010s-2025</h2> : <></>}
      {genAlpha ? users.map((user, key) => <GenAlpha name={user.name} age={user.age} race={user.race} key={key} />) : <Empty />}

      {allCitizens && <h2>List of all Citizens</h2>}
      {allCitizens ? users.map((user, key) => <AllCitizens name={user.name} age={user.age} race={user.race} key={key} />) : <Empty />}
    </div>
  );
}

export default App;
