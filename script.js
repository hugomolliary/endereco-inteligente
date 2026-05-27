// Máscara automática no CEP
document.getElementById("cep").addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, ""); // remove não-dígitos
  valor = valor.replace(/^(\d{5})(\d)/, "$1-$2"); // aplica máscara
  this.value = valor;
});

// UF em maiúsculo automático
document.getElementById("uf").addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});

// Validação no submit
document.getElementById("formEndereco").addEventListener("submit", function (e) {
  e.preventDefault();

  const cep = document.getElementById("cep").value;
  const logradouro = document.getElementById("logradouro").value;
  const numero = document.getElementById("numero").value;
  const uf = document.getElementById("uf").value;

  // Valida CEP com regex (grupos de captura)
  const regexCep = /^(\d{5})-(\d{3})$/;
  if (!regexCep.test(cep)) {
    alert("CEP inválido. Use o formato 00000-000.");
    return;
  }

  // Valida Logradouro
  if (logradouro.trim().length < 5) {
    alert("Logradouro deve ter no mínimo 5 caracteres.");
    return;
  }

  // Valida Número
  const regexNumero = /^\d+$/;
  if (!regexNumero.test(numero)) {
    alert("Número deve conter apenas dígitos.");
    return;
  }

  // Valida UF
  const regexUF = /^[A-Z]{2}$/;
  if (!regexUF.test(uf)) {
    alert("UF inválida. Use 2 letras maiúsculas (ex: SP, RJ).");
    return;
  }

  alert("Endereço cadastrado com sucesso");
});