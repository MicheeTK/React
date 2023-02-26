import "./App.css";
import Youngster from "./Youngster";
import AllCitizens from "./AllCitizens";

function App() {
  const users = [
    { name: "Jean", age: 74, height: 1.76 },
    { name: "Marie", age: 21, height: 1.74 },
    { name: "Jules", age: 55, height: 1.82 },
    { name: "Adele", age: 22, height: 1.66 },
    { name: "Micah", age: 42, height: 1.71 },
    { name: "Megan", age: 20, height: 1.68 },
    { name: "Arthur", age: 19, height: 1.68 },
    { name: "Mark", age: 18, height: 1.58 },
  ];
  const typeOfcitizens = "junior";
  let youth = false;

  switch (typeOfcitizens) {
    case "junior":
      youth = true;
      break;

    default:
      break;
  }
  return (
    <div className="App">
      {youth ? (
        <h2>List of fresh blooded citizens</h2>
      ) : (
        <h2>List of All citizens</h2>
      )}

      {youth
        ? users.map((user, key) => (
            <Youngster name={user.name} age={user.age} key={key} />
          ))
        : users.map((user, key) => (
            <AllCitizens name={user.name} age={user.age} key={key} />
          ))}
    </div>
  );
}

export default App;
