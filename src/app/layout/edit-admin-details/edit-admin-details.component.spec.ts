import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminDetailsComponent } from './edit-admin-details.component';

describe('EditAdminDetailsComponent', () => {
  let component: EditAdminDetailsComponent;
  let fixture: ComponentFixture<EditAdminDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdminDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
