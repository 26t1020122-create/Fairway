// ==============================
// LOAD HEADER
// ==============================

fetch("header/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        const closeBtn = document.getElementById("closeBtn");

        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                document.querySelector(".booking-container").style.display = "none";
            });
        }
    })
    .catch(error => console.log("Lỗi tải header:", error));


// ==============================
// LOAD FOOTER
// ==============================

fetch("footer/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.log("Lỗi tải footer:", error));


// ==============================
// BOOKING FORM
// ==============================


// ==============================
// BOOKING FORM
// ==============================

const bookingForm = document.getElementById("bookingForm");
const bookingContent = document.querySelector(".booking-content");

const successModal = document.getElementById("successModal");
const successClose = document.getElementById("successClose");

// ĐĂNG KÝ THÀNH CÔNG
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const room = document.getElementById("room").value;
    const date = document.getElementById("booking-date").value;
    const time = document.getElementById("booking-time").value;

    if (!fullname || !phone || !room || !date || !time) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Ẩn form đặt lịch
    bookingContent.style.display = "none";

    // Hiện popup thành công
    successModal.classList.add("active");
});

// ĐÓNG POPUP
successClose.addEventListener("click", function () {
    successModal.classList.remove("active");
});

// Đóng popup khi nhấn bên ngoài
successModal.addEventListener("click", function (event) {
    if (event.target === successModal) {
        successModal.classList.remove("active");
    }
});

// Đóng popup bằng phím ESC
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        successModal.classList.remove("active");
    }
});
