const economyIncrease = document.getElementById("economyIncrease");
const economyDecrease = document.getElementById("economyDecrease");
const firstClassIncrease = document.getElementById("firstClassIncrease");
const firstClassDecrease = document.getElementById("firstClassDecrease");
economyIncrease.addEventListener("click", function () {
    ticketNumber(true, "economy")
})
economyDecrease.addEventListener("click", function () {
    ticketNumber(false, 'economy')
})
firstClassIncrease.addEventListener("click", function () {
    ticketNumber(true, "firstClass")
})
firstClassDecrease.addEventListener("click", function () {
    ticketNumber(false, "firstClass")
})
function ticketNumber(isIncrease, ticket) {
    let ticketInput = document.getElementById(ticket + "Input").value;
    if (isIncrease == true) {
        ticketInput++;
        if (ticket == "firstClass" && ticketInput >= 0) {
            bookingInformation("firstClass", ticketInput)
        }
        if (ticket == "economy" && ticketInput >= 0) {
            bookingInformation("economy", ticketInput)
        }
    }
    if (isIncrease == false) {
        ticketInput--;
        if (ticket == "firstClass" && ticketInput >= 0) {
            bookingInformation("firstClass", ticketInput)
        }
        if (ticket == "economy" && ticketInput >= 0) {
            bookingInformation("economy", ticketInput)
        }
    }
    if (ticketInput >= 0) {
        document.getElementById(ticket + "Input").value = ticketInput;
    }
    fareCalculation();
}
function fareCalculation() {
    const firstClassInput = document.getElementById("firstClassInput").value;
    const economyInput = document.getElementById("economyInput").value;
    const subTotalFare = firstClassInput * 150 + economyInput * 100;
    const tax = subTotalFare * .1;
    const totalFare = subTotalFare + tax;
    document.getElementById("sub-total").innerText = "$" + subTotalFare
    document.getElementById("tax").innerText = "$" + tax
    document.getElementById("total").innerText = "$" + totalFare
    document.getElementById("payTotal").innerText = "$" + totalFare
}
function bookingInformation(myBooking, ticket) {
    if (myBooking == "firstClass") {
        document.getElementById(myBooking + 'Booked').innerText = ticket;
    }
    else if (myBooking == "economy") {
        document.getElementById(myBooking + 'Booked').innerText = ticket;
    }
}
const confirmation = document.getElementById("confirmation")
let count = 0;
confirmation.addEventListener("click", function () {
    count++;
    if (count == 1) {
        document.getElementById('accountNumber').style.display = "none";
        document.getElementById('verification').style.display = "block";
        document.getElementById('verification').style.position = "relative";
        document.getElementById('verification').style.bottom = "5px";
    }
    else {
        document.getElementById('verification').style.display = "none";
        document.getElementById('password').style.display = "block";
        document.getElementById('password').style.position = "relative";
        document.getElementById('password').style.bottom = "30px";
    }
})
const bookNow = document.getElementById("bookNow")
bookNow.addEventListener("click", function () {
    const ticketInputNumber = document.getElementById("firstClassInput").value;
    const ticketInputNumber2 = document.getElementById("economyInput").value;
    if (ticketInputNumber == "" && ticketInputNumber2 == "") {
        alert("Please select your sit.")
    }
    else {
        document.getElementById("bookingSection").style.display = "none";
        document.querySelector("#confirmation-section").style.display = "block";
    }
})
const yes = document.getElementById("yes")
yes.addEventListener("click", function () {
    document.querySelector("#confirmation-section").style.display = "none";
    document.querySelector(".account-section").style.display = "block";
    document.querySelector("#no").style.display = "block";
})
const no = document.getElementById("no")
no.addEventListener("click", function () {
    document.querySelector("#bookingSection").style.display = "block";
    document.querySelector("#confirmation-section").style.display = "none";
})


