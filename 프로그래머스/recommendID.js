function solution(new_id) {
  let id = new_id.split("");
  id = step1(id);
  id = step2(id);
  id = step3(id);
  id = step4(id);
  id = step5(id);
  id = step6(id);
  id = step7(id);
  var answer = "";
  return answer;
}
//id 는 배열임
function step1(id) {
  const innerId = id.map((x) => x.toLowerCase());
  return innerId;
}
function step2(id) {
  const reg = /[^\w-._]/g;
  let str = id.join("");
  const tmpStr = str.replace(reg, "");
  return tmpStr.split("");
}
function step3(id) {
  let str = id.join("");
  const tmpStr = str.replace(/\.+/g, ".");
  return tmpStr.split("");
}
function step4(id) {
  console.log(id);
  if (id.at(0) === ".") {
    id.shift();
  }
  if (id.at(id.length - 1) === ".") {
    id.pop();
  }
  return id;
}
function step5(id) {
  if (id.length === 0) {
    return ["a"];
  } else return id;
}
function step6(id) {
  if (id.length >= 16) {
    const tmpId = id.slice(0, 15);
    if (tmpId.at(15) === ".") {
      tmpId.pop();
    }
    return tmpId;
  }
  return id;
}
function step7(id) {
  const innerId = id;
  if (innerId.length <= 2) {
    while (innerId.length != 3) {
      innerId.push(innerId[innerId.length - 1]);
    }
  }
  return innerId;
}

solution("...!@BaT#*..y.abcdefghijklm");
