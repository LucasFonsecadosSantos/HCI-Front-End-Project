function loginSimulation(loginForm) {
    if (loginFieldsValidation(loginForm)) {
        if ((loginForm.user.value == "user1@email.com") && (loginForm.password.value == "123456") ) {
            location="index.html?account=user"
        } else if ((loginForm.user.value == "admin@email.com") && (loginForm.password.value == "123456")) {
            location="index.html?account=admin";
        } else {
            //var errorDiv = Document.createElement("div");
            //errorDiv.innerHTML = "<p>Ops: Seu usuário ou senha estão incorretos :(. Tente novamente!</p>"
            //loginForm.appendChild(errorDiv)
            loginForm.innerHTML += '<p style="color: #FF0000">Ops: Seu usuário ou senha estão incorretos :(. Tente novamente!</p>'
        }
    } else {
        loginForm.innerHTML += '<p style="color: #FF0000">Ops: Cuidado, algum dos campos (usuário ou senha) está vazio.</p>'
    }
}

function loginFieldsValidation(loginForm) {
    if ((loginForm.user == "") || (loginForm.password == "")) return false;
    return true;
}

function accountValidation(indexPage) {
    var params = getUrlVars(indexPage);
    if (params["account"] == "admin") {
        document.getElementById("navMenu").innerHTML += "<a class=\"dropdown-item\" href=\"task-register.html\"> Registrar tarefa </a>";
    } else if (params["account"] == undefined){
        location="login.html";
    }
}

function taskRegisterSimulation(taskListationPage) {
    var params = getUrlVars(taskListationPage);
    var table = document.getElementById("personalTaskList");
    var row = table.insertRow(table.rows.length);
    params["title"] = params["title"].replace('+',' ');
    createTaskCell(row.insertCell(0), "<img src=\"img/elements/icons/cleaning.svg\"/>");
    createTaskCell(row.insertCell(1), "<p>" + params["title"] + "</p>");
    createTaskCell(row.insertCell(2), "<label class=\"information\"> nenhuma</label>");
}

function createTaskCell(cell, content) {
    cell.innerHTML = content;
}

function expenseRegisterSimulation(expenseListationPage){
    var params = getUrlVars(expenseListationPage);
    var table = document.getElementById("personalExpenseList");
    var row = table.insertRow(table.rows.length);
    params["title"] = params["title"].replace('+', ' ');
    createExpenseCell(row.insertCell(0), "<p>20:33</p><p>"+ params["date"] +"</p>");
    createExpenseCell(row.insertCell(1), "<p>"+ params["title"] +"</p>");
    createExpenseCell(row.insertCell(2), "<label class=\"attention\">aguardando aprovação</label>");
    createExpenseCell(row.insertCell(3), "<div class=\"row\"><a onclick=\"removeExpenseRow(this.rowIndex)\" href=\"#\", title=\"Clique para remover este registro\" alt=\"Botão para remover o presente registro.\"><img class=\"action\" src=\"img/elements/icons/remove.svg\"/></a></div>");
}

function removeExpenseRow(rowIndex) {
    document.getElementById("personalExpenseList").deleteRow(rowIndex);
}

function createExpenseCell(cell, content) {
    cell.innerHTML = content;
}

function getUrlVars(window) {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function expenseRegisterFieldsValidation(registerForm) {
    return (
        (registerForm.title         != "")  &&
        (registerForm.company       != "")  &&
        (registerForm.expenseDate   != "")  &&
        (registerForm.value         != "")  &&
        (registerForm.receipt       != "")  &&
        (registerForm.itens         != "")
    )
}

function addManualTaskDate(form) {
    var value = document.getElementById("manualDate").value;
    document.getElementById("manualDateData").insertRow(0).insertCell(0).innerHTML = value;
}

function addDwellerDisease(form) {
    var value = document.getElementById("disease1").value;
    document.getElementById("dwellerDiseaseTable").insertRow(0).insertCell(0).innerHTML = value;
    document.getElementById("disease1").value = "";
}

function addDwellerTelephone(form) {
    var value = document.getElementById("telephone1").value;
    document.getElementById("dwellerTelephoneTable").insertRow(0).insertCell(0).innerHTML = value;
    document.getElementById("telephone1").value = "";
}

function addDwellerFamilyTelephone(form) {
    var value = document.getElementById("familyTelephone").value;
    document.getElementById("dwellerFamilyTelephoneTable").insertRow(0).insertCell(0).innerHTML = value;
    document.getElementById("familyTelephone").value = "";
}

function addTaskDwellers(form) {
    var combo = document.getElementById("dweller");
    var dweller = combo.options[combo.selectedIndex].text;
    combo.remove(combo.selectedIndex);
    document.getElementById("taskDwellerTable").insertRow(0).insertCell(0).innerHTML = dweller;
}


//TASK PAGE
/*
function taskPage() {
    import { Calendar } from '@fullcalendar/core';
    import dayGridPlugin from '@fullcalendar/daygrid';

    document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new Calendar(calendarEl, {
        plugins: [ dayGridPlugin ]
    });

    calendar.render();
    });
}*/