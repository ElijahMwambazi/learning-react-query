import { Person } from "../../api/services/star-wars.api";

export type PersonProps = Omit<Person, "id">;

const Person = ({
  name,
  hairColor,
  eyeColor,
}: PersonProps) => {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  );
};

export default Person;
