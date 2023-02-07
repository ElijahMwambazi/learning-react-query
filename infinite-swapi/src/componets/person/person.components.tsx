export type PersonProps = {
  name: string;
  mass: string;
  height: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  created: string;
};

const Person = ({
  name,
  height,
  mass,
  eyeColor,
  hairColor,
  skinColor,
  created,
}: PersonProps) => {
  return (
    <div className="person">
      <h3>{name}</h3>
      <ul>
        <li>
          <span>height:</span> {height}
        </li>
        <li>
          <span>mass:</span> {mass}
        </li>
        <li>
          <span>eyes:</span> {eyeColor}
        </li>
        <li>
          <span>hair color:</span> {hairColor}
        </li>
        <li>
          <span>skin color:</span> {skinColor}
        </li>
        <li>
          <span>created:</span>{" "}
          {created.slice(0, 10)}
        </li>
      </ul>
    </div>
  );
};

export default Person;
