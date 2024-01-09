// import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @ViewChild('bg')
  // bg!: ElementRef<HTMLDivElement>;
  // ngAfterViewInit() {
  //   gsap.to(this.bg, {
  //     ScrollTrigger: {
  //       trigger: '#bg',
  //       scrub: 1,
  //     },
  //     scale: 1.5,
  //   });
  // }

  constructor(private renderer: Renderer2) {}

  @ViewChild('bg', { static: false })
  bg!: ElementRef<HTMLImageElement>;

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.scrollAnimations();
  }

  scrollAnimations() {
    gsap.to(document.getElementById('bg'), {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 1.5,
    });
    gsap.to(document.getElementById('man'), {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 0.5,
    });
    gsap.to(document.getElementById('luna'), {
      scrollTrigger: {
        scrub: 1,
      },
      x: -200,
    });
    gsap.to(document.getElementById('texto'), {
      scrollTrigger: {
        scrub: 1,
      },
      y: 500,
    });
  }
}