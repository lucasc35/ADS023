import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba2Page } from './aba2.page';

describe('Aba2Page', () => {
  let component: Aba2Page;
  let fixture: ComponentFixture<Aba2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aba2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aba2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
