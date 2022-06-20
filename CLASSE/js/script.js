today = new Date()
document.write("La data di oggi: ", today.getDate(),"/",today.getMonth()+1,"/",(today.getFullYear()))


/*function onKey() {
  var d = document.getElementById("data").value
  var y = today.getFullYear();
  var r = y - d;
  document.getElementById("outdata").innerHTML = r
}*/

var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  var d = document.getElementById("data").value
  var y = today.getFullYear();
  var r = y - d;
  document.getElementById("outdata").innerHTML = r
});




function NewAl(){

  var test = document.getElementById("test");
  var testo = "";
  var nAlunni = document.getElementById("nAlunni").value

for (var i = 0; i < nAlunni ; i++) {
  testo += "<div class=\" Alunno \" id=\"al\"> <form  class=\"contact\"  method=\"post\"> <label > Cognome :</label> <input class=\"texti\" id=\"cognome\"  type=\"text\" name=\"\" value=\"\"> <label > Nome :</label><br> <input class=\"texti\" id=\"nome\" type=\"text\" name=\"\" value=\"\"> <label>Anno di nascita:</label> <input type=\"text\" class=\"texti\" name=\"mydatetime\" id=\"data\" placeholder=\"0000\" maxlength=\"4\" /> <input type=\"button\" value=\"calcola\"  id=\"btn\"  > </form> <p>La tue età è:</p> <p id=\"outdata\"></p> </div>";



}
test.innerHTML = testo;
}
