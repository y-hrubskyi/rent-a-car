import{u as o,r as d,j as t,b as T,c as R,d as W,e as O}from"./index-D3iN6nl_.js";const H=o.div`
  width: 100%;
  height: 248px;
  margin-bottom: ${e=>e.theme.spacing(7)};

  background-color: #f3f3f2;
  border-radius: ${e=>e.theme.radii.img};
  overflow: hidden;
`,P=o.img`
  object-fit: cover;
`,K=o.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing(12)};
  margin-bottom: ${e=>e.theme.spacing(12)};
`,U=o.p`
  margin-bottom: ${e=>e.theme.spacing(4)};

  font-size: 18px;
  font-weight: 500;
  line-height: 1.33333;
  color: ${e=>e.theme.colors.dark()};
`,Y=o.span`
  color: ${e=>e.theme.colors.accent};
`,Z=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(2)};
  column-gap: ${e=>e.theme.spacing(6)};
  max-width: 277px;
  margin-bottom: ${e=>e.theme.spacing(7)};
`,E=o.li`
  position: relative;

  &:not(:last-child):after {
    content: "";
    position: absolute;
    top: 2px;
    right: -7px;
    width: 1px;
    height: 16px;

    background: ${e=>e.theme.colors.dark(.1)};
    z-index: 1;
  }
`,A=o.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.theme.colors.dark(.5)};
`,q=o.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.dark()};
`,G=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(2)};
  column-gap: ${e=>e.theme.spacing(6)};
`,D=o.p`
  margin-bottom: ${e=>e.theme.spacing(4)};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.dark()};
`,J=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing(4)};
`,N=o.li`
  border-radius: 35px;
  padding: 7px 14px;
  background-color: #f9f9f9;
`,Q=o.span`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;
`,V=o.span`
  font-weight: 600;
  color: ${e=>e.theme.colors.accent};
`,X=o.a`
  display: block;
  width: 168px;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857;
  text-align: center;
  color: ${e=>e.theme.colors.white};

  background-color: ${e=>e.theme.colors.accent};
  border-radius: ${e=>e.theme.radii.btn};
  text-decoration: none;

  transition: ${e=>e.theme.transition("background-color")};

  &:hover {
    background-color: ${e=>e.theme.colors.hover};
  }
`,_=e=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M18 6L6 18",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M6 6L18 18",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),ee=o.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: ${e=>e.theme.colors.dark(.5)};
  overflow: auto;
`,te=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 541px;
  padding: ${e=>e.theme.spacing(20)};

  background-color: ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.radii.modal};
`,oe=o.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;

  width: 24px;
  height: 24px;
  padding: 0;

  background-color: transparent;
  border: none;
`,ne=o(_)`
  width: 24px;
  height: 24px;

  stroke: ${e=>e.theme.colors.dark()};
`,ie=({onClose:e,children:s})=>{d.useEffect(()=>{const n=i=>{i.code==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return t.jsx(ee,{onClick:r,children:t.jsxs(te,{children:[t.jsx(oe,{type:"button",onClick:e,children:t.jsx(ne,{})}),s]})})},se=({onClose:e,advert:{id:s,year:r,make:n,model:i,description:a,type:m,img:f,fuelConsumption:h,engineSize:p,address:u,accessories:w,functionalities:$,rentalConditions:b,mileage:j,rentalPrice:g}})=>{const[v,k]=u.split(", ").reverse(),C=[k,v,`Id: ${s}`,`Year: ${r}`,`Type: ${m}`,`Fuel Consumption: ${h}`,`Engine Size: ${p}`].map(c=>t.jsx(E,{children:t.jsx(A,{children:c})},c)),L=[...w,...$].map(c=>t.jsx(E,{children:t.jsx(A,{children:c})},c)),M=j.toLocaleString("en-US"),[y,...l]=g,x=l.join("")+y,S=[`Mileage: ${M}`,`Price: ${x}`],B=b.split(`
`).concat(S).map(c=>c.split(":")).map(([c,I])=>t.jsx(N,{children:t.jsxs(Q,{children:[c,I&&":",I&&t.jsx(V,{children:I})]})},c));return t.jsxs(ie,{onClose:e,children:[t.jsx(H,{children:t.jsx(P,{src:f,alt:`${n} ${i}`})}),t.jsxs(K,{children:[t.jsxs("div",{children:[t.jsxs(U,{children:[n," ",t.jsx(Y,{children:i}),", ",r]}),t.jsx(Z,{children:C}),t.jsx(q,{children:a})]}),t.jsxs("div",{children:[t.jsx(D,{children:"Accessories and functionalities:"}),t.jsx(G,{children:L})]}),t.jsxs("div",{children:[t.jsx(D,{children:"Rental Conditions:"}),t.jsx(J,{children:B})]})]}),t.jsx(X,{href:"tel:+380730000000",children:"Rental Car"})]})},re=e=>d.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ce=o.li`
  width: 274px;
`,ae=o.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 268px;
  margin-bottom: ${e=>e.theme.spacing(7)};

  background-color: #f3f3f2;
  border-radius: ${e=>e.theme.radii.img};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      180deg,
      ${e=>e.theme.colors.dark(.5)} 2.5%,
      ${e=>e.theme.colors.dark(0)} 41.07%
    );
    z-index: 1;
  }
`,de=o.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
  padding: 0;

  background-color: transparent;
  border: none;
  z-index: 1;
`,le=o(re)`
  width: 18px;
  height: 18px;

  stroke: ${e=>e.isfavorite?e.theme.colors.accent:"rgba(255, 255, 255, 0.8)"};
  fill: ${e=>e.isfavorite?e.theme.colors.accent:"none"};
`,he=o.img`
  object-fit: cover;
`,pe=o.div`
  margin-bottom: ${e=>e.theme.spacing(14)};
`,ge=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${e=>e.theme.spacing(4)};
`,F=o.p`
  max-width: 80%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${e=>e.theme.colors.dark()};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,xe=o.span`
  color: ${e=>e.theme.colors.accent};
`,me=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(2)};
  column-gap: ${e=>e.theme.spacing(6)};
  max-height: 44px;
  overflow: hidden;
`,fe=o.li`
  position: relative;

  &:not(:last-child):after {
    content: "";
    position: absolute;
    top: 2px;
    right: -7px;
    width: 1px;
    height: 16px;

    background: ${e=>e.theme.colors.dark(.1)};
    z-index: 1;
  }
`,ue=o.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.theme.colors.dark(.5)};
`,we=o.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.white};

  background-color: ${e=>e.theme.colors.accent};
  border-radius: ${e=>e.theme.radii.btn};
  border: none;

  transition: ${e=>e.theme.transition("background-color")};

  &:hover {
    background-color: ${e=>e.theme.colors.hover};
  }
`,$e=()=>{const[e,s]=d.useState(!1);return d.useEffect(()=>{document.body.style.overflow=e?"hidden":"unset"},[e]),{isOpen:e,toggleModal:()=>{s(n=>!n)}}},be=({advert:e,isFavorite:s,onAddFavorite:r,onRemoveFavorite:n})=>{const{isOpen:i,toggleModal:a}=$e(),{id:m,year:f,make:h,model:p,type:u,img:w,rentalPrice:$,rentalCompany:b,address:j,accessories:g,functionalities:v}=e,k=()=>{if(s)return n();r()},[z,C]=j.split(", ").reverse(),L=[...g,...v].reduce((l,x)=>x.length<l.length?x:l,g[0]),y=[C,z,b,u,h,m,L].map(l=>t.jsx(fe,{children:t.jsx(ue,{children:l})},l));return t.jsxs(ce,{children:[t.jsxs(ae,{children:[t.jsx(he,{src:w,alt:`${h} ${p}`}),t.jsx(de,{type:"button",onClick:k,children:t.jsx(le,{isfavorite:s?" ":""})})]}),t.jsxs(pe,{children:[t.jsxs(ge,{children:[t.jsxs(F,{children:[h," ",t.jsx(xe,{children:p}),", ",f]}),t.jsx(F,{children:$})]}),t.jsx(me,{children:y})]}),t.jsx(we,{onClick:a,children:"Learn More"}),i&&t.jsx(se,{onClose:a,advert:e})]})},je=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(25)};
  column-gap: ${e=>e.theme.spacing(14.5)};
`,ve=e=>e.adverts.favorites,Le=e=>e.adverts.isLoading,ye=({adverts:e})=>{const s=T(ve),r=R(),n=i=>s.some(a=>(a==null?void 0:a.id)===i);return t.jsx(je,{children:e.map(i=>t.jsx(be,{advert:i,isFavorite:n(i.id),onAddFavorite:()=>r(W(i)),onRemoveFavorite:()=>r(O(i.id))},i.id))})};export{ye as A,ve as a,Le as s};
