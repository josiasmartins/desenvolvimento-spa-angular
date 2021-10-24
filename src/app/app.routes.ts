import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './../../../minhaAppAngular/src/app/home/home.component';
import { Routes } from '@angular/router'

// uma coleção de rotas
export const rootRouterConfig: Routes = [
    // se o path estiver vazio, ele redirecionara para o componente home. 
    // pathMatch: ele completa sua url que com veio com a sua
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // passa o caminho do componente
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produto', component: ListaProdutoComponent }
];