import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlComponent } from './control.component';

describe('ControlComponent', () => {
	let component: ControlComponent;
	let fixture: ComponentFixture<ControlComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ControlComponent],
		});
		fixture = TestBed.createComponent(ControlComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
