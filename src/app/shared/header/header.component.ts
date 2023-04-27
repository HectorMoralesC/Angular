import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //Inyeccion de dependencias del servicio que captura el "data-pagina.json".
  constructor(public _servicio:InfoPaginaService){}
}




