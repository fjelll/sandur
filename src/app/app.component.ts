import { Component } from "@angular/core";
import { HeaderComponemt } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'Hovedside';
}
