

export type TraitData = null | {
    name : string;
    source : string;
    species : string | null;
    // TODO: think of a better data model for the trait types
    type : "skill" | "background" | "gear";
    subtype : "mastery" | "weapon" | "weapon mod" | "armor" | "armor mod" | "cybernetic" | null;
    conditions : string[];
    vehicle : boolean;
    crowdControl : "movement" | "action" | "prediction" | null;
    terrain : "destruction" | "construction" | "hazardCreation" | "traversal" | null;
    defense : "personal" | "supportive" | null;
    teamUtility : "buffs" | "healing" |  "stealth" | "social" | "information" | "stress" | "misc" | null;
    cost : number | null;
    stat : "M" | "D" | "V" | "W" | "I" | "C" | null;
}

export type TraitFilter = Partial<TraitData>;

export function validateTrait(t : TraitData): boolean {
    if( t === null ) return false;
    if( t.type === "skill" && (t.subtype !== "mastery" && t.subtype !== null) ) return false;
    if( t.type === "gear" && (t.subtype === "mastery") ) return false;
    if( t.vehicle && t.type !== "gear" ) return false;



    return true;
}