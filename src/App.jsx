import UserList from './components/UserList';
import DeleteButton from './components/DeleteButton';


function App() {

  function deleteClickHandler(event) {
    
  }

  return (
    <div className="container">
      <DeleteButton type="button" title="Delete" onClick={deleteClickHandler}/>
      <UserList />
    </div>
    
  );
}


export default App;
