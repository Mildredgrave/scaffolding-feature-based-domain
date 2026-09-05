import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonItem,
  IonList,
  IonText,
  IonCol,
  IonRow, 
  IonGrid, 
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader
} from '@ionic/angular/standalone';

import { Camera, CameraDirection } from '@capacitor/camera';

interface RegistroClima {
  condicion: string;
  descripcion: string;
  fotografia: string;
}

@Component({
  selector: 'app-clima-fotografia-page',
  templateUrl: './clima-fotografia-page.page.html',
  styleUrls: ['./clima-fotografia-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonGrid, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardContent, IonButton, IonSelect, IonSelectOption, IonTextarea, IonItem, IonList, IonText, IonCol,IonRow, IonCardSubtitle, IonCardTitle, CommonModule, FormsModule]
})
export class ClimaFotografiaPagePage implements OnInit {
  condicionSeleccionada: string = '';
  descripcion: string = '';
  fotografia: string = '';
  capturando: boolean = false;
  registros: RegistroClima[] = [];

  constructor() { }

  ngOnInit() {
  }

  async tomarFotografia(): Promise<void> {
    this.capturando = true;
    try {
      const image = await Camera.takePhoto({
        quality: 90,
        targetWidth: 1280,
        targetHeight: 960,
        correctOrientation: true,
        cameraDirection: CameraDirection.Rear,
        saveToGallery: false,
      });
      
      this.fotografia = image.webPath || '';
      
    } catch (error) {
      console.error('Error al tomar la fotografía:', error);
    } finally {
      this.capturando = false;
    }
  }

  async guardarRegistro() {
    this.registros.push({
      condicion: this.condicionSeleccionada,
      descripcion: this.descripcion,
      fotografia: this.fotografia
    });

    // Limpiar los campos después de guardar
    this.condicionSeleccionada = '';
    this.descripcion = '';
    this.fotografia = '';
  }

}
