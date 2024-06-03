import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-comparator',
  templateUrl: './image-comparator.component.html',
  styleUrls: ['./image-comparator.component.scss'],
})
class Comparador {
  private linhaDivisa: HTMLElement;
  private posicaoInicial: number;
  public antes: HTMLElement;
  public depois: HTMLElement;

  constructor() {
    this.linhaDivisa = document.getElementById('linha-divisa') as HTMLElement;
    this.posicaoInicial = 0;

    this.linhaDivisa.addEventListener('mousedown', (evento) => {
      this.posicaoInicial = evento.clientX;
      this.linhaDivisa.addEventListener('mousemove', this.moverLinha);
    });

    document.addEventListener('mouseup', () => {
      this.linhaDivisa.removeEventListener('mousemove', this.moverLinha);
    });
  }

  private moverLinha(evento: MouseEvent) {
    const novaPosicao = evento.clientX - this.posicaoInicial;
    const larguraComparador = this.linhaDivisa!.parentElement!.clientWidth;
    const novaLarguraAntes = Math.max(0, novaPosicao);
    const novaLarguraDepois = Math.max(0, larguraComparador - novaPosicao);

    this.linhaDivisa.style.left = `${novaPosicao}px`;
    this.antes.style.width = `${novaLarguraAntes}px`;
    this.depois.style.width = `${novaLarguraDepois}px`;
  }
}

const comparador = new Comparador();
