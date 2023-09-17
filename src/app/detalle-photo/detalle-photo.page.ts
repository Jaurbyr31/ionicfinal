import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-photo',
  templateUrl: './detalle-photo.page.html',
  styleUrls: ['./detalle-photo.page.scss'],
})
export class DetallePhotoPage implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) {}

  imageSource: any;
  titulo: string='';
  Descripcion: string='';
  selectedRating: number = 0;

  /*Aca se resiven los parametros */
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.imageSource = params['receivedImageSource'];
      this.titulo = params['receivedTitulo'];
      this.Descripcion = params['receivedDescripcion'];
    });
  }

  /* Aca se envian los parametros*/
  back(){this.router.navigate(['/home'], 
    {
      queryParams: {
        imageSource: this.imageSource,
        titulo: this.titulo,
        Descripcion: this.Descripcion,
        calificacion: this.selectedRating,
      },
    });
  }

  stars = [
    { iconName: 'star-outline', value: 1 },
    { iconName: 'star-outline', value: 2 },
    { iconName: 'star-outline', value: 3 },
    { iconName: 'star-outline', value: 4 },
    { iconName: 'star-outline', value: 5 },
  ];
  rate(selectedValue: number) {
    this.selectedRating = selectedValue; // Almacenar el valor de calificación seleccionado
    for (const star of this.stars) {
      star.iconName = star.value <= selectedValue ? 'star' : 'star-outline';
    }
  }
}
