import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from 'src/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {

  }
 
  public getPokemonList(i: number): Observable<PokemonModel>{
    return this.httpClient.get<PokemonModel>('https://pokeapi.co/api/v2/pokemon/'+i);
  }
   
 }