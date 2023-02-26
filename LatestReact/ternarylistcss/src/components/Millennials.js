export default function Millenials(props) {
  const isMillenial = props.age < 43 && props.age > 26;
  return (
    <div>
      {isMillenial && (
        <p>
          {props.name} &emsp; {props.age} &emsp; {props.race}
        </p>
      )}
    </div>
  );
}
