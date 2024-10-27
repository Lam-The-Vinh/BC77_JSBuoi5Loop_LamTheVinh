// bài tập in số nguyên dương chẵn lẻ
const demSoChanLe = () => {
  let soChan = "";
  let soLe = "";
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
      soChan += i + " ";
    } else {
      soLe += i + " ";
    }
  }

  document.querySelector("#result").innerHTML = `<p>Số chẵn: ${soChan}</p>
    <p>Số lẻ: ${soLe}</p>`;
};

// bài tập Tính tổng các số chẵn từ 1 đến n
const tinhTong = () => {
  let n = +document.querySelector("#number").value;
  let tong = 0;
  for (let i = 1; i <= n; i++) tong += i;
  document.querySelector("#ketQua").innerHTML = `<p>Tổng: ${tong} </p>`;
};

// bài tập Có bao nhiêu số chia hết cho 3 từ 0-1000
const demChia3 = () => {
  let sochia3 = 0;
  for (i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
      sochia3++;
    }
  }
  document.querySelector(
    "#maySo"
  ).innerHTML = `<p>Số chia hết cho 3: ${sochia3} </p>`;
};

// bài tập Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div
// nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh
let in10Div = document.querySelector("#in10Div");
const inDiv = () => {
  for (i = 1; i <= 10; i++) {
    let newDiv = document.createElement("div");
    if (i % 2 === 0) {
      newDiv.className = "box even";
    } else {
      newDiv.className = "box odd";
    }
    in10Div.appendChild(newDiv);
  }
};

// bài tập Tìm số nguyên dương nhỏ nhất sao cho: 1+2+…+ n > 10000
const timSoNhoNhat = () => {
  let S = 0;
  for (i = 1; S < 10000; i++) {
    S += i;
  }
  document.querySelector("#soNhoNhat").innerHTML = `<p>Số nhỏ nhất: ${
    i - 1
  } </p>`;
};

// bài tập Viết chương trình nhập vào 2 số x, n, tính tổng: S(n)=x+x^2+x^3+…+x^n

function tinhLuyThua(x, n) {
  let S = 0;
  for (i = 1; i <= n; i++) {
    S += Math.pow(x, i);
  }
  return S;
}
const tinhTongHam = () => {
  let x = +document.querySelector("#x").value;
  let n = +document.querySelector("#n").value;
  if (n < 1) {
    document.querySelector(
      "#tongHam"
    ).innerHTML = `<p>Vui lòng nhập số dương</p>`;
  } else {
    let sum = tinhLuyThua(x, n);
    document.querySelector("#tongHam").innerHTML = `<p>Tổng: ${sum}`;
  }
};

// bài tập Nhập vào n. Tính giai thừa 1×2×…×n
function calculateGiaiThua(k) {
  let giaiThua = 1;
  for (i = 1; i <= k; i++) {
    giaiThua *= i;
  }
  return giaiThua;
}

const tinhGiaiThua = () => {
  let k = +document.querySelector("#k").value;
  if (k < 0) {
    document.querySelector(
      "#resultGiaiThua"
    ).innerHTML = `<p>vui lòng nhập số dương</p>`;
  } else {
    let ketQuaGiaiThua = calculateGiaiThua(k);
    document.querySelector(
      "#resultGiaiThua"
    ).innerHTML = `<p>Tổng: ${ketQuaGiaiThua}`;
  }
};

// bài tập Viết chương trình có một input, một button. Khi click vào button thì in ra các số nguyên từ 1 tới giá trị của
// input
const in1DenSoBatKi = () => {
  let m = +document.querySelector("#soBatKi").value;
  let daySoDaIn = document.querySelector("#daySoDaIn");
  if (m < 1) {
    daySoDaIn.innerHTML = `<p>vui lòng nhập số dương</p>`;
  } else {
    let daySo = "";
    for (i = 1; i <= m; i++) {
      daySo += i + " , ";
    }
    daySoDaIn.innerHTML = `<p>Dãy số từ 1 đến ${m}: ${daySo}</p>`;
  }
};
