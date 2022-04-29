import s from "./DeleteButton.module.css";

export default function DeleteButton({type, title, onClick}) {


  return (
    <button type={type} onClick={onClick}>{title}</button>
  );
}
