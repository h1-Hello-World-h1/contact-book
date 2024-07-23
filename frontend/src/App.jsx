import React from 'react';
import { Navigate, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HeaderComponent from './components/Header.component.jsx';
import FooterComponent from './components/Footer.component.jsx';
import ContactsListPage from './components/pages/ContactsList.page.jsx';
import NewContactPage from './components/pages/NewContact.page.jsx';
import OneContactPage from './components/pages/OneContact.page.jsx';
import './App.css';

// Ein Fehler mit einem Dual-Router wurde behoben

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/contacts">
//         <Route index element={<ContactsListPage />} />
//         <Route path="new" element={<NewContactPage />} />
//         <Route path=":contactId" element={<OneContactPage />} />
//       </Route>
//       <Route path="*" element={<Navigate to='/contacts' />} />
//     </>
//   )
// );

function App() {
  return (
    <div className='body-of-page'>
      <HeaderComponent />

      {/* Ein Fehler mit einem Dual-Router wurde behoben */}
      <main>
        <Outlet />
      </main>
      {/* <RouterProvider router={router} /> */}

      <FooterComponent />
    </div>
  );
}

export default App;
