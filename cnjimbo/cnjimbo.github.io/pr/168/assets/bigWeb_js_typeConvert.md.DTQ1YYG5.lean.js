import{_ as k,o as t,c as p,j as s,a as i,I as l,w as n,a5 as h,D as e}from"./chunks/framework.Dnee0Rt6.js";const E="/preview/cnjimbo/cnjimbo.github.io/pr/168/assets/MTYyMzU5NTA3MzMwMA__623595073300.CnBQeWdi.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyMzU5NTA3MzMwMA==623595073300",d="/preview/cnjimbo/cnjimbo.github.io/pr/168/assets/MTYyMzU5NTExMzY2MQ__623595113661.DVhdIEKR.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyMzU5NTExMzY2MQ==623595113661",r="/preview/cnjimbo/cnjimbo.github.io/pr/168/assets/MTU5OTQ2OTY5MzkzMQ__599469693931.BSXfxiU-.png?s1=https:/img.cdn.sugarat.top/mdImg/MTU5OTQ2OTY5MzkzMQ==599469693931",Es=JSON.parse('{"title":"JavaScript中的类型转换规则","description":"","frontmatter":{"sidebar":{"title":"类型转换","step":27},"isTimeLine":true,"title":"JavaScript中的类型转换规则","date":"2020-04-14T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/js/typeConvert.md","filePath":"bigWeb/js/typeConvert.md","lastUpdated":1719501177000}'),g={name:"bigWeb/js/typeConvert.md"},o=h("",16),y=s("code",null,"undefined",-1),c=s("code",null,"null",-1),F=s("code",null,"NaN",-1),C=s("code",null,"''",-1),u=s("code",null,"0",-1),_=h("",2),A=s("code",null,"其它值类型",-1),D=s("code",null,"对象",-1),B=h("",7),b=s("code",null,"[]",-1),m=s("code",null,"数字",-1),f=s("code",null,"数字字符串",-1),T=s("code",null,"[1]",-1),v=s("code",null,"['1']",-1),N=s("li",null,[i("其余情况转为"),s("code",null,"NaN")],-1),S=h("",2),j=s("code",null,"null",-1),U=s("code",null,"'123'",-1),M=s("code",null,"true",-1),q=s("code",null,"false",-1),J=s("code",null,"'124a'",-1),x=s("code",null,"undefined",-1),P=s("code",null,"Symbol",-1),I=s("strong",null,"抛出错误",-1),Q=h("",8),R=s("code",null,"666",-1),V=s("code",null,"true",-1),O=s("code",null,"false",-1),z=h("",2),Y=s("code",null,"[]",-1),w=s("code",null,"[2,'3']",-1),W=s("code",null,",",-1),X=h("",14),Z=h("",3),$=s("code",null,"null",-1),G=s("code",null,"undefined",-1),H=s("code",null,"null",-1),K=s("code",null,"undefined",-1),L=s("li",null,[s("code",null,"引用类型"),i("与"),s("code",null,"值类型"),i("进行比较,引用类型先转换为"),s("code",null,"值类型"),i("(调用[ToPrimitive])")],-1),ss=s("li",null,[s("code",null,"引用类型"),i("与"),s("code",null,"引用类型"),i("，直接判断是否指向同一对象")],-1),is=h("",8);function as(ls,ns,hs,ks,ts,ps){const a=e("font");return t(),p("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUU3JUIxJUJCJUU1JTlFJThCJUU4JUJEJUFDJUU2JThEJUEyJTIyJTJDJTIyc3RlcCUyMiUzQTI3JTdEJTJDJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMkphdmFTY3JpcHQlRTQlQjglQUQlRTclOUElODQlRTclQjElQkIlRTUlOUUlOEIlRTglQkQlQUMlRTYlOEQlQTIlRTglQTclODQlRTUlODglOTklMjIlMkMlMjJkYXRlJTIyJTNBMTU4NjgyMjQwMDAwMCUyQyUyMnRhZ3MlMjIlM0ElNUIlMjIlRTUlQTQlQTclRTUlODklOEQlRTclQUIlQUYlMjIlMkMlMjJqYXZhc2NyaXB0JTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiU1RCU3RA=="},[o,s("ul",null,[s("li",null,[y,i("， "),c,i("，"),F,i("，"),C,i("， "),u,i(" --> "),l(a,{color:"red"},{default:n(()=>[i("false")]),_:1})])]),_,s("ul",null,[s("li",null,[i("除上述值外的"),A,i("与"),D,i("都转为 --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("true")]),_:1})])]),B,s("ul",null,[s("li",null,[i("空数组转为0: "),b,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("0")]),_:1})]),s("li",null,[i("含有一个元素且为"),m,i("或"),f,i("则转换为数字："),T,i("或"),v,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("1")]),_:1})]),N]),S,s("ul",null,[s("li",null,[j,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("0")]),_:1})]),s("li",null,[U,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("123")]),_:1}),i(": 纯数字构成的字符串直接转换为应的数字")]),s("li",null,[M,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("1")]),_:1})]),s("li",null,[q,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("0")]),_:1})]),s("li",null,[J,i(" --> "),l(a,{color:"red"},{default:n(()=>[i("NaN")]),_:1})]),s("li",null,[x,i(" --> "),l(a,{color:"red"},{default:n(()=>[i("NaN")]),_:1})]),s("li",null,[P,i(" --> "),l(a,{color:"orange"},{default:n(()=>[I]),_:1})])]),Q,s("ul",null,[s("li",null,[i("数字直接转 "),s("ul",null,[s("li",null,[R,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("'666'")]),_:1}),i(":")])])]),s("li",null,[i("布尔值直接转换 "),s("ul",null,[s("li",null,[V,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("'true'")]),_:1})]),s("li",null,[O,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("'false'")]),_:1})])])])]),z,s("ul",null,[s("li",null,[i("数组 "),s("ul",null,[s("li",null,[Y,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("''")]),_:1}),i(" ：空数组转为空串")]),s("li",null,[w,i(" --> "),l(a,{color:"#3eaf7c"},{default:n(()=>[i("'2,3'")]),_:1}),i(" ：非空数组的每一项转为字符串再用"),W,i("分割")])])]),s("li",null,[i("对象: "),s("ul",null,[s("li",null,[i("{} --> "),l(a,{color:"red"},{default:n(()=>[i("[object Object]")]),_:1})]),s("li",null,[i("{a:1} --> "),l(a,{color:"red"},{default:n(()=>[i("[object Object]")]),_:1})])])])]),X,s("ol",null,[Z,s("li",null,[$,i(" 与 "),G,i("进行比较结果为"),l(a,{color:"#3eaf7c"},{default:n(()=>[i("true")]),_:1})]),s("li",null,[H,i(","),K,i("与其它任何类型进行比较结果都为"),l(a,{color:"red"},{default:n(()=>[i("false")]),_:1})]),L,ss]),is])}const ds=k(g,[["render",as]]);export{Es as __pageData,ds as default};
