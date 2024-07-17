import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HeaderComponent from './components/Header.component.jsx';
import FooterComponent from './components/Footer.component.jsx';
import ContactsListPage from './components/pages/ContactsList.page.jsx';
import NewContactPage from './components/pages/NewContact.page.jsx';
import OneContactPage from './components/pages/OneContact.page.jsx';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/contacts">
      <Route index element={<ContactsListPage />} />
      <Route path="new" element={<NewContactPage />} />

      {/* Funktioniert noch nicht */}
      <Route path=":contactName" element={<OneContactPage />} />
      {/**/}

    </Route>
    <Route path="*" element={<Navigate to='/contacts' />} />
    </>
  )
)

function App() {

  return (
    <>
      <div className='body-of-page'>
        <HeaderComponent />
        <RouterProvider router={router} />
        <FooterComponent />
      </div>
    </>
  )
}

export default App;
