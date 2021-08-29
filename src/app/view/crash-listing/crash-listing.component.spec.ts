import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashListingComponent } from './crash-listing.component';

describe('CrashListingComponent', () => {
  let component: CrashListingComponent;
  let fixture: ComponentFixture<CrashListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrashListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
