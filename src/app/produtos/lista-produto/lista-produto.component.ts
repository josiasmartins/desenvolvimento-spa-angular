import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  public produtos: Produto[];

  // assim que o componente for instânciado pelo constructor e estiver pronto
  // ele vai chamar esse método para executar antes do componente ser exibido na tela
  ngOnInit(): void {
    // TODO: não está batendo no endpoint do serviço
    this.produtoService.obterProdutos()
    // está se escrevendo no evento de retorno dessa observable
      .subscribe(
        produtos => {
          this.produtos = produtos
          console.log(produtos);
        },
        // tratar um erro:
        error => console.log(error)
      );
  }

}
