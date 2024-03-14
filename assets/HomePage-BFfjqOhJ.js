import{u as i,L as n,j as t}from"./index-BZsPbuk1.js";const o="/rent-a-car/assets/hero-DSRpp0pq.webp",s=i.section`
  margin-bottom: ${e=>e.theme.spacing(20)};
`,a=i.h1`
  margin-bottom: ${e=>e.theme.spacing(10)};
  text-align: center;
  font-size: 2em;
`,c=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 320px;
  padding-left: ${e=>e.theme.spacing(20)};
  padding-right: ${e=>e.theme.spacing(20)};

  background: url(${o});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${e=>e.theme.radii.img};

  @media screen and (min-width: 768px) {
    & {
      height: 320px;
      background-position: right;
    }
  }

  @media screen and (min-width: 1440px) {
    & {
      height: 400px;
    }
  }
`,d=i.h2`
  max-width: 400px;
  padding: ${e=>e.theme.spacing(5)};

  color: ${e=>e.theme.colors.white};

  border-radius: ${e=>e.theme.radii.img};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(30px);
`,l=i(n)`
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
`,h=()=>t.jsxs(s,{children:[t.jsx(a,{children:"Welcome to our car agency"}),t.jsxs(c,{children:[t.jsx(d,{children:"We provide a wide selection of cars for rent. Find the perfect car for your travel or business trip"}),t.jsx(l,{to:"/catalog",children:"Let's go"})]})]}),m=i.h2`
  margin-bottom: ${e=>e.theme.spacing(10)};
  text-align: center;
`,g=i.p`
  margin-bottom: ${e=>e.theme.spacing(10)};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${e=>e.theme.colors.dark()};
`,p=i.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    & {
      justify-content: space-around;
      flex-direction: row;
      align-items: flex-start;
      gap: 0;
    }
  }
`,r=i.li`
  max-width: 400px;

  font-size: 18px;
  font-weight: 400;
  color: ${e=>e.theme.colors.dark()};

  @media screen and (min-width: 768px) {
    & {
      max-width: 25%;
    }
  }
`,x=()=>t.jsxs("section",{children:[t.jsx(m,{children:"Our capabilities"}),t.jsx(g,{children:"Take advantage of our service:"}),t.jsxs(p,{children:[t.jsxs(r,{children:[t.jsx("b",{children:"Choose"})," from a variety of car models, including comfortable sedans, station wagons and SUVs."]}),t.jsxs(r,{children:[t.jsx("b",{children:"Filter"})," ads by model, rental price to find the perfect option for you."]}),t.jsxs(r,{children:[t.jsx("b",{children:"Add"})," your favorite listings to your favorites for quick access."]})]})]}),f=()=>t.jsxs(t.Fragment,{children:[t.jsx(h,{}),t.jsx(x,{})]});export{f as default};
