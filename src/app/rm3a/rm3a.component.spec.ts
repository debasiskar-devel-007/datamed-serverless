import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rm3aComponent } from './rm3a.component';

describe('Rm3aComponent', () => {
  let component: Rm3aComponent;
  let fixture: ComponentFixture<Rm3aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rm3aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rm3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
