export default function GenAlpha(props) {
  const isGenAlpha = props.age < 11;
  return (
    <div>
      {isGenAlpha && (
        <p>
          {props.name} &emsp; {props.age} &emsp; {props.race}
        </p>
      )}
    </div>
  );
}
