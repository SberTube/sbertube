import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/ui/header/header.component';

@Component({
	selector: 'sb-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, HeaderComponent],
	templateUrl: './app.component.html',
})
export class AppComponent {
	title = 'sbertube-2';
}
