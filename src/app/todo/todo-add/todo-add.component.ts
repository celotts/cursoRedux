import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.redurcers';
import { Store } from '@ngrx/store';
import * as formTodo from '../todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.CrearFormulario();
  }

  CrearFormulario() {
    this.textInput = new FormControl('', Validators.required);
  }

  AgregarTodo() {
    console.log('text', this.textInput.value);
    console.log('valid', this.textInput.valid);
    if (this.textInput.invalid) {
      return;
    }

    const accion = new formTodo.AgregarTodoAction(this.textInput.value);
    this.store.dispatch(accion);

    this.textInput.setValue('');
  }
}
