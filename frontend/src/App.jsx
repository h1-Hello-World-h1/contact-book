import HeaderComponent from './components/Header.component.jsx';
import FooterComponent from './components/Footer.component.jsx';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <div className='body-of-page'>
        <HeaderComponent />
        <main>
          <Outlet />
        </main>
        <FooterComponent />
      </div>
    </>
  )
}

export default App;
