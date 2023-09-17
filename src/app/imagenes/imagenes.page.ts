import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.page.html',
  styleUrls: ['./imagenes.page.scss'],
})
export class ImagenesPage implements OnInit {
  receivedImageSource: any;
  receivedTitulo: string = '';
  receivedDescripcion: string = '';
  reciveSelectedRating: number = 0;

  constructor(
    public http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {}

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
  irFormulario(){this.router.navigate(['./formulario'])};
  salir() {this.router.navigate(['./login'])};
}


