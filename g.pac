function FindProxyForURL(url, host) {
    if(host.endsWith(".ir")) return "DIRECT";
    if(host.includes("digikala.com")) return "DIRECT";
    if(host.includes("google.com")) return "DIRECT";
    if(host.includes("192.168.")) return "DIRECT";
    return 'HTTPS de2.theepicbrowser.com:8888";//; HTTPS de2.theepicbrowser.com:8888';
}
