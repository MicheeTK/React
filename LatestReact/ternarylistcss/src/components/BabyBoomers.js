export default function BabyBoomers(props) {
  const isBabyBoomer = props.age < 78 && props.age > 58;
  return (
    <>
      {isBabyBoomer && (
        <p>
          {props.name} &emsp; {props.age} &emsp; {props.race}
        </p>
      )}
    </>
  );
}
