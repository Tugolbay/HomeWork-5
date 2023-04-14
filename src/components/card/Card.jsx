import { Button } from "../buttons/Buttons";
import { Main } from "../main/Main";
import "./Card.css";
export const Card = ({ movie }) => {
  return (
    <div className="cartochka">
      {movie.map((el) => {
        return <Main el={el} />;
      })}
    </div>
  );
};
