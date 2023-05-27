import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBusinessUserComponent } from './add-new-business-user.component';

describe('AddNewBusinessUserComponent', () => {
  let component: AddNewBusinessUserComponent;
  let fixture: ComponentFixture<AddNewBusinessUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBusinessUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBusinessUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
