import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonSelect, IonSelectOption, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ClimaActual, Pais } from '../../../domain/clima.model';
import { TarjetaClimaComponent } from '../components/tarjeta-clima/tarjeta-clima.component';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-clima',
  standalone: true,
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonItem, IonSelect, IonSelectOption, IonSpinner, IonText, TarjetaClimaComponent]
})
export class ClimaPage {
  private readonly climaService = inject(ClimaService);
  paisSeleccionado?: Pais;
  clima?: ClimaActual;
  cargando = false;
  mensajeError = '';

  readonly paises: Pais[] = [
    { nombre: 'Guatemala', capital: 'Ciudad de Guatemala', latitud: 14.6349, longitud: -90.5069 },
    { nombre: 'El Salvador', capital: 'San Salvador', latitud: 13.6929, longitud: -89.2182 },
    { nombre: 'Honduras', capital: 'Tegucigalpa', latitud: 14.0723, longitud: -87.1921 },
    { nombre: 'Nicaragua', capital: 'Managua', latitud: 12.1149, longitud: -86.2362 },
    { nombre: 'Costa Rica', capital: 'San José', latitud: 9.9281, longitud: -84.0907 },
    { nombre: 'Panamá', capital: 'Ciudad de Panamá', latitud: 8.9824, longitud: -79.5199 }
  ];

  consultarClima(): void {
    if (!this.paisSeleccionado) return;
    this.cargando = true;
    this.clima = undefined;
    this.mensajeError = '';
    this.climaService.obtenerClima(this.paisSeleccionado).subscribe({
      next: resultado => { this.clima = resultado; this.cargando = false; },
      error: () => { this.mensajeError = 'No fue posible consultar el clima. Intenta nuevamente.'; this.cargando = false; }
    });
  }
}