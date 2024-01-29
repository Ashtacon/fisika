let title = document.getElementById("name");

let typewriter = new Typewriter(title, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("Kelompok 2")
  .pauseFor(300)
  .deleteChars(10)
  .typeString("Anggota Kelompok :")
  .pauseFor(500)
  .deleteChars(18)
  .typeString("Satria")
  .pauseFor(200)
  .deleteChars(6)
  .typeString("Ararya")
  .pauseFor(200)
  .deleteChars(6)
  .typeString("Adji")
  .pauseFor(200)
  .deleteChars(4)
  .typeString("Dzikri")
  .pauseFor(200)
  .deleteChars(6)
  .typeString("Rakan")
  .pauseFor(500)
  .start();
