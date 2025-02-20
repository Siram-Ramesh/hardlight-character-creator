import { useState } from "react";

function TraitViewer() {

    const [filters, setFilters] = useState(); //determines what TraitSummary components are populated into the recyclerView
    const [selectedTrait, setSelectedTrait] = useState(); //determines what TraitDetails component is populated into the main div


    return (
        <div>
            <div className="trait-filters">
                {/*TODO: define a TraitFilters component*/}
            </div>
            <div>
                <div className="trait-recycler-view">
                    {/*TODO: define a TraitSummary component*/}
                </div>
                <div>
                    {/*TODO: define a TraitDetails component*/}
                </div>
            </div>
        </div>
    )
}

export default TraitViewer;