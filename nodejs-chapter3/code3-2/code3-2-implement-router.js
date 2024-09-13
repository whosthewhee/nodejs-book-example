const http = require("http");
const url = require("url"); // url 모듈 로딩해 변수에 할당

http
  .createServer((req, res) => {
    const path = url.parse(req.url).pathname; // url 모듈의 parse 메서드를 사용해 받아온 요청(req)에서pathname을 추출
    res.setHeader("Content-Type", "text/html");

    if (path === "/user") {
      res.end("[user] name : andy, age: 30");
    } else if (path === "/feed") {
      res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>`);
    } else {
      res.statusCode = 404;
      res.end("404 page Not Found");
    }
  })
  .listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
  });
