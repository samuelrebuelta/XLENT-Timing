import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'Home',
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: 'New-Race',
        loadChildren: './modules/new-race/new-race.module#NewRaceModule'
      },
    ]
  },
  { path: '**', redirectTo: '/Home' }, // Tab a la que navegara en caso de no encontrar un path valido
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
