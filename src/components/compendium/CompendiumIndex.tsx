import  {Link} from 'react-router';

function CompendiumIndex() {

    return (
        <div>
            <button className = "compendium-category">
                <Link to="talents">Talents</Link>
            </button>
            <button className = "compendium-category">
                <Link to="gear">Gear</Link>
            </button>
            <button className = "compendium-category">
                <Link to="backgrounds">Backgrounds</Link>
            </button>
            <button className = "compendium-category">
                <Link to="species">Species</Link>
            </button>
        </div>
      )
}

export default CompendiumIndex;