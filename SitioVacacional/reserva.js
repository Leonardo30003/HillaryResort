function reservar() {
    var nombre = document.getElementById("nombre").value;
    var fechaInicio = document.getElementById("fecha-inicio").value;
    var fechaFin = document.getElementById("fecha-fin").value;
    var NumeroAdultos = document.getElementById("NumeroAdultos").value;
    var NumeroNiños = document.getElementById("NumeroNiños").value;
    
    if (nombre === "" || fechaInicio === "" || fechaFin === ""|| NumeroAdultos === ""||NumeroNiños === "") {
      alert("Por favor, complete todos los campos");
      return;
    }
    
    alert("Reserva realizada correctamente");
    
    document.getElementById("nombre").value = "";
    document.getElementById("fecha-inicio").value = "";
    document.getElementById("fecha-fin").value = "";
    document.getElementById("NumeroAdultos").value = "";
    document.getElementById("NumeroNiños").value = "";
  }
