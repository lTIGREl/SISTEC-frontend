import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../../services/client.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent{
  constructor(private clientService: ClientService) { }
  register() {
    this.clientService.register().subscribe((response) => {
      console.log(response);
    });
  }

}
