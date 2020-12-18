(function(){/*
 Copyright 2020 Andrew Sayers <andrew-github.com@pileofstuff.org>

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use, copy,
 modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
function aa(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var ba="function"==typeof Object.create?Object.create:function(a){function c(){}c.prototype=a;return new c},u="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,d){if(a==Array.prototype||a==Object.prototype)return a;a[c]=d.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");}var ha=ca(this);function y(a,c){if(c)a:{for(var d=ha,e=a.split("."),l=0;l<e.length-1;l++){var f=e[l];if(!(f in d))break a;d=d[f]}e=e[e.length-1];l=d[e];f=c(l);f!=l&&null!=f&&u(d,e,{configurable:!0,writable:!0,value:f})}}var E;
if("function"==typeof Object.setPrototypeOf)E=Object.setPrototypeOf;else{var J;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;J=ja.a;break a}catch(a){}J=!1}E=J?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var ka=E;
function K(a,c){a.prototype=ba(c.prototype);a.prototype.constructor=a;if(ka)ka(a,c);else for(var d in c)if("prototype"!=d)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(c,d);e&&Object.defineProperty(a,d,e)}else a[d]=c[d];a.D=c.prototype}
y("Symbol",function(a){function c(l){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new d("jscomp_symbol_"+(l||"")+"_"+e++,l)}function d(l,f){this.i=l;u(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;d.prototype.toString=function(){return this.i};var e=0;return c});
y("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<c.length;d++){var e=ha[c[d]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&u(e.prototype,a,{configurable:!0,writable:!0,value:function(){return la(aa(this))}})}return a});function la(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function na(a,c){a instanceof String&&(a+="");var d=0,e=!1,l={next:function(){if(!e&&d<a.length){var f=d++;return{value:c(f,a[f]),done:!1}}e=!0;return{done:!0,value:void 0}}};l[Symbol.iterator]=function(){return l};return l}y("Array.prototype.keys",function(a){return a?a:function(){return na(this,function(c){return c})}});
var oa="function"==typeof Object.assign?Object.assign:function(a,c){for(var d=1;d<arguments.length;d++){var e=arguments[d];if(e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l])}return a};y("Object.assign",function(a){return a||oa});
y("Array.from",function(a){return a?a:function(c,d,e){d=null!=d?d:function(g){return g};var l=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&c[Symbol.iterator];if("function"==typeof f){c=f.call(c);for(var m=0;!(f=c.next()).done;)l.push(d.call(e,f.value,m++))}else for(f=c.length,m=0;m<f;m++)l.push(d.call(e,c[m],m));return l}});y("Object.values",function(a){return a?a:function(c){var d=[],e;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&d.push(c[e]);return d}});
y("Array.prototype.find",function(a){return a?a:function(c,d){a:{var e=this;e instanceof String&&(e=String(e));for(var l=e.length,f=0;f<l;f++){var m=e[f];if(c.call(d,m,f,e)){e=m;break a}}e=void 0}return e}});var L={},P=[];function U(a,c){c&&(this.i=c)}U.file_format=function(){return"DiaryBase"};U.prototype.merge=function(){return this};U.prototype.to=function(a){switch(a){case this.file_format():return this;case "url":return"sleep-diary="+encodeURIComponent(JSON.stringify({file_format:this.file_format(),contents:this}));default:if(L.hasOwnProperty(a))return new L[a](this.to("Standard"));throw Error(this.file_format()+" cannot be converted to "+a);}};function V(a,c){return a.i?a.i(c):c}
function pa(a){P.push(a);"/"==a.url[0]&&(a.url="."+a.url);"Standard"!=a.name&&(L[a.name]=a.constructor)}function W(a){throw Error("Does not appear to be a valid "+a.file_format()+" file");}function qa(a,c){c=c.contents;if(a.file_format()==c.file_format)Object.keys(c.contents).forEach(function(d){return a[d]=c.contents[d]});else throw null;}U.zero_pad=function(a,c){var d="";if(a)for(var e=Math.pow(10,(c||2)-1);e>a;e/=10)d+="0";else for(e=1;e<(c||2);++e)d+="0";return d+a};
U.parse_xml=function(a){try{var c=window.DOMParser;if(!c)throw"";}catch(d){c=require("xmldom").DOMParser}return(new c).parseFromString(a,"application/xml")};U.unique=function(a,c,d){var e={};a.forEach(function(l){return e[d(l)]=1});return c.filter(function(l){return!e.hasOwnProperty(d(l))})};U.escape_xml=function(a){return a.replace(/[&<>"']/g,function(c){return"&#"+c.charCodeAt(0)+";"})};
U.date=function(a,c){try{var d=window.tc;if(!d)throw"";}catch(e){d=require("timezonecomplete")}return new d.DateTime(a,c?d.zone(c):void 0)};
function ra(a,c){var d=Error("This does not appear to be a sleep diary"),e=a.file_format;"string"==typeof a?a={file_format:function(){return"string"},contents:a}:e&&(a=Object.assign({},a),e&&"string"==typeof e?a.file_format=function(){return e}:e=e(),"url"==e&&(a.contents=JSON.parse(decodeURIComponent(a.contents.substr(12)))));for(var l=0;l!=P.length;++l)try{return new P[l].constructor(a,c)}catch(f){f&&(d=f)}throw d;}
function sa(a,c){this.success_callback=a||function(){};this.error_callback=c||function(){};var d=this;var e=setInterval(function(){window.tc&&(window.addEventListener("hashchange",function(){return location.hash.replace(/(^|[?&])(sleep-diary=[^&]*)/g,function(l,f){return d.load({file_format:"url",contents:f},"hashchange")})},!1),location.hash.replace(/(^#|[?&])(sleep-diary=[^&]*)/g,function(l,f,m){return d.load({file_format:"url",contents:m},"hash")}),clearInterval(e))},100);try{[[window.JSZip,"https://cdn.jsdelivr.net/npm/jszip-sync@3.2.1-sync/dist/jszip.min.js"],
[window.tc,"https://cdn.jsdelivr.net/npm/tzdata@1.0.22/tzdata.js","https://cdn.jsdelivr.net/npm/timezonecomplete@5.11.2/dist/timezonecomplete.min.js"]].forEach(function(l){l[0]||l.slice(1).forEach(function(f){var m=document.createElement("script");m.src=f;document.head.appendChild(m)})})}catch(l){}}
sa.prototype.load=function(a,c){var d=this;c||(c=a);a.target&&a.target.files&&(a=a.target.files);if(a.length)Array.from(a).forEach(function(l){var f=new FileReader,m=new window.JSZip;f.onload=function(){m.loadAsync(f.result).then(function(g){function k(){p.length?g.file(p[0]).async("string").then(function(w){r[p[0]]=w;p.shift();k()}):d.load({file_format:"archive",contents:r},c)}var r={},p=Object.keys(g.files);k()},function(){f.onload=function(){return d.load({file_format:"string",contents:f.result},
c)};f.readAsText(l)})};f.readAsBinaryString(l)});else{try{var e=window.new_sleep_diary(a,function(l){switch(l.file_format()){case "string":return btoa(l.contents);case "archive":var f=new window.JSZip;return f.sync(function(){Object.keys(l.contents).forEach(function(g){return f.file(g,l.contents[g])});var m;f.generateAsync({type:"base64",compression:"DEFLATE"}).then(function(g){return m=g});return m});default:throw Error("Unsupported output format: "+l.file_format());}})}catch(l){throw this.error_callback(a,
c),l;}e?this.success_callback(e,c):this.error_callback(a,c)}};"undefined"!==typeof module&&module.exports?module.exports={new_sleep_diary:ra,sleep_diary_formats:P,DiaryLoader:sa}:(window.new_sleep_diary=ra,window.sleep_diary_formats=P,window.DiaryLoader=sa);function X(a,c){c&&(this.i=c);a.records&&!a.file_format&&(a={file_format:function(){return"Standard"},contents:a});switch(a.file_format()){case "url":return qa(this,a);case "archive":throw null;case "string":if(a={file_format:function(){return"Standard"},contents:JSON.parse(a.contents)},"Standard"!=a.contents.file_format)throw null;default:var d=a.contents;if("Standard"==a.file_format()&&null!==d&&"object"==typeof d&&Array.isArray(d.records)){this.records=d.records;this.minimum_day_duration=d.minimum_day_duration||
72E6;this.maximum_day_duration=d.maximum_day_duration||2*this.minimum_day_duration;var e=0,l=0,f={status:"",day_number:-1},m=[],g=f,k=this.minimum_day_duration,r=this.maximum_day_duration;d.records.sort(function(p,w){return p.start-w.start||p.end-w.end}).forEach(function(p){p.hasOwnProperty("duration")||(p.duration=p.end-p.start,isNaN(p.duration)&&(p.duration=null));p.hasOwnProperty("start_of_new_day")?p.start_of_new_day&&(e=p.start):p.start_of_new_day="asleep"==p.status&&p.start>e+k;p.hasOwnProperty("day_number")?
l=p.day_number:(p.start_of_new_day&&(l=p.start>e+r?l+2:l+1,e=p.start),p.day_number=l);if("awake"==p.status||"asleep"==p.status)g.hasOwnProperty("missing_record_after")||(g.missing_record_after=p.status==g.status),g=p;"asleep"==p.status&&(m[p.day_number]||{duration:0}).duration<p.duration&&(m[p.day_number]=p);f=p});m.forEach(function(p){p&&!p.hasOwnProperty("is_primary_sleep")&&(p.is_primary_sleep=!0)})}else throw null;}}K(X,U);
X.prototype.to=function(a){switch(a){case "output":return V(this,{file_format:function(){return"string"},contents:JSON.stringify(Object.assign({file_format:this.file_format()},this))});default:return U.prototype.to.call(this,a)}};X.prototype.merge=function(a){var c={};[this,a.to(this.file_format())].forEach(function(d){return d.records.forEach(function(e){return c[[e.start,e.end,e.status].join()]=e})});this.records=Object.values(c).sort(function(d,e){return d.start-e.start||d.end-e.end});return this};
X.prototype.file_format=function(){return"Standard"};
function ta(a){function c(p,w){return p+Math.pow(w-r,2)}function d(p,w){return p+w}var e=a.filter(function(p){return p}),l=e.length;if(!l)return null;var f=e.sort(function(p,w){return p-w}),m=f.slice(Math.round(.25*f.length),Math.round(.75*f.length)),g=e.reduce(d)/(l||1),k=m.reduce(d)/(m.length||1);a={average:g,mean:g,interquartile_mean:k,median:f[Math.floor(f.length/2)],interquartile_range:m[m.length-1]-m[0],durations:a,interquartile_durations:m};var r=g;a.standard_deviation=Math.sqrt(e.reduce(c,
0)/l);r=k;a.interquartile_standard_deviation=Math.sqrt(m.reduce(c,0)/m.length);return a}X.prototype.summarise_records=function(a){return ta((a?this.records.filter(a):this.records).map(function(c){return c.duration}))};X.prototype.summarise_days=function(a){var c=[];for((a?this.records.filter(a):this.records).forEach(function(e){if(c[e.day_number]||0<e.start)c[e.day_number]=e.start});c.length&&!c[0];)c.shift();a=[];for(var d=1;d<c.length;++d)c[d]&&c[d-1]&&(a[d-1]=c[d]-c[d-1]);return ta(a)};
X.prototype.latest_sleep_status=function(){for(var a=this.records.length-1;0<=a;--a){var c=this.records[a].status;if("awake"==c||"asleep"==c)return c}return""};pa({name:"Standard",constructor:X,title:"Standardised diary format",url:"/src/Standard"});function Y(a,c){function d(b){return b.substr(1,b.length-2)}function e(b){return(new Date(b.substr(1,b.length-2))).getTime()}function l(b){var n=b.match(A);return{string:b,year:parseInt(n[1],10),month:parseInt(n[2],10),day:parseInt(n[3],10),hour:parseInt(n[4],10),minute:parseInt(n[5],10),offset:("-"==n[6]?-1:1)*(60*parseInt(n[7],10)+parseInt(n[8],10))}}function f(b,n){var h=U.date(b,n),t=h.offset();return{string:'"'+h.year()+"-"+U.zero_pad(h.month())+"-"+U.zero_pad(h.day())+" "+U.zero_pad(h.hour())+
":"+U.zero_pad(h.minute())+(0>t?"-":"+")+U.zero_pad(Math.abs(t),4)+'"',year:h.year(),month:h.month(),day:h.day(),hour:h.hour(),minute:h.minute(),offset:t}}function m(b){var n=[];if(""!=b){b=b.split("|");for(var h=0;h!=b.length;++h){var t=b[h].split("-");n.push({wake:parseInt(t[0],10),sleep:parseInt(t[1],10)})}}return n}function g(b){var n=[];if("NONE"!=b){b=b.split("|");for(var h=0;h!=b.length;++h){var t=b[h].split(":");n.push({type:t[0],mood:parseInt(t[1],10),themes:t.slice(2)})}}return n}function k(b){return"NONE"==
b?[]:b.split("|")}function r(b){b=b.match(Q);return{custom_aid_id:b[1],"class":b[2],name:d(b[3])}}function p(b){b=b.match(R);return{custom_hindrance_id:b[1],"class":b[2],name:d(b[3])}}function w(b){b=b.match(M);return{custom_tag_id:b[1],name:d(b[2])}}function da(b){b=b.match(N);var n=m(b[28]);return{start:e(b[19]),end:e(b[1]),duration:n.reduce(function(h,t){return h+t.sleep-t.wake},e(b[1])-e(b[10])),wake:l(b[1]),sleep:l(b[10]),bedtime:l(b[19]),holes:n,type:b[34],dreams:g(b[35]),aids:k(b[47]),hindrances:k(b[51]),
tags:k(b[55]),quality:parseInt(b[59],10),notes:d(b[60])}}function ea(b){var n=!0,h={o:[],s:[],u:[],v:[]};b=b.split("\n");for(var t=0;t!=b.length;++t){var x=b[t];if(n){switch(x){case "custom_aid_id,class,name":var q=h.o;var C=Q;break;case "custom_hindrance_id,class,name":q=h.s;C=R;break;case "custom_tag_id,name":q=h.u;C=M;break;case "wake,sleep,bedtime,holes,type,dreams,aid,hindrances,tags,quality,notes":q=h.v;C=N;break;default:if(q)q[q.length-1]+="\n",--t;else return W(this)}n=!1}else if(""==b[t])n=
!0;else{for(;'"'!=x.substr(x.length-1);){if(++t==b.length)return W(this);x+="\n"+b[t]}if(C.test(x))q.push(x);else if(q.length)q[q.length-1]+="\n"+x;else return W(this)}}return h}c&&(this.i=c);var F="ALCOHOL AMBIEN AMBIEN_CR AROMATHERAPY BENADRYL CHAMOMILE CIRCADIN CPAP DOZILE EAR_PLUGS EXERCISE GABA IMOVANE LUNESTA MAGNESIUM MARIJUANA MEDITATION MELATONIN MILK MUSIC NYQUIL READING RESTAVIT ROZEREM SEX SOUND_MACHINE ST_JOHNS_WORT TV TYLENOL TYLENOL_PM UNISOM UNISOM2 VALERIAN ZIMOVANE".split(" "),G=
"ALARM_CLOCK ANGER ANXIETY ARGUMENT BABY_CRYING BATHROOM_BREAK TOO_BRIGHT BUNKMATE_SNORING CAFFEINE TOO_COLD DOG_BARKING FIRE_ANTS HEARTBURN TOO_HOT HUNGER LOUD_NEIGHBOR MIND_RACING PAIN PHONE_RANG RESTLESS_LEGS SCARY_MOVIE SICK SQUIRRELS_ON_ROOF STORM STRESS SUGAR VIDEO_GAME WIND".split(" "),H="ALONE BUNKMATE CAMPING COUCH GOING_FISHING HOTEL OUT_OF_TOWN PASSED_OUT_DRUNK SCHOOL_NIGHT SLEEP_TALKING SLEEP_WALKING SLEPT_AT_FRIENDS_PLACE SLEPT_IN_CAR WORK_NIGHT".split(" "),z=F.join("|")+"|CUSTOM_[0-9]*",
S=G.join("|")+"|CUSTOM_[0-9]*",T=H.join("|")+"|CUSTOM_[0-9]*",O={};[F,G,H].forEach(function(b,n){return b.forEach(function(h){return O[h]=n})});var Q=/^(CUSTOM_[0-9]*),(AIRWAY|BEVERAGE|DRUG|EXERTION|HERBAL|READING|RELAXATION|SENSORY_DEPRIVATION|SOUND),("(.|\n)*")$/,R=/^(CUSTOM_[0-9]*),(ENVIRONMENTAL|MENTAL|NOISE|OBLIGATION|PHYSICAL|STIMULANT),("(.|\n)*")$/,M=/^(CUSTOM_[0-9]*),("(.|\n)*")$/,N=new RegExp('^("([0-9][0-9]*)-([0-9][0-9]?)-([0-9][0-9]?) ([0-9][0-9]?):([0-9][0-9])?([-+])([0-9][0-9]*)([0-9][0-9])"),("([0-9][0-9]*)-([0-9][0-9]?)-([0-9][0-9]?) ([0-9][0-9]?):([0-9][0-9])?([-+])([0-9][0-9]*)([0-9][0-9])"),("([0-9][0-9]*)-([0-9][0-9]?)-([0-9][0-9]?) ([0-9][0-9]?):([0-9][0-9])?([-+])([0-9][0-9]*)([0-9][0-9])"),(|([1-9][0-9]*)-([1-9][0-9]*)(\\|([1-9][0-9]*)-([1-9][0-9]*))*),(NIGHT_SLEEP|NAP),(NONE|((UNKNOWN|GOOD|EROTIC|NEUTRAL|STRANGE|CREEPY|TROUBLING|NIGHTMARE):(-[1-5]|[0-5])(:(CHASE|COMPENSATORY|DAILY_LIFE|DEATH|EPIC|FALLING|FALSE_AWAKENING|FLYING|LUCID|MURDER|MUTUAL|NAKED_IN_PUBLIC|ORGASMIC|PHYSIOLOGICAL|PRECOGNITIVE|PROGRESSIVE|RECURRING|RELIGIOUS|SIGNAL|TEETH|TEST|MONEY))*)(\\|((UNKNOWN|GOOD|EROTIC|NEUTRAL|STRANGE|CREEPY|TROUBLING|NIGHTMARE):(-[1-5]|[0-5])(:(CHASE|COMPENSATORY|DAILY_LIFE|DEATH|EPIC|FALLING|FALSE_AWAKENING|FLYING|LUCID|MURDER|MUTUAL|NAKED_IN_PUBLIC|ORGASMIC|PHYSIOLOGICAL|PRECOGNITIVE|PROGRESSIVE|RECURRING|RELIGIOUS|SIGNAL|TEETH|TEST|MONEY))*))*),(NONE|('+
(z+")(\\|("+z+"))*),(NONE|(")+(S+")(\\|("+S+"))*),(NONE|(")+(T+")(\\|("+T+'))*),([0-9]|10),("(.|\n)*")$')),A=/"([0-9][0-9]*)-([0-9][0-9]?)-([0-9][0-9]?) ([0-9][0-9]?):([0-9][0-9])?([-+])([0-9][0-9]*)([0-9][0-9])"/;F=[];G=[];H=[];var D=[];switch(a.file_format()){case "url":return qa(this,a);case "string":if(-1==a.contents.search("wake,sleep,bedtime,holes,type,dreams,aid,hindrances,tags,quality,notes"))throw null;z=ea(a.contents);F=z.o.map(r);G=z.s.map(p);H=z.u.map(w);D=z.v.map(da);break;case "archive":throw null;
default:a.to("Standard").records.forEach(function(b){switch(b.status){case "asleep":var n=[[],[],[]],h=D[b.start]||[b.start,b.start_timezone];b.tags.forEach(function(t){O.hasOwnProperty(t)&&n[O[t]].push(t)});D.push({start:b.start,end:b.end,duration:b.duration,wake:f(b.end,b.end_timestamp),sleep:f(b.start,b.start_timestamp),bedtime:f(h[0],h[1]),holes:[],type:b.is_primary_sleep?"NIGHT_SLEEP":"NAP",dreams:[],aids:n[0],hindrances:n[1],tags:n[2],quality:5,notes:b.comments.join("; ")})}})}this.custom_aids=
F;this.custom_hindrances=G;this.custom_tags=H;this.records=D}K(Y,U);
Y.prototype.to=function(a){switch(a){case "output":var c="";this.custom_aids.length&&(c+="custom_aid_id,class,name\n",this.custom_aids.forEach(function(g){return c+=g.custom_aid_id+","+g["class"]+',"'+g.name+'"\n'}),c+="\n");this.custom_hindrances.length&&(c+="custom_hindrance_id,class,name\n",this.custom_hindrances.forEach(function(g){return c+=g.custom_hindrance_id+","+g["class"]+',"'+g.name+'"\n'}),c+="\n");this.custom_tags.length&&(c+="custom_tag_id,name\n",this.custom_tags.forEach(function(g){return c+=
g.custom_tag_id+',"'+g.name+'"\n'}),c+="\n");c+="wake,sleep,bedtime,holes,type,dreams,aid,hindrances,tags,quality,notes\n";this.records.forEach(function(g){return c+=[g.wake.string,g.sleep.string,g.bedtime.string,g.holes.map(function(k){return k.wake+"-"+k.C}).join("|"),g.type,g.dreams.map(function(k){return[k.type,k.mood].concat(k.themes).join(":")}).join("|")||"NONE",g.aids.join("|")||"NONE",g.hindrances.join("|")||"NONE",g.tags.join("|")||"NONE",g.quality,'"'+g.notes+'"'].join()+"\n"});return V(this,
{file_format:function(){return"string"},contents:c});case "Standard":var d=function(g){g=Math.round(g.offset/60);return 0>g?"Etc/GMT+"+Math.abs(g):0<g?"Etc/GMT-"+g:"Etc/GMT"},e={},l={},f={},m=[];this.custom_aids.forEach(function(g){return e[g.custom_aid_id]=g.name});this.custom_hindrances.forEach(function(g){return l[g.custom_hindrance_id]=g.name});this.custom_tags.forEach(function(g){return f[g.custom_tag_id]=g.name});this.records.forEach(function(g){var k=g.sleep;k=(new Date(k.string.substr(1,k.string.length-
2))).getTime();m.push({status:"in bed",start:g.start,end:k,start_timezone:d(g.bedtime),end_timezone:d(g.sleep)});var r=[];g.aids.forEach(function(p){return r.push(e[p]||p)});g.hindrances.forEach(function(p){return r.push(l[p]||p)});g.tags.forEach(function(p){return r.push(f[p]||p)});m.push({status:"asleep",start:k,end:g.end,duration:g.duration,start_timezone:d(g.sleep),end_timezone:d(g.wake),tags:r,comments:g.notes.length?[g.notes]:[],is_primary_sleep:"NIGHT_SLEEP"==g.type})});return new X({records:m});
default:return U.prototype.to.call(this,a)}};
Y.prototype.merge=function(a){var c=this,d={},e={},l={};a=a.to(this.file_format());this.custom_aids.length&&a.custom_aids.length?a.custom_aids.forEach(function(f){var m=c.custom_aids.find(function(k){return k["class"]==f["class"]&&k.name==f.name});if(!m){var g="CUSTOM_0001";for(m=2;c.custom_aids.some(function(k){return k.custom_aid_id==g});++m)g="CUSTOM_"+U.zero_pad(m,4);m={custom_aid_id:g,"class":f["class"],name:f.name};c.custom_aids.push(m)}d[f.custom_aid_id]=m.custom_aid_id}):a.custom_aids.forEach(function(f){return d[f.custom_aid_id]=
f.custom_aid_id});this.custom_hindrances.length&&a.custom_hindrances.length?a.custom_hindrances.forEach(function(f){var m=c.custom_hindrances.find(function(k){return k["class"]==f["class"]&&k.name==f.name});if(!m){var g="CUSTOM_0001";for(m=2;c.custom_hindrances.some(function(k){return k.custom_hindrance_id==g});++m)g="CUSTOM_"+U.zero_pad(m,4);m={custom_hindrance_id:g,"class":f["class"],name:f.name};c.custom_hindrances.push(m)}e[f.custom_hindrance_id]=m.custom_hindrance_id}):a.custom_hindrances.forEach(function(f){return e[f.custom_hindrance_id]=
f.custom_hindrance_id});this.custom_tags.length&&a.custom_tags.length?a.custom_tags.forEach(function(f){var m=c.custom_tags.find(function(k){return k.name==f.name});if(!m){var g="CUSTOM_0001";for(m=2;c.custom_tags.some(function(k){return k.custom_tag_id==g});++m)g="CUSTOM_"+U.zero_pad(m,4);m={custom_tag_id:g,name:f.name};c.custom_tags.push(m)}l[f.custom_tag_id]=m.custom_tag_id}):a.custom_tags.forEach(function(f){return l[f.custom_tag_id]=f.custom_tag_id});this.records=this.records.concat(U.unique(this.records,
a.records,function(f){return[f.wake.string,f.sleep.string,f.bedtime.string].join()}).map(function(f){return Object.assign({},f,{aids:f.aids.map(function(m){return d[m]||m}),hindrances:f.hindrances.map(function(m){return e[m]||m}),tags:f.tags.map(function(m){return l[m]||m})})})).sort(function(f,m){return f.wake-m.wake});return this};Y.prototype.file_format=function(){return"Sleepmeter"};pa({name:"Sleepmeter",constructor:Y,title:"Sleepmeter",url:"/src/Sleepmeter"});function Z(a,c){function d(b){return b.substr(1,b.length-2).replace(Q,'"').replace(R,"\n")}function e(b){var n=[];b.replace(T,function(h,t){3<t.length&&("_2x"==t.substr(t.length-3)?n.push({count:2,value:t.substr(0,t.length-3)}):"_3x"==t.substr(t.length-3)?n.push({count:3,value:t.substr(0,t.length-3)}):n.push({count:1,value:t}))});return n}function l(b){var n=b.match(G);return{string:b,year:parseInt(n[3],10),month:parseInt(n[2],10),day:parseInt(n[1],10),hour:parseInt(n[4],10),minute:parseInt(n[5],
10)}}function f(b,n){var h=U.date(b,n);return{string:'"'+U.zero_pad(h.day())+". "+U.zero_pad(h.month())+". "+h.year()+" "+h.hour()+":"+U.zero_pad(h.minute())+'"',year:h.year(),month:h.month(),day:h.day(),hour:h.hour(),minute:h.minute()}}function m(b,n){return n.some(function(h){return h==b})?null:k(b)}function g(b,n){return n.some(function(h){return h==b})?null:k(b)}function k(b){return parseFloat(b.substr(1,b.length-2))}function r(b,n){return n.some(function(h){return h==b})?null:d(b)}function p(b){var n=
{},h=U.parse_xml(b).documentElement;b=Array.from(h.getElementsByTagName("long"));var t=Array.from(h.getElementsByTagName("int")),x=Array.from(h.getElementsByTagName("boolean"));h=Array.from(h.getElementsByTagName("string"));b.forEach(function(q){return n[q.getAttribute("name")]=parseInt(q.getAttribute("value"),10)});t.forEach(function(q){return n[q.getAttribute("name")]=parseInt(q.getAttribute("value"),10)});x.forEach(function(q){return n[q.getAttribute("name")]="true"==q.getAttribute("value")});
h.forEach(function(q){return n[q.getAttribute("name")]=q.textContent});return n}function w(b){var n=[];b=b.split("\n");""==b[b.length-1]&&b.pop();for(var h={},t=0;t!=b.length;h={g:h.g,l:h.l,h:h.h,m:h.m,j:h.j},t+=2){var x=function(v){return function(B){return U.date(["year","month","day"].map(function(I){return U.zero_pad(B[I])}).join("-")+"T"+["hour","minute"].map(function(I){return U.zero_pad(B[I])}).join(":"),v.g.Tz).unixUtcMillis()}}(h),q=b[t].match(da);h.l=[];h.h=[];if(!q)return W(this);q[1].replace(H,
function(v){return function(B,I,fa){v.l.push({header_string:B,hours:parseInt(I,10),minutes:parseInt(fa,10),actigraphy:null,noise:null})}}(h));q[5].replace(/"Event"/g,function(v){return function(){v.h.push({label:null,timestamp:null,value:null})}}(h));q=b[t+1].match(ea);if(!q)return W(this);h.m=0;h.j=0;var C=d(q[27]);h.g={Id:d(q[1]),Tz:d(q[3]),From:l(q[5]),To:l(q[11]),Sched:l(q[17]),Hours:k(q[23]),Rating:k(q[25]),Comment:{string:C,tags:e(C),notags:C.replace(O,"")},Framerate:d(q[29]),Snore:m(q[31],
['"-1"']),Noise:g(q[32],['"-1.0"']),Cycles:m(q[34],['"-1"']),DeepSleep:g(q[35],['"-1.0"','"-2.0"']),LenAdjust:g(q[37],['"-1.0"']),Geo:r(q[39],[""]),times:h.l,events:h.h};h.g.start=parseInt(h.g.Id,10);h.g.end=h.g.start+36E5*h.g.Hours;h.g.duration=6E4*(60*h.g.Hours+("-1.0"==q[37]?0:h.g.LenAdjust));h.g.alarm=6E4*Math.round((h.g.end+x(h.g.Sched)-x(h.g.To))/6E4);q[40].replace(z,function(v){return function(B){v.l[v.m++].A=k(B)}}(h));q[43].replace(S,function(v){return function(B,I,fa,ua,ma){v.h[v.j].label=
I;v.h[v.j].timestamp=parseInt(fa,10);ma&&(v.h[v.j].value=parseFloat(ma));++v.j}}(h));if(x=b[t+2]?b[t+2].match(F):0)h.m=0,x[1].replace(z,function(v){return function(B){v.l[v.m++].B=k(B)}}(h)),++t;n.push(h.g)}return n}c&&(this.i=c);var da=/^Id,Tz,From,To,Sched,Hours,Rating,Comment,Framerate,Snore,Noise,Cycles,DeepSleep,LenAdjust,Geo((,"([0-9]*):([0-9]*)")*)((,"Event")*)$/,ea=/^("([^"]|"")*"),("([^"]|"")*"),("([0-9]*). ([0-9]*). ([0-9]*) ([0-9]*):([0-9]*)"),("([0-9]*). ([0-9]*). ([0-9]*) ([0-9]*):([0-9]*)"),("([0-9]*). ([0-9]*). ([0-9]*) ([0-9]*):([0-9]*)"),("[0-9]*(.[0-9]*)?"),("[0-9]*(.[0-9]*)?"),("([^"]|"")*"),("([^"]|"")*"),("-?[0-9]*"),("-?[0-9]*(.[0-9]*)?"),("-?[0-9]*"),("(-[12].0|0.[0-9]*|1.0)"),("-?[0-9]*(.[0-9]*)?"),("[0-9a-f]*")((,"-?[0-9]*(.[0-9]*)?")*)((,"([A-Z_]*)-([0-9]*)(-([-0-9E.]*))?")*)$/,
F=/^,,,,,,,,,,,,((,"-?[0-9]*(.[0-9]*)?")*)$/,G=/"([0-9]*). ([0-9]*). ([0-9]*) ([0-9]*):([0-9]*)"/,H=RegExp('"([0-9]*):([0-9]*)"',"g"),z=RegExp('"-?[0-9]*(.[0-9]*)?"',"g"),S=RegExp('"([A-Z_]*)-([0-9]*)(-([-0-9E.]*))?"',"g"),T=RegExp('#([^ ",][^ ",]*)',"g"),O=RegExp(' *#([^ ",][^ ",]*)',"g"),Q=RegExp('""',"g"),R=RegExp(" \\\\n ","g"),M={},N=[],A=a.contents;switch(a.file_format()){case "url":return qa(this,a);case "string":var D=w.call(this,A);break;case "archive":if(A.hasOwnProperty("sleep-export.csv")&&
A["prefs.xml"]&&A["alarms.json"]){D=w.call(this,A["sleep-export.csv"]);M=p(A["prefs.xml"]);N=JSON.parse(A["alarms.json"]);break}else throw null;default:D=a.to("Standard").records.filter(function(b){return"asleep"==b.status}).map(function(b){return{start:b.start,end:b.end,duration:b.duration,alarm:6E4*Math.round(b.end/6E4),Id:b.start.toString(),Tz:b.start_timezone||b.end_timezone||"Etc/GMT",From:f(b.start,b.start_timezone||b.end_timezone),To:f(b.end,b.end_timezone||b.start_timezone),Sched:f(b.end,
b.end_timezone||b.start_timezone),Hours:(b.end-b.start)/36E5,Rating:2.5,Comment:{string:b.comments.join("\n")+b.tags.map(function(n){return" #"+n}),tags:b.tags.map(function(n){return{count:1,value:n}}),notags:b.comments.join("\n")},Framerate:"10000",Snore:null,Noise:null,Cycles:null,DeepSleep:null,LenAdjust:null,Geo:"",times:[],events:[]}})}this.records=D;this.prefs=M;this.alarms=N}K(Z,U);
Z.prototype.to=function(a){var c=this;switch(a){case "output":var d=function(k,r){return'"'+(null===k?r:k)+'"'},e=["Id","Tz","From","To","Sched"],l=["Hours","Rating"],f="Framerate Snore Noise Cycles DeepSleep LenAdjust Geo".split(" ");a=JSON.stringify(this.alarms);var m="<?xml version='1.0' encoding='utf-8' standalone='yes' ?>\n<map>"+Object.keys(this.prefs).map(function(k){var r=c.prefs[k];switch(typeof r){case "boolean":return'\n\t<boolean name="'+k+'" value="'+r+'" />\n';case "number":return"\n\t<"+
(Math.abs(r)>=Math.pow(2,31)?"long":"int")+' name="'+k+'" value="'+r+'" />\n';default:return'\n\t<string name="'+k+'"><![CDATA['+r+"]]\x3e</string>\n"}}).join("")+"\n</map>\n",g=this.records.map(function(k){return[].concat(e,l,["Comment"],f).concat(k.times.map(function(r){return',"'+r.header_string+'"'})).concat(k.events.map(function(){return',"Event"'})).join(",")+"\n"+['"'+k.Id+'"','"'+k.Tz+'"'].concat().concat(["start","end","alarm"].map(function(r){r=U.date(k[r],k.Tz);return'"'+U.zero_pad(r.day())+
". "+U.zero_pad(r.month())+". "+r.year()+" "+r.hour()+":"+U.zero_pad(r.minute())+'"'})).concat(l.map(function(r){return'"'+k[r]+'"'})).concat(['"'+k.Comment.string.replace(/"/g,'""').replace(/\n/g," \\n ")+'"','"'+k.Framerate+'"',d(k.Snore,"-1"),d(k.Noise,"-1.0"),d(k.Cycles,"-1"),d(k.DeepSleep,"-1.0"),d(k.LenAdjust,"-1.0"),d(k.Geo,"")]).concat(k.times.map(function(r){return'"'+r.actigraphy+'"'})).concat(k.events.map(function(r){return'"'+r.label+"-"+r.timestamp+(r.hasOwnProperty("value")?"-"+r.value:
"")+'"'})).join(",")+"\n"+(k.times.length?",,,,,,,,,,,,,"+k.times.map(function(r){return'"'+r.noise+'"'}).join(",")+"\n":"")}).join("");return V(this,{file_format:function(){return"archive"},contents:{"sleep-export.csv":g,"prefs.xml":m,"alarms.json":a}});case "Standard":return new X({records:this.records.map(function(k){return{status:"asleep",start:k.start,end:k.end,start_timezone:k.Tz,end_timezone:k.Tz,tags:k.Comment.tags.map(function(r){return r.value}),comments:[k.Comment.notags]}})});default:return U.prototype.to.call(this,
a)}};Z.prototype.merge=function(a){a=a.to(this.file_format());this.records=this.records.concat(U.unique(this.records,a.records,function(c){return c.Id}));return this};Z.prototype.file_format=function(){return"SleepAsAndroid"};pa({name:"SleepAsAndroid",constructor:Z,title:"Sleep as Android",url:"/src/SleepAsAndroid"});}).call(this);
//# sourceMappingURL=sleep-diary-formats.js.map
