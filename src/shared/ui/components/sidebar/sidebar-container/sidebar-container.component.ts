import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	HostListener,
	inject,
	Input,
	NgZone,
	TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar';
import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { MyHammerConfig } from '../../../../../app/app.config';

@Component({
	selector: 'sb-sidebar-container',
	standalone: true,
	imports: [CommonModule, SidebarComponent, HammerModule],
	providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }],
	templateUrl: './sidebar-container.component.html',
	styleUrls: ['./sidebar-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarContainerComponent {
	@Input() template!: TemplateRef<unknown>;

	private _elRef = inject(ElementRef<HTMLDivElement>);
	private _ngZone = inject(NgZone);

	@HostListener('click')
	onClick() {
		this.close();
	}

	private get container() {
		return this._elRef.nativeElement.querySelector('.sidebar') as HTMLDivElement;
	}
	protected close() {
		this.container.classList.add('sidebar-out');
		this._ngZone.runOutsideAngular(() => setTimeout(() => this._elRef.nativeElement.remove(), 200));
	}
}
