function surligne(champ, erreur) {
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