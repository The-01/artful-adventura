import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "app-contact-us",
	standalone: true,
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	templateUrl: "./contact-us.component.html",
	styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {
	contactForm!: FormGroup;

	constructor() {}

	ngOnInit(): void {
		this.contactForm = new FormGroup({
			fullName: new FormControl("", Validators.required),
			email: new FormControl("", [Validators.required, Validators.email]),
			message: new FormControl("", Validators.required)
		});
	}

	onSubmit(): void {
		console.log(this.contactForm.value);
		// Submit the form data to your server or API
	}
}
