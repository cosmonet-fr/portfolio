(function(e){function t(t){for(var s,a,r=t[0],c=t[1],l=t[2],u=0,v=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&v.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],s=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var s={},n={app:0},o=[];function a(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=s,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(i,s,function(t){return e[t]}.bind(null,s));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"08b3":function(e,t,i){e.exports=i.p+"img/piquante_screenshot.d033d127.png"},"08c2":function(e,t,i){e.exports=i.p+"img/github-brands.d0fa21c7.svg"},"0b85":function(e,t,i){"use strict";var s=i("f296"),n=i.n(s);n.a},"0e19":function(e,t,i){e.exports=i.p+"img/apercu_babm.c6b0f9bd.jpg"},"155a":function(e,t,i){e.exports=i.p+"img/apercu_michelin.febdf0f9.jpg"},"1bf3":function(e,t,i){},"2d92":function(e,t,i){"use strict";var s=i("c90c"),n=i.n(s);n.a},"31a2":function(e,t,i){e.exports=i.p+"img/apercu_ohmyfood.dd7b4031.jpg"},"32c2":function(e,t,i){"use strict";var s=i("9652"),n=i.n(s);n.a},"36a6":function(e,t,i){e.exports=i.p+"img/groupomania_screenshot4.7ae127a6.jpg"},"3b8e":function(e,t,i){"use strict";var s=i("6909"),n=i.n(s);n.a},"3e2a":function(e,t,i){},"52aa":function(e,t,i){e.exports=i.p+"img/apercu_cv.e9606857.jpg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e._m(0),i("AllProjects")],1)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",[i("h1",[e._v(" Portfolio"),i("br"),i("span",[e._v("Stéphane BILLOIS")])])])}],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"allProjects"},[s("transition",{attrs:{name:"loadingModaleWindow"}},[e.reveleOrinoco?s("modale_orinoco",{attrs:{reveleOrinoco:e.reveleOrinoco,toggleModaleOrinoco:e.toggleModaleOrinoco}}):e._e()],1),s("div",{staticClass:"oneProject orinoco",on:{click:e.toggleModaleOrinoco,mouseover:function(t){e.orinoco=!0},mouseleave:function(t){e.orinoco=!1}}},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.orinoco,expression:"orinoco"}],staticClass:"text"},[s("h2",[e._v("Orinoco")]),s("p",[e._v("Réalisation d'un site de e-commerce.")])])]),e._m(0)],1),s("transition",{attrs:{name:"loadingModaleWindow"}},[e.reveleGroupomania?s("modale_groupomania",{attrs:{reveleGroupomania:e.reveleGroupomania,toggleModaleGroupomania:e.toggleModaleGroupomania}}):e._e()],1),s("div",{staticClass:"oneProject groupomania",on:{click:e.toggleModaleGroupomania,mouseover:function(t){e.groupomania=!0},mouseleave:function(t){e.groupomania=!1}}},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.groupomania,expression:"groupomania"}],staticClass:"text"},[s("h2",[e._v("Social"),s("br"),s("span",[e._v("Network")])]),s("p",[e._v("Réalisation d'un réseau social d'entreprise.")])])]),e._m(1)],1),s("transition",{attrs:{name:"loadingModaleWindow"}},[e.revelePiquante?s("modale_piquante",{attrs:{revelePiquante:e.revelePiquante,toggleModalePiquante:e.toggleModalePiquante}}):e._e()],1),s("div",{staticClass:"oneProject sauce",on:{click:e.toggleModalePiquante,mouseover:function(t){e.sauce=!0},mouseleave:function(t){e.sauce=!1}}},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.sauce,expression:"sauce"}],staticClass:"text pi"},[s("h2",[e._v("Piquante")]),s("p",[e._v("Réalisation d'une API de notation de sauces.")])])]),e._m(2)],1),s("transition",{attrs:{name:"loadingModaleWindow"}},[e.reveleOhmyfood?s("modale_ohmyfood",{attrs:{reveleOhmyfood:e.reveleOhmyfood,toggleModaleOhmyfood:e.toggleModaleOhmyfood}}):e._e()],1),s("div",{staticClass:"oneProject ohmyfood",on:{click:e.toggleModaleOhmyfood,mouseover:function(t){e.ohmyfood=!0},mouseleave:function(t){e.ohmyfood=!1}}},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.ohmyfood,expression:"ohmyfood"}],staticClass:"text oh"},[s("h2",[e._v("ohmyfood")]),s("p",[e._v("Réalisation d'un site référençant les menus de restaurants.")])])]),e._m(3)],1),s("transition",{attrs:{name:"loadingModaleWindow"}},[e.reveleBabm?s("modale_babm",{attrs:{reveleBabm:e.reveleBabm,toggleModaleBabm:e.toggleModaleBabm}}):e._e()],1),s("div",{staticClass:"oneProject babm",on:{click:e.toggleModaleBabm,mouseover:function(t){e.babm=!0},mouseleave:function(t){e.babm=!1}}},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.babm,expression:"babm"}],staticClass:"text"},[s("img",{attrs:{src:i("f694"),alt:"BABM"}}),s("p",[e._v("Réalisation d'un site de présentation d'un événement.")])])]),e._m(4)],1),s("transition",{attrs:{name:"loadingModaleWindow"}},[e.reveleChouette?s("modale_chouette",{attrs:{reveleChouette:e.reveleChouette,toggleModaleChouette:e.toggleModaleChouette}}):e._e()],1),s("div",{staticClass:"oneProject chouette",on:{click:e.toggleModaleChouette,mouseover:function(t){e.chouette=!0},mouseleave:function(t){e.chouette=!1}}},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.chouette,expression:"chouette"}],staticClass:"text ch"},[s("h2",[e._v("La chouette agence")]),s("p",[e._v("Optimisation de l'accessibilité et du SEO pour le site d'une agence de communication.")])])]),e._m(5)],1),s("transition",{attrs:{name:"loadingModaleWindow"}},[e.reveleCv?s("modale_cv",{attrs:{reveleCv:e.reveleCv,toggleModaleCv:e.toggleModaleCv}}):e._e()],1),s("div",{staticClass:"oneProject cv",on:{click:e.toggleModaleCv,mouseover:function(t){e.cv=!0},mouseleave:function(t){e.cv=!1}}},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.cv,expression:"cv"}],staticClass:"text"},[s("h2",[e._v("Curriculum vitae")]),s("p",[e._v("Réalisation de mon CV en ligne.")])])]),e._m(6)],1),s("transition",{attrs:{name:"loadingModaleWindow"}},[e.reveleMichelin?s("modale_michelin",{attrs:{reveleMichelin:e.reveleMichelin,toggleModaleMichelin:e.toggleModaleMichelin}}):e._e()],1),s("div",{staticClass:"oneProject michelin",on:{click:e.toggleModaleMichelin,mouseover:function(t){e.michelin=!0},mouseleave:function(t){e.michelin=!1}}},[s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.michelin,expression:"michelin"}],staticClass:"text mi"},[s("h2",[e._v("Michelin")]),s("p",[e._v("Réalisation d'un prototype d'une web app pour un musée.")])])]),e._m(7)],1)],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menuGsm"},[i("h2",[e._v("Orinoco")]),i("p",[e._v("Réalisation d'un site de e-commerce.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menuGsm"},[i("h2",[e._v("Social"),i("br"),i("span",[e._v("Network")])]),i("p",[e._v("Réalisation d'un réseau social d'entreprise.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menuGsm pi"},[i("h2",[e._v("Piquante")]),i("p",[e._v("Réalisation d'une API de notation de sauces.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menuGsm oh"},[i("h2",[e._v("ohmyfood")]),i("p",[e._v("Réalisation d'un site référençant les menus de restaurants.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"menuGsm"},[s("img",{attrs:{src:i("f694"),alt:"BABM"}}),s("p",[e._v("Réalisation d'un site de présentation d'un événement.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menuGsm ch"},[i("h2",[e._v("La chouette agence")]),i("p",[e._v("Optimisation de l'accessibilité et du SEO pour le site d'une agence de communication.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menuGsm"},[i("h2",[e._v("Curriculum vitae")]),i("p",[e._v("Réalisation de mon CV en ligne.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"menuGsm mi"},[i("h2",[e._v("Michelin")]),i("p",[e._v("Réalisation d'un prototype d'une web app pour un musée.")])])}],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.reveleOrinoco?s("div",{staticClass:"modaleScreen"},[s("div",{staticClass:"overlay",on:{click:e.toggleModaleOrinoco}}),s("div",{staticClass:"modaleBox"},[s("div",{staticClass:"menuBtn"},[s("h2",[e._v("Orinoco")]),s("div",{staticClass:"btn",on:{click:e.toggleModaleOrinoco}},[e._v("X")])]),s("div",{staticClass:"page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"screenshot"},[s("img",{directives:[{name:"show",rawName:"v-show",value:0===e.indScreenshot,expression:"indScreenshot === 0"}],attrs:{src:i("fa9f"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:1===e.indScreenshot,expression:"indScreenshot === 1"}],attrs:{src:i("ba4a"),alt:""}}),s("div",{staticClass:"navScreenshot"},[s("img",{staticClass:"arrow",attrs:{src:i("e678"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(-1,1)}}}),0===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),0!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=0}}}):e._e(),1===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),1!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=1}}}):e._e(),s("img",{staticClass:"arrow",attrs:{src:i("d03c"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(1,1)}}})])]),e._m(0)]),e._m(1)])])]):e._e()},l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textBox"},[i("h3",[e._v("Mission:")]),i("p",[e._v(" Le projet “Orinoco” d’Openclassrooms consistait à réaliser la partie front-end d’un site de e-commerce pour la vente d’appareils photos vintages. Il fallait interagir avec une API Rest codée pour Node.js. ")]),i("p",[e._v(" Le site web devait avoir un système de panier développé en JavaScript Vanilla. Il fallait également contrôler les entrées du formulaire de commande (Regex). ")]),i("h3",[e._v("Technologies utilisées:")]),i("p",[i("ul",[i("li",[e._v("HTML")]),i("li",[e._v("CSS / Sass")]),i("li",[e._v("JavaScript")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ModaleFooter"},[s("a",{attrs:{href:"https://github.com/cosmonet-fr/P5_billois_stephane/"}},[s("img",{attrs:{src:i("08c2"),alt:"Code sur GitHub"}})])])}],d={data:function(){return{indScreenshot:0}},name:"ModaleOrinoco",props:["reveleOrinoco","toggleModaleOrinoco"],methods:{goNextOrBackPicture:function(e,t){1===e?this.indScreenshot<t?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=0:-1===e&&(0!==this.indScreenshot?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=t)}}},u=d,v=(i("2d92"),i("2877")),h=Object(v["a"])(u,c,l,!1,null,"7d1ae084",null),m=h.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.reveleGroupomania?s("div",{staticClass:"modaleScreen"},[s("div",{staticClass:"overlay",on:{click:e.toggleModaleGroupomania}}),s("div",{staticClass:"modaleBox"},[s("div",{staticClass:"menuBtn"},[s("h2",[e._v("Groupomania")]),s("div",{staticClass:"btn",on:{click:e.toggleModaleGroupomania}},[e._v("X")])]),s("div",{staticClass:"page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"screenshot"},[s("img",{directives:[{name:"show",rawName:"v-show",value:0===e.indScreenshot,expression:"indScreenshot === 0"}],attrs:{src:i("9a44"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:1===e.indScreenshot,expression:"indScreenshot === 1"}],attrs:{src:i("bad0"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:2===e.indScreenshot,expression:"indScreenshot === 2"}],attrs:{src:i("5bdd"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:3===e.indScreenshot,expression:"indScreenshot === 3"}],attrs:{src:i("71c0"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:4===e.indScreenshot,expression:"indScreenshot === 4"}],attrs:{src:i("36a6"),alt:""}}),s("div",{staticClass:"navScreenshot"},[s("img",{staticClass:"arrow",attrs:{src:i("e678"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(-1,4)}}}),0===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),0!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=0}}}):e._e(),1===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),1!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=1}}}):e._e(),2===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),2!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=2}}}):e._e(),3===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),3!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=3}}}):e._e(),4===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),4!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=4}}}):e._e(),s("img",{staticClass:"arrow",attrs:{src:i("d03c"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(1,4)}}})])]),e._m(0)]),e._m(1)])])]):e._e()},f=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textBox"},[i("h3",[e._v("Mission:")]),i("p",[e._v(" Le projet “Groupomania” d’Openclassrooms consistait à réaliser un réseau social d’entreprise. L’API a été faite avec Node.js, Express et MariaDB. Le front-end a été réalisé avec Vue.js ")]),i("p",[e._v(" Parmi les fonctionnalités à développer, il y avait : "),i("ul",[i("li",[e._v("la possibilité de créer, de modifier ou de supprimer un compte;")]),i("li",[e._v("la possibilité d'ajouter ou de modifier une photo de profil;")]),i("li",[e._v("la possibilité de créer, de modifier ou de supprimer des messages;")]),i("li",[e._v("la possibilité de joindre un fichier média (Jpeg, Gif, PNG, SVG, Webp) à un message;")]),i("li",[e._v("la possibilité d’ajouter, de modifier ou de supprimer des commentaires;")]),i("li",[e._v("la création d'un panneau d’administration permettant la modération des comptes utilisateurs et des messages.")])])]),i("h3",[e._v("Technologies utilisées:")]),i("p",[i("ul",[i("li",[e._v("Node.js")]),i("li",[e._v("Express")]),i("li",[e._v("MariaDB")]),i("li",[e._v("Vue.js")]),i("li",[e._v("Sass")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ModaleFooter"},[s("a",{attrs:{href:"https://github.com/cosmonet-fr/P7_billois_stephane/"}},[s("img",{attrs:{src:i("08c2"),alt:"Code sur GitHub"}})])])}],_={data:function(){return{indScreenshot:0}},name:"ModaleGroupomania",props:["reveleGroupomania","toggleModaleGroupomania"],methods:{goNextOrBackPicture:function(e,t){1===e?this.indScreenshot<t?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=0:-1===e&&(0!==this.indScreenshot?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=t)}}},g=_,C=(i("652d"),Object(v["a"])(g,p,f,!1,null,"47cf30cc",null)),b=C.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.revelePiquante?s("div",{staticClass:"modaleScreen"},[s("div",{staticClass:"overlay",on:{click:e.toggleModalePiquante}}),s("div",{staticClass:"modaleBox"},[s("div",{staticClass:"menuBtn"},[s("h2",[e._v("Piquante")]),s("div",{staticClass:"btn",on:{click:e.toggleModalePiquante}},[e._v("X")])]),s("div",{staticClass:"page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"screenshot"},[s("img",{directives:[{name:"show",rawName:"v-show",value:0===e.indScreenshot,expression:"indScreenshot === 0"}],attrs:{src:i("aa6f"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:1===e.indScreenshot,expression:"indScreenshot === 1"}],attrs:{src:i("08b3"),alt:""}}),s("div",{staticClass:"navScreenshot"},[s("img",{staticClass:"arrow",attrs:{src:i("e678"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(-1,1)}}}),0===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),0!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=0}}}):e._e(),1===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),1!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=1}}}):e._e(),s("img",{staticClass:"arrow",attrs:{src:i("d03c"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(1,1)}}})])]),e._m(0)]),e._m(1)])])]):e._e()},w=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textBox"},[i("h3",[e._v("Mission:")]),i("p",[e._v(" Le projet « Piquante » d’Openclassrooms consistait à réaliser une API Rest de notation de sauces. Le développement devait interagir avec une application web Angular. ")]),i("p",[e._v(" Parmi les fonctionnalités à développer, il y avait: "),i("ul",[i("li",[e._v("la création et la suppression de comptes;")]),i("li",[e._v("l'ajout, la modification et la suppression de produits (Sauces) avec images;")]),i("li",[e._v("un système de likes/dislikes;")]),i("li",[e._v("le stockage des données devait respecter les règles de l’OWASP.")])])]),i("h3",[e._v("Technologies utilisées:")]),i("p",[i("ul",[i("li",[e._v("Node.js")]),i("li",[e._v("Express")]),i("li",[e._v("MongoDB")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ModaleFooter"},[s("a",{attrs:{href:"https://github.com/cosmonet-fr/P6_billois_stephane/"}},[s("img",{attrs:{src:i("08c2"),alt:"Code sur GitHub"}})])])}],M={data:function(){return{indScreenshot:0}},name:"ModalePiquante",props:["revelePiquante","toggleModalePiquante"],methods:{goNextOrBackPicture:function(e,t){1===e?this.indScreenshot<t?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=0:-1===e&&(0!==this.indScreenshot?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=t)}}},x=M,O=(i("0b85"),Object(v["a"])(x,S,w,!1,null,"5e785ba8",null)),k=O.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.reveleOhmyfood?s("div",{staticClass:"modaleScreen"},[s("div",{staticClass:"overlay",on:{click:e.toggleModaleOhmyfood}}),s("div",{staticClass:"modaleBox"},[s("div",{staticClass:"menuBtn"},[s("h2",[e._v("Ohmyfood")]),s("div",{staticClass:"btn",on:{click:e.toggleModaleOhmyfood}},[e._v("X")])]),s("div",{staticClass:"page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"screenshot"},[s("img",{directives:[{name:"show",rawName:"v-show",value:0===e.indScreenshot,expression:"indScreenshot === 0"}],attrs:{src:i("31a2"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:1===e.indScreenshot,expression:"indScreenshot === 1"}],attrs:{src:i("a67f"),alt:""}}),s("div",{staticClass:"navScreenshot"},[s("img",{staticClass:"arrow",attrs:{src:i("e678"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(-1,1)}}}),0===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),0!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=0}}}):e._e(),1===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),1!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=1}}}):e._e(),s("img",{staticClass:"arrow",attrs:{src:i("d03c"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(1,1)}}})])]),e._m(0)]),e._m(1)])])]):e._e()},B=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textBox"},[i("h3",[e._v("Mission:")]),i("p",[e._v(" Le projet “ohmyfood” d’Openclassrooms consistait à réaliser un site référençant les menus de restaurants. Le site devait être responsive et utiliser des animations CSS modernes (Keyframes), en partant d’une "),i("a",{attrs:{href:"http://portfolio.billois.org/portfolio/wp-content/uploads/2020/08/planche-1b.png"}},[e._v("maquette fournie par Openclassrooms")]),e._v(". ")]),i("h3",[e._v("Technologies utilisées:")]),i("p",[i("ul",[i("li",[e._v("HTML")]),i("li",[e._v("CSS / Sass")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ModaleFooter"},[s("a",{attrs:{href:"https://github.com/cosmonet-fr/P3_billois_stephane/"}},[s("img",{attrs:{src:i("08c2"),alt:"Code sur GitHub"}})]),s("a",{attrs:{href:"https://cosmonet-fr.github.io/P3_billois_stephane/"}},[s("img",{attrs:{src:i("66a4"),alt:"Lien du site"}})])])}],R={data:function(){return{indScreenshot:0}},name:"Modale",props:["reveleOhmyfood","toggleModaleOhmyfood"],methods:{goNextOrBackPicture:function(e,t){1===e?this.indScreenshot<t?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=0:-1===e&&(0!==this.indScreenshot?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=t)}}},y=R,j=(i("989f"),Object(v["a"])(y,P,B,!1,null,"5f52bd4c",null)),N=j.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.reveleBabm?s("div",{staticClass:"modaleScreen"},[s("div",{staticClass:"overlay",on:{click:e.toggleModaleBabm}}),s("div",{staticClass:"modaleBox"},[s("div",{staticClass:"menuBtn"},[s("h2",[e._v("Belles Autos, Belles Motos")]),s("div",{staticClass:"btn",on:{click:e.toggleModaleBabm}},[e._v("X")])]),s("div",{staticClass:"page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"screenshot"},[s("img",{directives:[{name:"show",rawName:"v-show",value:0===e.indScreenshot,expression:"indScreenshot === 0"}],attrs:{src:i("0e19"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:1===e.indScreenshot,expression:"indScreenshot === 1"}],attrs:{src:i("f4ac"),alt:""}}),s("div",{staticClass:"navScreenshot"},[s("img",{staticClass:"arrow",attrs:{src:i("e678"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(-1,1)}}}),0===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),0!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=0}}}):e._e(),1===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),1!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=1}}}):e._e(),s("img",{staticClass:"arrow",attrs:{src:i("d03c"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(1,1)}}})])]),e._m(0)]),e._m(1)])])]):e._e()},A=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textBox"},[i("h3",[e._v("Mission:")]),i("p",[e._v(" Au cours d’un stage d’immersion professionnelle dans la société "),i("a",{attrs:{href:"https://www.openstudio.fr/"}},[e._v("OpenStudio")]),e._v(", j’ai reçu la mission de réaliser en autonomie le site "),i("a",{attrs:{href:"https://babm.fr"}},[e._v("babm.fr")]),e._v(" à partir d’une maquette graphique. ")]),i("h3",[e._v("Technologies utilisées:")]),i("p",[i("ul",[i("li",[e._v("HTML")]),i("li",[e._v("CSS")]),i("li",[e._v("WordPress")]),i("li",[e._v("Plugin ACF (Pour WordPress)")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ModaleFooter"},[s("a",{attrs:{href:"https://www.babm.fr/"}},[s("img",{attrs:{src:i("66a4"),alt:"Lien du site"}})])])}],G={data:function(){return{indScreenshot:0}},name:"ModaleBabm",props:["reveleBabm","toggleModaleBabm"],methods:{goNextOrBackPicture:function(e,t){1===e?this.indScreenshot<t?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=0:-1===e&&(0!==this.indScreenshot?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=t)}}},$=G,q=(i("eaa0"),Object(v["a"])($,E,A,!1,null,"6fe98bd4",null)),L=q.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.reveleChouette?s("div",{staticClass:"modaleScreen"},[s("div",{staticClass:"overlay",on:{click:e.toggleModaleChouette}}),s("div",{staticClass:"modaleBox"},[s("div",{staticClass:"menuBtn"},[s("h2",[e._v("La Chouette Agence")]),s("div",{staticClass:"btn",on:{click:e.toggleModaleChouette}},[e._v("X")])]),s("div",{staticClass:"page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"screenshot"},[s("img",{directives:[{name:"show",rawName:"v-show",value:0===e.indScreenshot,expression:"indScreenshot === 0"}],attrs:{src:i("adeb"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:1===e.indScreenshot,expression:"indScreenshot === 1"}],attrs:{src:i("d158"),alt:""}}),s("div",{staticClass:"navScreenshot"},[s("img",{staticClass:"arrow",attrs:{src:i("e678"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(-1,1)}}}),0===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),0!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=0}}}):e._e(),1===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),1!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=1}}}):e._e(),s("img",{staticClass:"arrow",attrs:{src:i("d03c"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(1,1)}}})])]),e._m(0)]),e._m(1)])])]):e._e()},T=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textBox"},[i("h3",[e._v("Mission:")]),i("p",[e._v(" Le projet « La Chouette Agence » d’Openclassrooms consistait à optimiser le référencement SEO d’un site web, et de le modifier pour qu’il soit conforme aux règles du “Web Content Accessibility Guidelines” (WCAG) du W3C. ")]),i("h3",[e._v("Technologies utilisées:")]),i("p",[i("ul",[i("li",[e._v("HTML")]),i("li",[e._v("CSS")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ModaleFooter"},[s("a",{attrs:{href:"https://github.com/cosmonet-fr/P4_billois_stephane/"}},[s("img",{attrs:{src:i("08c2"),alt:"Code sur GitHub"}})])])}],W={data:function(){return{indScreenshot:0}},name:"ModaleChouette",props:["reveleChouette","toggleModaleChouette"],methods:{goNextOrBackPicture:function(e,t){1===e?this.indScreenshot<t?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=0:-1===e&&(0!==this.indScreenshot?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=t)}}},H=W,I=(i("3b8e"),Object(v["a"])(H,F,T,!1,null,"6431d2b5",null)),X=I.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.reveleCv?s("div",{staticClass:"modaleScreen"},[s("div",{staticClass:"overlay",on:{click:e.toggleModaleCv}}),s("div",{staticClass:"modaleBox"},[s("div",{staticClass:"menuBtn"},[s("h2",[e._v("Curriculum vitæ")]),s("div",{staticClass:"btn",on:{click:e.toggleModaleCv}},[e._v("X")])]),s("div",{staticClass:"page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"screenshot"},[s("img",{directives:[{name:"show",rawName:"v-show",value:0===e.indScreenshot,expression:"indScreenshot === 0"}],attrs:{src:i("52aa"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:1===e.indScreenshot,expression:"indScreenshot === 1"}],attrs:{src:i("8c91"),alt:""}}),s("div",{staticClass:"navScreenshot"},[s("img",{staticClass:"arrow",attrs:{src:i("e678"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(-1,1)}}}),0===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),0!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=0}}}):e._e(),1===e.indScreenshot?s("div",{staticClass:"btnRadio btnRadioActive"}):e._e(),1!==e.indScreenshot?s("div",{staticClass:"btnRadio",on:{click:function(t){e.indScreenshot=1}}}):e._e(),s("img",{staticClass:"arrow",attrs:{src:i("d03c"),alt:"Flèch"},on:{click:function(t){return e.goNextOrBackPicture(1,1)}}})])]),e._m(0)]),e._m(1)])])]):e._e()},J=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textBox"},[i("h3",[e._v("Mission:")]),i("p",[e._v(" J’ai créé ce site web pour partager mon CV en ligne. ")]),i("h3",[e._v("Technologies utilisées:")]),i("p",[i("ul",[i("li",[e._v("HTML")]),i("li",[e._v("CSS / Sass")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ModaleFooter"},[s("a",{attrs:{href:"https://github.com/cosmonet-fr/cv/"}},[s("img",{attrs:{src:i("08c2"),alt:"Code sur GitHub"}})]),s("a",{attrs:{href:"https://cv.billois.org/"}},[s("img",{attrs:{src:i("66a4"),alt:"Lien du site"}})])])}],D={data:function(){return{indScreenshot:0}},name:"ModaleCv",props:["reveleCv","toggleModaleCv"],methods:{goNextOrBackPicture:function(e,t){1===e?this.indScreenshot<t?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=0:-1===e&&(0!==this.indScreenshot?this.indScreenshot=this.indScreenshot+e:this.indScreenshot=t)}}},K=D,z=(i("5b45"),Object(v["a"])(K,V,J,!1,null,"27b37eb7",null)),Q=z.exports,U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.reveleMichelin?s("div",{staticClass:"modaleScreen"},[s("div",{staticClass:"overlay",on:{click:e.toggleModaleMichelin}}),s("div",{staticClass:"modaleBox"},[s("div",{staticClass:"menuBtn"},[s("h2",[e._v("Michelin")]),s("div",{staticClass:"btn",on:{click:e.toggleModaleMichelin}},[e._v("X")])]),s("div",{staticClass:"page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"screenshot"},[s("img",{directives:[{name:"show",rawName:"v-show",value:0===e.indScreenshot,expression:"indScreenshot === 0"}],attrs:{src:i("155a"),alt:""}})]),e._m(0)]),e._m(1)])])]):e._e()},Y=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textBox"},[i("h3",[e._v("Mission:")]),i("p",[e._v(" Au cours d’un stage dans l'entreprise "),i("a",{attrs:{href:"http://www.audiosoft.fr/"}},[e._v("Audio Soft")]),e._v(", il m’a été demandé de réaliser un prototype d’une web app basée sur les technologies web pour contrôler le lancement de vidéos dans le musée “L’Aventure Michelin”. L’application devait tourner sur un IPad avec le navigateur Google Chrome. ")]),i("h3",[e._v("Technologies utilisées:")]),i("p",[i("ul",[i("li",[e._v("HTML")]),i("li",[e._v("CSS")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ModaleFooter"},[s("a",{attrs:{href:"https://github.com/cosmonet-fr/michelin/"}},[s("img",{attrs:{src:i("08c2"),alt:"Code sur GitHub"}})])])}],Z={data:function(){return{indScreenshot:0}},name:"ModaleMichelin",props:["reveleMichelin","toggleModaleMichelin"]},ee=Z,te=(i("32c2"),Object(v["a"])(ee,U,Y,!1,null,"c94f1c4e",null)),ie=te.exports,se={data:function(){return{orinoco:!1,orinocoGsm:!1,groupomania:!1,sauce:!1,ohmyfood:!1,babm:!1,chouette:!1,cv:!1,michelin:!1,reveleOrinoco:!1,reveleGroupomania:!1,revelePiquante:!1,reveleOhmyfood:!1,reveleBabm:!1,reveleChouette:!1,reveleCv:!1,reveleMichelin:!1}},name:"AllProjects",components:{modale_orinoco:m,modale_groupomania:b,modale_piquante:k,modale_ohmyfood:N,modale_babm:L,modale_chouette:X,modale_cv:Q,modale_michelin:ie},methods:{toggleModaleOrinoco:function(){this.reveleOrinoco=!this.reveleOrinoco},toggleModaleGroupomania:function(){this.reveleGroupomania=!this.reveleGroupomania},toggleModalePiquante:function(){this.revelePiquante=!this.revelePiquante},toggleModaleOhmyfood:function(){this.reveleOhmyfood=!this.reveleOhmyfood},toggleModaleBabm:function(){this.reveleBabm=!this.reveleBabm},toggleModaleChouette:function(){this.reveleChouette=!this.reveleChouette},toggleModaleCv:function(){this.reveleCv=!this.reveleCv},toggleModaleMichelin:function(){this.reveleMichelin=!this.reveleMichelin}}},ne=se,oe=(i("84cd"),Object(v["a"])(ne,a,r,!1,null,"63e290f8",null)),ae=oe.exports,re={name:"App",components:{AllProjects:ae}},ce=re,le=(i("5c0b"),Object(v["a"])(ce,n,o,!1,null,null,null)),de=le.exports;i("3e2a");s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(de)}}).$mount("#app")},"5b45":function(e,t,i){"use strict";var s=i("bcdd"),n=i.n(s);n.a},"5bdd":function(e,t,i){e.exports=i.p+"img/groupomania_screenshot2.92514437.png"},"5c0b":function(e,t,i){"use strict";var s=i("9c0c"),n=i.n(s);n.a},"652d":function(e,t,i){"use strict";var s=i("7148"),n=i.n(s);n.a},"66a4":function(e,t,i){e.exports=i.p+"img/link-solid.90250155.svg"},6909:function(e,t,i){},7148:function(e,t,i){},"71c0":function(e,t,i){e.exports=i.p+"img/groupomania_screenshot3.0e7ecd15.png"},7476:function(e,t,i){},"7c7a":function(e,t,i){},"84cd":function(e,t,i){"use strict";var s=i("1bf3"),n=i.n(s);n.a},"8c91":function(e,t,i){e.exports=i.p+"img/cv_screenshot.35a1de96.png"},9652:function(e,t,i){},"989f":function(e,t,i){"use strict";var s=i("7c7a"),n=i.n(s);n.a},"9a44":function(e,t,i){e.exports=i.p+"img/apercu_roupomania.78051329.jpg"},"9c0c":function(e,t,i){},a67f:function(e,t,i){e.exports=i.p+"img/ohmyfood_screenshot.5767e5da.png"},aa6f:function(e,t,i){e.exports=i.p+"img/apercu_piquante.dc7e75a6.jpg"},adeb:function(e,t,i){e.exports=i.p+"img/apercu_chouette.00105e55.jpg"},ba4a:function(e,t,i){e.exports=i.p+"img/orinoco_screenshot.de5189c0.png"},bad0:function(e,t,i){e.exports=i.p+"img/groupomania_screenshot.932fae24.jpg"},bcdd:function(e,t,i){},c90c:function(e,t,i){},d03c:function(e,t,i){e.exports=i.p+"img/arrow_right.d6f8de01.svg"},d158:function(e,t,i){e.exports=i.p+"img/chouette_screenshot.e45d6e43.png"},e678:function(e,t,i){e.exports=i.p+"img/arrow_left.21faaff7.svg"},eaa0:function(e,t,i){"use strict";var s=i("7476"),n=i.n(s);n.a},f296:function(e,t,i){},f4ac:function(e,t,i){e.exports=i.p+"img/babm_screenshot.87582270.png"},f694:function(e,t,i){e.exports=i.p+"img/logo_babm.c8fe8bfb.png"},fa9f:function(e,t,i){e.exports=i.p+"img/apercu_orinoco.6bbf3b40.jpg"}});
//# sourceMappingURL=app.74692719.js.map