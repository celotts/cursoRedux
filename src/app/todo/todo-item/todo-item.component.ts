import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.redurcers';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('textInputFisico', { static: true }) textInputFisico: ElementRef;

  checkField: FormControl;
  textInput: FormControl;

  editando: boolean;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.checkField = new FormControl(this.todo.completado);
    this.textInput = new FormControl(this.todo.texto, Validators.required);

    this.checkField.valueChanges.subscribe(valor => {
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.textInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.textInput.invalid) {
      return;
    }

    if (this.textInput.value === this.todo.texto) {
      return;
    }

    const accion = new EditarTodoAction(this.todo.id, this.textInput.value);
    this.store.dispatch(accion);

  }
  borrarTodo() {
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }
}
