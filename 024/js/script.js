function exibirOcultarGenerica(tipo, infor, flag) {
    if (tipo == 'tag') {
        if (flag) {
            $(infor).show(1000);
        }
        else {
            $(infor).hide(1000);
        }
    }
    else if (tipo == 'classe') {
        if (flag) {
            $('.' + infor).show(1000);
        }
        else {
            $('.' + infor).hide(1000);
        }
    }
    else if (tipo == 'id') {
        if (flag) {
            $('#' + infor).show(1000);
        }
        else {
            $('#' + infor).hide(1000);
        }
    }
}

