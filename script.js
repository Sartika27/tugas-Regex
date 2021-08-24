 <script>
      document.getElementById("pencetb").addEventListener("click", cekNumber);

      function cekNumber() {
        let inputNumber = document.getElementById("nomor").value;

        let checkAngka = /^\d{9,11}$/.test(inputNumber);
        checkAngka ? alert(true) : alert(false);
      }

      document.getElementById("pencet3c").addEventListener("click", cekKeyword);

      function cekKeyword() {
        let inputKeyword = document.getElementById("keyword").value;

        let pencarian =
          /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/.test(
            inputKeyword
          );
        pencarian ? alert("Keyword Benar") : alert("Keyword Salah");
      }

         let btn = document.getElementById("penceta");
      let inputKata = document.getElementById("inputCapital");
      let printHasil = document.getElementById("hasil");

      btn.onclick = function () {
        cekCapital(inputKata.value);
      };

      function cekCapital(inputKata) {
        let hasil = /^[A-Z]/.test(inputKata);
        hasil
          ? (printHasil.innerHTML = "Huruf pertama adalah huruf besar")
          : (printHasil.innerHTML = "Huruf pertama adalah huruf kecil");
      }
    </script>