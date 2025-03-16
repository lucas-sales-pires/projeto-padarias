import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmnistrativoPage } from './administrativo.page';

describe('AdmnistrativoPage', () => {
  let component: AdmnistrativoPage;
  let fixture: ComponentFixture<AdmnistrativoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnistrativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
