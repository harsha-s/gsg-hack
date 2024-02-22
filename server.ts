import { ledgers, retailers, user } from "./data";
import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
 
      if (pathname === '/user/detail') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(user));
        res.end();
      } else if (pathname === '/retailer/list') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(retailers));
        res.end();
      } else if (pathname === '/ledger/create') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Ledger Create');
        res.end();
      } else if (pathname === '/ledger/get') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(ledgers));
        res.end();
      } else if (pathname === '/user/dp') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Dp');
        res.end();
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
});


