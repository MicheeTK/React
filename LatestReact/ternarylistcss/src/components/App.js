import "./App.css";
import Youngster from "./Youngster";

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
  const classifyCitizens = true;
  return (
    <div className="App">
      {classifyCitizens ? (
        users.map((user, key) => (
          <Youngster name={user.name} age={user.age} key={key} />
        ))
      ) : (
        <p>Not a youngster</p>
      )}
    </div>
  );
}

export default App;
