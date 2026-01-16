import classes from "./Button.module.css";

export const Button = (props) => {
  const { children, type = "button", disabled = false } = props;

  return (
    <button
      className={classes.button}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
