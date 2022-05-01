import s from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({
  btnClass,
  type,
  title,
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={s[btnClass]}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
