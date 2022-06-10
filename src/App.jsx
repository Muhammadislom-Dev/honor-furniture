import './App.css';
import Category from './components/Category/Category';
import Sofa from './components/Sofa/Sofa';
import HeaderInput from './Page/HeaderInput/HeaderInput';

function App() {


  return (
    <div className="App">
       <HeaderInput />
       <Category />
       <Sofa />
    </div>
  );
}

export default App;
