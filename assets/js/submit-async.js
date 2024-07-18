$(document).ready(function () {
    const form = document.getElementById("contact-form");
    // 🍕
    function submitFormData(data) {
        $.ajax({
            url: "/submit", // Replace with your Flask route
            type: "POST",
            data: JSON.stringify(data), // Send data as JSON
            contentType: "application/json; charset=utf-8", // Set content type
            success: function (response) {
                // Handle successful response from Flask
                // alert(response.message); // optional page alert message
                alert(response.message);

                $("button[type=submit]")
                    .prop("disabled", true)
                    .text("Sent!")

                $("button[type=submit]").prop("disabled", true);

                $("#jquery-loading").waitMe("hide"); // Hide animation on success
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Handle errors during communication
                console.error("AJAX Error:", textStatus, errorThrown);
                $("#jquery-loading").waitMe("hide");
                $("button[type=submit]").prop("disabled", false);
            },
        });
    }
    // 🍕
    function validateForm(form) {
        // const form = document.getElementById("contact-form");

        // Loop through each element within the form
        Array.from(form.elements).forEach(element => {
            // Check if the element supports validation and is not a submit button
            if (!element.type.includes("submit")) {
                // Perform validity check
                var isValid = element.checkValidity();
                // 💫 had to create below if statement, since .checkValidity wasn't working properly on <textarea>
                // had to create below if statement, since .checkValidity wasn't working properly on <textarea>
                if (element.id === ("message-1") && element.value.length <= 20) {
                        (isValid) = false;
                }
                console.log(element)
                console.log(isValid)

                // Add or remove 'is-invalid' class based on validity
                if (!isValid) {
                    element.classList.add("is-invalid");

                    console.log(form.elements)
                } else {
                    element.classList.remove("is-invalid");
                    // console.log(form.elements)

                }
            }
        });
    }

    $("#submit-button").click(function (event) {

        event.preventDefault();

        if (form.checkValidity() && $("#message-1").val().length >= 20) {
            console.log("valid");
            var data = {
                name: $("#name-1").val(),
                email: $("#email-1").val(),
                message: $("#message-1").val()
                // Add more data fields as needed (e.g., email, message)
            };
            submitFormData(data);
        } else {
            validateForm(form)
            console.log("invalid");
            return;
        }
        console.log("clicked!");

        $("#jquery-loading").waitMe({
            effect: "bounce",
            text: "",
            bg: "rgba(255,255,255, 0.7)",
            color: "#008080",
        });

        // Get user data from the form (replace with your form elements)
    });
});

