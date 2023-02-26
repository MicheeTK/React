export default function GenZ(props) {
  const isgenZ = props.age < 27 && props.age > 10;
  return (
    <div>
      {isgenZ && (
        <p>
          {props.name} &emsp; {props.age} &emsp; {props.race}
        </p>
      )}
    </div>
  );
}
