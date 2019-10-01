import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-new-race',
  templateUrl: './new-race.component.html',
  styleUrls: ['./new-race.component.scss']
})
export class NewRaceComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    // Ocultamos el spinner al iniciar el componente
    this.sharedService.showSpinnerSource.next(false);
  }

  saveRaceInfo(data) {
    console.log('Race info: ', data);
  }

}
