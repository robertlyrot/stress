// foto.service.ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  public fotos: Foto[] = [];

  constructor() {}

  public async tirarFoto() {
    const capturedPhoto = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    if (capturedPhoto.webPath) {
      const novaFoto: Foto = {
        webviewPath: capturedPhoto.webPath
      };

      this.fotos.unshift(novaFoto);

      console.log(this.fotos);
    } else {
      console.error('Falha ao obter o caminho da foto.');
    }
  }

  public deleteFoto(index: number) {
    this.fotos.splice(index, 1);
  }

  public addNewToGallery() {
    // Função que será chamada para adicionar à galeria
    console.log('Adicionando à galeria...');
    // Adicione aqui o código real para adicionar à galeria
  }
}

export interface Foto {
  webviewPath: string;
  base64?: string;
}
