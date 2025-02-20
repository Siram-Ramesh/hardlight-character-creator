import { useState } from "react";


function CharacterViewerIndex() {

    const [characters, setCharacters] = useState();

    return(
        <div>
            <div className="character-recycler-view">
                <ol>
                    {/*TODO: create a character summary component */}
                </ol>
            </div>
            <div>
                <button>Create new character</button>
                <button>Import a character</button>
            </div>
        </div>
    )
}

export default CharacterViewerIndex;