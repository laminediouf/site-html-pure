/*function validate(form)
{
    fail=validate_prenom(form.nom.value)
    fail=validate_nom(form.prenom.value)
    fail=validate_email(form.email.value)
    fail=validate_radio(form.radio.value)
    fail=validate_mesage(form.mesage.value)

    if(fail=="")
    {
        return true;
    }
    else
    {
        alert(fail);
        return false;
    }
}

function validate_prenom(field)
{
    if(field=="")
    {
        alert( "Entrer un prenom\n");
    }
  return "";
}

function validate_nom(field)
{
    if(field=="")
    {
       alert( "Entrer un nom de famille\n");
    }

}

function validate_email(field)
{
    if(field=="")
    {
       alert("Entrer une adresse de courrier electronique.\n" );
    }
    else if(!((field.indexOf(".")>0) && (field.indexOf("@")>0)) || /[^a-zA-Z0-9.@_-]/.test(field))
    {
        alert("L'adresse de courrier electronique n'est pas valable.\n");
    }

}

function validate_radio(field)
{
    if(field=="")
    {
       alert( "Choisir une civilite\n");
    }
}

function validate_mesage(field)
{
    if(field=="")
    {
      alert("Veuillez saisir votre message\n");
    }
}

*/
/*
function ctrlChamps(form) {
        var champ1 = document.form.prenom.value;
        var champ2 = document.form.nom.value;
        var champ3 = document.form.email.value;
        var champ4 = document.form.radio.value;
        var champ5 = document.form.mesage.value;

        if ((champ1 == "") && (champ2 == "") && (champ3 == "") && (champ4 == "")(champ5 == "")) {
            alert("Merci de compléter correctement le formulaire.");
            return false;
        }
        else {
            return true;
        }
    }



 <html:form action="/FormCompareX" onsubmit="return ctrlChamps(); return validateFormCompareX(this);">*/
/*function validate(form)
{
    pr=validate_prenom(form.nom);
    nm=validate_nom(form.prenom);
    em=validate_email(form.email);
    rd=validate_radio(form.radio);
    ms=validate_mesage(form.mesage);

    if(pr && nm && em && rd && ms)
    {
        return true;
    }
    else
    {  alert(alertpr+ "/n" + alertnm+ "/n" + alertem+ "/n" +alertrd+ "/n" + alertmes+ "/n");

        return false;
    }
}

function validate_prenom(field)
{
    if(field=="")
    {
        alertpr= "Entrer un prenom\n";
        return false;
    }else
    {
        return true;
    }

}

function validate_nom(field)
{
    if(field=="")
    {
        alertnm= "Entrer un nom de famille\n";
        return false;
    }
    else
    {
        return true;
    }

}

function validate_email(field)
{
    if(field=="")
    {
        alertem="Entrer une adresse de courrier electronique.\n";
    }
    else if(!((field.indexOf(".")>0) && (field.indexOf("@")>0)) || /[^a-zA-Z0-9.@_-]/.test(field))
    {
        alert("L'adresse de courrier electronique n'est pas valable.\n");
    }

}

function validate_radio(field)
{
    if(field=="")
    {
        alertrd= "Choisir une civilite\n";
        return false;
    }
    else
    {
        return true;
    }
}

function validate_mesage(field)
{
    if(field=="")
    {
        alertmes="Veuillez saisir votre message\n";
        return false;
    }
    else
    {
        return true;
    }
}
*/
/*function validate()
{
    xpr=document.formulaire.prenom.value;
    xnm=document.formulaire.nom.value;
    xem=document.formulaire.email.value;
    xrd=document.formulaire.radio.value;
    xms=document.formulaire.mesage.value;

    if (xpr == "")
    {
        alert("Veuillez entrer votre prénom !");
        valid = false;
        return valid;
    }
    if (xnm == "" )
    {
        alert("Veuillez entrer votre nom !");
        valid = false;
        return valid;
    }

    if ( xem == "" )
    {
        alert("Veuillez entrer votre courriel !");
        valid = false;
        return valid;
    }

    if (xrd== "" )
    {
        alert("Veuillez entrer votre numéro de civilite !") ;
        valid = false;
        return valid;
    }
    if ( xms == "" )
    {
        alert( "Veuillez entrer votre message!");
        validms = false;
        return valid;
    }
    alert("envoiyer message");
}  */

/*function myFunction() {

    var xpr= document.getElementById("prenom").value;
    var xnm= document.getElementById("nom").value;
    var xem= document.getElementById("email").value;
    var xsta= document.getElementById("statu").value;
    var xrd= document.getElementById("radio").value;
    var xms= document.getElementById("message").value;

    var x = document.getElementsByClassName("test");
    var i;

    if (xpr!="" && xnm!="" && xem!="" && xsta!="" && xrd!="" && xms!="" )
    {
        alert("message envoyer");
    }
    else{
        text="";
        for (i = 0; i < x.length; i++)
        {
            if (x[i].value=="")
            {
                text=text + x[i].name+"\n";
            }
        }

        alert("Desoler votre formulaire est incomplet.Veuillez remplir les champs \n" + text);
    }
}
*/
/*function surligne(champ, erreur) {
   if (erreur){
    champ.style.backgroundColor = "#fba";
      //  missPrenom.textContent = 'Prénom manquant';
      // missPrenom.style.color = 'red';
}
   else
       {
         champ.style.backgroundColor = "";
       }
}

function verifPrenom(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
       surligne(champ, true);
       return false;
   }
   else
   {
       surligne(champ, false);
       return true;
   }
}

function verifNom(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
       surligne(champ, true);
       return false;
   }
   else
   {
       surligne(champ, false);
       return true;
   }
}


function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
       surligne(champ, true);
       return false;
   }
   else
   {
       surligne(champ, false);
       return true;
   }
}

function verifForm(f)
{
   var xpre = verifPrenom(f.prenom);
   var xnom = verifNom(f.nom);
   var xemail = verifMail(f.email);

   if(xpre && xnom && xemail)
       return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      // var missPrenom = document.getElementById('missPrenom');
       return false;
   }
}
*/
/*
function surligne(champ, erreur) {
    if (erreur){
        champ.style.backgroundColor = "#fba";
        champ.textContent="erreur";
    }
    else
    {
        champ.style.backgroundColor = "";
    }
}
function verifPrenom(prenom)
{
    if(prenom.value.length < 2 || prenom.value.length > 25)
    {
        surligne(prenom, true);
        alertpre="Prenom";
        return false;
    }
    else
    {
        surligne(prenom, false);
        alertpre="";
        return true;
    }
}

function verifnom(nom)
{
    if(nom.value.length < 2 || nom.value.length > 15)
    {
        surligne(nom, true);
        alertnom=" Nom";
        return false;
    }
    else
    {
        surligne(nom, false);
        alertnom="";
        return true;
    }
}
function verifMail(email)
{
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!regex.test(email.value))
    {
        surligne(email, true);
        alertmail="Email";
        return false;
    }
    else
    {
        surligne(email, false);
        alertmail="";
        return true;
    }
}

function verifSelec() {
    if(document.getElementById("opt1").selected==true)
        alertselct=" Selectionner un Statut";
    else
        alertselct="";

}

function verifcheked()
{
    if(document.getElementById("chkbox1").checked==false && document.getElementById("chkbox2").checked==false  )
        alertcheck=" choisir votre situation Familiale";
    else
        alertcheck="";
}
function verifradio()
{
    if(document.getElementById("radio1").checked==false && document.getElementById("radio2").checked==false ){
        alertrad=" choisir votre Civilite";
    } else{
        alertrad="";
    }
}

function verifmesage(message)
{
    if(message.value.length < 2)
    {
        surligne(message, true);
        alertmessage="completer votre message";
        return false;
    }
    else
    {
        surligne(message, false);
        alertmessage = "";
        return true;
    }
}
function validate(form)
{
    xpre=verifPrenom(document.forms['form']['prenom']);
    xnom=verifnom(document.forms['form']['nom']);
    xmail=verifMail(document.forms['form']['email']);
    xselct=verifSelec(document.forms['form']['statu']);
    xchek=verifcheked(document.forms['form']['checkbox']);
    xrd=verifradio(document.forms['form']['radio']);
    xmes=verifmesage(document.forms['form']['message']);

    if(xpre!="" && xnom!="" && xmail!=""  && xselct!=""  && xchek!=""  && xrd!="" && xmes!="" )
        alert("Votre Message a ete envoyer avec succes");
    else
    {
        alert(" Error ! Veuillez remplir correctement les champs \n"+alertpre+"\n" +alertnom+"\n"+alertmail+"\n"+alertselct+"\n"+alertcheck+"\n"+alertrad+"\n"+alertmessage);
        return false;
    }
}

*/
function validate()
{
    xpr=document.formulaire.prenom.value;
    xnm=document.formulaire.nom.value;
    xem=document.formulaire.email.value;
    xrd=document.formulaire.radio.value;
    xms=document.formulaire.mesage.value;

    if (xpr == "")
    {
        alert("Veuillez entrer votre prénom !");
        valid = false;
        return valid;
    }
    if (xnm == "" )
    {
        alert("Veuillez entrer votre nom !");
        valid = false;
        return valid;
    }

    if ( xem == "" )
    {
        alert("Veuillez entrer votre courriel !");
        valid = false;
        return valid;
    }

    if (xrd== "" )
    {
        alert("Veuillez entrer votre numéro de civilite !") ;
        valid = false;
        return valid;
    }
    if ( xms == "" )
    {
        alert( "Veuillez entrer votre message!");
        validms = false;
        return valid;
    }
    alert("envoiyer message");
}