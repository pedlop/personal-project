import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaAlterarComponent } from './tarefa-alterar.component';

describe('TarefaAlterarComponent', () => {
  let component: TarefaAlterarComponent;
  let fixture: ComponentFixture<TarefaAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
