function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sort(arr, arr2, arr3, func) {
  let result = [...arr];
  let result_name = [...arr2];
  let result_lastname = [...arr3];
  for (let j = 0; j < result.length; j++) {
    for (let i = 0; i < result.length - 1; i++) {
      if (func(result[i], result[i + 1])) {
        let buff = result[i];
        result[i] = result[i + 1];
        result[i + 1] = buff;
        let buff_name = result_name[i];
        result_name[i] = result_name[i + 1];
        result_name[i + 1] = buff_name;
        buff_name = result_lastname[i];
        result_lastname[i] = result_lastname[i + 1];
        result_lastname[i + 1] = buff_name;
      }
    }
  }
  for (let i = 0; i < result.length - 0; i++) {
    document.getElementById("num" + i + "").innerHTML = result[i];
    document.getElementById("" + i + "").innerHTML =
      result_name[i] +
      "\xa0\xa0\xa0\xa0" +
      result_lastname[i] +
      "\xa0\xa0\xa0\xa0";
    // document.getElementById(''+i+'').innerHTML+=result_name[i]+'\xa0\xa0\xa0\xa0';
    // document.getElementById(''+i+'').innerHTML+=result_lastname[i]+'\xa0\xa0\xa0\xa0';
  }
  return result, result_name, result_lastname;
}
function selectChanged(value) {
  switch (value) {
    case 1:
      sort(arr, arr2, arr3, function (A, B) {
        return A < B;
      });
      break;
    case 2:
      sort(arr, arr2, arr3, function (A, B) {
        return A > B;
      });
      break;
  }
}

let i = 0;
var responce = "";
var lastname_ = "";
var firstname_ = "";
var arr = [0, 1, 2, 3, 4, 5];
var arr2 = ["", "", "", "", "", "", ""];
var arr3 = ["", "", "", "", "", "", ""];

fetch("https://fakestoreapi.com/users?limit=7")
  .then((res) => res.json())
  .then((razm) => {
    responce = razm;
    responce.forEach((user) => {
      user.grade = getRandomInt(1, 6);

      firstname_ = JSON.stringify(user.name.firstname);
      lastname_ = JSON.stringify(user.name.lastname);
      arr2[i] = firstname_.replace(/^"(.+)"$/, "$1");
      arr3[i] = lastname_.replace(/^"(.+)"$/, "$1");

      arr[i] = user.grade;

      i++;
    });
  });
sort(arr, arr2, arr3, function (A, B) {
  return A > B;
});
setTimeout(sort, 1000, arr, arr2, arr3, function (A, B) {
  return A > B;
});
setTimeout(sort, 1000, arr, arr2, arr3, function (A, B) {
  return A < B;
});
