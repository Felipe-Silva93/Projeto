import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entar',
  templateUrl: './entar.component.html',
  styleUrls: ['./entar.component.css']
})
export class EntarComponent implements OnInit {

  userLogin:UserLogin=new UserLogin()

  constructor(
    private auth:AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp:UserLogin)=>{
      this.userLogin=resp

      environment.token=this.userLogin.token
      environment.nome=this.userLogin.nome
      environment.foto=this.userLogin.foto
      environment.id=this.userLogin.id

     

      this.userLogin.foto
      this.router.navigate(['/inicio'])
    }, erro=>{
      if(erro.status==500){
        alert('Usuario ou senhas estão incorretos')
      }
    })
  }
}
