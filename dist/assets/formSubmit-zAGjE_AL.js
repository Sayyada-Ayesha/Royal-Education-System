import{c as d,e}from"./index-DVeYlshA.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],u=d("loader-circle",m),l=async(i,t)=>{try{const o=new Date,a=o.toISOString().split("T")[0].replace(/-/g,""),c=Math.random().toString(36).substring(2,7).toUpperCase(),r=`RES-${a}-${c}`,s={...i,formType:t,submissionId:r,submittedAt:o.toISOString()};if(console.log(`[Form Submit] Type: ${t} | ID: ${r}`,s),e.formEndpoint&&e.formEndpoint.trim()!==""){if(!(await fetch(e.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok)throw new Error("Network response was not ok")}else await new Promise(n=>setTimeout(n,1e3));return{success:!0,submissionId:r}}catch(o){return console.error("Form submission error:",o),{success:!1,submissionId:"",error:o instanceof Error?o.message:"Unknown error occurred"}}};export{u as L,l as s};
