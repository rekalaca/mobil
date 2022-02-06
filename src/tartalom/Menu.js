import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav class="menu">
        
            <Link to="/" class="active">Kezdőlap</Link>
         
            <Link to="/tipusok">Készülék típusok</Link>
          
            <Link to="/adatbeker">Milyen telefonod van?</Link>
         
      </nav>

      <Outlet />
    </>
  )
};

export default Menu;