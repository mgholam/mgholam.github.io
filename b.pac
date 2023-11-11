function FindProxyForURL(url, host) {
    if(host.endsWith(".ir")) return "DIRECT";
    if(host.includes("digikala.com")) return "DIRECT";
    if(host.includes("192.168.")) return "DIRECT";
    if(host.includes("localhost")) return "DIRECT";
    return 'SOCKS 127.0.0.1:2080";
}
