import{u as r,j as t,b as s}from"./index-D3iN6nl_.js";import{a as o,A as a}from"./AdvertsList-C3IAV-jy.js";const n="/rent-a-car/assets/empty-placeholder-C9W7Nor3.png",c=r.div`
  display: flex;
  justify-content: center;
  height: 480px;
  background: url(${n}) no-repeat center;
`,l=r.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${e=>e.theme.colors.dark()};
`,i=({children:e})=>t.jsx(c,{children:t.jsx(l,{children:e})}),u=()=>{const e=s(o);return e.length===0?t.jsx(i,{children:"Your list of favorites is currently empty"}):t.jsx(a,{adverts:e})};export{u as default};
