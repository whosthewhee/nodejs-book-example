const express = require("express"); // express 모듈을 불러오기
const app = express(); // express를 초기화 후 app에 할당
const port = 3006; // 포트 번호를 3006으로 설정

app.get("/", (req, res) => {
  // 루트 경로에 대한 요청이 오면
  res.set({ "Content-Type": "text/html; charset = utf-8" }); // 헤더값 설정
  res.end("Hello Express!"); // Hello Express!를 반환
});

app.listen(port, () => {
  //서버를 기동해 클라이언트 요청을 기다림
  console.log(`START SERVER: use port ${port}`);
});
