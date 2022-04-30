import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserListItem from "components/UserListItem";
import s from "./UserList.module.css";
import {
  getUsersAsync,
  selectUsers,
  selectStatus,
} from "redux/UserList/userSlice";

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  if (status === "pending") {
    return (
      <div size="lg" content="Large">
        Loading...
      </div>
    );
  }

  if (status === "fulfilled") {
    return users.length ? (
      <ul className={s.userList}>
        {users.map((item) => (
          <li className={s.userItem} key={item.id}>
            <UserListItem user={item} />
          </li>
        ))}
      </ul>
    ) : (
      <p>No users left</p>
    );
  }

  if (status === "rejected") {
    return <h3>There is a server error</h3>;
  }

  return <h3>Initializing...</h3>;
}
