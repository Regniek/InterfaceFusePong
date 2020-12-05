import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TicketService } from '../../services/ticket.service';
import { Ticket, Ticket1 } from '../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() ticket1: Ticket1;
  tickets: Ticket[] = [];

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
  ) {

   }

   testUSer='5fc965d83249a23fa09549e1';
   testStorie='5fc972bbad7ae345e492cf79';

  ngOnInit(){
    this.fetchProject();
  }
  fetchProject() {
    this.ticketService.getTickets()
    .subscribe(tickets =>{
      this.tickets = tickets;
      console.log(tickets)
    })
  }

  nComment:'';
  nStatus:'';
  

  activeStatus(){
    this.nStatus = 'Activo';
    console.log(this.nStatus)
  }
  inProcessStatus(){
    this.nStatus = 'En Proceso';
    console.log(this.nStatus)
  }
  finalizedStatus(){
    this.nStatus = 'Finalizado';
    console.log(this.nStatus)
  }


  createTicket(){
    const newTicket: Ticket1 = {
      comment:  this.nComment,
      status: this.nStatus,
      storie: this.testStorie,
      user: this.testUSer,
    }
    console.log(newTicket)
    this.ticketService.postTicket(newTicket)
      .subscribe(ticket =>{
      console.log(ticket)
    })
  }
  
}