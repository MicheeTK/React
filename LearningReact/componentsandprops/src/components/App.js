import "./App.css";
import Job from "./Job";

export default function App() {
  const jobListingdb = [
    {
      id: Date.now(),
      position: "Web dev",
      company: "Twitter",
      location: "Cape Town",
      description: "create awesome and attractive webpages.",
    },

    {
      id: Date.now(),
      position: "Software dev",
      company: "Tesla",
      location: "Johannesburg",
      description: "create improve self-driving features",
    },

    {
      id: Date.now(),
      position: "ML Engineer",
      company: "SpaceX",
      location: "Bloemfontein",
      description: "help compute rocket trajectory using Machine Learning",
    },
  ];
  return (
    <div className="App">
      {jobListingdb.map((job) => (
        <Job
          id={job.id}
          position={job.position}
          company={job.company}
          location={job.location}
          description={job.description}
        />
      ))}
    </div>
  );
}
