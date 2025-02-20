import { Link } from "react-router"

function HomePageNavBar() {

  return (
    <nav className = "HomePageNavBar">
        <hgroup className = "TitleName">
            <h3>HARDLIGHT CHARACTER CREATOR</h3>
            <h6>Subtext</h6>
        </hgroup>
        <Link to="/compendium">Compendium</Link>
        <Link to="/characters">Characters</Link>
    </nav>
  )
}
export default HomePageNavBar