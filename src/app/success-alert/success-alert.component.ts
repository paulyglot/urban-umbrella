import { Component } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
    selector: 'app-success-alert',
    template: `
    <p>This is a success, you are indeed an Angular Master!</p>
    `,
    styles: [
      `
        p {
            padding: 20px;
            background-color: palegreen;
            border: 1px solid green;
        }
      `
    ]
})
export class SuccessAlertComponent {

}