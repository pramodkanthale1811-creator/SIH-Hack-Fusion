// Handle login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if(username === "" || password === "") {
    alert("⚠️ Please fill in all fields!");
    return;
  }

  // Mock authentication (replace with backend call later)
  if(username === "admin" && password === "1234") {
    alert("✅ Login Successful! Redirecting...");
    window.location.href = "dashboard.html"; // Next page (bus tracking)
  } else {
    alert("❌ Invalid Username or Password");
  }
});

// Forgot Password
document.getElementById("forgotPassword").addEventListener("click", function() {
  alert("🔑 Password reset link has been sent to your registered email.");
});

// Register
document.getElementById("register").addEventListener("click", function() {
  alert("📌 Redirecting to registration page...");
  window.location.href = "register.html"; // Example register page
});
