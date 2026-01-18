import classes from "./Button.module.css";
import classNames from "classnames";

export const Button = (props) => {
  const {
    children,
    type = "button",
    disabled = false,
    paginationActive = false,
    onClick,
  } = props;

  return (
    <button
      className={classNames(classes.button, {
        [classes.active]: paginationActive,
      })}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
