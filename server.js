import { createServer } from "http";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const host = req.headers.host;
    const proto = req.headers["x-forwarded-proto"] || "http";

    if (!host.startsWith("www.")) {
      const redirectUrl = `https://www.${host}${req.url}`;
      res.writeHead(301, { Location: redirectUrl });
      res.end();
      return;
    }

    if (!dev && proto !== "https") {
      const redirectUrl = `https://${host}${req.url}`;
      res.writeHead(301, { Location: redirectUrl });
      res.end();
      return;
    }

    handle(req, res);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
