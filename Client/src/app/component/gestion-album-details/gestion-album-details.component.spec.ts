import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAlbumDetailsComponent } from './gestion-album-details.component';

describe('GestionAlbumDetailsComponent', () => {
  let component: GestionAlbumDetailsComponent;
  let fixture: ComponentFixture<GestionAlbumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAlbumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAlbumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
