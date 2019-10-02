import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRaceComponent } from './new-race.component';
import { NewRaceRoutingModule } from './new-race-routing.module';
import { NewRaceFormComponent } from './components/new-race-form/new-race-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NewRaceComponent,
    NewRaceFormComponent
  ],
  imports: [
    CommonModule,
    NewRaceRoutingModule,
    SharedModule
  ]
})
export class NewRaceModule { }
