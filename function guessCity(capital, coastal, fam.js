function guessCity(capital, coastal, famous, ancient) {
    if (capital === true &&  coastal === false && famous === true && ancient == true ) { return 'Jerusalem'; }
    if (capital === false &&  coastal === true && famous === true && ancient === false){return 'Tel Aviv';}
    if (capital === false && coastal === true  &&  famous === false && ancient === true) {return 'Acre';}
    if (capital === false && coastal === false && famous === false && ancient === true) {return 'Katzrin';}
    if (capital === false && coastal === true && famous === false && ancient === false) {return 'Zikim';}
    else if (capital === false && coastal === false && famous === false && ancient === false) {return 'Musmus';
}





