import {Component, Input} from '@angular/core';

export interface FormConfig {
  title: string;
  buttonText: string;
  fields: {
    label: string;
    name: string;
    type: string;
    required: boolean;
  }[];
}

@Component({
  selector: 'taste-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  @Input() config!: FormConfig;
}
