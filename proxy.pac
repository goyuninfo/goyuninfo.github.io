function FindProxyForURL(url, host)
{
	if (isInNet(host, "192.168.3.5", "255.255.255.0"))
        {
          return "SOCKS5 localhost:1080";
        }
	return "DIRECT; SOCKS5 localhost:1080";
}
