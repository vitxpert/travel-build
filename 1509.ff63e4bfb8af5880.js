"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1509],{1509:(S,l,s)=>{s.r(l),s.d(l,{UserFormsPageModule:()=>F});var c=s(6895),m=s(4006),r=s(8058),u=s(3317),d=s(2340),o=s(8256),g=s(1692),h=s(1481),p=s(3646);const f=[{path:"",component:(()=>{class e{constructor(t,n,i){this.location=t,this.globalService=n,this.sanitizer=i,this.actionGroup="",this.token="",this.loadInitialData()}ngOnInit(){this.globalService.groupSwitchEvent.subscribe(t=>{null!==t&&this.loadInitialData()})}loadInitialData(){const t=JSON.parse(localStorage.getItem("user"))||"";this.actionGroup=localStorage.getItem("cc_selected_group_id"),t.forEach((n,i)=>{n.order_id===Number(this.actionGroup)&&(this.token=t[i].auth_token,this.url=this.sanitizer.bypassSecurityTrustResourceUrl(d.N.baseUrl+"/setcookie?id="+this.token))})}back(){this.location.back()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(c.Ye),o.Y36(g.U),o.Y36(h.H7))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-user-forms"]],decls:7,vars:2,consts:[["collapse","fade"],["slot","start",3,"click"],["name","chevron-back-outline",1,"back-arrow"],[3,"fullscreen"],["width","100%","height","100%",3,"src"]],template:function(t,n){1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o.NdJ("click",function(){return n.back()}),o._UZ(3,"ion-icon",2),o.qZA(),o._UZ(4,"app-header"),o.qZA()(),o.TgZ(5,"ion-content",3),o._UZ(6,"iframe",4),o.qZA()),2&t&&(o.xp6(5),o.Q6J("fullscreen",!0),o.xp6(1),o.Q6J("src",n.url,o.uOi))},dependencies:[r.Sm,r.W2,r.Gu,r.gu,r.sr,p.G]}),e})()}];let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.Bz.forChild(f),u.Bz]}),e})();var v=s(4546);let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.ez,m.u5,r.Pc,U,v.O]}),e})()}}]);