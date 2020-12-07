import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TicketService } from '../../services/ticket.service';
import { Ticket, Ticket1 } from '../../models/ticket';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() ticket1: Ticket1;
  @Input() user1: User;
  tickets: Ticket[] = [];
  storie = sessionStorage.getItem('storie');
  user = sessionStorage.getItem('userRef');
  
  constructor(
    private userService: UserService,
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
    })
  }


  nComment:'';
  nStatus='';

  activeStatus(){
    this.nStatus = 'Activo';
  }
  inProcessStatus(){
    this.nStatus = 'En Proceso';
  }
  finalizedStatus(){
    this.nStatus = 'Finalizado';
  }


  createTicket(){
    const newTicket: Ticket1 = {
      comment:  this.nComment,
      status: this.nStatus,
      storie: this.storie,
      user: this.user,
    }
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
    const updateSurtido: Partial<Ticket> = {
      status: statusRef,

    }
    this.ticketService.updateTicket(id,updateSurtido)
    .subscribe(ticket => {
      this.ngOnInit()
    })
  }

  deleteTickets(id:any) {
    this.ticketService.deleteTicket(id)
    .subscribe(ticket => {
      this.ngOnInit()
    })
  }
  fetchUser(userId:any) {
    this.userService.getOneUser(userId)
    .subscribe(user1 =>{
      this.user1 = user1;
      console.log(user1)
      this.ngOnInit()
    })
  }
}