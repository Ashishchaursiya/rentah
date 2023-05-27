import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMgmtListComponent } from './category-mgmt-list.component';

describe('CategoryMgmtListComponent', () => {
  let component: CategoryMgmtListComponent;
  let fixture: ComponentFixture<CategoryMgmtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMgmtListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMgmtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
