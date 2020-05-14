function buat_login(){
  var x = document.getElementById('X');
  x.parentElement.removeChild(x);

  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "SILAHKAN MENDAFTAR";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  var form = document.createElement("FORM");
  element.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);
  var input_nama = document.createElement("Input");
  input_nama.type = "text";
  input_nama.name = "nama";
  input_nama.className = "form_login";
  input_nama.placeholder = "Nama User..";
  form.appendChild(input_nama);

  var label2 = document.createElement("label");
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);
  var input_hp = document.createElement("Input");
  input_hp.type = "text";
  input_hp.name = "nohp";
  input_hp.className = "form_login";
  input_hp.placeholder = "Nomor Handphone.";
  form.appendChild(input_hp);

  var label3 = document.createElement("label");
  label3.innerHTML = "Username";
  form.appendChild(label3);
  var input_username = document.createElement("Input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Username atau email ..";
  form.appendChild(input_username);

  var label4 = document.createElement("label");
  label4.innerHTML = "Password";
  form.appendChild(label4);
  var input_password = document.createElement("Input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  input_password.placeholder = "Password ..";
  form.appendChild(input_password);

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  tombol.value = "DAFTAR SEKARANG";
  form.appendChild(tombol);

  var brk = document.createElement("br");
  form.appendChild(brk);
  var brk2 = document.createElement("br");
  form.appendChild(brk2);
  var brk3 = document.createElement("br");
  form.appendChild(brk3);
}
