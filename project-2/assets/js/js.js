      document
            .getElementById("contactForm")
            .addEventListener("submit", function (event) {
                event.preventDefault();
                const name = document.getElementById("name").value.trim();
                const email = document.getElementById("email").value.trim();
                const message = document.getElementById("message").value.trim();
                if (name === "" || email === "" || message === "") {
                showToast("Please fill in all fields.", "danger");
                return;
                }
                console.log("Form submitted:", { name, email, message });
                showToast("Message sent successfully!", "success");
                document.getElementById("contactForm").reset();
            });
            function showToast(message, type) {
            const toast = document.getElementById("formToast");
            const toastMessage = document.getElementById("toastMessage");
            toast.className = `toast text-bg-${type}`;
            toastMessage.innerText = message;
            const bootstrapToast = new bootstrap.Toast(toast, { delay: 3000 });
            bootstrapToast.show();
            }