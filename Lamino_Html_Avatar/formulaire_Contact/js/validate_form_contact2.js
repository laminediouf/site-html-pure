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
 function surligne(champ, erreur) {
     if (erreur){
         champ.style.backgroundColor = "#fba";
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

