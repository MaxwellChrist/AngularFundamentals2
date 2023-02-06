import { Component } from "@angular/core";


@Component({
    selector: 'app-success-alert',
    template: `
        <div class="container-sm">
            <div class="col">
                <h1>This is the success alert component</h1>
            </div>
        </div>
    `,
    styles: [`
        .col {
            background-color: var(--bs-success);
        }
    `]
})
export class SuccessAlertComponent {

}