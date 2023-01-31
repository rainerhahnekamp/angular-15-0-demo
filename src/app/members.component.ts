import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  template: `<h2>This is the Member's area</h2>
    <p>Only authorized user are allowed to be here.</p>`,
  standalone: true,
})
export class MembersComponent {}
