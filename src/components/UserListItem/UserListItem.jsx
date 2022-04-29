import { useState } from "react";
import s from "./UserListItem.module.css";

export default function UserListItem({user}) {
  const {id, name, email, gender, status} = user;

  const [selected, setSelected] = useState(false);

  function toggle() {
    setSelected((isSelected) => !isSelected);
  }

  return (
    <div className={s.wrapper}>
      <input type="checkbox" onChange={toggle} checked={selected} id={id}/>
      <div className={s.userData}>
        <p>{name}</p>
        <p>{email}</p>
      </div>
      <p>{gender}</p>
      <p>{status}</p>
    </div>
  );
}
