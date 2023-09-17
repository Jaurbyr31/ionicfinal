import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  /* Aca estan las variables de la camara */
  receivedImageSource: any;
  receivedTitulo: string = '';
  receivedDescripcion: string = '';
  reciveSelectedRating: number = 0;

  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    /*Aca se reciven las variables de la camara */
    this.route.queryParams.subscribe((params) => {
      this.receivedImageSource = params['imageSource'];
      this.receivedTitulo = params['titulo'];
      this.receivedDescripcion = params['Descripcion'];
      this.reciveSelectedRating = params['calificacion'];
    });
  }

  /* Aca esta el funcionamiento de la camara */
  irDetalle() {this.router.navigate(['/detalle-photo'], {
    queryParams: {
      receivedImageSource: this.receivedImageSource,
      receivedTitulo: this.receivedTitulo,
      receivedDescripcion: this.receivedDescripcion,
      },
    });
  }

  /* Aca esta la calificacion por estrellas */
  rate(selectedValue: number) {
    this.reciveSelectedRating = selectedValue;
  }
  getStarsArray(rating: number): number[] {
    const starsArray = new Array(Math.max(0, rating));
    console.log('Stars Array:', starsArray);
    return starsArray;
  }

  /*Aca se enruta a las paguinas adicionales */
  irPokemones(){this.router.navigate(['./pokemones'])};
  irRegistro(){this.router.navigate(['./registro'])};
  irListMusic(){this.router.navigate(['./list-music'])};
  irImagenes(){this.router.navigate(['./imagenes'])};
  salir() {this.router.navigate(['./login'])};
}

/*
paso 1: npm install
paso 2: npm install -g @ionic/cli
paso 3: ionic integrations enable capacitor
paso 4: ionic build
paso 5: npm install @capacitor/camera
paso 6: npm install @ionic/pwa-elements
paso 7: npx cap add android / npx cap add ios
*/