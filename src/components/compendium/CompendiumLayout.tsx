import  {Link, Outlet} from 'react-router';

function CompendiumLayout() {

    return (
        <div>
            <nav className = "flex top-0 relative mx-auto min-w-full min-h-12 px-12 sm:px-6 lg:px-8 bg-violet-950 justify-start">
                <div className="px-12 lg:px-8 sm:px-6 hover:bg-violet-900 place-content-center">
                    <Link to="/">Home</Link>
                </div>
                <div className="px-12 lg:px-8 sm:px-6 hover:bg-violet-900 place-content-center">
                    <Link to="/characters">Characters</Link>
                </div> 
            </nav>
            <Outlet/>
        </div>
      )
}

export default CompendiumLayout;