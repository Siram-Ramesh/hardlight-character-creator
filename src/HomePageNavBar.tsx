import { Link } from "react-router"

function HomePageNavBar() {

  return (
    <nav className = "flex top-0 relative mx-auto w-dvw px-12 sm:px-6 lg:px-8 bg-violet-950 sm:justify-center md:justify-start">
        <hgroup className = "px-12 lg:px-8 sm:px-6">
            <h1 className="sm:text-xl md:text-5xl">HARDLIGHT</h1>
            <h4 className="sm:text-xl">Character Creator</h4>
        </hgroup>
        <div className="sm:max-md:hidden px-12 lg:px-8 sm:px-6 hover:bg-violet-900 place-content-center">
            <Link to="/compendium">Compendium</Link>
        </div>
        <div className="sm:max-md:hidden px-12 lg:px-8 sm:px-6 hover:bg-violet-900 place-content-center">
            <Link to="/characters">Characters</Link>
        </div>   
    </nav>
  )
}
export default HomePageNavBar