import { Component } from '@angular/core';

@Component({
  selector: 'tutorial-list',
  template: '<h1>{{tutorials}}</h1>',
  styleUrls: ['./tutorial-list.component.scss'],
})
export class TutorialListComponent {
  tutorials: string = 'tutorial list';
}
