import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbasPage } from './abas.page';

describe('AbasPage', () => {
  let component: AbasPage;
  let fixture: ComponentFixture<AbasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
