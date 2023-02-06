import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
    <div class="container">
        <div class="col">
            <h1>This is the warning alert component</h1>
        </div>
    </div>
    `,
    styles: [`
        .container {
            background-color: var(--bs-warning);
        }
    `]
})
export class WarningAlertComponent {

}