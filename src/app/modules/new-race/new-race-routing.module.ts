import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRaceComponent } from './new-race.component';

const routes: Routes = [
    {
        path: '',
        component: NewRaceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewRaceRoutingModule { }
