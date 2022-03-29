import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  constructor() { }

  //CRIAR OBJETO DO TIPO Autor
  model: Autor = new Autor();

  ngOnInit(): void {

  }

  //funcao SUBMIT
  onSubmit(){
    console.log(this.model);

  }

}
