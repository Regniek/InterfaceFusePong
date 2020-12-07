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
  storie = sessionStorage.getItem('storie');
  user = sessionStorage.getItem('userRef');
  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
  ) {

   }

  ngOnInit(){
    this.fetchTickets(this.storie)
  }
  
  fetchTickets(storieId:any) {
    this.ticketService.getStorieTicket(storieId)
    .subscribe(tickets =>{
      this.tickets = tickets;
      console.log(tickets)
    })
  }


  nComment:'';
  nStatus='';

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
      storie: this.storie,
      user: this.user,
    }
    console.log(newTicket)
    this.ticketService.postTicket(newTicket)
      .subscribe(ticket =>{
        this.ngOnInit()
    })
  }
  
  review(a:any) {
  
    const modal = document.querySelector(a)
    
    if (modal.classList.contains("show-addtickets")) {
      modal.classList.remove("show-addtickets")
    } else {
      modal.classList.add("show-addtickets")
    }
  
  }

  update(id:any,statusRef:any){
    console.log('ingreso',id,statusRef)
    const updateSurtido: Partial<Ticket> = {
      status: statusRef,

    }
    this.ticketService.updateTicket(id,updateSurtido)
    .subscribe(ticket => {
      console.log(ticket)
      this.ngOnInit()
    })
  }

  deleteTickets(id:any) {
    this.ticketService.deleteTicket(id)
    .subscribe(ticket => {
      this.ngOnInit()
    })
  }
}