export default function GenX(props) {
  const isGenX = props.age < 59 && props.age > 42;
  return (
    <div>
      {isGenX && (
        <p>
          {props.name} &emsp; {props.age} &emsp; {props.race}
        </p>
      )}
    </div>
  );
}
