const originReg = /^(http[s]{0,1}:\/\/?([^/]*))/,
  protocolReg = /^(http[s]{0,1}:)/,
  portReg = /:(\d+)/,
  hostReg = /^http[s]{0,1}:\/\/?([^/]*)/,
  hostnameReg = /^http[s]{0,1}:\/\/?([^/|:]*)/,
  hashReg = /(#.*)/,
  searchReg = /(\?.*)/

const getValue = (url, reg) => {
  let data = url.match(reg)

  return data && data[1] || ''
}

/**
 * url地址解析
 * @param {string} url
 */
export default (url) => {
  const origin = getValue(url, originReg),
    protocol = getValue(url, protocolReg),
    port = getValue(url, portReg),
    host = getValue(url, hostReg),
    hostname = getValue(url, hostnameReg),
    hash = getValue(url, hashReg),
    search = getValue(url.replace(hash && `${hash}` || '', ''), searchReg),
    pathname = url.replace(origin, '').replace(search, '').replace(hash, ''),
    hashSearch = getValue(hash, searchReg),
    hashPathName = hash.replace(hashSearch, '')

  return {
    href: url, origin, protocol, port, host, hostname, hash, search, pathname, hashSearch, hashPathName
  }
}
