import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "app-faq",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./faq.component.html",
	styleUrl: "./faq.component.scss"
})
export class FaqComponent {
	faqs = [
		{
			question: "What are the top tourist destinations in Pakistan?",
			answer: "Some of the top destinations include Hunza Valley, Skardu, Lahore, Islamabad, and the Karakoram Highway.",
			open: true
		},
		{
			question: "What is the best time to visit Pakistan?",
			answer: "The best time to visit depends on the region, but generally, spring (March to May) and autumn (September to November) are ideal.",
			open: false
		},
		{
			question: "Do I need a visa to visit Pakistan?",
			answer: "Yes, most travelers require a visa. However, Pakistan offers an e-visa service for citizens of many countries.",
			open: false
		},
		{
			question: "Is it safe to travel in Pakistan?",
			answer: "Yes, many areas in Pakistan are safe for tourists. However, it's always recommended to stay informed about the regions you plan to visit.",
			open: false
		},
		{
			question: "What is the local currency, and where can I exchange money?",
			answer: "The local currency is the Pakistani Rupee (PKR). You can exchange money at airports, banks, and authorized exchange centers.",
			open: false
		},
		{
			question: "What languages are spoken in Pakistan?",
			answer: "Urdu is the national language, but English is widely understood. Regional languages include Punjabi, Pashto, Sindhi, and Balochi.",
			open: false
		},
		{
			question: "What are the accommodation options in Pakistan?",
			answer: "Pakistan offers a range of accommodations from budget hotels and guesthouses to luxury hotels and resorts.",
			open: false
		},
		{
			question: "What should I pack for a trip to Pakistan?",
			answer: "Pack according to the season and region. Essentials include comfortable clothing, a good pair of walking shoes, and any personal medications.",
			open: false
		},
		{
			question: "Are there any cultural norms I should be aware of?",
			answer: "Yes, Pakistan is a conservative country. Dress modestly, respect local customs, and ask for permission before taking photos of people.",
			open: false
		},
		{
			question: "Can I use my credit card in Pakistan?",
			answer: "Credit cards are accepted in major cities and at large hotels, but it's advisable to carry cash, especially in rural areas.",
			open: false
		}
	];
}
