document.getElementById('senddata').addEventListener('click', senddata);

full = document.getElementById('full');
email = document.getElementById('email');
phone = document.getElementById('phone');

// to remove placeholder when foucs it
$(function() {
    $('[placeholder]').focus(function() {
        $(this).attr('data-text', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).attr('data-text'));
    });
});
function senddata(e)
{
    e.preventDefault();
    valut = true;
    if(full.value == "")
    {
        valut = false;
        if(document.getElementById('fullempty').hidden == false)
        {
            document.getElementById('fullempty').style.visibility= 'visible';
        }
    }else{
        document.getElementById('fullempty').style.visibility= 'hidden';
    }
    if(email.value == "")
    {
        valut = false;
        if(document.getElementById('emailempty').hidden == false)
        {
            document.getElementById('emailempty').style.visibility= 'visible';
        }
    }else{
        document.getElementById('emailempty').style.visibility= 'hidden';
    }
    
    if(isNaN(phone.value) || phone.value == "")
    {
        valut = false;
        if(document.getElementById('phoneempty').hidden == false)
        {
            document.getElementById('phoneempty').style.visibility= 'visible';
        }
    }else{
        document.getElementById('phoneempty').style.visibility= 'hidden';
    }
    if(!inlineRadio2.checked && !inlineRadio1.checked)
    {
        valut = false;
        if(document.getElementById('genterempty').hidden == false)
        {
            document.getElementById('genterempty').style.visibility= 'visible';
        }
    }else{
        document.getElementById('genterempty').style.visibility= 'hidden';
    }

    if(valut)
    {
        document.querySelector(".success").style.display = "block";
        setTimeout(function(){ 
            document.querySelector(".success").style.display = "none";
         }, 3000);
        
    }
}