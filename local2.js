const confirmationLink = document.getElementById("paymentlink");
document.addEventListener('DOMContentLoaded',function(){
  sdate = document.getElementById("currdate");
  stime = document.getElementById("t1");
  sdur = document.getElementById("d1");
  sslad = document.getElementById("slAD1");
  sslch = document.getElementById("slCH1");
  sfoad = document.getElementById("foAD1");
  sfoch = document.getElementById("foCH1");
  sinf = document.getElementById("inf1");
  stotal = document.getElementById("total");
  btnpur = document.getElementById("purchaseButton");
  sname = document.getElementById("Name");
  smobile = document.getElementById("mobile");
  semail = document.getElementById("email");
  sgen = document.getElementById("gender");
  
  function updateSummary(){
      sdate.innerText = localStorage.getItem('Date');
      stime.innerText = localStorage.getItem('Time');
      sdur.innerText = localStorage.getItem('Duration');
      sslad.innerText = localStorage.getItem('Slad');
      sslch.innerText = localStorage.getItem('Slch');
      sfoad.innerText = localStorage.getItem('Foad');
      sfoch.innerText = localStorage.getItem('Foch');
      sinf.innerText = localStorage.getItem('Inf');
      stotal.innerText = localStorage.getItem('Total');
  }
    });