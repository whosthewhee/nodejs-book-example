const http = require("http");
const url = require("url"); // url 모듈 로딩해 변수에 할당

http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    /*refactioring 전 코드1
    if (path === "/user") {
      user(req, res);0
    } else if (path === "/feed") {
      feed(req, res);
    } else {
      notFound(req, res);
    }*/

    /*책에서 나온 방법 */
    if (path in urlMap) {
      //urlMap[path](req, res); //refactioring 전 코드2
      try {
        urlMap[path](req, res);
      } catch (error) {
        console.log(error);
        serverError(req, res);
      }
    } else {
      notFound(req, res);
    }

    /*조건문 삼항연산자로 변경 */
    urlMap[path] ? urlMap[path](req, res) : notFound(req, res); //urlMap에 path값으로 매핑된 함수실행
  })
  .listen(3005, () => {
    console.log("라우터를 만들어보자!");
  });

const user = (req, res) => {
  const userInfo = url.parse(req.url, true).query; //쿼리스트링을 데이터를 userInfo에 할당
  res.end(`[user] name : ${userInfo.name}, age : ${userInfo.age}`); //결과값으로 이름과 나이 설정
};

const feed = (req, res) => {
  res.end(`<ul>
          <li>picture1</li>
          <li>picture2</li>
          <li>picture3</li>
          </ul>`);
};

const notFound = (req, res) => {
  res.statusCode = 404;
  res.end("404 page Not Found2");
};

const serverError = (req, res) => {
  res.statusCode = 500;
  res.end("500 Server Error");
};

const urlMap = {
  "/": (req, res) => res.end("Home"),
  "/user": user,
  "/feed": feed,
};
