import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() {
    this.loadScripts()
   }

  ngOnInit() {
  
  }


  loadScripts() {
    const dynamicScripts = [
    "assets/js/jquery.min.js",
    "assets/js/jquery-migrate-3.0.1.min.js",
    "assets/js/popper.min.js",
    "assets/js/bootstrap.min.js",
    "assets/js/jquery.easing.1.3.js"
    ,"assets/js/jquery.waypoints.min.js"
    ,"assets/js/jquery.stellar.min.js"
    ,"assets/js/owl.carousel.min.js"
    ,"assets/js/jquery.magnific-popup.min.js"
    ,"assets/js/aos.js"
    ,"assets/js/jquery.animateNumber.min.js"
, "assets/js/bootstrap-datepicker.js"
,"assets/js/jquery.timepicker.min.js"
,"assets/js/scrollax.min.js"
,"assets/js/google-map.js"
,"assets/js/main.js" 

    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
