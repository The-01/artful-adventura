import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
	selector: "app-landing",
	standalone: true,
	imports: [RouterModule, ContactUsComponent],
	templateUrl: "./landing.component.html",
	styleUrl: "./landing.component.scss"
})
export class LandingComponent {}
