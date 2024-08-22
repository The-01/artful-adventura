import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [NgClass, RouterModule],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss"
})
export class HeaderComponent {
	menuOpen: boolean = false;

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
	}
}
