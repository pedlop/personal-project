import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaCadastrarComponent } from './tarefa-cadastrar.component';

describe('TarefaCadastrarComponent', () => {
  let component: TarefaCadastrarComponent;
  let fixture: ComponentFixture<TarefaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
