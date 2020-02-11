import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  Variable = '';

  getValue(myInput): void {
    if (myInput.Value === '') {
      alert('No se puede');
    } else {
      console.log(myInput.value);
      this.Variable = myInput.value;
    }
  }
}
