import "./Button.css";
export const Button = (props) => {
  return (
    <div>
      <button className={props.className} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};
