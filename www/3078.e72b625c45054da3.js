"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3078],{3078:(C,f,n)=>{n.r(f),n.d(f,{QuotesPageModule:()=>s});var m=n(6895),g=n(433),i=n(5035),h=n(4126),c=n(655),e=n(8256),y=n(1053);function _(o,t){if(1&o){const r=e.EpF();e.TgZ(0,"ion-item",11),e.NdJ("click",function(u){const p=e.CHM(r).$implicit,d=e.oxw();return e.KtG(d.edit(u,p))}),e.TgZ(1,"ion-label")(2,"h2"),e._uU(3," Devis "),e.TgZ(4,"b"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-label"),e._uU(7),e.qZA(),e.TgZ(8,"ion-label"),e._uU(9),e.qZA(),e.TgZ(10,"ion-badge",12),e._uU(11," Devis "),e.qZA()()}if(2&o){const r=t.$implicit;e.xp6(5),e.Oqu(r.InvoiceID),e.xp6(2),e.hij(" ",r.ItemDesc," "),e.xp6(2),e.hij(" ",r.Total," \u20ac ")}}class b{constructor(t,r,a,u,v,p,d,w,j,O){Object.defineProperty(this,"navCtrl",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"formBuilder",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"popoverCtrl",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"alertController",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(this,"menu",{enumerable:!0,configurable:!0,writable:!0,value:v}),Object.defineProperty(this,"loadingController",{enumerable:!0,configurable:!0,writable:!0,value:p}),Object.defineProperty(this,"redditService",{enumerable:!0,configurable:!0,writable:!0,value:d}),Object.defineProperty(this,"router",{enumerable:!0,configurable:!0,writable:!0,value:w}),Object.defineProperty(this,"toastCtrl",{enumerable:!0,configurable:!0,writable:!0,value:j}),Object.defineProperty(this,"loadingCtrl",{enumerable:!0,configurable:!0,writable:!0,value:O}),Object.defineProperty(this,"modal",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rolename",{enumerable:!0,configurable:!0,writable:!0,value:"client"}),Object.defineProperty(this,"role",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"pages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"items",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"posts",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"table",{enumerable:!0,configurable:!0,writable:!0,value:"quotes"}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"category",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"filter",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"wordid",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"total",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"last_page",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"per_page",{enumerable:!0,configurable:!0,writable:!0,value:20}),Object.defineProperty(this,"order_id",{enumerable:!0,configurable:!0,writable:!0,value:"id"}),Object.defineProperty(this,"order_by",{enumerable:!0,configurable:!0,writable:!0,value:"desc"}),Object.defineProperty(this,"email_verified_at",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"currentpage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"email",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"address",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"city",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"phone",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"firstname",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastname",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"company",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formgroup",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"validations_form",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.page=1}ionViewDidEnter(){this.getData()}getData(){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.loadingCtrl.create({message:"Chargement..",spinner:"bubbles"});yield t.present(),this.page=1,this.redditService.getDataBypage(this.page,this.table,this.per_page,this.order_id,this.order_by,this.category,this.status,this.filter).subscribe(r=>{console.log(r),t.dismiss(),this.posts=r.data,this.total=r.total,this.per_page=r.per_page,this.currentpage=r.current_page,this.last_page=r.last_page})})}next(t){this.currentpage<this.last_page&&(this.page=this.page+1,this.redditService.getDataBypage(this.page,this.table,this.per_page,this.order_id,this.order_by,this.category,this.status,this.filter).subscribe(r=>{let a=r.data;for(let u of a)this.posts.push(u);this.total=r.total,this.per_page=r.per_page,this.currentpage=r.current_page,this.last_page=r.last_page})),t.target.complete()}doInfinite(t){return(0,c.mG)(this,void 0,void 0,function*(){this.next(t)})}handleChange(t){const r=t.target.value.toLowerCase();console.log(r),this.filter=r,console.log(this.filter),this.filter=t.target.value,this.page=1,setTimeout(()=>{this.getDataFilter()},1e3)}getDataFilter(){return(0,c.mG)(this,void 0,void 0,function*(){this.page=1,this.redditService.getDataBypage(this.page,this.table,this.per_page,this.order_id,this.order_by,this.category,this.status,this.filter).subscribe(t=>{console.log(t),this.posts=t.data,this.total=t.total,this.per_page=t.per_page,this.currentpage=t.current_page,this.last_page=t.last_page})})}onChangeWord(t){return(0,c.mG)(this,void 0,void 0,function*(){this.filter=t.target.value,this.page=1,setTimeout(()=>{this.getDataFilter()},1e3)})}onCancelword(t){}reset(){this.filter="",this.page=1,this.per_page=20,this.getData()}cancel(){this.modal.dismiss(null,"cancel")}onWillDismiss(t){}doSave(){var t=JSON.stringify({lastname:this.lastname,firstname:this.firstname,phone_number:this.phone,email:this.email,address:this.address,city:this.city,cp:this.cp,role:this.role,company:this.company});console.log(t),this.redditService.adduser(t).subscribe(r=>{this.modal.dismiss(),this.getData(),console.log(r),setTimeout(()=>{this.router.navigateByUrl("/customers"),this.lastname="",this.firstname="",this.phone="",this.email="",this.address="",this.city="",this.cp="",this.company=""},400)})}prev(){this.page>1&&(this.page=this.page-1,this.getData())}forward(){this.currentpage<this.last_page&&(this.page=this.last_page,this.redditService.getDataBypage(this.page,this.table,this.per_page,this.order_id,this.order_by,this.category,this.status,this.filter).subscribe(t=>{console.log(t),this.posts=t.data,this.total=t.total,this.per_page=t.per_page,this.currentpage=t.current_page,this.last_page=t.last_page}))}backward(){this.currentpage>1&&(this.page=1,this.getData())}edit(t,r){return(0,c.mG)(this,void 0,void 0,function*(){this.router.navigateByUrl("/quote/"+r.InvoiceID)})}}Object.defineProperty(b,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||b)(e.Y36(i.SH),e.Y36(g.qu),e.Y36(i.Dh),e.Y36(i.Br),e.Y36(i._q),e.Y36(i.HT),e.Y36(y.I),e.Y36(h.F0),e.Y36(i.yF),e.Y36(i.HT))}}),Object.defineProperty(b,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:e.Xpm({type:b,selectors:[["app-quotes"]],viewQuery:function(t,r){if(1&t&&e.Gf(i.ki,5),2&t){let a;e.iGM(a=e.CRH())&&(r.modal=a.first)}},decls:22,vars:3,consts:[["slot","start"],[2,"background-color","#E4E4E4","border-radius","10px"],["size-xl","8","size-md","6","size-xs","12"],["type","text","placeholder","num\xe9ro de facture, entreprise","debounce","200",3,"ngModel","ngModelChange","ionChange"],["size-xl","4","size-md","6","size-xs","12",2,"padding-top","12px"],["color","primary",3,"click"],["name","refresh-outline"],["color","primary"],["button","",3,"click",4,"ngFor","ngForOf"],[3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Chargement..."],["button","",3,"click"],["color","secondary","slot","end"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5," Devis "),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row",1)(9,"ion-col",2)(10,"ion-searchbar",3),e.NdJ("ngModelChange",function(u){return r.filter=u})("ionChange",function(u){return r.handleChange(u)}),e.qZA()(),e.TgZ(11,"ion-col",4)(12,"ion-button",5),e.NdJ("click",function(){return r.reset()}),e._UZ(13,"ion-icon",6),e.qZA(),e.TgZ(14,"ion-button",7),e._uU(15," Nombre de r\xe9sultats : "),e.TgZ(16,"b"),e._uU(17),e.qZA()()()()(),e.TgZ(18,"ion-list"),e.YNc(19,_,12,3,"ion-item",8),e.qZA(),e.TgZ(20,"ion-infinite-scroll",9),e.NdJ("ionInfinite",function(u){return r.doInfinite(u)}),e._UZ(21,"ion-infinite-scroll-content",10),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("ngModel",r.filter),e.xp6(7),e.Oqu(r.total),e.xp6(2),e.Q6J("ngForOf",r.posts))},dependencies:[m.sg,g.JJ,g.On,i.yp,i.YG,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.gu,i.ju,i.MB,i.Ie,i.Q$,i.q_,i.fG,i.Nd,i.VI,i.wd,i.sr,i.j9]})});const P=[{path:"",component:b}];class l{}Object.defineProperty(l,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||l)}}),Object.defineProperty(l,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:l})}),Object.defineProperty(l,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[h.Bz.forChild(P),h.Bz]})});class s{}Object.defineProperty(s,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||s)}}),Object.defineProperty(s,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:s})}),Object.defineProperty(s,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[m.ez,g.u5,i.Pc,l]})})}}]);