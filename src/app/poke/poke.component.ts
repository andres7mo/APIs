import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {

  hbp : string=""
  name : string=""
  Imafront : string=""
  ImaPront2 : string=""
  ImaShiny3 : string=""
  info1: string=""
  info2: string=""
  info3: string=""
  info4: string=""
  info5: string=""


  constructor( private pokemonService : PokemonService) { }

  ngOnInit(): void {
  }

  DATOS_DEL_POKEMON(){
    this.pokemonService.getDATOSPOKEMON(this.name).subscribe((data:any) =>{
      this.Imafront = data.sprites.front_default
      this.ImaPront2 = data.sprites.back_default
      this.ImaShiny3 = data.sprites.front_shiny
      this.info1 = data.id
      this.info2 = data.name
      this.info3 = data.height
      this.info4 = data.weight
    })
  }

}
