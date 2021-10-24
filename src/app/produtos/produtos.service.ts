import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Produto } from "./produto";
import { Observable } from "rxjs";
// agora o angular entende que é uma service ou classe que pode injetar em algum lugar
// TODO: os serirces deve ser importados no provider do module root
@Injectable()
export class ProdutosService {

    // sua página sera construida junto com as depêndencias citadas no constructor
    constructor(private http: HttpClient) {}

    // precisa de endPoint
    // endPoint é o endereço
    protected urlServicesV1: string = "http://localhost:300/";

    // como acessar o endPoint externo?
    // Com o HttpClient, consigo acessar o endPoint externo
    // callBacks: são promessas de retorno. O mais utilizado no angular é o Observable
    // Observable: é um callBack. 'Quando vc receber esse retorno da lista, vc me avisa'
    obterProdutos(): Observable<Produto[]> {
        //get: usado para ler.
        // de onde? Tem que passar o parâmetro
        return this.http.get<Produto[]>(this.urlServicesV1 + "produtos");
    }
}