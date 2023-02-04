import "./App.css";
import Job from "./components/Job";

export default function App() {
  return (
    <div className="App">
      <Job salary={1500} position="Junior dev" company="Amazon" />
      <Job salary={3500} position="Senior dev" company="Google" />
      <Job salary={4000} position="Project Manager" company="Tesla" />
    </div>
  );
}
