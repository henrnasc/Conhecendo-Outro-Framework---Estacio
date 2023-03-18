import { Injectable } from '@angular/core';
import { Editora } from './editora';

const editoras: Array<Editora> = [
  {
    "codEditora": 1,
    "nome": "Companhia das Letras",
  },{
    "codEditora": 2,
    "nome": "HarperCollins",
  },{
    "codEditora": 3,
    "nome": "DVS EDITORA",
  },
]

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  getNomeEditora(codEditora:number){
    return this.getEditoras().filter((editora) => editora.codEditora === codEditora )[0].nome
  }

  getEditoras(){
    return editoras
  }
}
