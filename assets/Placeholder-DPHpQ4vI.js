import{r as d,u as o,j as t,b as B,c as F,d as P,e as S}from"./index-DU1BUqCv.js";const T=e=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M18 6L6 18",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M6 6L18 18",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),W=o.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: ${e=>e.theme.colors.dark(.5)};
  overflow: auto;
`,R=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 541px;
  padding: ${e=>e.theme.spacing(20)};

  background-color: ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.radii.modal};
`,O=o.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;

  width: 24px;
  height: 24px;
  padding: 0;

  background-color: transparent;
  border: none;
`,H=o(T)`
  width: 24px;
  height: 24px;

  stroke: ${e=>e.theme.colors.dark()};
`,K=({onClose:e,children:r})=>{d.useEffect(()=>{const n=s=>{s.code==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const i=n=>{n.target===n.currentTarget&&e()};return t.jsx(W,{onClick:i,children:t.jsxs(R,{children:[t.jsx(O,{type:"button",onClick:e,children:t.jsx(H,{})}),r]})})},E=e=>e.split(", ").reverse(),N=({id:e,year:r,type:i,address:n,fuelConsumption:s,engineSize:a})=>{const[l,h]=E(n);return[h,l,`Id: ${e}`,`Year: ${r}`,`Type: ${i}`,`Fuel Consumption: ${s}`,`Engine Size: ${a}`]},U=e=>e.toLocaleString("en-US"),Y=e=>{const[r,...i]=e;return i.join("")+r},Z=({mileage:e,rentalPrice:r,rentalConditions:i})=>{const n=U(e),s=Y(r),a=[`Mileage: ${n}`,`Price: ${s}`];return i.split(`
`).concat(a).map(l=>l.split(":"))},q=(e,r)=>[...e,...r].reduce((i,n)=>n.length<i.length?n:i,e[0]),G=(e,r)=>e.some(i=>(i==null?void 0:i.id)===r),D="/rent-a-car/assets/car-placeholder-B0Ia-ttI.jpg",J=o.div`
  width: 100%;
  height: 248px;
  margin-bottom: ${e=>e.theme.spacing(7)};

  background-color: #f3f3f2;
  border-radius: ${e=>e.theme.radii.img};
  overflow: hidden;
`,Q=o.img`
  position: relative;
  object-fit: cover;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${D});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  }
`,V=o.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing(12)};
  margin-bottom: ${e=>e.theme.spacing(12)};
`,X=o.p`
  margin-bottom: ${e=>e.theme.spacing(4)};

  font-size: 18px;
  font-weight: 500;
  line-height: 1.33333;
  color: ${e=>e.theme.colors.dark()};
`,_=o.span`
  color: ${e=>e.theme.colors.accent};
`,ee=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(2)};
  column-gap: ${e=>e.theme.spacing(6)};
  max-width: 277px;
  margin-bottom: ${e=>e.theme.spacing(7)};
`,I=o.li`
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
`,z=o.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.theme.colors.dark(.5)};
`,te=o.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.dark()};
`,oe=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(2)};
  column-gap: ${e=>e.theme.spacing(6)};
`,M=o.p`
  margin-bottom: ${e=>e.theme.spacing(4)};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.dark()};
`,ne=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing(4)};
`,ie=o.li`
  border-radius: 35px;
  padding: 7px 14px;
  background-color: #f9f9f9;
`,re=o.span`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;
`,se=o.span`
  font-weight: 600;
  color: ${e=>e.theme.colors.accent};
`,ce=o.a`
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
`,ae=({onClose:e,advert:{id:r,year:i,make:n,model:s,description:a,type:l,img:h,fuelConsumption:p,engineSize:x,address:m,accessories:u,functionalities:f,rentalConditions:w,mileage:$,rentalPrice:b}})=>{const k=N({id:r,year:i,type:l,address:m,fuelConsumption:p,engineSize:x}).map(c=>t.jsx(I,{children:t.jsx(z,{children:c})},c)),j=[...u,...f].map(c=>t.jsx(I,{children:t.jsx(z,{children:c})},c)),v=Z({mileage:$,rentalPrice:b,rentalConditions:w}).map(([c,g])=>t.jsx(ie,{children:t.jsxs(re,{children:[c,g&&":",g&&t.jsx(se,{children:g})]})},c));return t.jsxs(K,{onClose:e,children:[t.jsx(J,{children:t.jsx(Q,{src:h,alt:`${n} ${s}`})}),t.jsxs(V,{children:[t.jsxs("div",{children:[t.jsxs(X,{children:[n," ",t.jsx(_,{children:s}),", ",i]}),t.jsx(ee,{children:k}),t.jsx(te,{children:a})]}),t.jsxs("div",{children:[t.jsx(M,{children:"Accessories and functionalities:"}),t.jsx(oe,{children:j})]}),t.jsxs("div",{children:[t.jsx(M,{children:"Rental Conditions:"}),t.jsx(ne,{children:v})]})]}),t.jsx(ce,{href:"tel:+380730000000",children:"Rental Car"})]})},de=()=>{const[e,r]=d.useState(!1);return d.useEffect(()=>{document.body.style.overflow=e?"hidden":"unset"},[e]),{isOpen:e,toggleModal:()=>{r(n=>!n)}}},le=e=>d.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),he=o.li`
  width: 274px;
`,pe=o.div`
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
`,ge=o.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
  padding: 0;

  background-color: transparent;
  border: none;
  z-index: 1;
`,xe=o(le)`
  width: 18px;
  height: 18px;

  stroke: ${e=>e.isfavorite?e.theme.colors.accent:"rgba(255, 255, 255, 0.8)"};
  fill: ${e=>e.isfavorite?e.theme.colors.accent:"none"};
`,me=o.img`
  position: relative;
  object-fit: cover;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${D});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  }
`,ue=o.div`
  margin-bottom: ${e=>e.theme.spacing(14)};
`,fe=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${e=>e.theme.spacing(4)};
`,A=o.p`
  max-width: 80%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${e=>e.theme.colors.dark()};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,we=o.span`
  color: ${e=>e.theme.colors.accent};
`,$e=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(2)};
  column-gap: ${e=>e.theme.spacing(6)};
  max-height: 44px;
  overflow: hidden;
`,be=o.li`
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
`,ke=o.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.theme.colors.dark(.5)};
`,je=o.button`
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
`,ve=({advert:e,isFavorite:r,onAddFavorite:i,onRemoveFavorite:n})=>{const{isOpen:s,toggleModal:a}=de(),{id:l,year:h,make:p,model:x,type:m,img:u,rentalPrice:f,rentalCompany:w,address:$,accessories:b,functionalities:C}=e,k=()=>{if(r)return n();i()},[j,y]=E($),v=q(b,C),g=[y,j,w,m,p,l,v].map(L=>t.jsx(be,{children:t.jsx(ke,{children:L})},L));return t.jsxs(he,{children:[t.jsxs(pe,{children:[t.jsx(me,{src:u,alt:`${p} ${x}`}),t.jsx(ge,{type:"button",onClick:k,children:t.jsx(xe,{isfavorite:r?" ":""})})]}),t.jsxs(ue,{children:[t.jsxs(fe,{children:[t.jsxs(A,{children:[p," ",t.jsx(we,{children:x}),", ",h]}),t.jsx(A,{children:f})]}),t.jsx($e,{children:g})]}),t.jsx(je,{onClick:a,children:"Learn More"}),s&&t.jsx(ae,{onClose:a,advert:e})]})},Ce=e=>e.adverts.favorites,Ae=e=>e.adverts.isLoading,ye=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(25)};
  column-gap: ${e=>e.theme.spacing(14.5)};
`,Ee=({adverts:e})=>{const r=B(Ce),i=F();return t.jsx(ye,{children:e.map(n=>t.jsx(ve,{advert:n,isFavorite:G(r,n.id),onAddFavorite:()=>i(P(n)),onRemoveFavorite:()=>i(S(n.id))},n.id))})},Le="/rent-a-car/assets/empty-placeholder-C9W7Nor3.png",Ie=o.div`
  display: flex;
  justify-content: center;
  height: 480px;
  background: url(${Le}) no-repeat center;
`,ze=o.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${e=>e.theme.colors.dark()};
`,De=({children:e})=>t.jsx(Ie,{children:t.jsx(ze,{children:e})});export{Ee as A,De as P,Ce as a,Ae as s};
