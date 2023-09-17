import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.page.html',
  styleUrls: ['./list-music.page.scss'],
})
export class ListMusicPage implements OnInit {

  /* Aca estan las variables de los audios */
  listvideos: any[] = [];
  listvideosOriginal: any[] =[];
  searchTerm: string = ''; // Define la barra de busqueda para los audios

  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  navigate(value: any) {
    let id = JSON.stringify(value);
    localStorage.setItem('NotisDetail', JSON.stringify(value));
  }

  ngOnInit() {
        /* Aca se resiven las variables de los audios */
        this.http.get('../../assets/noticias/music.json').subscribe(data => {
          this.listvideos = JSON.parse(JSON.stringify(data))[0].audios;
          this.listvideosOriginal = JSON.parse(JSON.stringify(data))[0].audios;
        });
  }

   // Método para filtrar los audios
  filterMusic(searchTerm: string): void {
    if (!searchTerm.trim()) {
      // Si el término de búsqueda está vacío, muestra todas las tarjetas nuevamente.
      this.listvideos = this.listvideosOriginal;
    } else {
      // Filtra los pokemones que coincidan con el término de búsqueda.
      this.listvideos = this.listvideosOriginal.filter(pokemon =>
        pokemon.nombreAudio.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  }

  back(){this.router.navigate(['/home'])};
}
