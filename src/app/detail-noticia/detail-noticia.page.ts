import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-noticia',
  templateUrl: './detail-noticia.page.html',
  styleUrls: ['./detail-noticia.page.scss'],
})
export class DetailNoticiaPage implements OnInit {
  
  NotisDetail: any;
  detailNewList: any[]=[];
  
  nombreCancion: String = "";
  grupo: String = "";
  direcionVideo: String = "";
  direcionAudio: String = "";

  url_imag: string ="";
  generacion: string ="";
  peso: string ="";
  sexo: string ="";

  constructor(private route:Router, private router:ActivatedRoute) { }

  ngOnInit() {
    this.NotisDetail = localStorage.getItem('NotisDetail');
    this.detailNewList = Object.values(JSON.parse(this.NotisDetail));
    console.log(this.detailNewList);

    // aca abajo se llaman los objetos para que los muestre la paguina
    this.nombreCancion = this.detailNewList[0];
    this.grupo = this.detailNewList[1];
    this.direcionVideo = this.detailNewList[2];
    this.direcionAudio = this.detailNewList[3];
    this.url_imag = this.detailNewList[4];
    this.generacion = this.detailNewList[5];
    this.peso = this.detailNewList[6];
    this.sexo = this.detailNewList[7];
  }

  back(){
    this.route.navigate(['./home'])
  }

}
