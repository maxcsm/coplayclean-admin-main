"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3584],{3584:(C,b,n)=>{n.r(b),n.d(b,{ForgotpasswordPageModule:()=>l});var p=n(6895),o=n(433),t=n(5035),g=n(4126),m=n(655),e=n(8256),f=n(1053),h=n(849);function v(a,r){1&a&&(e.TgZ(0,"p",13)(1,"ion-text",14),e._uU(2," * Email requis. "),e.qZA()())}class s{constructor(r,i,d,c,w,O,y){Object.defineProperty(this,"navCtrl",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"menuCtrl",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"redditService",{enumerable:!0,configurable:!0,writable:!0,value:d}),Object.defineProperty(this,"formBuilder",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(this,"alertController",{enumerable:!0,configurable:!0,writable:!0,value:w}),Object.defineProperty(this,"router",{enumerable:!0,configurable:!0,writable:!0,value:O}),Object.defineProperty(this,"storage",{enumerable:!0,configurable:!0,writable:!0,value:y}),Object.defineProperty(this,"onRegisterForm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formgroup",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"new",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"email",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"hide",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"validation_messages",{enumerable:!0,configurable:!0,writable:!0,value:{email:[{type:"required",message:"Email est requis."},{type:"pattern",message:"Entrez un email valide"}]}})}ngOnInit(){this.onRegisterForm=this.formBuilder.group({email:[null,o.kI.compose([o.kI.required,o.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])]})}ionViewWillEnter(){this.menuCtrl.enable(!1)}sendnewwpassword(){return(0,m.mG)(this,void 0,void 0,function*(){var r=JSON.stringify({email:this.email});this.hide<1&&(this.hide=this.hide+1,this.redditService.forgetpassword(r).toPromise().then(i=>(0,m.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Nouveau mot de passe",message:"Consultez votre boite e-mail.",buttons:["OK"]})).present(),setTimeout(()=>{this.router.navigateByUrl("/login")},300)})))})}}Object.defineProperty(s,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(r){return new(r||s)(e.Y36(t.SH),e.Y36(t._q),e.Y36(f.I),e.Y36(o.qu),e.Y36(t.Br),e.Y36(g.F0),e.Y36(h.K))}}),Object.defineProperty(s,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:e.Xpm({type:s,selectors:[["app-forgotpassword"]],decls:24,vars:4,consts:[[2,"padding-top","5%"],["sizeLg","4","sizeMd","4","sizeXs","12",2,"border","2px","border-width","2px"],["padding-horizontal","","text-center",""],[1,"logo"],["color","light",1,"fw700"],[1,"list-form",3,"formGroup"],["no-padding","",1,"animated","fadeInUp"],["position","floating"],["name","person","item-start",""],["type","email","formControlName","email",3,"ngModel","ngModelChange"],["ion-text","","class","text08",4,"ngIf"],["margin-top",""],["icon-left","","size","medium","expand","full","shape","round","color","secondary","tappable","",3,"disabled","click"],["ion-text","",1,"text08"],["color","light"]],template:function(r,i){1&r&&(e.TgZ(0,"ion-content")(1,"ion-grid",0)(2,"ion-row"),e._UZ(3,"ion-col",1),e.TgZ(4,"ion-col",1)(5,"div",2),e._UZ(6,"div",3),e.TgZ(7,"h3"),e._UZ(8,"ion-text",4),e.qZA()(),e.TgZ(9,"h2"),e._uU(10," Mot de passe oubli\xe9"),e.qZA(),e.TgZ(11,"p"),e._uU(12,"Veuillez entrer un email valide, afin de recevoir un nouveau mot de passe. "),e.qZA(),e.TgZ(13,"form",5)(14,"ion-item",6)(15,"ion-label",7),e._UZ(16,"ion-icon",8),e._uU(17," * Email "),e.qZA(),e.TgZ(18,"ion-input",9),e.NdJ("ngModelChange",function(c){return i.email=c}),e.qZA()(),e.YNc(19,v,3,0,"p",10),e.qZA(),e.TgZ(20,"div",11)(21,"ion-button",12),e.NdJ("click",function(){return i.sendnewwpassword()}),e._uU(22," Envoyer "),e.qZA()()(),e._UZ(23,"ion-col",1),e.qZA()()()),2&r&&(e.xp6(13),e.Q6J("formGroup",i.onRegisterForm),e.xp6(5),e.Q6J("ngModel",i.email),e.xp6(1),e.Q6J("ngIf",i.onRegisterForm.get("email")),e.xp6(2),e.Q6J("disabled",!i.onRegisterForm.valid))},dependencies:[p.O5,o._Y,o.JJ,o.JL,o.sg,o.u,t.YG,t.wI,t.W2,t.jY,t.gu,t.pK,t.Ie,t.Q$,t.Nd,t.yW,t.j9],styles:["[_nghost-%COMP%]   a[_ngcontent-%COMP%]{background-color:transparent;color:#006367;text-decoration:none;font-weight:700}[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:-webkit-grab;cursor:grab;background-color:transparent;color:#006367;text-decoration:underline;font-weight:700}[_nghost-%COMP%]   .button-green[_ngcontent-%COMP%]{--background: #006367;border-radius:25px;color:#fff}[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:hover{--background-hover: #86c0c1}[_nghost-%COMP%]   .backcolor[_ngcontent-%COMP%]{width:100%;background-color:#86c0c1;text-align:center;color:#fff;padding:5%}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{text-align:center;padding:4%}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{width:100%;background-color:#f1f1f1}@media (max-width: 800px){[_nghost-%COMP%]   .hidden-xs-down[_ngcontent-%COMP%]{display:none!important}}@media (min-width: 800px){[_nghost-%COMP%]   .hidden-xs-up[_ngcontent-%COMP%]{display:none!important}}@media (min-width: 800px){[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:50px;font-weight:blod}[_nghost-%COMP%]   .image[_ngcontent-%COMP%]{max-width:100%;height:350px;position:inherit;background-size:100%;background-repeat:no-repeat}}"]})});const P=[{path:"",component:s}];class u{}Object.defineProperty(u,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(r){return new(r||u)}}),Object.defineProperty(u,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:u})}),Object.defineProperty(u,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[g.Bz.forChild(P),g.Bz]})});class l{}Object.defineProperty(l,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(r){return new(r||l)}}),Object.defineProperty(l,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:l})}),Object.defineProperty(l,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[p.ez,o.u5,o.UX,t.Pc,u]})})}}]);