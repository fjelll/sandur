import { Component } from "@angular/core";
import { HeaderComponent } from "./main-page/header/header.component";
import { SideBarComponent } from "./main-page/side-bar/side-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})


export class AppComponent {
  title = '';
}
