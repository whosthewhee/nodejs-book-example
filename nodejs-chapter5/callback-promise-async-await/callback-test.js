const DB = [];

// 회원 가입 API 함수
function register(user) {
  return saveDB(user, function (user) {
    return sendEmail(user, function (user) {
      return getResult(user);
    });
  });
}

function saveDB(user, callback) {
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}

function sendEmail(user, callback) {
  console.log(`send email to ${user.email}`);
  return callback(user);
}

function getResult(user) {
  return `success register: ${user.name}`;
}

const result = register({
  email: "endy@test.com",
  password: "1234",
  name: "endy",
});
console.log(result);
