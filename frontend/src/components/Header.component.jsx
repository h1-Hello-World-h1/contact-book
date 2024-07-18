import { NavLink } from "react-router-dom";

function HeaderComponent() {

  return (
    <header>
      <NavLink to={'/contacts'} className="logo"><h1>Contact<span>KEEPER</span></h1></NavLink>
      <NavLink to={'/contacts/new'} className="add-btn">
        <i className="fa-solid fa-user-plus"></i>
      </NavLink>
    </header>
  )
}

export default HeaderComponent;
