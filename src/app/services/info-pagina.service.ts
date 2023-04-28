import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: infoPagina = {};
  equipo: any = [];
  project: any = [];

  constructor(private http: HttpClient) {
    // console.log("Servicio de infoPagina listo")

    // Leer el archivo JSON
    
    this.cargarInfo();
    this.cargarEquipo(); //Para leer de la base de datos firebase de google
    this.cargarProject();
  }


  private cargarInfo() {
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: infoPagina) => {
        this.info = resp; // provar resp. I veurem les propietats JSON
        console.log(resp);
      });

  }
  private cargarEquipo() {
  this.http
    .get('https://web-app-hector-etif-default-rtdb.europe-west1.firebasedatabase.app/equip.json')
    .subscribe((resp: infoPagina) => {
      this.equipo = resp; // provar resp. I veurem les propietats JSON
      console.log(resp);
    });
  }


// Leer el archivo JSON externo en la Real Time DataBase de Firebase de Google
private cargarProject() {
  this.http
    .get(
      'https://web-app-hector-etif-default-rtdb.europe-west1.firebasedatabase.app/projects.json'
    )
    .subscribe((resp: infoPagina) => {
      this.project = resp; // provar resp. I veurem les propietats JSON
      console.log(resp);
    });
}
}
