import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-race',
  templateUrl: './new-race.component.html',
  styleUrls: ['./new-race.component.scss']
})
export class NewRaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveRaceInfo(data) {
    console.log('Race info: ', data);
  }

}
