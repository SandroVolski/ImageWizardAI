import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent {
  @Input() imgSrc: string = ''; // Atribuindo um valor padrão

  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  downloadImage(url: string) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'downloadedImage.png'; // ou extraia o nome do arquivo da URL
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
