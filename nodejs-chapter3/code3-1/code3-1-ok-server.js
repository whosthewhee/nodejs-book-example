const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain"); //요청/응답에 대한 부가정보를 header에 추가
  res.end("OK"); //"OK"를 응답하고 종료
});

server.listen(3002, () => console.log("OK 서버 시작!")); //3000번 포트로 서버를 시작
