function displayData() {
    var formData = document.getElementById("registrationForm");
    var userDataDiv = document.getElementById("userData");
    var userDataBody = document.getElementById("userDataBody");

    var row = userDataBody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = formData.elements["firstName"].value;
    cell2.innerHTML = formData.elements["lastName"].value;
    cell3.innerHTML = formData.elements["dob"].value;
    cell4.innerHTML = formData.elements["gender"].value;
    cell5.innerHTML = formData.elements["city"].value;
    cell6.innerHTML = formData.elements["address"].value;
    
    var languages = [];
    var checkboxes = formData.elements["languages"];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            languages.push(checkboxes[i].value);
        }
    }
    cell7.innerHTML = languages.join(", ");

    userDataDiv.style.display = "block";
}