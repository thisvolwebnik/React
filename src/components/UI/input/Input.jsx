import classes from "./Input.module.css";

export const Input = (props) => {
  const { type, placeholder } = props;

  return (
    <input
      className={classes.input}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};
