function main() {
    loadCustomersInTable()
}

function loadCustomersInTable() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("customer-table").style.display = "block";
    document.getElementById("new-customer").style.display = "none";


    // prendo l'elenco dei clienti
    var customerList = getCustomers();

    var tbody = "";

    for(var i = 0; i < customerList.length; i++) {
        var customer = customerList[i];

        tbody += "<tr>";
        tbody +=    "<td>" + customer.firstname + "</td>";
        tbody +=    "<td>" + customer.lastname + "</td>";
        tbody +=    "<td>" + customer.sex + "</td>";
        tbody +=    "<td>" + customer.nation + "</td>";
        tbody +=    "<td>" + customer.mail + "</td>";
        tbody += "</tr>";
    }

    var userTableBodyElement = document.getElementById("user-table-body");
    userTableBodyElement.innerHTML = tbody;
    
}

function createCustomer() {
    document.getElementById("customer-table").style.display = "none";
    document.getElementById("new-customer").style.display = "block";
}

function newCustomerSubmit(elementForm) {
    var customer = {
        "firstname":    elementForm.elements["firstname"].value,
        "lastname":     elementForm.elements["lastname"].value,
        "sex":          elementForm.elements["sex"].value,
        "nation":       elementForm.elements["nation"].value,
        "mail":         elementForm.elements["mail"].value,
        "password":     elementForm.elements["password"].value,
    };

    var error = document.getElementById("error");

    var confirmPassword = elementForm.elements["confirm-password"].value;
    if(customer.password != confirmPassword) {
        error.innerHTML = "Cretino, hai messo 2 password diverse.";
        return false;
    }

    if(customer.nation == "usa") {
        error.innerHTML = "Cretino, trovati una compagnia della tua nazione.";
        return false;
    }

    addCustomer(customer);

    return false;
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





customerList = [
    {
        "firstname": "Giacomo",
        "lastname": "Trinchillo",
        "sex": "M",
        "nation": "Italia",
        "mail": "g@t.it",
        "password": "g123"
    },{
        "firstname": "Naomi",
        "lastname": "Celentano",
        "sex": "F",
        "nation": "Sicilia",
        "mail": "n@c.it",
        "password": "n456"
    },{
        "firstname": "Marco",
        "lastname": "Russo",
        "sex": "M",
        "nation": "Pagani",
        "mail": "mr@gmail.com",
        "password": "m789"
    },
];


function getCitys(){
    const settings = 
}

