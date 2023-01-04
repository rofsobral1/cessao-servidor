import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuarioListaComponent } from './components/usuarios/lista/usuario-lista.component';

const routes: Routes = [


  {
    path:'cessao/dashboard', component: DashboardComponent 
  },
  {
    path:'cessao/usuarios/lista', component: UsuarioListaComponent 
  },
  {
    path: '',
    redirectTo: 'cessao/dashboard',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
