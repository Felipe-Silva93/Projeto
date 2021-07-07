import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntarComponent } from './entar/entar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:'',redirectTo: 'entrar', pathMatch:'full'},

  {path:'entrar',component:EntarComponent},
  {path:'cadastrar',component:CadastrarComponent},

  {path: 'inicio', component: InicioComponent},

  {path: 'tema',component:TemaComponent},
  {path:'tema-edit/:id',component: TemaEditComponent},//passar parametro por rota no Angular
  {path: 'tema-delete/:id',component:TemaDeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
