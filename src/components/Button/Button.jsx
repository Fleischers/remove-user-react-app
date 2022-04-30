import s from "./Button.module.css";

export default function Button({
  className,
  type,
  title,
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={s[className]}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
