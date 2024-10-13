function x() {
  var i = 100;
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  console.log("namaste javascript");
}

x();
