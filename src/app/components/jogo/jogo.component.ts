import { Component, OnInit } from '@angular/core';
import { Pergunta } from '../../object/pergunta.model';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  perguntas: Pergunta[] = [];
  exibirJogo: boolean = false;
  perguntaAtual: number = 0;
  acertos: number = 0;

  exibirDescricao: boolean = false;
  constructor() {
    this.obterDados();
  }


  ngOnInit() {
  }

  resposta(resposta: boolean){
    if(resposta == this.perguntas[this.perguntaAtual].resposta){
      this.acertos++;
    }
    this.exibirDescricao = true;

  }

  obterDados(){
    for(let cont = 0; cont < 10; cont++){
      var pergunta: Pergunta = new Pergunta();
      pergunta.titulo="aaaaaaaaaaaaaaaaaa";
      pergunta.resposta=true;
      pergunta.questao=cont+1;
      pergunta.descricao="true"
      this.perguntas.push(pergunta)
    }
    this.exibirJogo = true;
  }

  proximaPergunta(){
    this.exibirDescricao = false;
    this.perguntaAtual++;
    if(this.perguntaAtual == this.perguntas.length){
      alert("Você acertou "+this.acertos+" perguntas")
    }
  }

}
