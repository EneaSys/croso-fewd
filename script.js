function main() {
    loadCustomersInTable();
    getCitys();
}



function loadCustomersInTable() {
    document.getElementById("customer-table").style.display = "block";
    document.getElementById("new-customer").style.display = "none";


    // prendo l'elenco dei clienti
    var customerList = getCustomers();

    var tbody = "";

    for (var i = 0; i < customerList.length; i++) {
        var customer = customerList[i];

        tbody += "<tr>";
        tbody += "<td>" + customer.firstname + "</td>";
        tbody += "<td>" + customer.lastname + "</td>";
        tbody += "<td>" + customer.sex + "</td>";
        tbody += "<td>" + customer.nation + "</td>";
        tbody += "<td>" + customer.mail + "</td>";
        tbody += "</tr>";
    }

    var userTableBodyElement = document.getElementById("user-table-body");
    userTableBodyElement.innerHTML = tbody;

}

function createCustomer() {
    document.getElementById("new-customer").style.display = "block";
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("new-client-created").style.display = "none";
}



function newCustomerSubmit(elementForm) {
    var customer = {
        "firstname": elementForm.elements["firstname"].value,
        "lastname": elementForm.elements["lastname"].value,
        "sex": elementForm.elements["sex"].value,
        "nation": elementForm.elements["nation"].value,
        "mail": elementForm.elements["mail"].value,
        "password": elementForm.elements["password"].value,
    };

    var confirmPassword = elementForm.elements["confirm-password"].value;
    if (customer.password != confirmPassword) {
        showMessage("Cretino, hai messo 2 password diverse.", 3, 7000);
        return false;
    }

    if (customer.nation == "usa") {
        showMessage("Cretino, trovati una compagnia della tua nazione.", 3, 7000);
        return false;
    }

    addCustomer(customer);
    elementForm.reset();

    showMessage("Utente creato con successo!", 1, 3000);

    loadCustomersInTable();

    document.getElementById("new-client-created").style.display = "block";

    return false;
}





function showMessage(message, type, timeout) {
    var messageElement = document.getElementById("message");

    messageElement.innerHTML = message;

    messageElement.classList.remove("success", "warning", "error");

    switch (type) {
        case 1: // success
            messageElement.classList.add("success");
            break;
        case 2: // warning
            messageElement.classList.add("warning");
            break;
        default: // error
            messageElement.classList.add("error");
            break;
    }

    messageElement.style.display = "block";
    setTimeout(function() {
        messageElement.style.display = "none";
    }, timeout);
}





function getCustomers() {
    return customerList;
}

function setCustomers(customers) {
    customerList = customers;
}

function addCustomer(customer) {
    customerList.push(customer);
}





customerList = [{
    "firstname": "Giacomo",
    "lastname": "Trinchillo",
    "sex": "M",
    "nation": "Italia",
    "mail": "g@t.it",
    "password": "g123"
}, {
    "firstname": "Naomi",
    "lastname": "Celentano",
    "sex": "F",
    "nation": "Sicilia",
    "mail": "n@c.it",
    "password": "n456"
}, {
    "firstname": "Marco",
    "lastname": "Russo",
    "sex": "M",
    "nation": "Pagani",
    "mail": "mr@gmail.com",
    "password": "m789"
}, ];





function getCitys() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://wft-geo-db.p.rapidapi.com/v1/geo/countries",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "54e471af57msh8ba85042277b3c7p1a5c0bjsn6f4704cdbd32",
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
    });
}