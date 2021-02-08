import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBibliothequesComponent } from './gestion-bibliotheques.component';

describe('GestionBibliothequesComponent', () => {
  let component: GestionBibliothequesComponent;
  let fixture: ComponentFixture<GestionBibliothequesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionBibliothequesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBibliothequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
