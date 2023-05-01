import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelEmployeeComponent } from './del-employee.component';

describe('DelEmployeeComponent', () => {
  let component: DelEmployeeComponent;
  let fixture: ComponentFixture<DelEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
