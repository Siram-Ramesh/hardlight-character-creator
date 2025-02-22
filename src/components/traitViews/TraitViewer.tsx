import { useState } from "react";
import TraitFilters from "./TraitFilters";
import { TraitFilter, TraitData } from "../types/TraitFilter";

function TraitViewer() {

    const [filters, setFilters] = useState<TraitFilter>(null); //determines what TraitSummary components are populated into the recyclerView
    const [showFilters, setShowFilters] = useState(false);
    const [selectedTrait, setSelectedTrait] = useState<TraitData>(null); //determines what TraitDetails component is populated into the main div

    // TODO: extract this to a new component
    let filtersHiddenView = 
        <div className="flex-col w-dvh min-h-max">
            <div className="min-h-max w-dvw">
                    <h1 className="float-left text-fuchsia-200 sm:text-xl md:text-5xl m-10 sm:m-4">Search All Traits</h1>
                    <button onClick={() => setShowFilters(true)} className="float-right bg-rose-900 hover:bg-rose-800 text-fuchsia-200 sm:p-4 m-10 sm:m-4">
                        Filter Traits...
                    </button>
            </div>
            <div className="flex min-h-max">
                <div className="trait-recycler-view">
                    {/*TODO: define a TraitSummary component*/}
                </div>
                <div className="flex-col">
                    {/*TODO: define a TraitDetails component*/}
                </div>
            </div>
        </div>

    let filtersView = <TraitFilters/>

    return (
        showFilters ? filtersView : filtersHiddenView
    )
}

export default TraitViewer;