(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{173:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),s=t.n(r),i=(t(77),t(50)),o=t(51),c=t(70),m=t(52),d=t(71),u=(t(78),t(79),t(53)),p=t.n(u),g=(t(90),t(91),t(176)),E=t(177),h=t(54),N=t.n(h),v=t(55),f=t.n(v),y=t(56),b=t.n(y),P=t(57),w=t.n(P),x=t(27),R=t.n(x),F=t(58),U=t.n(F),S=t(59),C=t.n(S),D=t(28),j=t.n(D),L=t(60),I=t.n(L),k=t(61),A=t.n(k),T=t(62),B=t.n(T),H=(t(92),t(63)),M=t.n(H),O=t(64),q=t.n(O),J=t(65),K=t.n(J),z=t(66),Y=t(29),Z=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={SelectLogin:!1,UserLogin:!1,RestaurantLogin:!1,DeliveryLogin:!1,RegisterSelect:!1,UserRegister:!1,RestaurantRegister:!1,DeliveryRegister:!1,signUpPassword:"",signUpConfirmPassword:"",signUpEmail:"",signUpPhoneNum:"",signUpPhoneNum2:"",signUpName:"",signUpRestaurantName:"",email:"",password:""},t.SelectLogin=function(){t.setState({SelectLogin:!0})},t.UserLogin=function(){t.setState({UserLogin:!0,SelectLogin:!1,RestaurantLogin:!1,DeliveryLogin:!1})},t.RestaurantLogin=function(){t.setState({UserLogin:!1,SelectLogin:!1,RestaurantLogin:!0,DeliveryLogin:!1})},t.DeliveryLogin=function(){t.setState({UserLogin:!1,SelectLogin:!1,RestaurantLogin:!1,DeliveryLogin:!0})},t.RegisterSelect=function(){t.setState({UserRegister:!1,RegisterSelect:!0,RestaurantRegister:!1,DeliveryRegister:!1})},t.login=function(){var e={};e.email=t.state.email,fetch("/buttonClick",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userEmail:e.email})}).then((function(e){return e.json()})).then((function(e){console.log(JSON.stringify(e))}))},t.UserRegister=function(){t.setState({UserRegister:!0,RegisterSelect:!1,RestaurantRegister:!1,DeliveryRegister:!1})},t.RestaurantRegister=function(){t.setState({UserRegister:!1,RegisterSelect:!1,RestaurantRegister:!0,DeliveryRegister:!1})},t.DeliveryRegister=function(){t.setState({UserRegister:!1,RegisterSelect:!1,RestaurantRegister:!1,DeliveryRegister:!0})},t.CloseAll=function(){t.setState({UserLogin:!1,SelectLogin:!1,RestaurantLogin:!1,DeliveryLogin:!1,RegisterSelect:!1,UserRegister:!1,RestaurantRegister:!1,DeliveryRegister:!1})},t.validateUserName=function(){return t.state.signUpName?!!/^[A-Za-z]+$/.test(t.state.signUpName)||"Please only use letters. ":"Name cannot be empty. "},t.validateRestuarantName=function(){return t.state.signUpRestaurantName?!!/^[A-Za-z]+$/.test(t.state.signUpName)||"Please only use letters. ":"Restaurant name cannot be empty. "},t.validateEmail=function(){return!!z.validate(t.state.signUpEmail)||"Please enter a valid email. "},t.validatePassword=function(){return/[a-z]/.test(t.state.signUpPassword)?/[A-Z]/.test(t.state.signUpPassword)?!/^[A-Za-z]+$/.test(t.state.signUpPassword)||"Password must contain atleast one unique non-letter character. ":"Password must have atleast one upper case letter. ":"Password must have atleast one lower case letter. "},t.validateConfirmPassword=function(){return t.state.signUpConfirmPassword==t.state.signUpPassword||"Passwords do not match. "},t.validatePhoneNum=function(){return!t.state.signUpPhoneNum||(Object(Y.isMobilePhone)("+"+t.state.signUpPhoneNum,"any",{strictMode:!0})?void 0:"Please enter a valid phone number. ")},t.handleUserChange=function(e){t.setState({email:e.target.value})},t.validatePhoneNum2=function(){return!t.state.signUpPhoneNum2||(Object(Y.isMobilePhone)("+"+t.state.signUpPhoneNum2,"any",{strictMode:!0})?void 0:"Please enter a second valid phone number. ")},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"getTitle",value:function(){return this.state.UserLogin?"User Login":this.state.RestaurantLogin?"Restaurant Login":this.state.DeliveryLogin?"Delivery Login":void 0}},{key:"updateEmail",value:function(e){this.setState({signUpEmail:e.target.value})}},{key:"updateName",value:function(e){this.setState({signUpName:e.target.value})}},{key:"updateRestaurantName",value:function(e){this.setState({signUpRestaurantName:e.target.value})}},{key:"updatePassword",value:function(e){this.setState({signUpPassword:e.target.value})}},{key:"updateConfirmPassword",value:function(e){this.setState({signUpConfirmPassword:e.target.value})}},{key:"updatePhoneNum",value:function(e){this.setState({signUpPhoneNum:e.target.value})}},{key:"updatePhoneNum2",value:function(e){this.setState({signUpPhoneNum2:e.target.value})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("link",{href:"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}),l.a.createElement("script",{src:"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"}),l.a.createElement("script",{src:"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"}),l.a.createElement("link",{href:"//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}),l.a.createElement("script",{src:"//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"}),l.a.createElement("script",{src:"//code.jquery.com/jquery-1.11.1.min.js"}),l.a.createElement("link",{href:"//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}),l.a.createElement("script",{src:"//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"}),l.a.createElement("script",{src:"//code.jquery.com/jquery-1.11.1.min.js"}),l.a.createElement("link",{rel:"stylesheet",href:"http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css"}),l.a.createElement("nav",{className:"NavigationBar"},l.a.createElement("h2",{className:"menu_logo"},"YumDrops"),l.a.createElement("div",{className:"menuright"},l.a.createElement("ul",{className:"menulist"},l.a.createElement("li",{className:"menulist-item"}," ",l.a.createElement("a",{className:"NavBarA",href:"#",onClick:this.SelectLogin},"Login")," "),l.a.createElement("li",{className:"menulist-item"},l.a.createElement("a",{className:"NavBarB",href:"#",onClick:this.RegisterSelect},"Sign Up"," ")))))),l.a.createElement("form",{onSubmit:this.login},l.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleUserChange}),l.a.createElement("button",{onClick:this.login},"ClickME!")),l.a.createElement(g.a,{show:this.state.SelectLogin,onHide:this.CloseAll,className:"modal",animation:!1,centered:!0},l.a.createElement(g.a.Header,{className:"modelheader",id:"containerModal"},l.a.createElement(g.a.Title,{className:"modeltitle",id:"modeltitle"},l.a.createElement("strong",null,"Select Login"))),l.a.createElement(g.a.Body,{id:"CheckSelection"},l.a.createElement(E.a,{id:"UserID",onClick:this.UserLogin},l.a.createElement("strong",null,"USER"))," ",l.a.createElement("br",null),l.a.createElement(E.a,{id:"RestaurantId",onClick:this.RestaurantLogin},l.a.createElement("strong",null,"RESTAURANT"))," ",l.a.createElement("br",null),l.a.createElement(E.a,{id:"DeliveryId",onClick:this.DeliveryLogin},l.a.createElement("strong",null,"DELIVERY")))),l.a.createElement(g.a,{show:this.state.DeliveryLogin||this.state.UserLogin||this.state.RestaurantLogin,onHide:this.CloseAll,animation:!1},l.a.createElement(g.a.Header,null,l.a.createElement(g.a.Title,{id:"modeltitle"},this.getTitle())),l.a.createElement(g.a.Body,null,l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"username"},"Username:"),l.a.createElement("input",{type:"text",id:"username"})," ",l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"text",id:"password"}))),l.a.createElement(g.a.Footer,null,l.a.createElement("a",{id:"button",href:"#"},"Sign UP"))),l.a.createElement(g.a,{show:this.state.RegisterSelect,onHide:this.CloseAll,animation:!1,centered:!0},l.a.createElement(g.a.Header,{className:"modelheader",id:"containerModal"},l.a.createElement(g.a.Title,{className:"modeltitle",id:"modeltitle"},l.a.createElement("strong",null,"Select Account Type"))),l.a.createElement(g.a.Body,{id:"CheckSelection"},l.a.createElement(E.a,{id:"UserID",onClick:this.UserRegister},l.a.createElement("strong",null,"USER"))," ",l.a.createElement("br",null),l.a.createElement(E.a,{id:"RestaurantId",onClick:this.RestaurantRegister},l.a.createElement("strong",null,"RESTAURANT"))," ",l.a.createElement("br",null),l.a.createElement(E.a,{id:"DeliveryId",onClick:this.DeliveryRegister},l.a.createElement("strong",null,"DELIVERY")))),l.a.createElement(g.a,{show:this.state.UserRegister,onHide:this.CloseAll,animation:!1,id:"Trying"},l.a.createElement(g.a.Header,{id:"UserHead"},l.a.createElement(g.a.Title,{id:"modeltitle"},"User Register")),l.a.createElement(g.a.Body,{id:"modelBody"},l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"username"},"Name: "),l.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateName(a)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"username"},"Email:"),l.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateEmail(a)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePassword(a)}}),l.a.createElement("label",{htmlFor:"password"},"Phone:"),l.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePhoneNum(a)}}),l.a.createElement("br",null))),l.a.createElement(g.a.Footer,{id:"modelBody"},l.a.createElement("a",{id:"button",href:"#"},"Submit"))),l.a.createElement(g.a,{show:this.state.DeliveryRegister,onHide:this.CloseAll,animation:!1},l.a.createElement(g.a.Header,null,l.a.createElement(g.a.Title,{id:"modeltitle"},"Delivery Agent Registration")),l.a.createElement(g.a.Body,null,l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"username"},"Name"),l.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateName(a)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"username"},"Email ID"),l.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateEmail(a)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePassword(a)}}),l.a.createElement("label",{htmlFor:"password"},"Confirm Password:"),l.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updateConfirmPassword(a)}}),l.a.createElement("label",{htmlFor:"password"},"Phone Number:"),l.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePhoneNum(a)}}))),l.a.createElement(g.a.Footer,null,l.a.createElement("a",{id:"button",href:"#"},"Submit"))),l.a.createElement(g.a,{show:this.state.RestaurantRegister,onHide:this.CloseAll,animation:!1,centered:!0,id:"RestaurantModel"},l.a.createElement(g.a.Header,null,l.a.createElement(g.a.Title,{id:"modeltitle"},"Restaurant Registration")),l.a.createElement(g.a.Body,null,l.a.createElement("form",null,l.a.createElement("label",null,this.validateRestuarantName(),this.validateUserName()," ",this.validateEmail(),this.validatePassword()," ",this.validateConfirmPassword(),this.validatePhoneNum()," ",this.validatePhoneNum2()),l.a.createElement("label",{htmlFor:"username"}," Restaurant Name"),l.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateRestaurantName(a)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"username"}," Manager's/Contact Person's Name"),l.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateName(a)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"username"},"Email ID"),l.a.createElement("input",{type:"text",id:"username",onChange:function(a){return e.updateEmail(a)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePassword(a)}}),l.a.createElement("label",{htmlFor:"password"},"Confirm Password:"),l.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updateConfirmPassword(a)}}),l.a.createElement("label",{htmlFor:"password"},"Phone Number 1:"),l.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePhoneNum(a)}}),l.a.createElement("label",{htmlFor:"password"},"Phone Number 2:"),l.a.createElement("input",{type:"text",id:"password",onChange:function(a){return e.updatePhoneNum2(a)}}))),l.a.createElement(g.a.Footer,null,l.a.createElement("a",{id:"button",href:"#"},"Submit"))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"carousel-example-generic",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#carousel-example-generic","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#carousel-example-generic","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#carousel-example-generic","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"item active"},l.a.createElement("img",{src:p.a,className:"widepic",alt:"First slide"}),l.a.createElement("div",{className:"header-text hidden-xs"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("h2",null,l.a.createElement("span",null," ",l.a.createElement("strong",null,"Welcome to YumDrop"))),l.a.createElement("br",null),l.a.createElement("h3",null,l.a.createElement("span",null,l.a.createElement("strong",null,"Delivering deliciouness at your doorstep"))),l.a.createElement("br",null))))),l.a.createElement("a",{className:"left carousel-control",href:"#carousel-example-generic","data-slide":"prev"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-left"})),l.a.createElement("a",{className:"right carousel-control",href:"#carousel-example-generic","data-slide":"next"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-right"}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:f.a,alt:"IndianFood",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Indian Food"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:b.a,alt:"ItalianFood",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Italian Food"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:w.a,alt:"JapaneseFood",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Japanese Food"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:R.a,alt:"KoreanFood",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Korean Food")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:R.a,alt:"KoreanFood",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Korean Food"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:U.a,alt:"Mexican",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Mexican Food"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:C.a,alt:"Thai",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Thai Food"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:j.a,alt:"AfricanFood",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"African Food")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:j.a,alt:"AfricanFood",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"African Food"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:N.a,alt:"Forest",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Indian Food"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:q.a,alt:"Mountains",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Desserts"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:K.a,alt:"Mountains",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Burgers")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:M.a,alt:"Snow",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Bengali Food"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:I.a,alt:"Forest",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"South Indian"))))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:A.a,alt:"Mountains",width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Food")," ")))),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("img",{src:B.a,width:"200px",height:"200px",className:"ImageDisplay"}),l.a.createElement("div",{className:"ParagraphForPolaroid"},l.a.createElement("p",null,l.a.createElement("strong",null,"Hong Kong Cuisine")))))))}}]),a}(n.Component);s.a.render(l.a.createElement(Z,null),document.getElementById("root"))},27:function(e,a,t){e.exports=t.p+"static/media/KoreanFood.b5c84532.jpg"},28:function(e,a,t){e.exports=t.p+"static/media/WestAfricanFood.91597969.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/pic1.cff237ec.jpg"},54:function(e,a,t){e.exports=t.p+"static/media/trying2.2840b496.jfif"},55:function(e,a,t){e.exports=t.p+"static/media/IndianFood.87813d79.jpg"},56:function(e,a,t){e.exports=t.p+"static/media/ItalianFood.721be022.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/JapaneseFood.5253d59c.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/MexicanFood.63637abf.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/ThaiFood.c74e0449.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/AddImage1.2863329e.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/AddImage2.532c5824.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/addHongKong.a78fad83.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/BengaliFood.35572dfa.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/chocolate-lasagna-4.547b23be.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/Burgers.d8de2176.jpg"},72:function(e,a,t){e.exports=t(173)},77:function(e,a,t){},78:function(e,a,t){},90:function(e,a,t){e.exports=t.p+"static/media/pic2.a62333da.jpg"},92:function(e,a,t){e.exports=t.p+"static/media/1502296790.92.31a32970.jpg"}},[[72,1,2]]]);
//# sourceMappingURL=main.06397aaf.chunk.js.map