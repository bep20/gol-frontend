(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[31],{1538:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var c,o,i=n(9),r=n(8),j=n(0),a=n(4),l=n(2),d=n(6),s=n(14),b=n(119),x=n(35),O=n(63),u=n(384),p=n(26),h=n(452),g=n(112),f=n(22),v=n(46),y=n(108),I=n(940),m=n(169),S=n(227),T=n(197),E=n(256),k=n(1);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var N=Object(d.e)(l.t)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function B(){var e,t=Object(f.a)().account,n=Object(s.b)().t,c=Object(j.useState)(o.TOKEN1),r=Object(i.a)(c,2),d=r[0],B=r[1],A=Object(j.useState)(a.ETHER),K=Object(i.a)(A,2),C=K[0],w=K[1],J=Object(j.useState)(null),q=Object(i.a)(J,2),L=q[0],X=q[1],D=Object(g.b)(null!==C&&void 0!==C?C:void 0,null!==L&&void 0!==L?L:void 0),M=Object(i.a)(D,2),P=M[0],R=M[1],F=Object(v.h)();Object(j.useEffect)((function(){R&&F(R)}),[R,F]);var G=P===g.a.NOT_EXISTS||Boolean(P===g.a.EXISTS&&R&&a.JSBI.equal(R.reserve0.raw,a.JSBI.BigInt(0))&&a.JSBI.equal(R.reserve1.raw,a.JSBI.BigInt(0))),H=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===R||void 0===R?void 0:R.liquidityToken),V=Boolean(H&&a.JSBI.greaterThan(H.raw,a.JSBI.BigInt(0))),W=Object(j.useCallback)((function(e){d===o.TOKEN0?w(e):X(e)}),[d]),Y=Object(k.jsx)(b.b,{padding:"45px 10px",children:Object(k.jsx)(l.xc,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),Z=Object(l.Zc)(Object(k.jsx)(h.a,{onCurrencySelect:W,showCommonBases:!0,selectedCurrency:null!==(e=d===o.TOKEN0?L:C)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),_=Object(i.a)(Z,1)[0];return Object(k.jsx)(E.a,{children:Object(k.jsxs)(T.a,{children:[Object(k.jsx)(T.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(k.jsxs)(x.a,{style:{padding:"1rem"},gap:"md",children:[Object(k.jsx)(N,{endIcon:Object(k.jsx)(l.K,{}),onClick:function(){_(),B(o.TOKEN0)},children:C?Object(k.jsxs)(p.d,{children:[Object(k.jsx)(O.a,{currency:C}),Object(k.jsx)(l.xc,{ml:"8px",children:C.symbol})]}):Object(k.jsx)(l.xc,{ml:"8px",children:n("Select a Token")})}),Object(k.jsx)(x.b,{children:Object(k.jsx)(l.a,{})}),Object(k.jsx)(N,{endIcon:Object(k.jsx)(l.K,{}),onClick:function(){_(),B(o.TOKEN1)},children:L?Object(k.jsxs)(p.d,{children:[Object(k.jsx)(O.a,{currency:L}),Object(k.jsx)(l.xc,{ml:"8px",children:L.symbol})]}):Object(k.jsx)(l.xc,{as:p.d,children:n("Select a Token")})}),V&&Object(k.jsxs)(x.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(k.jsx)(l.xc,{textAlign:"center",children:n("Pool Found!")}),Object(k.jsx)(I.a,{to:"/pool",children:Object(k.jsx)(l.xc,{textAlign:"center",children:n("Manage this pool.")})})]}),C&&L?P===g.a.EXISTS?V&&R?Object(k.jsx)(u.a,{pair:R}):Object(k.jsx)(b.b,{padding:"45px 10px",children:Object(k.jsxs)(x.a,{gap:"sm",justify:"center",children:[Object(k.jsx)(l.xc,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(k.jsx)(I.a,{to:"/add/".concat(Object(m.a)(C),"/").concat(Object(m.a)(L)),children:Object(k.jsx)(l.xc,{textAlign:"center",children:n("Add Liquidity")})})]})}):G?Object(k.jsx)(b.b,{padding:"45px 10px",children:Object(k.jsxs)(x.a,{gap:"sm",justify:"center",children:[Object(k.jsx)(l.xc,{textAlign:"center",children:n("No pool found.")}),Object(k.jsx)(I.a,{to:"/add/".concat(Object(m.a)(C),"/").concat(Object(m.a)(L)),children:n("Create pool.")})]})}):P===g.a.INVALID?Object(k.jsx)(b.b,{padding:"45px 10px",children:Object(k.jsx)(x.a,{gap:"sm",justify:"center",children:Object(k.jsx)(l.xc,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):P===g.a.LOADING?Object(k.jsx)(b.b,{padding:"45px 10px",children:Object(k.jsx)(x.a,{gap:"sm",justify:"center",children:Object(k.jsxs)(l.xc,{textAlign:"center",children:[n("Loading"),Object(k.jsx)(S.a,{})]})})}):null:Y]})]})})}},940:function(e,t,n){"use strict";var c,o=n(8),i=n(92),r=n(6),j=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j}}]);
//# sourceMappingURL=31.df59eac9.chunk.js.map