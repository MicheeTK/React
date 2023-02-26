export default function SilentGen(props) {
  const isSilentGen = props.age > 78;
  return (
    <div>
      {isSilentGen && (
        <p>
          {props.name} &emsp; {props.age} &emsp; {props.race}
        </p>
      )}
    </div>
  );
}
