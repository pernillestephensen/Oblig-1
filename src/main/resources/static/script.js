const billetter = [];

function registrer(){
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
    visBilletter()
}

function visBilletter(){
    let ut = "<div class='row'>" +
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

