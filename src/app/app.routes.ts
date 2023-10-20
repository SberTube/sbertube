import { Routes } from '@angular/router';
import { userAuthGuard } from '@shared/guards';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./components/welcome-page/welcome-page.component').then((c) => c.WelcomePageComponent),
	},
	{
		path: 'authorize',
		loadChildren: () => import('./components/authorize/routes').then((r) => r.routes),
		canActivate: [userAuthGuard],
	},
];
