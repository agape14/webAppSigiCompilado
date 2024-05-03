"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[687],{2614:(q,b,i)=>{i.r(b),i.d(b,{default:()=>Y});var t=i(9212),p=i(6223),x=i(2296),F=i(5986),T=i(3680),I=i(4170),C=i(617),D=i(4516),Z=i(1476),y=i(6007),S=i(8525),$=i(2599),R=i(3566),w=i(4748),P=i(5313),M=i(8645),u=i(9773),A=i(3620),n=i(4664),d=i(7398),E=i(3019),V=i(6278),g=i(5619),f=i(9397),l=i(8180),L=i(8504),k=i(2096),U=i(2181),B=i(1474);let m=(()=>{class h{constructor(e){this._httpClient=e,this._brands=new g.X(null),this._categories=new g.X(null),this._pagination=new g.X(null),this._product=new g.X(null),this._products=new g.X(null),this._tags=new g.X(null),this._vendors=new g.X(null)}get brands$(){return this._brands.asObservable()}get categories$(){return this._categories.asObservable()}get pagination$(){return this._pagination.asObservable()}get product$(){return this._product.asObservable()}get products$(){return this._products.asObservable()}get tags$(){return this._tags.asObservable()}get vendors$(){return this._vendors.asObservable()}getBrands(){return this._httpClient.get("api/apps/tesoreria/expconta/brands").pipe((0,f.b)(e=>{this._brands.next(e)}))}getCategories(){return this._httpClient.get("api/apps/tesoreria/expconta/categories").pipe((0,f.b)(e=>{this._categories.next(e)}))}getProducts(e=0,s=10,r="name",a="asc",o=""){return this._httpClient.get("api/apps/tesoreria/expconta/products",{params:{page:""+e,size:""+s,sort:r,order:a,search:o}}).pipe((0,f.b)(c=>{this._pagination.next(c.pagination),this._products.next(c.products)}))}getProductById(e){return this._products.pipe((0,l.q)(1),(0,d.U)(s=>{const r=s.find(a=>a.id===e)||null;return this._product.next(r),r}),(0,n.w)(s=>s?(0,k.of)(s):(0,L._)("Could not found product with id of "+e+"!")))}createProduct(){return this.products$.pipe((0,l.q)(1),(0,n.w)(e=>this._httpClient.post("api/apps/tesoreria/expconta/product",{}).pipe((0,d.U)(s=>(this._products.next([s,...e]),s)))))}updateProduct(e,s){return this.products$.pipe((0,l.q)(1),(0,n.w)(r=>this._httpClient.patch("api/apps/tesoreria/expconta/product",{id:e,product:s}).pipe((0,d.U)(a=>{const o=r.findIndex(c=>c.id===e);return r[o]=a,this._products.next(r),a}),(0,n.w)(a=>this.product$.pipe((0,l.q)(1),(0,U.h)(o=>o&&o.id===e),(0,f.b)(()=>(this._product.next(a),a)))))))}deleteProduct(e){return this.products$.pipe((0,l.q)(1),(0,n.w)(s=>this._httpClient.delete("api/apps/tesoreria/expconta/product",{params:{id:e}}).pipe((0,d.U)(r=>{const a=s.findIndex(o=>o.id===e);return s.splice(a,1),this._products.next(s),r}))))}getTags(){return this._httpClient.get("api/apps/tesoreria/expconta/tags").pipe((0,f.b)(e=>{this._tags.next(e)}))}createTag(e){return this.tags$.pipe((0,l.q)(1),(0,n.w)(s=>this._httpClient.post("api/apps/tesoreria/expconta/tag",{tag:e}).pipe((0,d.U)(r=>(this._tags.next([...s,r]),r)))))}updateTag(e,s){return this.tags$.pipe((0,l.q)(1),(0,n.w)(r=>this._httpClient.patch("api/apps/tesoreria/expconta/tag",{id:e,tag:s}).pipe((0,d.U)(a=>{const o=r.findIndex(c=>c.id===e);return r[o]=a,this._tags.next(r),a}))))}deleteTag(e){return this.tags$.pipe((0,l.q)(1),(0,n.w)(s=>this._httpClient.delete("api/apps/tesoreria/expconta/tag",{params:{id:e}}).pipe((0,d.U)(r=>{const a=s.findIndex(o=>o.id===e);return s.splice(a,1),this._tags.next(s),r}),(0,U.h)(r=>r),(0,n.w)(r=>this.products$.pipe((0,l.q)(1),(0,d.U)(a=>(a.forEach(o=>{const c=o.tags.findIndex(v=>v===e);c>-1&&o.tags.splice(c,1)}),r)))))))}getVendors(){return this._httpClient.get("api/apps/tesoreria/expconta/vendors").pipe((0,f.b)(e=>{this._vendors.next(e)}))}static#t=this.\u0275fac=function(s){return new(s||h)(t.LFG(B.eN))};static#e=this.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})();var O=i(2044),X=i(8109);const Y=[{path:"",pathMatch:"full",redirectTo:""},{path:"",component:(()=>{class h{constructor(e,s,r,a,o,c,v){this._changeDetectorRef=e,this._fuseConfirmationService=s,this._formBuilder=r,this._ReptelecreditoService=a,this._financeService=o,this.router=c,this.fb=v,this.recentTransactionsDataSource=new P.by,this.recentTransactionsTableColumns=["transactionId","date","name","amount","status"],this.iconSize="icon-size-8",this.contactsCount=0,this.flashMessage=null,this.isLoading=!1,this.searchInputControl=new p.p4,this.selectedProduct=null,this.tagsEditMode=!1,this._unsubscribeAll=new M.x}ngOnInit(){this.myForm=this.fb.group({prov:["",p.kI.required],descripcion:[""],category:[""],cost:[""],vendor:[""],brand:[""],estadoprovisional:[""],generarenta:[""]}),this.selectedProductForm=this._formBuilder.group({id:[""],category:[""],name:["",[p.kI.required]],description:[""],tags:[[]],sku:[""],barcode:[""],brand:[""],vendor:[""],stock:[""],reserved:[""],cost:[""],basePrice:[""],taxPercent:[""],price:[""],weight:[""],thumbnail:[""],images:[[]],currentImageIndex:[0],active:[!1]}),this._ReptelecreditoService.brands$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(e=>{this.brands=e,this._changeDetectorRef.markForCheck()}),this._ReptelecreditoService.categories$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(e=>{this.categories=e,this._changeDetectorRef.markForCheck()}),this._ReptelecreditoService.pagination$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(e=>{this.pagination=e,this._changeDetectorRef.markForCheck()}),this.products$=this._ReptelecreditoService.products$,this._ReptelecreditoService.tags$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(e=>{this.tags=e,this.filteredTags=e,this._changeDetectorRef.markForCheck()}),this._ReptelecreditoService.vendors$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(e=>{this.vendors=e,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,u.R)(this._unsubscribeAll),(0,A.b)(300),(0,n.w)(e=>(this.closeDetails(),this.isLoading=!0,this._ReptelecreditoService.getProducts(0,10,"name","asc",e))),(0,d.U)(()=>{this.isLoading=!1})).subscribe(),this._financeService.data$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(e=>{e?(this.data=e,e.recentTransactions?this.recentTransactionsDataSource.data=e.recentTransactions:console.info("La propiedad recentTransactions est\xe1 vac\xeda")):console.warn("El objeto data est\xe1 vac\xedo")})}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"name",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,u.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0,this.closeDetails()}),(0,E.T)(this._sort.sortChange,this._paginator.page).pipe((0,n.w)(()=>(this.closeDetails(),this.isLoading=!0,this._ReptelecreditoService.getProducts(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,d.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}toggleDetails(e){this.selectedProduct&&this.selectedProduct.id===e?this.closeDetails():this._ReptelecreditoService.getProductById(e).subscribe(s=>{this.selectedProduct=s,this.selectedProductForm.patchValue(s),this._changeDetectorRef.markForCheck()})}closeDetails(){this.selectedProduct=null}cycleImages(e=!0){const s=this.selectedProductForm.get("images").value.length,r=this.selectedProductForm.get("currentImageIndex").value,a=r+1===s?0:r+1,o=r-1<0?s-1:r-1;e?this.selectedProductForm.get("currentImageIndex").setValue(a):this.selectedProductForm.get("currentImageIndex").setValue(o)}toggleTagsEditMode(){this.tagsEditMode=!this.tagsEditMode}filterTags(e){const s=e.target.value.toLowerCase();this.filteredTags=this.tags.filter(r=>r.title.toLowerCase().includes(s))}filterTagsInputKeyDown(e){if("Enter"!==e.key)return;if(0===this.filteredTags.length)return this.createTag(e.target.value),void(e.target.value="");const s=this.filteredTags[0];this.selectedProduct.tags.find(a=>a===s.id)?this.removeTagFromProduct(s):this.addTagToProduct(s)}createTag(e){this._ReptelecreditoService.createTag({title:e}).subscribe(r=>{this.addTagToProduct(r)})}updateTagTitle(e,s){e.title=s.target.value,this._ReptelecreditoService.updateTag(e.id,e).pipe((0,A.b)(300)).subscribe(),this._changeDetectorRef.markForCheck()}deleteTag(e){this._ReptelecreditoService.deleteTag(e.id).subscribe(),this._changeDetectorRef.markForCheck()}addTagToProduct(e){this.selectedProduct.tags.unshift(e.id),this.selectedProductForm.get("tags").patchValue(this.selectedProduct.tags),this._changeDetectorRef.markForCheck()}removeTagFromProduct(e){this.selectedProduct.tags.splice(this.selectedProduct.tags.findIndex(s=>s===e.id),1),this.selectedProductForm.get("tags").patchValue(this.selectedProduct.tags),this._changeDetectorRef.markForCheck()}toggleProductTag(e,s){s.checked?this.addTagToProduct(e):this.removeTagFromProduct(e)}shouldShowCreateTagButton(e){return!(""===e||this.tags.findIndex(s=>s.title.toLowerCase()===e.toLowerCase())>-1)}createProduct(){this._ReptelecreditoService.createProduct().subscribe(e=>{this.selectedProduct=e,this.selectedProductForm.patchValue(e),this._changeDetectorRef.markForCheck()})}redirectToOtraVista(){this.router.navigate(["/inmobiliaria/incorporacion/detalle"])}updateSelectedProduct(){const e=this.selectedProductForm.getRawValue();delete e.currentImageIndex,this._ReptelecreditoService.updateProduct(e.id,e).subscribe(()=>{this.showFlashMessage("success")})}deleteSelectedProduct(){this._fuseConfirmationService.open({title:"Delete product",message:"Are you sure you want to remove this product? This action cannot be undone!",actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(s=>{if("confirmed"===s){const r=this.selectedProductForm.getRawValue();this._ReptelecreditoService.deleteProduct(r.id).subscribe(()=>{this.closeDetails()})}})}showFlashMessage(e){this.flashMessage=e,this._changeDetectorRef.markForCheck(),setTimeout(()=>{this.flashMessage=null,this._changeDetectorRef.markForCheck()},3e3)}trackByFn(e,s){return s.id||e}static#t=this.\u0275fac=function(s){return new(s||h)(t.Y36(t.sBO),t.Y36(V.R),t.Y36(p.QS),t.Y36(m),t.Y36(O.w),t.Y36(X.F0),t.Y36(p.qu))};static#e=this.\u0275cmp=t.Xpm({type:h,selectors:[["reptelecredito-list"]],viewQuery:function(s,r){if(1&s&&(t.Gf(Z.NW,5),t.Gf(R.YE,5)),2&s){let a;t.iGM(a=t.CRH())&&(r._paginator=a.first),t.iGM(a=t.CRH())&&(r._sort=a.first)}},standalone:!0,features:[t.jDz],decls:74,vars:0,consts:[[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"flex","flex-col","sm:flex-row","md:flex-col","flex-auto","justify-between","py-8","px-6","md:px-8","border-b"],[1,"container","overflow-y-auto",2,"max-height","400px"],[1,"overflow-y-auto","max-h-[400px]"],[1,"container","mx-auto"],[1,"flex","items-center","mb-4"],[1,"text-lg","font-semibold"],[1,"flex","space-x-4"],["mat-raised-button","","color","primary",1,"flex","items-center"],["mat-raised-button","","color","warn",1,"flex","items-center"],[1,"overflow-x-auto"],[1,"w-full","border-collapse","border","border-gray-300"],[1,"border","border-gray-300","px-4","py-2"],["mat-raised-button","","color","primary"]],template:function(s,r){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2",6),t._uU(7,"Reporte telecredito"),t.qZA()(),t.TgZ(8,"div",5),t._UZ(9,"div"),t.TgZ(10,"div",7)(11,"button",8)(12,"mat-icon"),t._uU(13,"add"),t.qZA(),t.TgZ(14,"span"),t._uU(15,"Agregar"),t.qZA()(),t.TgZ(16,"button",9)(17,"mat-icon"),t._uU(18,"delete"),t.qZA(),t.TgZ(19,"span"),t._uU(20,"Editar"),t.qZA()(),t.TgZ(21,"button",9)(22,"mat-icon"),t._uU(23,"delete"),t.qZA(),t.TgZ(24,"span"),t._uU(25,"Activar/desactivar"),t.qZA()()()(),t.TgZ(26,"div",10)(27,"table",11)(28,"thead")(29,"tr")(30,"th",12),t._uU(31,"Motivo"),t.qZA(),t.TgZ(32,"th",12),t._uU(33,"Tipo"),t.qZA(),t.TgZ(34,"th",12),t._uU(35,"CC. Cuentas por Cobrar"),t.qZA(),t.TgZ(36,"th",12),t._uU(37,"CC. Ventas"),t.qZA(),t.TgZ(38,"th",12),t._uU(39,"CC. Ventas IGV"),t.qZA(),t.TgZ(40,"th",12),t._uU(41,"CC. Rem. Transito"),t.qZA(),t.TgZ(42,"th",12),t._uU(43,"CC. Rem. Trans. Detrac."),t.qZA(),t.TgZ(44,"th",12),t._uU(45,"Estado"),t.qZA(),t.TgZ(46,"th",12),t._uU(47,"Cod."),t.qZA()()(),t.TgZ(48,"tbody")(49,"tr")(50,"td",12),t._uU(51,"Motivo"),t.qZA(),t.TgZ(52,"td",12),t._uU(53,"Tipo"),t.qZA(),t.TgZ(54,"td",12),t._uU(55,"CC. Cuentas por Cobrar"),t.qZA(),t.TgZ(56,"td",12),t._uU(57,"CC. Ventas"),t.qZA(),t.TgZ(58,"td",12),t._uU(59,"CC. Ventas IGV"),t.qZA(),t.TgZ(60,"td",12),t._uU(61,"CC. Rem. Transito"),t.qZA(),t.TgZ(62,"td",12),t._uU(63,"CC. Rem. Trans. Detrac."),t.qZA(),t.TgZ(64,"td",12),t._uU(65,"Estado"),t.qZA(),t.TgZ(66,"td",12),t._uU(67,"Cod."),t.qZA()()()()()()(),t.TgZ(68,"h2"),t._uU(69,"Pagos de arrendamiento"),t.qZA(),t.TgZ(70,"p"),t._uU(71,"Este es el contenido de la primera pesta\xf1a."),t.qZA(),t.TgZ(72,"button",13),t._uU(73,"Bot\xf3n de la pesta\xf1a 1"),t.qZA()()()())},dependencies:[y.Cv,I.lN,C.Ps,C.Hw,D.c,p.u5,p.UX,x.ot,x.lW,R.JX,Z.TU,$.rP,S.LD,T.Ng,F.p9,T.si,P.p0],styles:[".Exportardatosbanco-grid{grid-template-columns:48px auto 40px}@media (min-width: 600px){.Exportardatosbanco-grid{grid-template-columns:48px auto 112px 72px}}@media (min-width: 960px){.Exportardatosbanco-grid{grid-template-columns:48px 112px auto 112px 72px}}@media (min-width: 1280px){.Exportardatosbanco-grid{grid-template-columns:48px 112px auto 112px 96px 96px 72px}}\n"],encapsulation:2,data:{animation:w.L},changeDetection:0})}return h})(),resolve:{brands:()=>(0,t.f3M)(m).getBrands(),categories:()=>(0,t.f3M)(m).getCategories(),products:()=>(0,t.f3M)(m).getProducts(),tags:()=>(0,t.f3M)(m).getTags(),vendors:()=>(0,t.f3M)(m).getVendors()}}]}}]);