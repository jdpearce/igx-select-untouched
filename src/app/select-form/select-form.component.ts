import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export const things: Thing[] = [
  {
    name: 'one'
  },
  { name: 'two' }
];

export interface Thing {
  name: string;
}

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent implements OnInit {
  @Input() set thing(t: Thing) {
    this.form.setValue({
      selectThing: t
    });
  }

  things = things;
  form: FormGroup;
  textThingControl: FormControl;
  selectThingControl: FormControl;

  constructor() {
    this.selectThingControl = new FormControl(null, {
      validators: [Validators.required]
    });
    this.textThingControl = new FormControl(null, {
      validators: [Validators.required]
    });

    this.form = new FormGroup({
      textThing: this.textThingControl,
      selectThing: this.selectThingControl
    });
  }

  ngOnInit() {}
}
