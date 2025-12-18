import http from "http";

const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/user") {
    const user = {
      name: "Nafis",
      age: 21
    };

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(user));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
