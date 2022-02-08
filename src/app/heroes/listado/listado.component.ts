import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public heroeBorrado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[] = ['spiderman', 'ironman', 'hulk', 'thor'];

  borrarHeroe():void{
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
