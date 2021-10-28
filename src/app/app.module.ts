import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IniciarComponent } from './components/iniciar/iniciar.component';
import { JogoComponent } from './components/jogo/jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarComponent,
    JogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
