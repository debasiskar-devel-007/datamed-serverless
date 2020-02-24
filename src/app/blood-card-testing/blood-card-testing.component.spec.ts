import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCardTestingComponent } from './blood-card-testing.component';

describe('BloodCardTestingComponent', () => {
  let component: BloodCardTestingComponent;
  let fixture: ComponentFixture<BloodCardTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodCardTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodCardTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
