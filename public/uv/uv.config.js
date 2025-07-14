// This file overwrites the stock UV config.js

self.__uv$config = {
	prefix: "/uv/service/",
	bare: "https://r2fh2387hv2b2rfbiz.site"
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: "/uv/uv.handler.js",
	client: "/uv/uv.client.js",
	bundle: "/uv/uv.bundle.js",
	config: "/uv/uv.config.js",
	sw: "/uv/uv.sw.js",
};
