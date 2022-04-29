import s from "./Button.module.css";

export default function Button({style, type, title, onClick}) {

  return (
    <button className={s[style]} type={type} onClick={onClick}>{title}</button>
  );
}
