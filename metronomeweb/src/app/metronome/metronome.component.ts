import { Component, OnInit, OnDestroy } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit, OnDestroy {
  bpm: number = 120; // Valor inicial del BPM
  metronomeRunning: boolean = false;
  interval: any; // Variable para guardar el setInterval
  tickSound: Howl;

  constructor() {
    this.tickSound = new Howl({
      src: ['assets/hihat_click.mp3']
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.stopMetronome();
  }

  toggleMetronome() {
    if (this.metronomeRunning) {
      this.stopMetronome();
    } else {
      this.startMetronome();
    }
  }

  startMetronome() {
    const intervalMs = (60 / this.bpm) * 1000;
    this.interval = setInterval(() => {
      // Aquí puedes emitir un sonido o ejecutar una acción a intervalos regulares
      this.tickSound.play();
      console.log('Tick'); // Ejemplo de salida a consola
    }, intervalMs);

    this.metronomeRunning = true;
  }

  stopMetronome() {
    clearInterval(this.interval);
    this.metronomeRunning = false;
  }
}
