(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[11],{1574:function(e,t,n){"use strict";n.r(t);var c=n(9),r=n(0),i=n(75),a=n(2),o=n(70),s=n(367),l=n(803),u=n(14),b=n(383),d=n(186),j=n(87),O=n(48),f=n(849),p=n(854),x=n(917),m=n(1),h=100,g=function(e){var t=e.collection,n=Object(o.b)(),i=Object(r.useRef)(null),b=Object(r.useState)(1),d=Object(c.a)(b,2),j=d[0],g=d[1],v=Object(r.useState)(1),k=Object(c.a)(v,2),y=k[0],A=k[1],w=Object(r.useState)([]),I=Object(c.a)(w,2),N=I[0],F=I[1],D=Object(u.b)().t,C=t.address,S=t.totalSupply,T=Object(O.getAddress)(C),L=Object(l.j)(T),B=(null===L||void 0===L?void 0:L.length)<=j*h,V=1===j,z=j===y||B;return Object(r.useEffect)((function(){n(Object(s.f)({collectionAddress:T,page:1,size:100}))}),[T,n]),Object(r.useEffect)((function(){(null===L||void 0===L?void 0:L.length)>0&&B&&function(){var e=Math.ceil(L.length/100)+1;n(Object(s.f)({collectionAddress:T,page:e,size:100}))}()}),[L,j,T,B,n]),Object(r.useEffect)((function(){S&&function(){var e=Math.ceil(Number(S)/h);A(e)}()}),[S]),Object(r.useEffect)((function(){(null===L||void 0===L?void 0:L.length)>0&&function(){var e=L.slice(h*(j-1),h*j);F(e)}()}),[L,j]),N.length?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(a.cb,{ref:i,gridGap:"16px",gridTemplateColumns:["1fr",null,"repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:N.map((function(e){return Object(m.jsx)(p.b,{nft:e},"".concat(e.tokenId,"-").concat(e.collectionName))}))}),(null===L||void 0===L?void 0:L.length)>h&&Object(m.jsx)(a.bb,{mt:"24px",children:Object(m.jsxs)(x.b,{children:[Object(m.jsx)(x.a,{onClick:function(){g(V?j:j-1)},children:Object(m.jsx)(a.c,{color:V?"textDisabled":"primary",cursor:V?"not-allowed":"pointer"})}),Object(m.jsx)(a.xc,{children:D("Page %page% of %maxPage%",{page:j,maxPage:y})}),Object(m.jsx)(x.a,{onClick:function(){z||(i.current.scrollIntoView({behavior:"smooth"}),g(j+1))},children:B?Object(m.jsx)(a.i,{spin:!0,color:"textDisabled",cursor:"not-allowed"}):Object(m.jsx)(a.f,{color:z?"textDisabled":"primary",cursor:z?"not-allowed":"pointer"})})]})})]}):Object(m.jsx)(f.a,{})},v=n(251),k=n.n(v),y=n(989),A=function(e){var t=e.collection,n=e.sortBy,c=void 0===n?"updatedAt":n,r=t.address,i=Object(y.a)(r),o=i?k()(i,(function(e){return e.meta[c]?Number(null===e||void 0===e?void 0:e.meta[c]):0}),["currentAskPrice"===c?"asc":"desc"]):[];return o.length?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(a.cb,{gridGap:"16px",gridTemplateColumns:["1fr",null,"repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:o.map((function(e){return Object(m.jsx)(p.b,{nft:e},"".concat(e.tokenId,"-").concat(e.collectionName))}))})}):Object(m.jsx)(f.a,{})},w=n(994);t.default=function(){var e=Object(i.i)().collectionAddress,t=Object(r.useState)("updatedAt"),n=Object(c.a)(t,2),O=n[0],f=n[1],p=Object(u.b)().t,x=Object(o.b)(),h=Object(l.e)(e),v=e.toLowerCase()===j.c.toLowerCase(),k=(h||{}).address,y=[{label:p("Recently listed"),value:"updatedAt"},{label:p("Lowest price"),value:"currentAskPrice"}];return Object(r.useEffect)((function(){k&&x(Object(s.c)(k))}),[k,x]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w.a,{collection:h}),Object(m.jsxs)(d.b,{children:[v&&Object(m.jsx)(a.bb,{alignItems:"center",justifyContent:["flex-start",null,null,"flex-end"],mb:"24px",children:Object(m.jsxs)(a.o,{minWidth:"165px",children:[Object(m.jsx)(a.xc,{fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:600,mb:"4px",children:p("Sort By")}),Object(m.jsx)(b.a,{options:y,onOptionChange:function(e){f(e.value)}})]})}),v?Object(m.jsx)(A,{collection:h,sortBy:O}):Object(m.jsx)(g,{collection:h})]})]})}},811:function(e,t,n){var c=n(499),r=n(817),i=n(813),a=4294967295,o=Math.min;e.exports=function(e,t){if((e=i(e))<1||e>9007199254740991)return[];var n=a,s=o(e,a);t=r(t),e-=a;for(var l=c(s,t);++n<e;)t(n);return l}},813:function(e,t,n){var c=n(498);e.exports=function(e){var t=c(e),n=t%1;return t===t?n?t-n:t:0}},817:function(e,t,n){var c=n(248);e.exports=function(e){return"function"==typeof e?e:c}},841:function(e,t,n){"use strict";var c,r,i,a=n(3),o=n.n(a),s=n(11),l=n(5),u=n(9),b=n(51),d=n(8),j=n(0),O=n(2),f=n(6),p=n(36),x=n(14),m=n(190),h=n(1),g=["onValidAddress","onAddressClick"];!function(e){e[e.NOT_VALID=0]="NOT_VALID",e[e.FOUND=1]="FOUND",e[e.NOT_FOUND=2]="NOT_FOUND"}(i||(i={}));var v=f.e.div(c||(c=Object(d.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.radii.default}),(function(e){return e.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),k=Object(f.e)(O.xc)(r||(r=Object(d.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),y={isFetching:!1,resultFound:i.NOT_VALID,value:""},A=function(){return Promise.resolve(!0)};t.a=function(e){var t=e.onValidAddress,n=void 0===t?A:t,c=e.onAddressClick,r=Object(b.a)(e,g),a=Object(j.useState)(y),d=Object(u.a)(a,2),f=d[0],w=d[1],I=Object(x.b)().t,N=f.isFetching,F=f.resultFound,D=f.value;return Object(j.useEffect)((function(){!1!==Object(p.i)(D)?function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0})})),e.next=4,n(D);case 4:t=e.sent,w((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1,resultFound:t?i.FOUND:i.NOT_FOUND})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1})}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()():w((function(e){return Object(l.a)(Object(l.a)({},e),{},{resultFound:i.NOT_VALID})}))}),[D,n,w]),Object(h.jsxs)(O.o,Object(l.a)(Object(l.a)({position:"relative"},r),{},{children:[Object(h.jsx)(O.jb,{placeholder:I("Search %subject%",{subject:I("Address").toLowerCase()}),value:f.value,onChange:function(e){var t=e.target.value;w((function(e){return Object(l.a)(Object(l.a)({},e),{},{value:t})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),N&&Object(h.jsx)(O.o,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(h.jsx)(m.a,{})}),Object(h.jsx)(v,{isOpen:F!==i.NOT_VALID,children:F===i.FOUND?Object(h.jsx)(k,{onClick:function(){w(y),c(f.value)},children:f.value}):Object(h.jsx)(O.xc,{px:"16px",fontWeight:"bold",children:I("No results found.")})})]}))}},849:function(e,t,n){"use strict";var c=n(51),r=n(5),i=(n(0),n(2)),a=n(811),o=n.n(a),s=n(1),l=["numItems"],u=function(e){return Object(s.jsxs)(i.o,Object(r.a)(Object(r.a)({},e),{},{children:[Object(s.jsx)(i.dc,{height:"252px",mb:"8px"}),Object(s.jsx)(i.dc,{width:"30%",mb:"4px"}),Object(s.jsx)(i.dc,{width:"45%",mb:"16px"}),Object(s.jsx)(i.dc,{})]}))};t.a=function(e){var t=e.numItems,n=void 0===t?12:t,a=Object(c.a)(e,l);return Object(s.jsx)(i.cb,Object(r.a)(Object(r.a)({gridGap:"16px",gridTemplateColumns:["1fr",null,null,"repeat(4, 1fr)"]},a),{},{children:o()(n).map((function(e){return Object(s.jsx)(u,{},e)}))}))}},850:function(e,t,n){"use strict";var c=n(5),r=(n(0),n(372)),i=n(96),a=n(1);t.a=function(e){var t=Object(i.a)().theme.isDark?"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)":"linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";return Object(a.jsx)(r.a,Object(c.a)({background:t},e))}},851:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,r=n(8),i=n(5),a=n(51),o=(n(0),n(6)),s=n(2),l=n(1),u=["title","stat"],b=function(e){var t=e.title,n=e.stat,c=Object(a.a)(e,u);return Object(l.jsxs)(s.o,Object(i.a)(Object(i.a)({},c),{},{children:[Object(l.jsx)(s.xc,{fontSize:"12px",color:"textSubtle",textAlign:"center",children:t}),null===n?Object(l.jsx)(s.dc,{height:"24px",width:"50%",mx:"auto"}):Object(l.jsx)(s.xc,{fontWeight:"600",textAlign:"center",children:n})]}))},d=Object(o.e)(s.bb)(c||(c=Object(r.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  justify-content: space-around;\n  padding: 8px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.invertedContrast}),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.radii.card}));t.b=d},867:function(e,t,n){"use strict";var c,r=n(8),i=n(6).e.div.attrs((function(e){return{alt:e.alt}}))(c||(c=Object(r.a)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n  border: 4px "," solid;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])),(function(e){return e.src}),(function(e){return e.borderColor||"#f2ecf2"}));t.a=i},887:function(e,t,n){"use strict";var c=n(5),r=(n(0),n(75)),i=n(841),a=n(87),o=n(1);t.a=function(e){var t=Object(r.g)();return Object(o.jsx)(i.a,Object(c.a)({onAddressClick:function(e){t.push("".concat(a.b,"/profile/").concat(e))}},e))}},888:function(e,t,n){"use strict";var c=n(5),r=n(51),i=(n(0),n(2)),a=n(1),o=["title","description","children"];t.a=function(e){var t=e.title,n=e.description,s=e.children,l=Object(r.a)(e,o);return Object(a.jsxs)(i.cb,Object(c.a)(Object(c.a)({gridGap:"16px",alignItems:"center",gridTemplateColumns:["1fr",null,null,null,"repeat(2, 1fr)"]},l),{},{children:[Object(a.jsxs)(i.o,{children:[Object(a.jsx)(i.db,{as:"h1",scale:"xl",color:"secondary",mb:"16px",children:t}),n]}),Object(a.jsx)(i.o,{children:s})]}))}},889:function(e,t,n){"use strict";var c,r=n(8),i=n(2),a=n(6),o=Object(a.e)(i.nc)(c||(c=Object(r.a)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"])),(function(e){return e.theme.colors.cardBorder}));t.a=o},892:function(e,t,n){"use strict";var c,r=n(5),i=n(51),a=(n(0),n(2)),o=n(8),s=n(6).e.div.attrs((function(e){return{alt:e.alt}}))(c||(c=Object(o.a)(["\n  ",";\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 100%;\n  border-radius: 32px;\n  height: 123px;\n\n  "," {\n    height: 192px;\n  }\n\n  "," {\n    height: 256px;\n  }\n"])),(function(e){var t=e.src,n=e.theme;return t?"background-image: url('".concat(t,"')"):"background-color: ".concat(n.colors.cardBorder)}),(function(e){return e.src}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),l=n(1),u=["bannerImage","bannerAlt","avatar","children"];t.a=function(e){var t=e.bannerImage,n=e.bannerAlt,c=e.avatar,o=e.children,b=Object(i.a)(e,u);return Object(l.jsx)(a.bb,Object(r.a)(Object(r.a)({flexDirection:"column",mb:"24px"},b),{},{children:Object(l.jsxs)(a.o,{position:"relative",pb:"56px",children:[Object(l.jsx)(s,{src:t,alt:n}),Object(l.jsx)(a.o,{position:"absolute",bottom:0,left:-4,children:Object(l.jsxs)(a.bb,{alignItems:"flex-end",children:[c,o]})})]})}))}},917:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var c,r,i=n(8),a=n(6),o=a.e.div(c||(c=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n"]))),s=a.e.div(r||(r=Object(i.a)(["\n  color: ",";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.colors.primary}))},989:function(e,t,n){"use strict";var c=n(3),r=n.n(c),i=n(11),a=n(9),o=n(0),s=n(72),l=n(87);t.a=function(e){var t=Object(o.useState)(null),n=Object(a.a)(t,2),c=n[0],u=n[1],b=e===l.c;return Object(o.useEffect)((function(){b&&!c&&function(){var e=Object(i.a)(r.a.mark((function e(){var t,n,c,i,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.q)(l.c);case 2:return t=e.sent,n=t.data,c=Object.keys(n),e.next=7,Object(s.c)(c);case 7:return i=e.sent,e.next=10,Object(s.d)(c);case 10:a=e.sent,o=c.map((function(e){return{tokenId:n[e].name,name:n[e].name,description:n[e].description,collectionAddress:l.c,collectionName:n[e].collection.name,image:n[e].image,attributes:[{traitType:"bunnyId",value:e,displayType:null}],meta:{currentAskPrice:i[e],updatedAt:a[e]}}})),u(o);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[b,c]),c}},994:function(e,t,n){"use strict";var c,r=n(0),i=n(75),a=n(2),o=n(31),s=n(14),l=n(246),u=n(850),b=n(888),d=n(851),j=n(892),O=n(867),f=n(889),p=n(87),x=n(8),m=n(92),h=n(6),g=n(887),v=n(1),k=Object(h.e)(m.a)(c||(c=Object(x.a)(["\n  align-items: center;\n  color: ",";\n  display: inline-flex;\n  font-weight: 600;\n"])),(function(e){return e.theme.colors.primary})),y=function(){var e=Object(s.b)().t;return Object(v.jsxs)(a.bb,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[Object(v.jsxs)(k,{to:p.b,children:[Object(v.jsx)(a.L,{color:"primary",width:"24px"}),e("All Collections")]}),Object(v.jsx)(a.o,{children:Object(v.jsx)(g.a,{})})]})},A=n(5),w=n(3),I=n.n(w),N=n(11),F=n(9),D=n(51),C=n(72),S=["collectionAddress"],T=function(e){var t=e.collectionAddress,n=Object(D.a)(e,S),c=Object(r.useState)(null),i=Object(F.a)(c,2),a=i[0],o=i[1],l=Object(s.b)().t;Object(r.useEffect)((function(){(function(){var e=Object(N.a)(I.a.mark((function e(){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.l)(t);case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,o]);var u=null===a?null:a.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3});return Object(v.jsx)(d.a,Object(A.a)({title:l("Lowest (%symbol%)",{symbol:"BNB"}),stat:u},n))};t.a=function(e){var t=e.collection,n=Object(i.i)().collectionAddress,c=t.totalSupply,r=t.numberTokensListed,x=t.totalVolumeBNB,m=t.banner,h=t.avatar,g=Object(s.b)().t,k=Object(i.h)(),A=k.pathname,w=k.hash,I=parseFloat(x).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}),N=[{label:g("Items"),href:"".concat(p.b,"/collections/").concat(n,"#items")},{label:g("Traits"),href:"".concat(p.b,"/collections/").concat(n,"#traits")}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(u.a,{children:[Object(v.jsx)(y,{}),Object(v.jsx)(j.a,{bannerImage:m.large,avatar:Object(v.jsx)(O.a,{src:h})}),Object(v.jsx)(b.a,{title:t.name,description:t.description?Object(v.jsx)(a.xc,{color:"textSubtle",children:g(t.description)}):null,children:Object(v.jsxs)(d.b,{children:[Object(v.jsx)(d.a,{title:g("Items"),stat:Object(o.e)(Number(c),0,0)}),Object(v.jsx)(d.a,{title:g("Items listed"),stat:Object(o.e)(Number(r),0,0)}),Object(v.jsx)(T,{collectionAddress:t.address}),Object(v.jsx)(d.a,{title:g("Vol. (%symbol%)",{symbol:"BNB"}),stat:I})]})})]}),Object(v.jsx)(l.a,{children:Object(v.jsx)(f.a,{items:N,activeItem:"".concat(A).concat(w||"#items"),mt:"24px",mb:"8px"})})]})}}}]);
//# sourceMappingURL=11.40af349e.chunk.js.map