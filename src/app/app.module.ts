import { ProdutosService } from './produtos/produtos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
// fazer o registro desse local
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    RouterOutlet
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // forRoot: rota rincipal da aplicação
    // useValue: usado para o simbolo da velha
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    // precisa registrar o app_base...
    {provide: APP_BASE_HREF, useValue: '/'},
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
