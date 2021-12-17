import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  @Input()
  pokeName : string = "";

  pokeList: Array<any> = [];
  tempList: Array<any> = [];

  constructor(private pokeServ: PokeService, private router: Router) { }

  ngOnInit(): void {
    this.pokeServ.getAllPokemon().subscribe(list =>{
        this.pokeList = list.results;

        this.tempList = this.pokeList;

        //There is a sorted part, look into github


        //this.List.sort((a : any,b : any) => a.name < b.name ? -1 : 1)
        
    });
  }

  ngOnChanges(){
    this.tempList = this.pokeList.filter((pokemon: any) => pokemon.name.includes(this.pokeName)); //if the arrow function is one line then it automatically returns somethign
  }

  goToDetails(e: any){
    console.log(e.target.innerText.toLowerCase())
    this.pokeServ.pokeName = e.target.innerText.toLowerCase();
    this.router.navigate(['/pokedetails']);
  }

}
