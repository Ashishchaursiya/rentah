import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersAddUpdateComponent } from './banners-add-update.component';

describe('BannersAddUpdateComponent', () => {
  let component: BannersAddUpdateComponent;
  let fixture: ComponentFixture<BannersAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersAddUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
