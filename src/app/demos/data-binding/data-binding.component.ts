import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {

  public contadorClique: number = 0;

  public urlImagem: string = "../../../assets/6457dc8f063f284fe17e519dc28b5437.jpg"
  public nome: string = ''

  adicionarClique(): void {
    this.contadorClique++;
  };

  zerarContador(): void {
    this.contadorClique = 0;
  }

  KeyUp(event: any) {
    this.nome = event.target.value;
  }
}
