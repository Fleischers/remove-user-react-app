import { useDispatch } from 'react-redux';

import s from './App.module.css'
import UserList from './components/UserList';
import Button from './components/Button';
import { deleteUsers, selectAllUsers } from './redux/UserList/userSlice';

function App() {
  const dispatch = useDispatch();

  function deleteClickHandler() {
    dispatch(deleteUsers());
  }

  function selectAllClickHandler() {
    dispatch(selectAllUsers());
  }

  return (
    <div className={s.container}>
      <div className={s.navigation}>
        <Button style="selectButton" type="button" title="Select All" onClick={selectAllClickHandler}/>
        <Button style="deleteButton" type="button" title="Delete" onClick={deleteClickHandler}/>
      </div>
      <UserList />
    </div>
    
  );
}


export default App;
