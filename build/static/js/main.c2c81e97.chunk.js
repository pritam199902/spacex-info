(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,c,s){"use strict";s.r(c);var t=s(2),n=s.n(t),a=s(66),l=s.n(a),r=(s(76),s(77),s(23)),i=s(30),j=s(11),d=s(40),o=s(4);var m,h,b=function(){return Object(o.jsx)("div",{className:"row m-0 mb-2",children:Object(o.jsxs)("div",{className:"col-lg-7 col-md-8 col-sm-10 m-auto",children:[Object(o.jsx)("span",{className:"bg-success px-3 mr-2"})," mission success ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"bg-danger px-3 mr-2"})," mission fail"]})})},x=s(43),u=Object(r.gql)(m||(m=Object(d.a)(["\n  query GetLaunchs {\n    launchs{\n        flight_number\n        mission_name\n        launch_year\n        launch_date_local\n        launch_success\n      }\n  }\n"]))),O=function(){var e=Object(r.useQuery)(u),c=e.loading,s=e.error,t=e.data,n=e.refetch;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{className:"text-center",children:"Launchs"}),c&&Object(o.jsx)("div",{className:"row m-0 mt-5",children:Object(o.jsx)("div",{className:"col m-auto text-center",children:Object(o.jsx)(x.SyncLoader,{className:"text-center m-0 ",color:"#faf"})})}),s&&Object(o.jsx)("div",{className:"row m-0",children:Object(o.jsx)("div",{className:"col-lg-7 col-md-8 col-sm-10 m-auto text-center mt-2",children:Object(o.jsxs)("h6",{className:"text-warning",children:[" Error while loading data!",Object(o.jsx)("button",{className:"btn btn-danger py-1 ml-3",onClick:function(){n()},children:"Reload"})]})})}),t&&Object(o.jsx)(b,{}),t&&t.launchs.map((function(e,c){return Object(o.jsx)("div",{className:"row m-0 mt-2",children:Object(o.jsx)("div",{className:"col-lg-7 col-md-8 col-sm-10 m-auto",children:Object(o.jsx)("div",{className:"card",children:Object(o.jsx)("div",{className:"card-body px-4 py-2",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("h5",{children:["Mission : ",Object(o.jsxs)("span",{className:e.launch_success?"text-success":"text-danger",children:[" ",e.mission_name," "]})]}),Object(o.jsxs)("p",{className:"mb-0",children:["Date : ",e.launch_date_local,Object(o.jsx)(i.b,{to:"/launch/".concat(e.flight_number),className:"btn btn-secondary float-right py-0 m-auto",children:"info"})]})]})})})})},c)}))]})},N=Object(r.gql)(h||(h=Object(d.a)(["\n    query GetLaunch ($flight_number : Int!){\n        launch(flight_number: $flight_number){\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n            rocket{\n              rocket_id\n              rocket_name\n              rocket_type\n            }\n        }\n    }\n"])));var f={txt:{fontSize:"20px"}},g=function(){var e=Object(j.e)().params.flight_number,c=Object(r.useQuery)(N,{variables:{flight_number:parseInt(e)}}),s=c.loading,n=c.error,a=c.data,l=c.refetch;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{className:"text-center",children:"Launch Information"}),function(){if(s)return Object(o.jsx)("div",{className:"row m-0 mt-5",children:Object(o.jsx)("div",{className:"col m-auto text-center",children:Object(o.jsx)(x.SyncLoader,{className:"text-center m-0 ",color:"#faf"})})});if(n)return Object(o.jsx)("div",{className:"row m-0",children:Object(o.jsx)("div",{className:"col-lg-7 col-md-8 col-sm-10 m-auto text-center mt-2",children:Object(o.jsxs)("h6",{className:"text-warning",children:[" Error while loading data!",Object(o.jsx)("button",{className:"btn btn-danger py-1 ml-3",onClick:function(){l()},children:"Reload"})]})})});if(a){var e=a.launch,c=e.mission_name,r=e.launch_date_local,j=e.launch_success,d=e.rocket,m=d.rocket_id,h=d.rocket_name,b=d.rocket_type;return Object(o.jsxs)(t.Fragment,{children:[Object(o.jsx)("div",{className:"row m-0 my-3",children:Object(o.jsxs)("div",{className:"col-lg-7 col-md-8 col-sm-10 m-auto",children:[Object(o.jsx)("h5",{children:"Launch Details"}),Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h5",{className:"text-secondary",children:["Mission : ",Object(o.jsxs)("span",{className:j?"text-success":"text-danger",children:[" ",c," "]})]}),Object(o.jsxs)("h5",{style:f.txt,className:"text-secondary mt-4",children:["Date : ",Object(o.jsxs)("span",{className:"text-info",children:[" ",r," "]})]}),Object(o.jsxs)("h5",{style:f.txt,className:"text-secondary",children:["Status : ",Object(o.jsxs)("span",{className:j?"text-success":"text-danger px-3 ",children:[" ",j?"Success":"Fail"," "]})]})]})})]})}),Object(o.jsx)("div",{className:"row m-0 my-3",children:Object(o.jsxs)("div",{className:"col-lg-7 col-md-8 col-sm-10 m-auto mt-",children:[Object(o.jsx)("h5",{children:"Rocket Details"}),Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h5",{style:f.txt,className:"text-secondary",children:["Rocket ID : ",Object(o.jsxs)("span",{className:"text-info",children:[" ",m," "]})]}),Object(o.jsxs)("h5",{style:f.txt,className:"text-secondary",children:["Rocket Name : ",Object(o.jsxs)("span",{className:"text-info",children:[" ",h," "]})]}),Object(o.jsxs)("h5",{style:f.txt,className:"text-secondary",children:["Rocket Type : ",Object(o.jsxs)("span",{className:"text-info",children:[" ",b," "]})]})]})}),Object(o.jsx)(i.b,{to:"/",className:"btn btn-secondary mt-3",children:"back"})]})})]})}}()]})},p=new r.ApolloClient({uri:"http://localhost:5000/graphql",cache:new r.InMemoryCache});var v=function(){return Object(o.jsx)(r.ApolloProvider,{client:p,children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)("div",{className:"row m-0",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h2",{className:"text-center",children:"SpaceX"})})}),Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(O,{})}),Object(o.jsx)(j.a,{exact:!0,path:"/launch/:flight_number",children:Object(o.jsx)(g,{})})]})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,116)).then((function(c){var s=c.getCLS,t=c.getFID,n=c.getFCP,a=c.getLCP,l=c.getTTFB;s(e),t(e),n(e),a(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),y()},76:function(e,c,s){},77:function(e,c,s){}},[[115,1,2]]]);
//# sourceMappingURL=main.c2c81e97.chunk.js.map