import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab1Page {

 

  A: string
  B: string
  C: string
  saida: string
  imagem: any = "assets/imagens/logo-triangular.png"


  constructor() {}

  calculador1(){
    var A1 = parseFloat(this.A)
    var B2 = parseFloat(this.B)
    var C3 = parseFloat(this.C)

    
    if(A1 + B2 > C3 && A1 + C3 > B2 && C3 + B2 > A1) {
      if( A1 == B2 && A1 == C3){
        this.saida = 'Equilatero'
        this.imagem = "assets/imagens/triangulo-equilatero.png"
      }
      else if (A1 != B2 && A1 != C3) {
        this.saida = 'Escaleno'
        this.imagem = "assets/imagens/triangulo-escaleno.png"
      }
      else {
        this.saida = 'Isósceles'
        this.imagem = "assets/imagens/triangulo.png"
      }
    }
    }

}
