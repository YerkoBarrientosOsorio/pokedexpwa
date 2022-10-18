import { Component } from '@angular/core';
import { PokemonModel } from 'src/models/pokemon.model';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pwa-app';
  pokemonList: PokemonModel[] = [];
  numberOfPokemon = 898;
  pokemonImgList: string[] = []
  filteredPokemonList: PokemonModel[] = [];
  filter: string = "";

  colores: {[key: string]: string} = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  }

  async ngOnInit(){
    await this.getPokemonList();
    await this.getPokemonImgList();
  }
  
  constructor(private pokemonService: PokemonService){
  }
  
  async getPokemonList(){
    for(let index = 1; index < this.numberOfPokemon; index++){
      this.getPokemon(index);
    }
  }

  async getPokemonImgList(){
    for(let index = 1; index < this.numberOfPokemon; index++){
      this.pokemonImgList.push('https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+String(index).padStart(3, '00')+'.png');
    }
  }

  setColor(i: string){
    return this.colores[i];
  }
  
  getPokemon = (i: number) => {
    (this.pokemonService.getPokemonList(i)).subscribe((data: PokemonModel)=>{
      this.pokemonList.push(data);
    });
  }

  searchFilter(){
    if(isNaN(Number(this.filter))){

        this.filteredPokemonList = this.pokemonList.filter(pokemon => pokemon.types[0].type.name.toLowerCase() === (this.filter.toLowerCase()));
        if(this.filteredPokemonList.length==0){
          this.filteredPokemonList = this.pokemonList.filter(s => s.name.toLowerCase().includes(this.filter.toLowerCase()));
        }
      }
    else{
      this.filteredPokemonList = this.pokemonList.filter(pokemon => pokemon.id == (Number(this.filter)));
    }
  }

}




