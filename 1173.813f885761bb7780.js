"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1173],{1173:(I,m,e)=>{e.r(m),e.d(m,{ExhibitorPageModule:()=>T});var g=e(6895),b=e(4006),a=e(8058),d=e(3317),x=e(7391),i=e(8256),v=e(5146),f=e(1692),E=e(3646);function P(o,r){if(1&o&&i._UZ(0,"img",12),2&o){const t=i.oxw().$implicit;i.Q6J("src",null==t?null:t.logo,i.LSH)}}function Z(o,r){1&o&&i._UZ(0,"img",13)}function A(o,r){if(1&o){const t=i.EpF();i.TgZ(0,"ion-item")(1,"ion-avatar",6),i.YNc(2,P,1,1,"img",7),i.YNc(3,Z,1,0,"img",8),i.qZA(),i.TgZ(4,"div")(5,"ion-label",9),i._uU(6),i.qZA(),i.TgZ(7,"ion-label"),i._uU(8),i.qZA()(),i.TgZ(9,"div",10)(10,"ion-button",11),i.NdJ("click",function(){const s=i.CHM(t).$implicit,c=i.oxw();return i.KtG(c.viewExhibitor(s))}),i._uU(11,"View"),i.qZA()()()}if(2&o){const t=r.$implicit;i.xp6(2),i.Q6J("ngIf",null==t?null:t.logo),i.xp6(1),i.Q6J("ngIf",!(null!=t&&t.logo)),i.xp6(3),i.Oqu(t.name),i.xp6(2),i.Oqu(t.contact)}}const C=[{path:"",component:(()=>{class o{constructor(t,n,l,s){this.location=t,this.apiService=n,this.globalService=l,this.router=s,this.exhibitors=[],this.loadInitialData()}ngOnInit(){this.globalService.groupSwitchEvent.subscribe(t=>{null!==t&&this.loadInitialData()})}loadInitialData(){const t=localStorage.getItem("cc_selected_group_id"),n=new FormData;n.append("booking_id",t),n.append("nonce",x.QF),this.apiService.getExhibitor(n).subscribe(l=>{this.exhibitors=l.data.exhibitors})}getImageUrl(t){var n,l,s,c,h;let u="",p=t.split(" ");return u=p.length>1?(null===(l=null===(n=p[0])||void 0===n?void 0:n.charAt(0))||void 0===l?void 0:l.toUpperCase())+(null===(c=null===(s=p[1])||void 0===s?void 0:s.charAt(0))||void 0===c?void 0:c.toUpperCase()):null===(h=t?.charAt(0))||void 0===h?void 0:h.toUpperCase(),u}back(){this.location.back()}viewExhibitor(t){this.router.navigate(["/app/home/exhibitor/view-exhibitor"],{state:{viewexhibitor:t}})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(g.Ye),i.Y36(v.s),i.Y36(f.U),i.Y36(d.F0))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-exhibitor"]],decls:14,vars:1,consts:[["collapse","fade"],["slot","start",3,"click"],["name","chevron-back-outline",1,"back-arrow"],[1,"menu-page"],[2,"padding","10px"],[4,"ngFor","ngForOf"],[1,"circle"],["class","img-member-name",3,"src",4,"ngIf"],["class","img-member-name","src","assets/images/person.png",4,"ngIf"],[2,"width","150px"],["slot","end"],["shape","round","size","default",3,"click"],[1,"img-member-name",3,"src"],["src","assets/images/person.png",1,"img-member-name"]],template:function(t,n){1&t&&(i.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),i.NdJ("click",function(){return n.back()}),i._UZ(3,"ion-icon",2),i.qZA(),i._UZ(4,"app-header"),i.qZA()(),i.TgZ(5,"ion-content")(6,"div",3)(7,"h5",4),i._uU(8,"Exhibitors"),i.qZA()(),i.TgZ(9,"ion-list"),i.YNc(10,A,12,4,"ion-item",5),i.qZA(),i._UZ(11,"br")(12,"br")(13,"br"),i.qZA()),2&t&&(i.xp6(10),i.Q6J("ngForOf",n.exhibitors))},dependencies:[g.sg,g.O5,a.BJ,a.YG,a.Sm,a.W2,a.Gu,a.gu,a.Ie,a.Q$,a.q_,a.sr,E.G],styles:[".table-header[_ngcontent-%COMP%]{background:var(--ion-color-medium);color:#fff;padding:10px}.table-content[_ngcontent-%COMP%]{border:1px #f4f4f4 solid;padding:10px}.circle[_ngcontent-%COMP%]{border-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;background:#ddd;font-size:17px;line-height:19px;letter-spacing:.2625px}ion-avatar[_ngcontent-%COMP%]{margin-right:10px}"]}),o})()},{path:"view-exhibitor",loadChildren:()=>e.e(146).then(e.bind(e,146)).then(o=>o.ViewExhibitorPageModule)}];let U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[d.Bz.forChild(C),d.Bz]}),o})();var M=e(4546);let T=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[g.ez,b.u5,a.Pc,U,M.O]}),o})()}}]);