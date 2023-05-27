import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMgmtAddUpdateComponent } from './category-mgmt-add-update.component';

describe('CategoryMgmtAddUpdateComponent', () => {
  let component: CategoryMgmtAddUpdateComponent;
  let fixture: ComponentFixture<CategoryMgmtAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMgmtAddUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMgmtAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
