import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  showSpinner: boolean;

  constructor(
    private sharedService: SharedService
  ) {
    this.sharedService.showSpinner$.subscribe(res => {
      setTimeout(() => { // El timeout elimina la asincronia para que no se quede colgado ningun spinner fijo
        this.showSpinner = res;
      }, 0);
    });
  }

  ngOnInit() {
  }

}
