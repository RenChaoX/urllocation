import urlLocation from "./index";

const urlTestList = [
  {
    url: `http://127.0.0.1:31673/appservice/appContext?id=ifr-1_2#id_1`,
    test: {
      href: "http://127.0.0.1:31673/appservice/appContext?id=ifr-1_2#id_1",
      origin: "http://127.0.0.1:31673",
      protocol: "http:",
      host: "127.0.0.1:31673",
      hostname: "127.0.0.1",
      port: "31673",
      pathname: "/appservice/appContext",
      search: "?id=ifr-1_2",
      hash: "#id_1",
      hashSearch: "",
      hashPathName: "#id_1",
    },
  },
  {
    url: `http://127.0.0.1:31673`,
    test: {
      href: "http://127.0.0.1:31673",
      origin: "http://127.0.0.1:31673",
      protocol: "http:",
      host: "127.0.0.1:31673",
      hostname: "127.0.0.1",
      port: "31673",
      pathname: "",
      search: "",
      hash: "",
      hashSearch: "",
      hashPathName: "",
    },
  },
  {
    url: `http://127.0.0.1:31673/`,
    test: {
      href: "http://127.0.0.1:31673/",
      origin: "http://127.0.0.1:31673",
      protocol: "http:",
      host: "127.0.0.1:31673",
      hostname: "127.0.0.1",
      port: "31673",
      pathname: "/",
      search: "",
      hash: "",
      hashSearch: "",
      hashPathName: "",
    },
  },
  {
    url: `https://www.baidu.com`,
    test: {
      href: "https://www.baidu.com",
      origin: "https://www.baidu.com",
      protocol: "https:",
      host: "www.baidu.com",
      hostname: "www.baidu.com",
      port: "",
      pathname: "",
      search: "",
      hash: "",
      hashSearch: "",
      hashPathName: "",
    },
  },
  {
    url: `https://weread.qq.com/web/bookDetail/c5c32170813ab7177g0181ae`,
    test: {
      href: "https://weread.qq.com/web/bookDetail/c5c32170813ab7177g0181ae",
      origin: "https://weread.qq.com",
      protocol: "https:",
      host: "weread.qq.com",
      hostname: "weread.qq.com",
      port: "",
      pathname: "/web/bookDetail/c5c32170813ab7177g0181ae",
      search: "",
      hash: "",
      hashSearch: "",
      hashPathName: "",
    },
  },
  {
    url: `http://bds.17usoft.com/midway/#/track/dataquery`,
    test: {
      href: "http://bds.17usoft.com/midway/#/track/dataquery",
      origin: "http://bds.17usoft.com",
      protocol: "http:",
      host: "bds.17usoft.com",
      hostname: "bds.17usoft.com",
      port: "",
      pathname: "/midway/",
      search: "",
      hash: "#/track/dataquery",
      hashSearch: "",
      hashPathName: "#/track/dataquery",
    },
  },
  {
    url: `https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=68018901_2_oem_dg&wd=正则 pathname&oq=正则hostname&rsv_pq=f2193f1e000456f3&rsv_t=8e6cxLSllkRxszhajdO+nG5DbvEBQ9KG7is4yjjZ1g4XP1db8TH3VhDqeEjSHqsxbIIEAcwqkeQ&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_btype=t&inputT=1345&rsv_sug3=19&rsv_sug1=9&rsv_sug7=100&rsv_n=2&prefixsug=正则 pathname&rsp=0&rsv_sug4=3127`,
    test: {
      href: "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=68018901_2_oem_dg&wd=正则 pathname&oq=正则hostname&rsv_pq=f2193f1e000456f3&rsv_t=8e6cxLSllkRxszhajdO+nG5DbvEBQ9KG7is4yjjZ1g4XP1db8TH3VhDqeEjSHqsxbIIEAcwqkeQ&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_btype=t&inputT=1345&rsv_sug3=19&rsv_sug1=9&rsv_sug7=100&rsv_n=2&prefixsug=正则 pathname&rsp=0&rsv_sug4=3127",
      origin: "https://www.baidu.com",
      protocol: "https:",
      host: "www.baidu.com",
      hostname: "www.baidu.com",
      port: "",
      pathname: "/s",
      search:
        "?ie=utf-8&f=8&rsv_bp=1&tn=68018901_2_oem_dg&wd=正则 pathname&oq=正则hostname&rsv_pq=f2193f1e000456f3&rsv_t=8e6cxLSllkRxszhajdO+nG5DbvEBQ9KG7is4yjjZ1g4XP1db8TH3VhDqeEjSHqsxbIIEAcwqkeQ&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_btype=t&inputT=1345&rsv_sug3=19&rsv_sug1=9&rsv_sug7=100&rsv_n=2&prefixsug=正则 pathname&rsp=0&rsv_sug4=3127",
      hash: "",
      hashSearch: "",
      hashPathName: "",
    },
  },
  {// 出现#号，肯定是hash
    url: 'https://abc.com.cn/services/?q=#速度#/detail?a=1&b=2',
    test: {
      href: "https://abc.com.cn/services/?q=#速度#/detail?a=1&b=2",
      origin: "https://abc.com.cn",
      protocol: "https:",
      host: "abc.com.cn",
      hostname: "abc.com.cn",
      port: "",
      pathname: "/services/",
      search: "?q=",
      hash: "#速度#/detail?a=1&b=2",
      hashSearch: "?a=1&b=2",
      hashPathName: "#速度#/detail",
    }
  },
  {
    url: "https://wx.17u.cn/busminatest/?m=11&refid=123456&oid=oatgX0b5k8hpwQh94y9yXoNmmBDY&uid=ohmdTt_A09SOWZiE9TSayjyy__g0&useropenid=o8i9s5UETd3yKvsqtaR166k507GY&userunionid=&channelid=10167&t=1685437384153#/listFusion?startdatetime=2023-05-31&startname=%E8%8B%8F%E5%B7%9E&arrivename=%E5%8D%97%E4%BA%AC&startStation=&arriveStation=&depCId=1229&desCId=1227&fromHome=1",
    test: {
      href: "https://wx.17u.cn/busminatest/?m=11&refid=123456&oid=oatgX0b5k8hpwQh94y9yXoNmmBDY&uid=ohmdTt_A09SOWZiE9TSayjyy__g0&useropenid=o8i9s5UETd3yKvsqtaR166k507GY&userunionid=&channelid=10167&t=1685437384153#/listFusion?startdatetime=2023-05-31&startname=%E8%8B%8F%E5%B7%9E&arrivename=%E5%8D%97%E4%BA%AC&startStation=&arriveStation=&depCId=1229&desCId=1227&fromHome=1",
      origin: "https://wx.17u.cn",
      protocol: "https:",
      host: "wx.17u.cn",
      hostname: "wx.17u.cn",
      port: "",
      pathname: "/busminatest/",
      search: "?m=11&refid=123456&oid=oatgX0b5k8hpwQh94y9yXoNmmBDY&uid=ohmdTt_A09SOWZiE9TSayjyy__g0&useropenid=o8i9s5UETd3yKvsqtaR166k507GY&userunionid=&channelid=10167&t=1685437384153",
      hash: "#/listFusion?startdatetime=2023-05-31&startname=%E8%8B%8F%E5%B7%9E&arrivename=%E5%8D%97%E4%BA%AC&startStation=&arriveStation=&depCId=1229&desCId=1227&fromHome=1",
      hashSearch: "?startdatetime=2023-05-31&startname=%E8%8B%8F%E5%B7%9E&arrivename=%E5%8D%97%E4%BA%AC&startStation=&arriveStation=&depCId=1229&desCId=1227&fromHome=1",
      hashPathName: "#/listFusion",
    }
  }
];

describe("test urlLocation", function () {
  for (const item of urlTestList) {
    it(`test ${item.url}`, function () {
      // console.time(item.url)
      let res = urlLocation(item.url);
      // console.timeEnd(item.url)

      expect(res).toEqual(item.test);
    });
  }
});
