import { Link } from "react-router"

function HomePageNavBar() {

  return (
    <nav className = "flex top-0 relative mx-auto min-w-full px-12 sm:px-6 lg:px-8 bg-violet-950 justify-start">
        <hgroup className = "px-12 lg:px-8 sm:px-6">
            <h1>HARDLIGHT</h1>
            <h4>Character Creator</h4>
        </hgroup>
        <div className="px-12 lg:px-8 sm:px-6 hover:bg-violet-900 place-content-center">
            <Link to="/compendium">Compendium</Link>
        </div>
        <div className="px-12 lg:px-8 sm:px-6 hover:bg-violet-900 place-content-center">
            <Link to="/characters">Characters</Link>
        </div>   
    </nav>
  )
}
export default HomePageNavBar