export default function Job(props) {
  const salary = props.salary;
  const position = props.position;
  const company = props.company;
  return (
    <div>
      <p>Salary: {salary}</p>
      <p>Position: {position}</p>
      <p>Company: {company}</p>
    </div>
  );
}
