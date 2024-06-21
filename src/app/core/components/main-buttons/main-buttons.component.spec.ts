import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainButtonsComponent } from './main-buttons.component';

describe('MainButtonsComponent', () => {
  let component: MainButtonsComponent;
  let fixture: ComponentFixture<MainButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
