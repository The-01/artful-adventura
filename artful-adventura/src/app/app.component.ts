import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { HeaderComponent } from "./components/landing/header/header.component";
import { FooterComponent } from "./components/landing/footer/footer.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, LandingComponent, HeaderComponent, FooterComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {
	title = "artful-adventura";
}
