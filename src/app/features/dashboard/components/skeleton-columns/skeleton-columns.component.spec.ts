import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonColumnsComponent } from './skeleton-columns.component';

describe('SkeletonColumnsComponent', () => {
  let component: SkeletonColumnsComponent;
  let fixture: ComponentFixture<SkeletonColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonColumnsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
