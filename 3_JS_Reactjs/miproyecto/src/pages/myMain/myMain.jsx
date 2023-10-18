import { Link, NavLink } from 'react-router-dom'

const MyMain = (props) => {
    return (
        <div>
            Bienvenido!
            <br />
            <a href="/login">Ir al login con etiqueta A</a>
            <br />
            <Link to="/login">Ir a login con etiqueta Link</Link>
            <br />
            <NavLink to="/login">Ir a login con etiqueta NavLink</NavLink>
        </div>
    );
};

export default MyMain;