import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommunicationPreferenceComponent } from "./custom-comp";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        RouterModule,
        CommunicationPreferenceComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppComponent {
  communication = new FormControl([
    {
      label: 'Marketing',
      modes: [
        {
          name: 'Email',
          enabled: true,
        },
        {
          name: 'SMS',
          enabled: false,
        },
      ],
    },
    {
      label: 'Product Updates',
      modes: [
        {
          name: 'Email',
          enabled: true,
        },
        {
          name: 'SMS',
          enabled: true,
        },
      ],
    },
  ]
  );

  toogle(): void {
    if(this.communication.disabled) {
      this.communication.enable();
    }else {
      this.communication.disable();
    }
  }
}
