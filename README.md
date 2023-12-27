# urlLocation

> 按照 BOM 的 window.location 解析 url 地址

```javascript
import urlLocation from "https://deno.land/x/urllocation/mod.ts";

let url =
  "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=68018901_2_oem_dg&wd=正则 pathname&oq=正则hostname&rsv_pq=f2193f1e000456f3&rsv_t=8e6cxLSllkRxszhajdO+nG5DbvEBQ9KG7is4yjjZ1g4XP1db8TH3VhDqeEjSHqsxbIIEAcwqkeQ&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_btype=t&inputT=1345&rsv_sug3=19&rsv_sug1=9&rsv_sug7=100&rsv_n=2&prefixsug=正则 pathname&rsp=0&rsv_sug4=3127";

console.log(urlLocation(url));

/*
{
  href: "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=68018901_2_oem_dg&wd=正则 pathname&oq=正则hostname&rsv_pq=f2193f1e000456f3&rsv_t=8e6cxLSllkRxszhajdO+nG5DbvEBQ9KG7is4yjjZ1g4XP1db8TH3VhDqeEjSHqsxbIIEAcwqkeQ&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_btype=t&inputT=1345&rsv_sug3=19&rsv_sug1=9&rsv_sug7=100&rsv_n=2&prefixsug=正则 pathname&rsp=0&rsv_sug4=3127",
  origin: "https://www.baidu.com",
  protocol: "https:",
  host: "www.baidu.com",
  hostname: "www.baidu.com",
  port: "",
  pathname: "/s",
  search:
    "?ie=utf-8&f=8&rsv_bp=1&tn=68018901_2_oem_dg&wd=正则 pathname&oq=正则hostname&rsv_pq=f2193f1e000456f3&rsv_t=8e6cxLSllkRxszhajdO+nG5DbvEBQ9KG7is4yjjZ1g4XP1db8TH3VhDqeEjSHqsxbIIEAcwqkeQ&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_btype=t&inputT=1345&rsv_sug3=19&rsv_sug1=9&rsv_sug7=100&rsv_n=2&prefixsug=正则 pathname&rsp=0&rsv_sug4=3127",
  hash: ""
}
*/
```
