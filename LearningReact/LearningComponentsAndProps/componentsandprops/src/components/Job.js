export default function Job(props) {
  const { salary, position, company } = props;
  return (
    <div>
      <p>Salary: {salary}</p>
      <p>Position: {position}</p>
      <p>Company: {company}</p>
    </div>
  );
}
