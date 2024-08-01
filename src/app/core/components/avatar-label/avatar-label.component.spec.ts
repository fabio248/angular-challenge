import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarLabelComponent } from './avatar-label.component';

describe('AvatarLabelComponent', () => {
  let component: AvatarLabelComponent;
  let fixture: ComponentFixture<AvatarLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
