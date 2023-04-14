import "./Input.css";
export const Input = (props) => {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
};
