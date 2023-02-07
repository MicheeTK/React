export default function Job(props) {
  const { id, position, company, location, description } = props.details;
  return (
    <div>
      <b>ID: </b> {id}
      <br />
      <b>Position: </b> {position}
      <br />
      <b>Company: </b> {company}
      <br />
      <b>Location: </b> {location}
      <br />
      <b>Description: </b> {description}
      <br />
      <br />
    </div>
  );
}
