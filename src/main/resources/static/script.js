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
    let ut = "<table><tr>" +
        "<th style='text-align: left;'>Film</th><th style='text-align: left;'>Antall</th><th style='text-align: left;'>Fornavn</th>" +
        "<th style='text-align: left;'>Etternavn</th><th style='text-align: left;'>Telefonnummer</th><th style='text-align: center;'>E-mail</th>" +
        "</tr>";
    for(let b of billetter) {
        ut+= "<tr>";
        ut+= "<td style='text-align: left;'>" + b.film + "</td>";
        ut+= "<td style='text-align: center;'>" + b.antall + "</td>";
        ut+= "<td style='text-align: left;'>" + b.fornavn + "</td>";
        ut+= "<td style='text-align: left;'>" + b.etternavn + "</td>";
        ut+= "<td style='text-align: center;'>" + b.telefonnummer + "</td>";
        ut+= "<td style='text-align: left;'>" + b.email + "</td>";
        ut+= "</tr>";
    }
    $("#billetter").html(ut);

}

