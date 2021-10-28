import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit {

  constructor() { }

  @Output() iniciarPartida = new EventEmitter()

  ngOnInit() {
  }

  iniciar(){
    this.iniciarPartida.emit();
  }

}
