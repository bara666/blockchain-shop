import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet],
  imports: [MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'micro-frontend';
}
