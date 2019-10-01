import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {

    // Observable para comunicar al spinner si debe mostrarse o no
    showSpinnerSource = new Subject<boolean>();
    showSpinner$ = this.showSpinnerSource.asObservable();

    constructor() { }
}
