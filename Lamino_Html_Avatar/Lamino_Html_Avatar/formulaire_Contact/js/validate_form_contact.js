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

function myFunction() {

    var xpr= document.getElementById("prenom").value;
    var xnm= document.getElementById("nom").value;
    var xem= document.getElementById("email").value;
    var xrd= document.getElementById("radio").value;
    var xms= document.getElementById("message").value;

    var x = document.getElementsByClassName("test");
    var i;

    if (xpr!="" && xnm!="" && xem!="" && xrd!="" && xms!="" )
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