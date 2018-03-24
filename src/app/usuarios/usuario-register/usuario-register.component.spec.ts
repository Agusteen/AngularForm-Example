import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRegisterComponent } from './usuario-register.component';

describe('UsuarioRegisterComponent', () => {
  let component: UsuarioRegisterComponent;
  let fixture: ComponentFixture<UsuarioRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
