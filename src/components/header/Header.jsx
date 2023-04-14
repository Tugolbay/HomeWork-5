import { Button } from "../buttons/Buttons";
import "./Header.css";
import { NewModal } from "../newModal/NewModal";
import { useState } from "react";
export const Header = ({ onSubmit }) => {
  const [newModal, setNewModal] = useState(false);

  function openModal() {
    setNewModal(true);
  }
  function clowseModal() {
    setNewModal((prev) => !prev);
  }
  return (
    <div>
      <header className="header">
        <div className="header-text">Favorite Movies</div>
        {newModal ? <NewModal onSubmit={onSubmit} onClick={clowseModal} /> : []}
        <Button onClick={openModal} className="addMovie-button">
          ADD MOVIE
        </Button>
      </header>
    </div>
  );
};
