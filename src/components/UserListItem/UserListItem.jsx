import s from "./UserListItem.module.css";

export default function UserListItem({user}) {
  const {id, name, email, gender, status} = user;

  function changeHandler(event) {
    console.log(event.target.checked);
  }

  return (
    <div className={s.wrapper}>
      <input type="checkbox" onChange={changeHandler} name="userCheckbox" id={id}/>
      <div className={s.userData}>
        <p>{name}</p>
        <p>{email}</p>
      </div>
      <p>{gender}</p>
      <p>{status}</p>
    </div>
  );
}
