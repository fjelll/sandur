import { Component } from "@angular/core";
import { HeaderComponent } from "./main-page/header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})


export class AppComponent {
  title = '';
}
