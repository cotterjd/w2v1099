(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"149e":function(e,t,n){},1632:function(e,t,n){"use strict";var r=n("149e"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Spouse Salary "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.spouseSalary,expression:"spouseSalary"}],attrs:{type:"text"},domProps:{value:e.spouseSalary},on:{input:function(t){t.target.composing||(e.spouseSalary=t.target.value)}}})]),n("br"),n("label",[e._v("# Children "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.numChildren,expression:"numChildren"}],attrs:{type:"text"},domProps:{value:e.numChildren},on:{input:function(t){t.target.composing||(e.numChildren=t.target.value)}}})]),n("br"),n("div",{staticClass:"container"},[n("w2-taxes",{attrs:{numChildren:e.numberOfChildren,spouseIncome:e.spouseIncome}}),n("ten99-taxes",{attrs:{numChildren:e.numberOfChildren,spouseIncome:e.spouseIncome}}),n("corp-taxes",{attrs:{numChildren:e.numberOfChildren,spouseIncome:e.spouseIncome}})],1)])},i=[],u=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("W2")]),n("label",[e._v("Salary "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.salary,expression:"salary"}],attrs:{type:"text"},domProps:{value:e.salary},on:{input:function(t){t.target.composing||(e.salary=t.target.value)}}})]),n("br"),n("label",[e._v("401K contribution "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.for01k,expression:"for01k"}],attrs:{placeholder:"%",type:"text"},domProps:{value:e.for01k},on:{input:function(t){t.target.composing||(e.for01k=t.target.value)}}})]),n("br"),n("label",[e._v("HSA contribution "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.hsa,expression:"hsa"}],attrs:{placeholder:"",type:"text"},domProps:{value:e.hsa},on:{input:function(t){t.target.composing||(e.hsa=t.target.value)}}})]),n("br"),n("div",[n("span",[e._v("Combined Income: "+e._s(e.w2CombinedIncome))]),n("br"),n("span",[e._v("Deductions: "+e._s(e.totalDeductions))]),n("br"),n("span",[e._v("Taxable Income: "+e._s(e.w2TaxableIncome))]),n("br"),n("span",[e._v("Payroll Taxes: "+e._s(e.w2PayrollTaxes))]),n("br"),n("span",[e._v("Income Taxes: "+e._s(e.w2IncomeTaxes))]),n("br"),n("span",[e._v("Credits: "+e._s(e.w2Credits))]),n("br"),n("span",[e._v("Income Tax Owed: "+e._s(e.w2IncomeTaxesOwed))]),n("br"),n("span",[e._v("Effective Tax Rate: "+e._s(e.w2EffectiveTaxRate))]),n("br"),n("font",{attrs:{color:"red"}},[e._v("Total Taxes: "+e._s(e.w2TotalTaxes))]),n("br")],1)])}),c=[],l=console,d=(l.log,{name:"w2",data:function(){return{salary:0,for01k:0,standardDeduction:24400,hsa:0}},props:{spouseIncome:Number,numChildren:Number},computed:{childCredit:function(){return 2e3*Number(this.numChildren)},w2CombinedIncome:function(){return Number(this.salary)+this.spouseIncome},w2IncomeTaxes:function(){return m(this.w2TaxableIncome)},w2Credits:function(){return 2e3*this.numChildren},w2PayrollTaxes:function(){return.0765*(Number(this.salary)+this.spouseIncome)},totalDeductions:function(){var e=Number(this.for01k),t=e/100,n=t*Number(this.salary),r=Number(this.hsa);return n+r+this.standardDeduction},w2TaxableIncome:function(){var e=this.w2CombinedIncome-this.totalDeductions;return e<0?0:e},w2IncomeTaxesOwed:function(){var e=this.w2IncomeTaxes-this.w2Credits;return e<0?0:e},w2EffectiveTaxRate:function(){return this.w2TotalTaxes/this.w2CombinedIncome},w2TotalTaxes:function(){return this.w2IncomeTaxesOwed+this.w2PayrollTaxes}},methods:{}});function m(e){var t=Number(e),n=0,r=9700,a=.1,o=r*a;if(t<r)return t*a;n+=o;var s=39475,i=.12,u=(s-r)*i;if(t<s)return n+(t-r)*i;n=+u;var c=84200,l=.22,d=(c-s)*l;if(t<c)return n+(t-s)*l;n+=d;var m=160725,p=.24,v=(m-c)*p;if(t<m)return n+(t-c)*l;n+=v;var f=204100,b=.32,h=(f-m)*b;if(t<f)return n==(t-m)*b;n+=h;var x=510300,_=.35,T=(x-f)*_;if(t<x)return n+(t-f)*_;n+=T;var y=.37,w=(t-x)*y;return n+w}var p=d,v=(n("1632"),n("2877")),f=Object(v["a"])(p,u,c,!1,null,"fbc5fc3e",null),b=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("h3",[e._v("1099")]),n("label",[e._v("Salary "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.salary,expression:"salary"}],attrs:{type:"text"},domProps:{value:e.salary},on:{input:function(t){t.target.composing||(e.salary=t.target.value)}}})]),n("br"),n("label",[e._v("Business Deductions "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.deductions,expression:"deductions"}],attrs:{type:"text"},domProps:{value:e.deductions},on:{input:function(t){t.target.composing||(e.deductions=t.target.value)}}})]),n("br")]),n("div",[n("span",[e._v("Combined Income: "+e._s(e.combinedIncome))]),n("br"),n("span",[e._v("Standard Deduction: "+e._s(e.standardDeduction))]),n("br"),n("span",[e._v("Business Deductions: "+e._s(e.deductions))]),n("br"),n("span",[e._v("Total Deductions: "+e._s(e.totalDeductions))]),n("br"),n("span",[e._v("Taxable Income: "+e._s(e.taxableIncome))]),n("br"),n("span",[e._v("Payroll Taxes: "+e._s(e.payrollTaxes))]),n("br"),n("span",[e._v("Income Taxes: "+e._s(e.incomeTaxes))]),n("br"),n("span",[e._v("Credits: "+e._s(e.credits))]),n("br"),n("span",[e._v("Income Tax Owed: "+e._s(e.incomeTaxesOwed))]),n("br"),n("span",[e._v("Effective Tax Rate: "+e._s(e.effectiveTaxRate))]),n("br"),n("font",{attrs:{color:"red"}},[e._v("Total Taxes: "+e._s(e.totalTaxes))]),n("br")],1)])},x=[],_=console,T=(_.log,{name:"ten99",data:function(){return{salary:0,deductions:0,standardDeduction:24400}},props:{spouseIncome:Number,numChildren:Number},computed:{childCredit:function(){return 2e3*Number(this.numChildren)},totalDeductions:function(){return this.standardDeduction+Number(this.deductions)},combinedIncome:function(){return Number(this.salary)+this.spouseIncome},incomeTaxes:function(){return y(this.taxableIncome)},credits:function(){return 2e3*this.numChildren},netIncome:function(){return Number(this.salary)-Number(this.deductions)},payrollTaxes:function(){return.153*this.netIncome+.0765*this.spouseIncome},taxableIncome:function(){var e=this.combinedIncome-this.totalDeductions;return e<0?0:e},incomeTaxesOwed:function(){var e=this.incomeTaxes-this.credits;return e<0?0:e},effectiveTaxRate:function(){return this.totalTaxes/this.combinedIncome},totalTaxes:function(){return this.incomeTaxesOwed+this.payrollTaxes}},methods:{}});function y(e){var t=Number(e),n=0,r=9700,a=.1,o=r*a;if(t<r)return t*a;n+=o;var s=39475,i=.12,u=(s-r)*i;if(t<s)return n+(t-r)*i;n=+u;var c=84200,l=.22,d=(c-s)*l;if(t<c)return n+(t-s)*l;n+=d;var m=160725,p=.24,v=(m-c)*p;if(t<m)return n+(t-c)*l;n+=v;var f=204100,b=.32,h=(f-m)*b;if(t<f)return n==(t-m)*b;n+=h;var x=510300,_=.35,T=(x-f)*_;if(t<x)return n+(t-f)*_;n+=T;var y=.37,w=(t-x)*y;return n+w}var w=T,I=(n("d0cf"),Object(v["a"])(w,h,x,!1,null,"cb9918e2",null)),C=I.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("h3",[e._v("Corp")]),n("label",[e._v("Revenue "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.revenue,expression:"revenue"}],attrs:{type:"text"},domProps:{value:e.revenue},on:{input:function(t){t.target.composing||(e.revenue=t.target.value)}}})]),n("br"),n("label",[e._v("Salary "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.salary,expression:"salary"}],attrs:{type:"text"},domProps:{value:e.salary},on:{input:function(t){t.target.composing||(e.salary=t.target.value)}}})]),n("br"),n("label",[e._v("Business Deductions "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.deductions,expression:"deductions"}],attrs:{type:"text"},domProps:{value:e.deductions},on:{input:function(t){t.target.composing||(e.deductions=t.target.value)}}})]),n("br")]),n("div",[n("span",[e._v("Combined Income: "+e._s(e.combinedIncome))]),n("br"),n("span",[e._v("Standard Deduction: "+e._s(e.standardDeduction))]),n("br"),n("span",[e._v("Taxable Income: "+e._s(e.taxableIncome))]),n("br"),n("span",[e._v("Payroll Taxes: "+e._s(e.payrollTaxes))]),n("br"),n("span",[e._v("Income Taxes: "+e._s(e.incomeTaxes))]),n("br"),n("span",[e._v("Corp Taxes: "+e._s(e.corpTaxes))]),n("br"),n("span",[e._v("Credits: "+e._s(e.credits))]),n("br"),n("span",[e._v("Income Tax Owed: "+e._s(e.incomeTaxesOwed))]),n("br"),n("span",[e._v("Effective Tax Rate: "+e._s(e.effectiveTaxRate))]),n("br"),n("font",{attrs:{color:"red"}},[e._v("Total Taxes: "+e._s(e.totalTaxes))]),n("br")],1)])},N=[],O=console,D=(O.log,{name:"corp",data:function(){return{salary:0,deductions:0,revenue:0,standardDeduction:24400,CORP_TAX_RATE:.21}},props:{spouseIncome:Number,numChildren:Number},computed:{childCredit:function(){return 2e3*Number(this.numChildren)},totalDeductions:function(){return this.standardDeduction},combinedIncome:function(){return Number(this.revenue)+this.spouseIncome},incomeTaxes:function(){return P(this.taxableIncome)},corpTaxes:function(){var e=this.revenue-.5765*this.salary-.2*this.revenue-this.deductions;return e*this.CORP_TAX_RATE},credits:function(){return 2e3*this.numChildren},netIncome:function(){return Number(this.salary)-Number(this.deductions)},payrollTaxes:function(){return.153*Number(this.salary)+.0765*this.spouseIncome},taxableIncome:function(){var e=Number(this.salary)+this.spouseIncome-this.totalDeductions;return e<0?0:e},incomeTaxesOwed:function(){var e=this.incomeTaxes+this.corpTaxes-this.credits;return e<0?0:e},effectiveTaxRate:function(){return this.totalTaxes/this.combinedIncome},totalTaxes:function(){return this.incomeTaxesOwed+this.payrollTaxes}},methods:{}});function P(e){var t=Number(e),n=0,r=9700,a=.1,o=r*a;if(t<r)return t*a;n+=o;var s=39475,i=.12,u=(s-r)*i;if(t<s)return n+(t-r)*i;n=+u;var c=84200,l=.22,d=(c-s)*l;if(t<c)return n+(t-s)*l;n+=d;var m=160725,p=.24,v=(m-c)*p;if(t<m)return n+(t-c)*l;n+=v;var f=204100,b=.32,h=(f-m)*b;if(t<f)return n==(t-m)*b;n+=h;var x=510300,_=.35,T=(x-f)*_;if(t<x)return n+(t-f)*_;n+=T;var y=.37,w=(t-x)*y;return n+w}var S=D,j=(n("8490"),Object(v["a"])(S,g,N,!1,null,"681d50ab",null)),R=j.exports,E=console,k=(E.log,{name:"w2vs1099vscorp",components:{w2Taxes:b,ten99Taxes:C,corpTaxes:R},data:function(){return{spouseSalary:0,numChildren:0,corpData:{revenue:0,salary:0,deductions:0},w2Taxes:null,ten99Taxes:null,corpTaxes:null,standardDeduction:24400}},props:{},computed:{childCredit:function(){return 2e3*this.numChildren},spouseIncome:function(){return Number(this.spouseSalary)},numberOfChildren:function(){return Number(this.numChildren)}},methods:{calcCorp:function(){var e=this.calcW2Taxes(this.corpData.salary),t=Number(this.corpData.revenue),n=Number(this.corpData.salary),r=Number(this.corpData.deductions),a=t-r,o=.8*(a-n),s=.21*o;this.corpTaxes=s+e+.765*n},calcW2Taxes:function(e){var t=Number(e),n=t+this.spouseIncome-this.standardDeduction;return A(n)-this.childCredit+.0765*t}}});function A(e){var t=Number(e),n=9700,r=.1*n;if(t<n)return r;var a=39475,o=.12*(a-n);if(t<a)return o;var s=84200,i=.22*(s-a);if(t<s)return i;var u=160725,c=.24*(u-s);if(t<u)return c;var l=204100,d=.32*(l-u);if(t<l)return d;var m=510300,p=.35*(m-l);if(t<m)return p;var v=.37*(t-m);return v}var $=k,M=(n("c67a"),Object(v["a"])($,s,i,!1,null,"434b3bd3",null)),W=M.exports,B={name:"app",components:{Home:W}},H=B,J=(n("034f"),Object(v["a"])(H,a,o,!1,null,null,null)),X=J.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(X)}}).$mount("#app")},8490:function(e,t,n){"use strict";var r=n("ad15"),a=n.n(r);a.a},"85ec":function(e,t,n){},ad15:function(e,t,n){},b5cd:function(e,t,n){},c67a:function(e,t,n){"use strict";var r=n("b5cd"),a=n.n(r);a.a},c986:function(e,t,n){},d0cf:function(e,t,n){"use strict";var r=n("c986"),a=n.n(r);a.a}});
//# sourceMappingURL=app.bac7f274.js.map