const billetter = [];
let ut = "";

function validerValg() {
    const selectElement = document.getElementById("film");
    const feilmeldingElement = $("#feilvalg");

    if (selectElement.value == "") {
        feilmeldingElement.html("Vennligst velg en film");
        return false;
    } else {
        feilmeldingElement.html("");
        return true;
    }
}
function validerInput(inputId, feilmeldingId, feilmeldingTekst) {
    const inputElement = document.getElementById(inputId);
    const feilmeldingElement = $("#" + feilmeldingId);

    if (!inputElement.checkValidity()) {
        feilmeldingElement.html(feilmeldingTekst);
        return false;
    } else {
        feilmeldingElement.html("");
        return true;
    }
}


function validerAntall() {
    return validerInput("antall", "feilantall", "Vennligst velg antall");
}

function validerFornavn() {
   return validerInput("fornavn", "feilfornavn", "Vennligst skriv inn fornavn");
}

function validerEtternavn() {
   return validerInput("etternavn", "feiletternavn", "Vennligst skriv inn etternavn");
}

function validerTelefonnummer() {
    const telefonnummerRegex = /^\d{8}$/;
    const telefonnummer = $("#telefonnummer").val();

    if (!telefonnummer || telefonnummer.length !== 8) {
        $("#feiltelefonnummer").html("Vennligst skriv inn et gyldig telefonnummer på 8 sifre");
        return false;
    }

    if (!telefonnummerRegex.test(telefonnummer)) {
        $("#feiltelefonnummer").html("Vennligst skriv inn et gyldig telefonnummer på 8 sifre");
        return false;
    } else {
        $("#feiltelefonnummer").html("");
        return true;
    }
}

function validerEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mail = $("#email").val();

    if (!mail) {
        $("#feilemail").html("Vennligst skriv inn en gyldig e-postadresse");
        return false;
    }

    if (!emailRegex.test(mail)) {
        $("#feilemail").html("Vennligst skriv inn en gyldig e-postadresse");
        return false;
    } else {
        $("#feilemail").html("");
        return true;
    }

}

function registrer(){

    if(validerValg() && validerAntall() && validerFornavn() && validerEtternavn() && validerTelefonnummer() && validerEmail()){
        const film = $("#film").val();
        const antall = $("#antall").val();
        const fornavn = $("#fornavn").val();
        const etternavn = $("#etternavn").val();
        const telefonnummer = $("#telefonnummer").val();
        const email = $("#email").val();

        const billett = {
            film : film,
            antall : antall,
            fornavn : fornavn,
            etternavn : etternavn,
            telefonnummer : telefonnummer,
            email : email
        };

        billetter.push(billett);
        $('input').val('');
        $('select').val('');
        visBilletter();
    }
}

function visBilletter(){
        ut = "<div class='row'>" +
        "<div class='col-md-2';'>Film</div><div class='col-md-1';>Antall</div><div class='col-md-1';'>Fornavn</div>" +
        "<div class='col-md-1';>Etternavn</div><div class='col-md-1';'>Telefon</div><div class='col-md-1';'>E-mail</div>" +
        "</div>" + "</br>";
    for(let b of billetter) {
        ut+= "<div class='row'>";
        ut+= "<div class='col-md-2';'>" + b.film + "</div>";
        ut+= "<div class='col-md-1';'>" + b.antall + "</div>";
        ut+= "<div class='col-md-1';'>" + b.fornavn + "</div>";
        ut+= "<div class='col-md-1';'>" + b.etternavn + "</div>";
        ut+= "<div class='col-md-1';'>" + b.telefonnummer + "</div>";
        ut+= "<div class='col-md-1';'>" + b.email + "</div>";
        ut+= "</div>";
    }
    $("#billetter").html(ut);

}

function slett(){
    billetter.length = 0;
    visBilletter();
    ut = " ";
    $("#billetter").html(ut);
}

