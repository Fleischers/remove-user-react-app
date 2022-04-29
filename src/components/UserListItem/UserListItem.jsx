import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./UserListItem.module.css";
import {addToSelected, removeFromSelected, selectUserIds} from '../../redux/UserList/userSlice'

export default function UserListItem({user}) {
  const {id, name, email, gender, status} = user;

  const [selected, setSelected] = useState(false);
  // const checked = useSelector((state) => {
  //   return state.userItem.userItemsSelected[id]
  // });

  const dispatch = useDispatch();

  function toggle(e) {
    setSelected((isSelected) => !isSelected);
    if (e.target.checked) {
      dispatch(addToSelected(id))
    } else {
      dispatch(removeFromSelected(id));
    }
  }


  return (
    <div className={s.wrapper}>
      <input type="checkbox" onChange={toggle} checked={selected} id={id} className={s.checkBox}/>
      <div className={s.userData}>
        <p className={s.name}>{name}</p>
        <p className={s.email}>{email}</p>
      </div>
      <div className={s.userDetails}>
        <p className={s.gender}>{gender}</p>
        <p className={status === 'active' ? s.activeStatus : s.inactiveStatus}>{status}</p>
      </div>
      
    </div>
  );
}
