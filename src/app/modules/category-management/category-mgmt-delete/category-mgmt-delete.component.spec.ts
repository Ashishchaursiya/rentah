import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMgmtDeleteComponent } from './category-mgmt-delete.component';

describe('CategoryMgmtDeleteComponent', () => {
  let component: CategoryMgmtDeleteComponent;
  let fixture: ComponentFixture<CategoryMgmtDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMgmtDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMgmtDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
