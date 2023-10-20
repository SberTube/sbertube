import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	inject,
	Input,
	NgZone,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'sb-toast',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './toast.component.html',
	styleUrls: ['./toast.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnInit, OnDestroy {
	private _elRef = inject(ElementRef<HTMLDivElement>);
	private _ngZone = inject(NgZone);
	private _animTimer!: unknown;
	private _removeTimer!: unknown;
	@Input() type: 'success' | 'error' | 'warning' = 'warning';
	@Input() text = '';
	@Input() status = '';

	private get container() {
		return this._elRef.nativeElement.querySelector('.toast') as HTMLDivElement;
	}

	ngOnInit() {
		this._ngZone.runOutsideAngular(() => {
			this._animTimer = setTimeout(() => this.container.classList.add('toast-out'), 500);
			this._removeTimer = setTimeout(() => this._elRef.nativeElement.remove(), 700);
		});
	}

	ngOnDestroy() {
		clearTimeout(this._animTimer as number);
		clearTimeout(this._removeTimer as number);
	}
}
