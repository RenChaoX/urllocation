!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).urlLocation=t()}(this,(function(){"use strict";const e=/^(http[s]{0,1}:\/\/?([^/]*))/,t=/^(http[s]{0,1}:)/,o=/:(\d+)/,n=/^http[s]{0,1}:\/\/?([^/]*)/,h=/^http[s]{0,1}:\/\/?([^/|:]*)/,r=/(#.*)/,a=/(\?.*)/,s=(e,t)=>{let o=e.match(t);return o&&o[1]||""};return p=>{const c=s(p,e),i=s(p,t),l=s(p,o),f=s(p,n),u=s(p,h),d=s(p,r),m=s(p.replace(d&&`${d}`||"",""),a),y=p.replace(c,"").replace(m,"").replace(d,""),b=s(d,a),g=d.replace(b,"");return{href:p,origin:c,protocol:i,port:l,host:f,hostname:u,hash:d,search:m,pathname:y,hashSearch:b,hashPathName:g}}}));