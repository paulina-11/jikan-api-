// import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#bg', {
      scrollTrigger: {
        trigger: '#bg',
        start: 'top top',
        scrub: 0.5,
      },
      scale: 1.5,
    });
    gsap.to('#man', {
      scrollTrigger: {
        trigger: '#man',
        start: 'top bottom',
        scrub: 1,
      },
      scale: 0.5,
    });
    gsap.to('#luna', {
      scrollTrigger: {
        trigger: '#luna',
        start: 'top top',
        scrub: 1,
      },
      x: -200,
    });
    gsap.to('#texto', {
      scrollTrigger: {
        trigger: '#texto',
        start: 'top top',
        scrub: 1,
      },
      y: 500,
    });
  }
}
