import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate,
} from "react-router-dom";
import App from "../src/App.jsx";
import ContactsListPage from "../src/components/pages/ContactsList.page.jsx";
import NewContactPage from "../src/components/pages/NewContact.page.jsx";
import OneContactPage from "../src/components/pages/OneContact.page.jsx";

const pagesRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="contacts">
                <Route index element={<ContactsListPage />} />
                <Route path="new" element={<NewContactPage />} />
                <Route path=":contactName" element={<OneContactPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/contacts" />} />
        </Route>,
    ),
);

export { pagesRouter };
