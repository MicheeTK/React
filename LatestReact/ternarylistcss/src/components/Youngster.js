export default function Youngster(props) {
  return (
    <div>
      {props.age < 25 && (
        <p>
          {props.name} : {props.age}
        </p>
      )}
    </div>
  );
}
