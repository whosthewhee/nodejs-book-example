const http = require("http"); //http 모듈을 불러와 http 변수에 할당
let count = 0;
const server = http.createServer((req, res) => {
  //서버 인스턴스를 생성하고 요청(req)과 응답(res)을 처리하는 콜백함수를 전달
  log(count);
  res.statusCode = 200; //요청에 대한 상태코드 200으로 설정(200 : 요청 처리 성공)
  res.setHeader("Content-Type", "text/plain"); //요청/응답에 대한 부가정보를 header에 추가
  res.write("Hello\n");
  setTimeout(() => {
    //2초 후 "Node.js" 응답값 주고 http 커넥션 종료
    res.end("Node.js\n");
  }, 2000);
});

function log(count) {
  console.log((count += 1));
}

server.listen(8000, () => {
  //사용할 포트번호 8000으로 지정, (IP생략했으므로 기본값인 localhost/127.0.0.1로 서버에 접근 가능)
  //console.log("Server is running...");
  console.log("Hello Node.js");
});
