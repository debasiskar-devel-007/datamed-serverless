import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFormBlockComponent } from './footer-form-block.component';

describe('FooterFormBlockComponent', () => {
  let component: FooterFormBlockComponent;
  let fixture: ComponentFixture<FooterFormBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFormBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFormBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
