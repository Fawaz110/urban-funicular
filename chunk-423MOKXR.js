import{a as b}from"./chunk-32KSBVFG.js";import{f as w,h,i as g,j as E}from"./chunk-CGHYYH2E.js";import"./chunk-4IFKJB3M.js";import{Ja as o,Oa as p,ab as e,bb as t,ca as m,cb as i,hb as u,qb as r,ua as c,xb as v}from"./chunk-PG3DKY5E.js";var k=(()=>{class l{constructor(n,a,d,s){this._ActivatedRoute=n,this._ElementRef=a,this._Renderer2=d,this._Router=s}ngOnInit(){document.body.scrollTop=0,document.documentElement.scrollTop=0,this._ActivatedRoute.params.subscribe(n=>{this.category=n.category,console.log(this.category)})}expand(){let n=this._ElementRef.nativeElement.querySelector("aside"),a=this._ElementRef.nativeElement.querySelector(".expand-btn");n.classList.contains("-translate-x-64")?(this._Renderer2.removeClass(n,"-translate-x-64"),this._Renderer2.addClass(a,"rotate-180")):(this._Renderer2.addClass(n,"-translate-x-64"),this._Renderer2.removeClass(a,"rotate-180"))}static{this.\u0275fac=function(a){return new(a||l)(o(w),o(c),o(p),o(h))}}static{this.\u0275cmp=m({type:l,selectors:[["app-products"]],standalone:!0,features:[v],decls:57,vars:0,consts:[[1,"relative","min-h-screen"],[1,"md:ms-64"],[1,"p-2"],[1,"grid","grid-cols-12","gap-5"],["data-wow-duration","1s","data-wow-delay","0s",1,"col-span-12","sm:col-span-6","lg:col-span-4","wow","bounceInUp"],["data-wow-duration","1s","data-wow-delay","0.25s",1,"col-span-12","sm:col-span-6","lg:col-span-4","wow","bounceInUp"],["data-wow-duration","1s","data-wow-delay","0.5s",1,"col-span-12","sm:col-span-6","lg:col-span-4","wow","bounceInUp"],["data-wow-duration","1s","data-wow-delay",".75s",1,"col-span-12","sm:col-span-6","lg:col-span-4","wow","bounceInUp"],["data-wow-duration","1s","data-wow-delay","0.75s",1,"col-span-12","sm:col-span-6","lg:col-span-4","wow","bounceInUp"],["data-wow-duration","1s",1,"w-64","absolute","bg-gray-100","shadow-md","top-0","left-0","bottom-0","duration-200","-translate-x-64","md:translate-x-0","wow","bounceInLeft"],[1,"expand-btn","duration-200","px-4","py-2","bg-main-lighter","absolute","top-2","left-full","md:hidden",3,"click"],[1,"pi","pi-arrow-right"],[1,"py-5","relative"],["routerLink","/products","routerLinkActive",".nav-item-active",1,"p-3","hover:text-main-solid","hover:bg-gray-200","duration-200","cursor-pointer"],[1,"text-xl","font-semibold"],["routerLink","/products/men","routerLinkActive",".nav-item-active",1,"p-3","hover:text-main-solid","hover:bg-gray-200","duration-200","cursor-pointer"],["routerLink","/products/women","routerLinkActive",".nav-item-active",1,"p-3","hover:text-main-solid","hover:bg-gray-200","duration-200","cursor-pointer"],["routerLink","/products/children","routerLinkActive",".nav-item-active",1,"p-3","hover:text-main-solid","hover:bg-gray-200","duration-200","cursor-pointer"],["routerLink","/products/electronics","routerLinkActive",".nav-item-active",1,"p-3","hover:text-main-solid","hover:bg-gray-200","duration-200","cursor-pointer"],["routerLink","/products/accessories","routerLinkActive",".nav-item-active",1,"p-3","hover:text-main-solid","hover:bg-gray-200","duration-200","cursor-pointer"]],template:function(a,d){a&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),i(5,"app-card-item"),t(),e(6,"div",5),i(7,"app-card-item"),t(),e(8,"div",6),i(9,"app-card-item"),t(),e(10,"div",7),i(11,"app-card-item"),t(),e(12,"div",4),i(13,"app-card-item"),t(),e(14,"div",5),i(15,"app-card-item"),t(),e(16,"div",6),i(17,"app-card-item"),t(),e(18,"div",8),i(19,"app-card-item"),t(),e(20,"div",4),i(21,"app-card-item"),t(),e(22,"div",5),i(23,"app-card-item"),t(),e(24,"div",6),i(25,"app-card-item"),t(),e(26,"div",8),i(27,"app-card-item"),t()()()(),e(28,"aside",9)(29,"button",10),u("click",function(){return d.expand()}),i(30,"i",11),t(),e(31,"div",12)(32,"ul")(33,"li",13)(34,"a",14)(35,"span"),r(36,"All"),t()()(),e(37,"li",15)(38,"a",14)(39,"span"),r(40,"Men"),t()()(),e(41,"li",16)(42,"a",14)(43,"span"),r(44,"Women"),t()()(),e(45,"li",17)(46,"a",14)(47,"span"),r(48,"Children"),t()()(),e(49,"li",18)(50,"a",14)(51,"span"),r(52,"Electronics"),t()()(),e(53,"li",19)(54,"a",14)(55,"span"),r(56,"Accessories"),t()()()()()()())},dependencies:[g,E,b]})}}return l})();export{k as ProductsComponent};