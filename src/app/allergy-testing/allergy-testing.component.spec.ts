import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyTestingComponent } from './allergy-testing.component';

describe('AllergyTestingComponent', () => {
  let component: AllergyTestingComponent;
  let fixture: ComponentFixture<AllergyTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergyTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
