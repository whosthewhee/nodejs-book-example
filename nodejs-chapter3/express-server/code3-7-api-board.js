const express = require("express");
const app = express();
let posts = []; //게시글 리스트로 사용할 배열 선언

app.use(express.json()); //`app.use()`를 사용해 json() 미들웨어를 등록
//=> req.body를 사용하기 위해 json() 미들웨어를 사용 (사용하지 않으면 undefined 반환)

app.use(express.urlencoded({ extended: true })); // urlencoded 형식의 데이터를 받기 위한 미들웨어 설정
//=>POST 요청 시 컨텐트 타입이 application/x-www-form-urlencoded인 경우 사용

app.get("/", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const { title, name, text } = req.body; //req.body에 담긴 데이터를 title, name, text에 저장

  //게시글 리스트에 새로운 게시글 정보 추가
  posts.push({ id: posts.length + 1, title, name, text, createDt: Date() }); //post 배열에 body를 추가
  res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id; //요청 URL에 포함된 id를 가져옴
  const filteredPosts = posts.filter((post) => post.id !== Number(id)); //id가 일치하지 않는 게시글만 남기고 posts 재할당
  const isLengthChanged = posts.length !== filteredPosts.length; //posts의 길이가 변경되었는지 확인
  posts = filteredPosts; //posts를 필터링한 결과로 재할당

  if (isLengthChanged) {
    res.json(`id: ${id} 게시글이 삭제되었습니다`);
    return;
  }
  res.json("삭제할 게시글이 없습니다");
});

app.listen(3007, () => {
  console.log("게시판 서버가 시작되었습니다");
});
