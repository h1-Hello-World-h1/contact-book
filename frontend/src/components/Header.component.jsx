import { NavLink } from "react-router-dom";

function HeaderComponent() {

  return (
    <header>
      <div className="logo">
        <NavLink to={'/contacts'}><h1>Contact<span>Keeper</span></h1></NavLink>
      </div>
      <NavLink to={'/contacts/new'}>+</NavLink>
    </header>
  )
}

export default HeaderComponent;
