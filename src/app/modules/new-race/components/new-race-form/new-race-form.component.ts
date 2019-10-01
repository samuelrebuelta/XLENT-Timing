import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-race-form',
  templateUrl: './new-race-form.component.html',
  styleUrls: ['./new-race-form.component.scss']
})
export class NewRaceFormComponent implements OnInit {

  @Output() saveRaceInfo = new EventEmitter();
  newRaceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    // Instanciamos el formulario
    this.newRaceForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
    });
  }

  onSaveRaceInfo() {
    // Al guardar, mandamos el valor del formulario al componente padre (new-race) y resetearmos el formulario
    this.saveRaceInfo.emit(this.newRaceForm.value);
    this.newRaceForm.reset();
  }

}
