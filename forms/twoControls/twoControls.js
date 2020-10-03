drpdwn.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    NSB.MsgBox(s + " Great!" );
};
*/
Checkbox1.onchange = function() {
    let response = "Thank you for your submission ";
    for (i = 0; i <= Checkbox1.length - 1; i++) {
        if (Checkbox1.getValue(i)) {
            response == response;
        }
    }
    NSB.MsgBox(response);
};