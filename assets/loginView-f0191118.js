import{d,r as l,s as _,c as v,a,_ as p,b as g,e as m,f as s,u as i,g as f,h,i as y,n as w,o as c}from"./index-408dbe05.js";const C="chibcha-web-front",S="0.0.0",V="module",b={dev:"vite",build:"vite build",preview:"vite preview",deploy:"gh-pages -d dist"},L={"@tanstack/vue-query":"^4.20.5","@vuelidate/core":"^2.0.0","@vuelidate/validators":"^2.0.0","@vuepic/vue-datepicker":"^5.3.0",axios:"^1.2.1",jsencrypt:"^3.3.1",moment:"^2.29.4",pinia:"^2.0.23",vue:"^3.3.4","vue-router":"^4.1.6","vue3-lottie":"^3.0.0"},k={"@vitejs/plugin-vue":"^4.2.3","gh-pages":"^6.1.0",sass:"^1.69.5",typescript:"^5.0.2",vite:"^4.4.5","vue-tsc":"^1.8.5"},R={name:C,private:!0,version:S,type:V,scripts:b,dependencies:L,devDependencies:k};var n=(e=>(e.stepLogin="Login",e.stepChangePassword="ChangePassword",e.stepRegister="Register",e))(n||{});const x=d("AuthStore",()=>({currentStep:l(n.stepLogin)})),A=a(()=>p(()=>import("./loginComponent-a5045954.js"),["assets/loginComponent-a5045954.js","assets/VelocityButton-913261d8.js","assets/index-408dbe05.js","assets/index-b64649c7.css","assets/VelocityButton-fe1b5f06.css","assets/VelocityInput-f4bbeb98.js","assets/VelocityInput-3d406241.css","assets/api-cdcef346.js"])),D=a(()=>p(()=>import("./RegisterComponent-6479cda3.js"),["assets/RegisterComponent-6479cda3.js","assets/VelocityButton-913261d8.js","assets/index-408dbe05.js","assets/index-b64649c7.css","assets/VelocityButton-fe1b5f06.css","assets/VelocityInput-f4bbeb98.js","assets/VelocityInput-3d406241.css","assets/api-cdcef346.js","assets/VelocityDropdown-429a45d6.js","assets/VelocityDropdown-ad40cd9e.css"])),j=()=>{const e=x(),{currentStep:t}=_(e),o=v(()=>R.version);return{componentStep:()=>{const r=t.value;return r===n.stepLogin?A:r===n.stepRegister?D:null},getVersion:o,currentStep:t}},B={class:"container"},O={class:"container-left"},P={class:"container-information w-100"},E=s("div",{class:w("container-right")},[s("div",{class:"info w-100"},[s("p",{class:"vel-text-overline"},"Versión 1.0.0")])],-1),I=g({__name:"loginView",setup(e){const{componentStep:t}=j();return(o,u)=>(c(),m("div",B,[s("div",O,[s("div",P,[i(t)()?(c(),f(h(i(t)()),{key:0})):y("",!0)])]),E]))}});const M=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{n as S,M as l,R as p,x as u};
