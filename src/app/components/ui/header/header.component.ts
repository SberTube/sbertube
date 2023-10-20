import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersistenceService } from '@shared/services';
import { UserService } from '@services';
import { User } from '@types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserAvatarComponent } from '@shared/ui/components/user';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IS_LANDSCAPE, IS_MOBILE } from '@di';

@Component({
	selector: 'sb-header',
	standalone: true,
	imports: [CommonModule, UserAvatarComponent, RouterLink, RouterLinkActive],
	templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
	private _persistenceService = inject(PersistenceService);
	private _userService = inject(UserService);
	private _destroyRef = inject(DestroyRef);
	protected token = this._persistenceService.getItem('token');
	protected user = signal({} as User);
	protected IS_MOBILE$ = inject(IS_MOBILE);
	protected IS_LANDSCAPE$ = inject(IS_LANDSCAPE);

	ngOnInit() {
		if (this.token) {
			this._userService
				.getCurrentUser()
				.pipe(takeUntilDestroyed(this._destroyRef))
				.subscribe((user) => this.user.set(user));
		}
	}
}
