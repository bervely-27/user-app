import logo from './logo.svg';
import './App.css';
import Header from './Header';
import UserList from './UserList';
import Footer from './Footer';
function App() {
  return (
   <div>
 <Header />
 <div className='user-list'>
 <UserList />
 </div>
      
      <Footer/>
   </div>
     
    
  );
}

export default App;
