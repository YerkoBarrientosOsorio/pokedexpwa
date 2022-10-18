export class PokemonModel {
    constructor(
        public abilities:                Ability[],
        public base_experience:          number,
        public forms:                    Species[],
        public height:                   number,
        public held_items:               any[],
        public id:                       number,
        public is_default:               boolean,
        public location_area_encounters: string,
        public name:                     string,
        public order:                    number,
        public past_types:               any[],
        public species:                  Species,
        public stats:                    Stat[],
        public types:                    Type[],
        public weight:                   number
    ){}
}

export class Ability {
    constructor(
        public ability:   Species,
        public is_hidden: boolean,
        public slot:      number
    ){}
}

export class Species {
    constructor(
        public name: string,
        public url:  string
){}
}

export class Stat {
    constructor(
        public base_stat: number,
        public effort:    number,
        public stat:      Species
){}
}

export class Type {
    constructor(
        public slot: number,
        public type: Species
){}
}
