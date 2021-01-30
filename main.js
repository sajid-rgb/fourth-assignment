//This function used for get ticket input and increased it when press plus minus button
function ticketNumber(isIncrease, ticket) {
    let ticketInput = getInput(ticket+"Input");
    if (isIncrease == true) {
        ticketInput++;
        if (ticket == "firstClass" && ticketInput >= 0) {
            bookingInformation("firstClass", ticketInput);
        }
        if (ticket == "economy" && ticketInput >= 0) {
            bookingInformation("economy", ticketInput);
        }
    }
    if (isIncrease == false) {
        ticketInput--;
        if (ticket == "firstClass" && ticketInput >= 0) {
            bookingInformation("firstClass", ticketInput);
        }
        if (ticket == "economy" && ticketInput >= 0) {
            bookingInformation("economy", ticketInput);
        }
    }
    if (ticketInput >= 0) {
        document.getElementById(ticket + "Input").value = ticketInput;
    }
    fareCalculation();
}
//This function used for calculate sub total,total and vat.
function fareCalculation() {
    const firstClassInput = getInput("firstClassInput");
    const economyInput = getInput("economyInput");
    if (firstClassInput > 0 || economyInput) {
        const subTotalFare = firstClassInput * 150 + economyInput * 100;
        const vat = subTotalFare * .1;
        const totalFare = subTotalFare + vat;
        updateCalculation("sub-total", subTotalFare);
        updateCalculation("vat-total", vat);
        updateCalculation("grand-total", totalFare);
        updateCalculation("pay-total", totalFare);
        updateCalculation("purchase-total", totalFare);
    }
    else if (firstClassInput <= 0 || economyInput <= 0) {
        updateCalculation("sub-total", 0);
        updateCalculation("vat-total", 0);
        updateCalculation("grand-total", 0);
        updateCalculation("pay-total", 0);
        updateCalculation("purchase-total", 0);
    }
}
//This function used for show the sub total,vat and total in their section
function updateCalculation(id, total) {
    if (id == "sub-total") {
        document.getElementById(id).innerText = "$" + total;
    }
    if (id == "vat-total") {
        document.getElementById(id).innerText = "$" + total;
    }
    if (id == "grand-total") {
        document.getElementById(id).innerText = "$" + total;
    }
    if (id == "pay-total") {
        document.getElementById(id).innerText = "$" + total;
    }
    if (id == "purchase-total") {
        document.getElementById(id).innerText = total;
    }
}
//This function used for show the ticket number in confirmation message
function bookingInformation(myBooking, ticket) {
    if (myBooking == "firstClass") {
        document.getElementById(myBooking + 'Booked').innerText = ticket;
    }
    else if (myBooking == "economy") {
        document.getElementById(myBooking + 'Booked').innerText = ticket;
    }
}
//This function used for verify account for transaction
function verifyAccount(id, value) {
    if (id == "accountNumber" && value == 1) {
        document.getElementById(id).style.display = "none";
        document.getElementById('confirmation').style.display = "none";
    }
    if ((id == "verification" && value == 2) || (id == "password" && value == 3)) {
        document.getElementById('confirmation2').style.display = "block";
        document.getElementById(id).style.display = "block";
    }
}
//This function used for visible congratulate section when confirm button click
function confirmButtonClick() {
    document.getElementById("accountSection").style.display = "none";
    document.getElementById("congratulateSection").style.display = "block";    
}
//This button used for confirmation section
function bookingConfirmation() {
    const firstClassInputNumber =getInput("firstClassInput");
    const economyInputNumber = getInput("economyInput");
    if ((firstClassInputNumber == "" && economyInputNumber == "") || (firstClassInputNumber <= 0 && economyInputNumber <= 0)) {
        alert("Please select your sit.");
    }
    else {
        document.getElementById("bookingSection").style.display = "none";
        document.querySelector("#confirmation-section").style.display = "block";
    }
}
//This function used for click yes button and visible account section
function yesButtonClick() {
    document.querySelector("#confirmation-section").style.display = "none";
    document.querySelector(".account-section").style.display = "block";
    document.querySelector("#no").style.display = "block";
}
//This function used for click no button and visible booking section and hide confirmation section
function noButtonClick() {
    document.querySelector("#bookingSection").style.display = "block";
    document.querySelector("#confirmation-section").style.display = "none";
}
//This function used for get input value
function getInput(id){
    const ticketClassInput = document.getElementById(id).value;
    return ticketClassInput;
}

