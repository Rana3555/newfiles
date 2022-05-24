import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.sass']
})
export class LifeCycleComponent{
  inputText: string = '';
  destory: boolean = true;

  title = 'lifecycleHook';
  OnSubmit(InputEl: HTMLInputElement){
    this.inputText= InputEl.value;
  }
  DestroyComponent(){
    this.destory = false;
  }
}
