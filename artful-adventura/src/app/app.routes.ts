import { Routes } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { TouristSpotsComponent } from "./components/tourist-spots/tourist-spots.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { PlaceDetailComponent } from "./components/place-detail/place-detail.component";
import { FaqComponent } from "./components/faq/faq.component";

export const routes: Routes = [
	{ path: "", component: LandingComponent }, // default route
	{ path: "tourist-spots", component: TouristSpotsComponent },
	{ path: "about-us", component: AboutUsComponent },
	{ path: "contact-us", component: ContactUsComponent },
	{ path: "faq", component: FaqComponent },
	{ path: "place-detail", component: PlaceDetailComponent }
];
