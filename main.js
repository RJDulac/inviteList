//json linter: https://jsonlint.com/
//creates json file for you and hosts it: http://myjson.com/
var party = [];
var et = null;
var output = document.getElementById("output");
var addGuest = document.querySelector('input[type="button"]');

addGuest.addEventListener("click", function (e) {
    var g = document.getElementById("guestName");
    var n = document.getElementById("guestNum");
    message('✗', g.value + " + " + n.value, party.length, "");
    party.push({
        name: g.value,
        guest: Number(n.value),
        status: false
    });

    console.log(party);
    g.value = "";
    n.value = 0;
});

output.addEventListener("click", function(e){
    et = e.target;
    var dSet = et.dataset;
    et.classList.toggle('active');
    et.children[0].innerHTML = et.children[0].innerHTML === "✔" ? "✖" : "✔";
    party[dSet.id].status = party[dSet.id].status ? false : true;
    console.log(party);
})
onload = function () {
    party = JSON.parse(data);

    for (var i = 0; i < party.length; i++) {
        var person = party[i].name + ' + ' + party[i].guest;
        if (party[i].status) {
            message('✔', person, i, "active");
        } else {
            message('✖', person, i, "");
        }

    }
    console.log("party: " + party);
}

function message(m, person, id, c) {
    output.innerHTML += '<div class="toggle ' + c + '" data-id="' + id + '" data-person="' + person + '" ><span>' + m + '</span> ' + person + ' </div>';
}
