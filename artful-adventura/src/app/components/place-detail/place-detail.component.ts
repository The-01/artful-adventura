import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-place-detail",
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: "./place-detail.component.html",
	styleUrl: "./place-detail.component.scss"
})
export class PlaceDetailComponent {
	mainImageSrc: string = "lahore.jpg"; // Default main image source
	isRateModalOpen: boolean = false;
	selectedRating: number = 0;
	reviewText: string = "";
	hoveredRating: number = 0;
	showThumbsUp: boolean = false;
	isFormValid: boolean = false;

	changeImage(src: string): void {
		this.mainImageSrc = src;
	}

	openRateModal() {
		this.isRateModalOpen = true;
	}

	closeRateModal() {
		this.isRateModalOpen = false;
		this.selectedRating = 0;
		this.reviewText = "";
		this.isFormValid = false;
	}

	handleOverlayClick(event: Event) {
		// Close the modal if the overlay (background) is clicked
		this.closeRateModal();
	}

	// Check if the form is valid
	checkFormValidity(): void {
		this.isFormValid = this.selectedRating > 0 && this.reviewText.trim().length > 0;
	}

	ratePlace(rating: number) {
		this.selectedRating = rating;
		this.checkFormValidity(); // Check validity whenever a rating is selected
	}

	hoverRating(rating: number) {
		this.hoveredRating = rating; // Set hover state to the star being hovered
	}

	submitReview() {
		// Submit the review to the server
		console.log("Rating:", this.selectedRating);
		console.log("Review:", this.reviewText);
		this.closeRateModal();
		this.triggerThumbsUp();
	}

	triggerThumbsUp() {
		this.showThumbsUp = true;
		setTimeout(() => {
			this.showThumbsUp = false;
		}, 2500); // Duration of the thumbs-up animation
	}
}
