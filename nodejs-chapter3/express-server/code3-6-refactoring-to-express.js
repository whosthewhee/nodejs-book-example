const url = require("url");
const express = require("express");
const app = express();
const port = 3006;

app.listen(port, () => {
  console.log("익스프레스로 라우터 리팩터링하기");
  console.log(`START SERVER: use port ${port}`);
});

//urlMap 대신 app.get으로 라우팅
app.get("/", (_, res) => {
  res.end("Home");
});
app.get("/user", user);
app.get("/feed", feed);

//const 대신 function으로 변경 => 호이스팅 사용하기 위해 변경
function user(req, res) {
  const userInfo = url.parse(req.url, true).query;

  res.json(`[user] name : ${userInfo.name}, age : ${userInfo.age}`); //res.end 대신 res.json으로 변경 => charset=utf-8을 자동으로 설정
}

function feed(_, res) {
  // `_` => 사용하지않는 변수는 빼야하지만 함수 구조상 넣어야하는 경우 `_`로 대체
  res.json(`<ul>
          <li>picture1</li>
          <li>picture2</li>
          <li>picture3</li>
          </ul>`);
}

/*const urlMap = {
  "/": (req, res) => res.end("Home"),
  "/user": user,
  "/feed": feed,
};*/
