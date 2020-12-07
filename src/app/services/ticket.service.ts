import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket,Ticket1 } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  apiURL: String = 'https://fusepongticket.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getTickets(){
    return this.http.get<Ticket[]>(`${this.apiURL}/ticket`)
  }
  postTicket(data:Ticket1){
    return this.http.post(`${this.apiURL}/ticket`,data)
  }
  getStorieTicket(storie:any){
    return this.http.get<Ticket[]>(`${this.apiURL}/tickets/${storie}`)
  }
  updateTicket(id:any, changes:Partial<Ticket>){
    return this.http.patch(`${this.apiURL}/ticket/${id}`,changes)
  }

  deleteTicket(id: String) {
    return this.http.delete(`${this.apiURL}/ticket/${id}`)
  }
}

