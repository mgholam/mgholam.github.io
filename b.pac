function FindProxyForURL(url, host) {
    if(host.endsWith(".ir")) return "DIRECT";
    if(host.includes("digikala.com")) return "DIRECT";
    if(host.includes("192.168.")) return "DIRECT";
    return 'SOCKS localhost:2080";
}
