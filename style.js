function check_erro() {
  var input_class = document.querySelector(".container");
  var input_infor = input_class.querySelectorAll(".Infor_input");

  for (var i = 0; i < input_infor.length; i++) {
    if (input_infor[i].value == "") {
      input_infor[i].parentElement.querySelector(
        ".Infor_input"
      ).style.borderColor = "red";
    } else {
      input_infor[i].parentElement.querySelector(
        ".Infor_input"
      ).style.borderColor = "green";
    }
  }
}
var array = localStorage.getItem("thang")
  ? JSON.parse(localStorage.getItem("thang"))
  : [];
function save() {
  check_erro();
  var n_pro = document.getElementById("You_Name").value;
  var b_pro = document.getElementById("Id_pro").value;
  var c_pro = document.getElementById("Name_pro").value;
  var q_pro = document.getElementById("Quan_pro").value;
  var r_pro = document.getElementById("Pri_pro").value;

  var mang = {
    n: n_pro,
    b: b_pro,
    c: c_pro,
    q: q_pro,
    r: r_pro,
  };
  array.push(mang);
  localStorage.setItem("thang", JSON.stringify(array));
  Reset();
  //window.location.reload();
}

function Show() {
  var array = localStorage.getItem("thang")
    ? JSON.parse(localStorage.getItem("thang"))
    : [];
  table = `
        <tr>
            <th>Stt</th>
            <th>Tên KH</th>
            <th>Id_Spham</th>
            <th>Tên_Spham</th>
            <th>Số_lượng</th>
            <th>Giá_Spham</th>
            <th>Giảm Giá</th>
            <th>Tổng giá</th>
            <th>Tổng tiền</th>
            <th>Chọn </th>
        </tr>
        `;
  array.map((value, index) => {
    table += `
            <tr>
                <td>${index + 1}</td>
                <td>${value.n}</td>
                <td>${value.b}</td>
                <td>${value.c}</td>
                <td>${value.q}</td>
                <td>${value.r}</td>
                <td>${value.q * value.r * 1.5}</td>
                <td>${value.q * value.r}</td>
                <td>${value.q * value.r * 1.5 + value.r * value.r}</td>
                <td><button onclick="sua(${index})">Edit </button> 
                <td><button onclick="xoa(${index})">Xoa </button> 
            </tr>
            `;

    document.getElementById("table").innerHTML = table;
  });
}

function Reset() {
  var n_pro = (document.getElementById("You_Name").value = "");
  var i_pro = (document.getElementById("Id_pro").value = "");
  var na_pro = (document.getElementById("Name_pro").value = "");
  var q_pro = (document.getElementById("Quan_pro").value = "");
  var p_pro = (document.getElementById("Pri_pro").value = "");
}
function sua(index) {
  var array = localStorage.getItem("thang")
    ? JSON.parse(localStorage.getItem("thang"))
    : [];
  var index = (document.getElementById("idex").value = index);
  document.getElementById("You_Name").value = array[index].n;
  document.getElementById("Id_pro").value = array[index].b;
  document.getElementById("Name_pro").value = array[index].c;
}

function check_erro() {
  var input_class = document.querySelector(".container");
  var input_infor = input_class.querySelectorAll(".Infor_input");

  for (var i = 0; i < input_infor.length; i++) {
    if (input_infor[i].value == "") {
      input_infor[i].parentElement.querySelector(
        ".Infor_input"
      ).style.borderColor = "red";
    } else {
      input_infor[i].parentElement.querySelector(
        ".Infor_input"
      ).style.borderColor = "green";
    }
  }
}
var array = localStorage.getItem("thang")
  ? JSON.parse(localStorage.getItem("thang"))
  : [];
function save() {
  check_erro();
  var n_pro = document.getElementById("You_Name").value;
  var b_pro = document.getElementById("Id_pro").value;
  var c_pro = document.getElementById("Name_pro").value;
  var q_pro = document.getElementById("Quan_pro").value;
  var r_pro = document.getElementById("Pri_pro").value;

  var mang = {
    n: n_pro,
    b: b_pro,
    c: c_pro,
    q: q_pro,
    r: r_pro,
  };
  array.push(mang);
  localStorage.setItem("thang", JSON.stringify(array));
  Reset();
  //window.location.reload();
}

function Show() {
  var array = localStorage.getItem("thang")
    ? JSON.parse(localStorage.getItem("thang"))
    : [];
  table = `
        <tr>
            <th>Stt</th>
            <th>Tên KH</th>
            <th>Id_Spham</th>
            <th>Tên_Spham</th>
            <th>Số_lượng</th>
            <th>Giá_Spham</th>
            <th>Giảm Giá</th>
            <th>Tổng giá</th>
            <th>Tổng tiền</th>
            <th>Chọn </th>
        </tr>
        `;
  array.map((value, index) => {
    table += `
            <tr>
                <td>${index + 1}</td>
                <td>${value.n}</td>
                <td>${value.b}</td>
                <td>${value.c}</td>
                <td>${value.q}</td>
                <td>${value.r}</td>
                <td>${value.q * value.r * 1.5}</td>
                <td>${value.q * value.r}</td>
                <td>${value.q * value.r * 1.5 + value.r * value.r}</td>
                <td><button onclick="sua(${index})">Edit </button> 
                <td><button onclick="xoa(${index})">Xoa </button> 
            </tr>
            `;

    document.getElementById("table").innerHTML = table;
  });
}

function Reset() {
  var n_pro = (document.getElementById("You_Name").value = "");
  var i_pro = (document.getElementById("Id_pro").value = "");
  var na_pro = (document.getElementById("Name_pro").value = "");
  var q_pro = (document.getElementById("Quan_pro").value = "");
  var p_pro = (document.getElementById("Pri_pro").value = "");
}
function sua(index) {
  var array = localStorage.getItem("thang")
    ? JSON.parse(localStorage.getItem("thang"))
    : [];
  var index = (document.getElementById("idex").value = index);
  document.getElementById("You_Name").value = array[index].n;
  document.getElementById("Id_pro").value = array[index].b;
  document.getElementById("Name_pro").value = array[index].c;
  document.getElementById("Quan_pro").value = array[index].q;
  document.getElementById("Pri_pro").value = array[index].r;
}
function them() {
  var array = localStorage.getItem("thang")
    ? JSON.parse(localStorage.getItem("thang"))
    : [];
  var inde = document.getElementById("idex").value;

  array[inde] = {
    n: document.getElementById("You_Name").value,
    b: document.getElementById("Id_pro").value,
    c: document.getElementById("Name_pro").value,
    q: document.getElementById("Quan_pro").value,
    r: document.getElementById("Pri_pro").value,
  };
  localStorage.setItem("thang", JSON.stringify(array));
  Show();
}

function xoa(index) {
  var array = localStorage.getItem("thang")
    ? JSON.parse(localStorage.getItem("thang"))
    : [];
  array.splice(index, 1);
  localStorage.setItem("thang", JSON.stringify(array));
  window.location.reload();
}
