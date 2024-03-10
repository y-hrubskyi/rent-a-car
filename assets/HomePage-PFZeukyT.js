import{u as o,L as n,j as t}from"./index-D3iN6nl_.js";const i="/rent-a-car/assets/hero-DSRpp0pq.webp",s=o.section`
  margin-bottom: ${e=>e.theme.spacing(20)};
`,c=o.h1`
  margin-bottom: ${e=>e.theme.spacing(10)};
  text-align: center;
  font-size: 2em;
`,a=o.div`
  display: flex;
`,l=o.div`
  height: 220px;
  display: inline-flex;
  margin-right: ${e=>e.theme.spacing(20)};

  width: 120%;
  background: url(${i});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: ${e=>e.theme.radii.img};
`,d=o.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,h=o(n)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin-right: 28%;

  font-weight: 600;
  text-align: center;
  color: ${e=>e.theme.colors.white};

  text-decoration: none;
  border-radius: ${e=>e.theme.radii.btn};
  background-color: ${e=>e.theme.colors.accent};

  transition: ${e=>e.theme.transition("background-color")};

  &:hover {
    background-color: ${e=>e.theme.colors.hover};
  }
`,g=()=>t.jsxs(s,{children:[t.jsx(c,{children:"Welcome to our car agency"}),t.jsxs(a,{children:[t.jsx(l,{}),t.jsxs(d,{children:[t.jsx("h2",{children:"We provide a wide selection of cars for rent. Find the perfect car for your travel or business trip"}),t.jsx(h,{to:"/catalog",children:"Let's go"})]})]})]}),m=o.h2`
  margin-bottom: ${e=>e.theme.spacing(10)};
  text-align: center;
`,x=o.p`
  margin-bottom: ${e=>e.theme.spacing(10)};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${e=>e.theme.colors.dark()};
`,p=o.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: disc;
`,r=o.li`
  max-width: 25%;

  font-size: 18px;
  font-weight: 500;
  color: ${e=>e.theme.colors.dark()};
`,u=()=>t.jsxs("section",{children:[t.jsx(m,{children:"Our capabilities"}),t.jsx(x,{children:"Take advantage of our service:"}),t.jsxs(p,{children:[t.jsx(r,{children:"Choose from a variety of car models, including comfortable sedans, station wagons and SUVs."}),t.jsx(r,{children:"Filter ads by model, rental price to find the perfect option for you."}),t.jsx(r,{children:"Add your favorite listings to your favorites for quick access."})]})]}),j=()=>t.jsxs(t.Fragment,{children:[t.jsx(g,{}),t.jsx(u,{})]});export{j as default};
