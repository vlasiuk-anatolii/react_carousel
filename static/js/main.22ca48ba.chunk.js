(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),s=a(4),c=a(5),r=a(8),m=a(6),o=a(1),p=a.n(o),l=(a(13),a(7)),u=(a(14),a(0)),h=function(e){var t=e.images,a=e.step,n=e.frameSize,i=e.itemWidth,s=e.animationDuration,c=e.infinite,r=Object(o.useState)(0),m=Object(l.a)(r,2),p=m[0],h=m[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"Carousel",style:{width:i*n},children:[Object(u.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(-p,"px)"),transitionDuration:"".concat(s,"ms")},children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("img",{src:"".concat(e),alt:e,style:{width:i}})},e)}))}),Object(u.jsxs)("div",{className:"Carousel__boxbuttons",children:[Object(u.jsx)("button",{className:"Carousel__button",type:"button",onClick:function(){var e=p-i*a;p-i*a<0&&(e=0),c&&(e=0,0===p&&(e=i*t.length-a*i)),h((function(){return e}))},children:"Prev"}),Object(u.jsx)("button",{className:"Carousel__button",type:"button",onClick:function(){var e=p+i*a;p+a*i>=t.length*i-i&&(e=t.length*i-n*i),p+n*i>=t.length*i-i&&(e=p+i),p+n*i>=t.length*i&&(e=p),c&&(e=i*t.length-a*i,p===e&&(e=0)),h((function(){return e}))},children:"Next"})]})]})})},j=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e.changeValue=function(t){var a=t.target.name,n=t.target.value;switch(a){case"itemWidth":e.setState({itemWidth:+n});break;case"animationDuration":e.setState({animationDuration:+n});break;case"frameSize":e.setState({frameSize:+n});break;case"step":e.setState({step:+n});break;case"infinite":e.setState((function(e){return{infinite:!e.infinite}}))}},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.images;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{className:"App__title",children:["Carousel with ",e.length," images"]}),Object(u.jsx)(h,{images:e,frameSize:this.state.frameSize,itemWidth:this.state.itemWidth,animationDuration:this.state.animationDuration,step:this.state.step,infinite:this.state.infinite}),Object(u.jsx)("div",{className:"App__boxform",children:Object(u.jsxs)("form",{method:"get",className:"App__form",children:[Object(u.jsx)("span",{className:"App__spanform",children:"Item Width:"}),Object(u.jsx)("input",{className:"App__inputform",name:"itemWidth",type:"number",min:100,max:200,defaultValue:this.state.itemWidth,onChange:this.changeValue}),Object(u.jsx)("span",{className:"App__spanform",children:"Frame Size:"}),Object(u.jsx)("input",{className:"App__inputform",name:"frameSize",type:"number",min:3,max:5,defaultValue:this.state.frameSize,onChange:this.changeValue}),Object(u.jsx)("span",{className:"App__spanform",children:"Step:"}),Object(u.jsx)("input",{className:"App__inputform",name:"step",type:"number",min:2,max:5,defaultValue:this.state.step,onChange:this.changeValue}),Object(u.jsx)("span",{className:"App__spanform",children:"Animation Duration ms:"}),Object(u.jsx)("input",{className:"App__inputform",name:"animationDuration",type:"number",min:1e3,max:5e3,defaultValue:this.state.animationDuration,onChange:this.changeValue}),Object(u.jsx)("span",{className:"App__spanform",children:"Infinity Animation"}),Object(u.jsx)("input",{className:"App__checkboxform",name:"infinite",type:"checkbox",onChange:this.changeValue})]})})]})}}]),a}(p.a.Component),b=j;i.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.22ca48ba.chunk.js.map