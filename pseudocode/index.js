function deretAngka() {
  for (let i = 50; i <= 100; i += 5) {
    let predikat = "";
    if (i <= 60) {
      predikat = "KURANG";
    } else if (i <= 70) {
      predikat = "CUKUP";
    } else if (i <= 80) {
      predikat = "BAIK";
    } else {
      predikat = "LUAR BIASA";
    }
    console.log(i + " " + predikat);
  }
}
// deretAngka();

function fibonacci() {
  let fibonacci = [1, 1];

  for (let i = 2; i <= 19; i++) {
    let nextFibo = fibonacci[i - 2] + fibonacci[i - 1];
    fibonacci.push(nextFibo);
  }
  return fibonacci.join(" ");
}

// console.log(fibonacci());

function starIncrement(x) {
  let star = "";

  for (let i = 0; i < x; i++) {
    star += "*";
    console.log(star);
  }
}

// starIncrement(3);

function bilanganUang(money) {
  let result = [[[], ["Ribu"]], [[], ["Ratus"]], [[], ["Puluh"]], [[]]];
  let terbilang = "";
  money = money
    .toString()
    .split("")
    .map((number) => +number);
  let dictionaries = [
    [1, "Satu"],
    [2, "Dua"],
    [3, "Tiga"],
    [4, "Empat"],
    [5, "Lima"],
    [6, "Enam"],
    [7, "Tujuh"],
    [8, "Delapan"],
    [9, "Sembilan"],
  ];
  dictionaries.forEach((dictionary) => {
    money.forEach((pecahan, idx) => {
      if (dictionary.includes(pecahan)) {
        result[idx][0].push(dictionary[1]);
      }
    });
  });
  result = result.forEach((el, i) => {
    if (i == 3 && el[0][0] != undefined) {
      terbilang += `${el[0][0]}`;
    } else if (el[0][0] != undefined) {
      terbilang += `${el[0][0]} ${el[1][0]} `;
    }
  });
  return terbilang;
}

// condole.log(bilanganUang(8500));
