import { Species } from "../../api/services/star-wars.api";

export type SpeciesProps = Omit<Species, "id">;

const Species = ({
  name,
  language,
  averageLifespan,
}: SpeciesProps) => {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>
          average lifespan: {averageLifespan}
        </li>
      </ul>
    </li>
  );
};

export default Species;
