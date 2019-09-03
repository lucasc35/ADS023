import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba1Page } from './aba1.page';

describe('Aba1Page', () => {
  let component: Aba1Page;
  let fixture: ComponentFixture<Aba1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aba1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aba1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
