// Set today's date

const dateInput = document.getElementById("date");

const today = new Date();

const dateString =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

dateInput.value = dateString;


// Display today's date

document.getElementById("today").innerText =
    today.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });


// Get attendance buttons

const buttons = document.querySelectorAll(".status");


// Change Present / Absent

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("present")) {

            button.classList.remove("present");
            button.classList.add("absent");

            button.innerText = "Absent";

        } else {

            button.classList.remove("absent");
            button.classList.add("present");

            button.innerText = "Present";

        }

        updateAttendance();

    });

});


// Calculate attendance

function updateAttendance() {

    const allStudents =
        document.querySelectorAll(".status");

    const presentStudents =
        document.querySelectorAll(".status.present");

    const absentStudents =
        document.querySelectorAll(".status.absent");

    const total = allStudents.length;

    const present = presentStudents.length;

    const absent = absentStudents.length;

    const percentage =
        Math.round((present / total) * 100);


    document.getElementById("totalStudents").innerText =
        total;

    document.getElementById("presentCount").innerText =
        present;

    document.getElementById("absentCount").innerText =
        absent;

    document.getElementById("percentage").innerText =
        percentage + "%";

    document.getElementById("overviewPercentage").innerText =
        percentage + "%";

    document.getElementById("progressBar").style.width =
        percentage + "%";
}


// Mark all students present

document.getElementById("markAll").addEventListener(
    "click",
    function() {

        const students =
            document.querySelectorAll(".status");

        students.forEach(function(button) {

            button.classList.remove("absent");

            button.classList.add("present");

            button.innerText = "Present";

        });

        updateAttendance();

    }
);


// Save attendance

document.getElementById("saveAttendance").addEventListener(
    "click",
    function() {

        document.getElementById("message").innerText =
            "✓ Attendance saved successfully!";

        setTimeout(function() {

            document.getElementById("message").innerText = "";

        }, 3000);

    }
);


// Initial calculation

updateAttendance();