import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/Modelos/proyecto/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto/proyecto.service';

@Component({
  selector: 'app-crate-anteproyecto',
  templateUrl: './crate-anteproyecto.component.html',
  styleUrls: ['./crate-anteproyecto.component.sass']
})
export class CrateAnteproyectoComponent implements OnInit {

  proyectoSubcription:Subscription=new Subscription
  public proyecto=new Proyecto();
 
  
  constructor(
    public userService: ProyectoService
    )
   { }
   
   ngOnInit(): void {   
    // this.usersSubcription=this.userService.get$().subscribe((item:Users)=>{
     //  this.user=item
    // })
    // this.userService.all().subscribe();
 }

  
 onSave(){
  this.proyecto.estado="Enviado"
  this.userService.create(this.proyecto).subscribe();
 }
}
