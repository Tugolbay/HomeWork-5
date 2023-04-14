import { Button } from "../buttons/Buttons";
import { Input } from "../inputs/Input";
import "./NewModal.css";
import { useState } from "react";
export const NewModal = ({ onClick, onSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputImage, setInputImage] = useState("");

  function getInputValue(e) {
    setInputText(e.target.value);
    console.log(e.target.value);
  }
  function getInputNumberValue(e) {
    setInputNumber(e.target.value);
    console.log(e.target.value);
  }
  function getInputImageValue(e) {
    setInputImage(e.target.value);
    console.log(e.target.value);
  }

  function submitModal() {
    const data = {
      title: inputText,
      rating: inputNumber,
      img: inputImage,
    };
    onSubmit(data);
    setInputText("");
    setInputNumber("");
    setInputImage("");
  }
  return (
    <div>
      <div className="modalContainer">
        <Input
          onChange={getInputValue}
          value={inputText}
          type="text"
          placeholder="Movie title"
          className="inputModal1"
        />
        <Input
          onChange={getInputNumberValue}
          value={inputNumber}
          placeholder="Movie rating"
          className="inputModal2"
        />
        <Input
          onChange={getInputImageValue}
          value={inputImage}
          placeholder="Movie link"
          className="inputModal3"
        />
        <Button onClick={onClick} className="modalBtn1">
          Отмена
        </Button>
        <Button onClick={submitModal} className="modalBtn2">
          Добавить
        </Button>
      </div>
    </div>
  );
};
