const DB = [];

function saveDB(user) {
  const oldDBsize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    //callback 대신 Promise 객체를 반환
    if (DB.length > oldDBsize) {
      resolve(user);
    } else {
      reject(new Error("DB에 저장 실패"));
    }
  });
}

function sendEmail(user) {
  console.log(`send email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user).then(sendEmail).then(getResult);
  console.log(result);
  return result;
}

const myUser = {
  email: "endy@test.com",
  password: "1234",
  name: "endy",
};
// 5.3 예제 내용 주석 처리
// const result = registerByPromise(myUser);
// result.then(console.log);

//5.3.1 Promise.all
allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
allResult.then(console.log);
