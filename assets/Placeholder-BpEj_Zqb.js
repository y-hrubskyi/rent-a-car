import{r as d,u as o,j as t,_ as I,b as F,c as P,d as S,e as T}from"./index-CB_GK7SR.js";const W=e=>e.adverts.favorites,Ee=e=>e.adverts.isLoading,De=e=>e.adverts.error,D=e=>e.split(", ").reverse(),R=({id:e,year:r,type:i,address:n,fuelConsumption:s,engineSize:c})=>{const[l,h]=D(n);return[h,l,`Id: ${e}`,`Year: ${r}`,`Type: ${i}`,`Fuel Consumption: ${s}`,`Engine Size: ${c}`]},O=e=>e.toLocaleString("en-US"),H=e=>{const[r,...i]=e;return i.join("")+r},_=({mileage:e,rentalPrice:r,rentalConditions:i})=>{const n=O(e),s=H(r),c=[`Mileage: ${n}`,`Price: ${s}`];return i.split(`
`).concat(c).map(l=>l.split(":"))},K=(e,r)=>[...e,...r].reduce((i,n)=>n.length<i.length?n:i,e[0]),N=(e,r)=>e.some(i=>(i==null?void 0:i.id)===r),U=()=>{const[e,r]=d.useState(!1);return d.useEffect(()=>{document.body.style.overflow=e?"hidden":"unset"},[e]),{isOpen:e,toggleModal:()=>{r(n=>!n)}}},Y=e=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M18 6L6 18",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M6 6L18 18",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),Z=o.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: ${e=>e.theme.colors.dark(.5)};
  overflow: auto;
`,q=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 541px;
  max-height: 90%;
  padding: ${e=>e.theme.spacing(20)};

  background-color: ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.radii.modal};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 14px;
    margin-bottom: 14px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${e=>e.theme.colors.dark(.2)};
  }

  @media screen and (max-width: 767px) {
    & {
      width: 70%;
      min-width: 320px;
      padding: ${e=>e.theme.spacing(14)};
    }
  }
`,G=o.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;

  width: 24px;
  height: 24px;
  padding: 0;

  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hover};
  }

  @media screen and (max-width: 767px) {
    & {
      top: 12px;
      right: 12px;
      width: 20px;
      height: 20px;
    }
  }
`,J=o(Y)`
  width: 24px;
  height: 24px;

  stroke: currentColor;

  transition: ${e=>e.theme.transition("color")};

  @media screen and (max-width: 767px) {
    & {
      width: 20px;
      height: 20px;
    }
  }
`,Q=({onClose:e,children:r})=>{d.useEffect(()=>{const n=s=>{s.code==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const i=n=>{n.target===n.currentTarget&&e()};return t.jsx(Z,{onClick:i,children:t.jsxs(q,{children:[t.jsx(G,{type:"button",onClick:e,children:t.jsx(J,{})}),r]})})},B="/rent-a-car/assets/car-placeholder-B0Ia-ttI.jpg",V=o.div`
  width: 100%;
  height: 248px;
  margin-bottom: ${e=>e.theme.spacing(7)};

  background-color: #f3f3f2;
  border-radius: ${e=>e.theme.radii.img};
  overflow: hidden;
`,X=o.img`
  position: relative;
  object-fit: cover;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${B});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  }
`,ee=o.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing(12)};
  margin-bottom: ${e=>e.theme.spacing(12)};
`,te=o.p`
  margin-bottom: ${e=>e.theme.spacing(4)};

  font-size: 18px;
  font-weight: 500;
  line-height: 1.33333;
  color: ${e=>e.theme.colors.dark()};
`,oe=o.span`
  color: ${e=>e.theme.colors.accent};
`,ne=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(2)};
  column-gap: ${e=>e.theme.spacing(6)};
  margin-bottom: ${e=>e.theme.spacing(7)};
`,z=o.li`
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
`,M=o.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.theme.colors.dark(.5)};
`,ie=o.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.dark()};
`,re=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(2)};
  column-gap: ${e=>e.theme.spacing(6)};
`,A=o.p`
  margin-bottom: ${e=>e.theme.spacing(4)};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857;
  color: ${e=>e.theme.colors.dark()};
`,se=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing(4)};
`,ae=o.li`
  border-radius: 35px;
  padding: ${e=>e.theme.spacing(3.5)} ${e=>e.theme.spacing(7)};
  background-color: #f9f9f9;
`,ce=o.span`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;
`,de=o.span`
  font-weight: 600;
  color: ${e=>e.theme.colors.accent};
`,le=o.a`
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

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.hover};
  }
`,he=({onClose:e,advert:{id:r,year:i,make:n,model:s,description:c,type:l,img:h,fuelConsumption:p,engineSize:x,address:m,accessories:u,functionalities:f,rentalConditions:w,mileage:b,rentalPrice:$}})=>{const k=R({id:r,year:i,type:l,address:m,fuelConsumption:p,engineSize:x}).map(a=>t.jsx(z,{children:t.jsx(M,{children:a})},a)),v=[...u,...f].map(a=>t.jsx(z,{children:t.jsx(M,{children:a})},a)),j=_({mileage:b,rentalPrice:$,rentalConditions:w}).map(([a,g])=>t.jsx(ae,{children:t.jsxs(ce,{children:[a,g&&":",g&&t.jsx(de,{children:g})]})},a));return t.jsxs(Q,{onClose:e,children:[t.jsx(V,{children:t.jsx(X,{src:h,alt:`${n} ${s}`})}),t.jsxs(ee,{children:[t.jsxs("div",{children:[t.jsxs(te,{children:[n," ",t.jsx(oe,{children:s}),", ",i]}),t.jsx(ne,{children:k}),t.jsx(ie,{children:c})]}),t.jsxs("div",{children:[t.jsx(A,{children:"Accessories and functionalities:"}),t.jsx(re,{children:v})]}),t.jsxs("div",{children:[t.jsx(A,{children:"Rental Conditions:"}),t.jsx(se,{children:j})]})]}),t.jsx(le,{href:"tel:+380730000000",children:"Rental Car"})]})},pe=e=>d.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ge=o.li`
  width: 274px;
`,xe=o.div`
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
`,me=o.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
  padding: 0;

  background-color: transparent;
  border: none;
  z-index: 1;
`,ue=o(pe)`
  width: 18px;
  height: 18px;

  stroke: ${e=>e["data-is-favorite"]?e.theme.colors.accent:"rgba(255, 255, 255, 0.8)"};
  fill: ${e=>e["data-is-favorite"]?e.theme.colors.accent:"none"};

  transition: ${e=>e.theme.transition("stroke")},
    ${e=>e.theme.transition("fill")};
`,fe=o.img`
  position: relative;
  object-fit: cover;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${B});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  }
`,we=o.div`
  margin-bottom: ${e=>e.theme.spacing(14)};
`,be=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${e=>e.theme.spacing(4)};
`,E=o.p`
  max-width: 80%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${e=>e.theme.colors.dark()};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,$e=o.span`
  color: ${e=>e.theme.colors.accent};
`,ke=o.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(2)};
  column-gap: ${e=>e.theme.spacing(6)};
  max-height: 44px;
  overflow: hidden;
`,ve=o.li`
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
`,je=o.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${e=>e.theme.colors.dark(.5)};
`,Ce=o.button`
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

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.hover};
  }
`,ye=({advert:e,isFavorite:r,onAddFavorite:i,onRemoveFavorite:n})=>{const{isOpen:s,toggleModal:c}=U(),{id:l,year:h,make:p,model:x,type:m,img:u,rentalPrice:f,rentalCompany:w,address:b,accessories:$,functionalities:C}=e,k=()=>{r?(n(),I.success("Advert removed from favorites")):(i(),I.success("Advert added to favorites"))},[v,y]=D(b),j=K($,C),g=[y,v,w,m,p,l,j].map(L=>t.jsx(ve,{children:t.jsx(je,{children:L})},L));return t.jsxs(ge,{children:[t.jsxs(xe,{children:[t.jsx(fe,{src:u,alt:`${p} ${x}`}),t.jsx(me,{type:"button",onClick:k,children:t.jsx(ue,{"data-is-favorite":r})})]}),t.jsxs(we,{children:[t.jsxs(be,{children:[t.jsxs(E,{children:[p," ",t.jsx($e,{children:x}),", ",h]}),t.jsx(E,{children:f})]}),t.jsx(ke,{children:g})]}),t.jsx(Ce,{onClick:c,children:"Learn More"}),s&&t.jsx(he,{onClose:c,advert:e})]})},Le=o.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: ${e=>e.theme.spacing(25)};
  column-gap: ${e=>e.theme.spacing(14.5)};
`,Be=({adverts:e})=>{const r=F(W),i=P();return t.jsx(Le,{children:e.map(n=>t.jsx(ye,{advert:n,isFavorite:N(r,n.id),onAddFavorite:()=>i(S(n)),onRemoveFavorite:()=>i(T(n.id))},n.id))})},Ie="/rent-a-car/assets/empty-placeholder-C9W7Nor3.png",ze=o.div`
  display: flex;
  justify-content: center;
  height: 480px;
  background: url(${Ie}) no-repeat center;
`,Me=o.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${e=>e.theme.colors.dark()};
`,Fe=({children:e})=>t.jsx(ze,{children:t.jsx(Me,{children:e})});export{Be as A,Fe as P,De as a,W as b,Ee as s};
