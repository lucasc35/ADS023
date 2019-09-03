import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba3Page } from './aba3.page';

describe('Aba3Page', () => {
  let component: Aba3Page;
  let fixture: ComponentFixture<Aba3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aba3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aba3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
