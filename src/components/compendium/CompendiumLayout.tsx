import  {Link, Outlet} from 'react-router';

function CompendiumLayout() {

    return (
        <div>
            <nav className = "navbar">
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/characters">Characters</Link>
                    </li>
                </ol>
            </nav>
            <Outlet/>
        </div>
      )
}

export default CompendiumLayout;