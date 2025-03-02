import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  user = { name: 'Dareen', age: 21 };

  changeAge() {
    this.user.age++; //trigger ngDoCheck
  }

  changeUser() {
    //trigger ngOnChanges
    let newUser = { name: 'namaa', age: 19 };
    this.user = newUser;
  }

  showChild = true;

  toggleChild() {
    this.showChild = !this.showChild;
  }
}
