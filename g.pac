function FindProxyForURL(url, host) {
    if(host.endsWith(".ir")) return "DIRECT";
    if(host.includes("digikala.com")) return "DIRECT";
    return 'HTTPS de.theepicbrowser.com:8888; HTTPS de2.theepicbrowser.com:8888';
}
