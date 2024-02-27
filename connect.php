<?php
$servername = "localhost"; // If the database is on the same server
$username = "Ad1tya"; // Change this to your actual database username
$password = "Aditya@143"; // Change this to your actual database password
$dbname = "connect"; // Change this to your actual database name

// Create connection
$conn = new mysqli($localhost, $Ad1tya, $Aditya@143, $connect);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// For login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    $sql = "SELECT * FROM your_table_name WHERE username='$user' AND password='$pass'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Login successful
        echo "Login successful!";
    } else {
        // Login failed
        echo "Invalid username or password!";
    }
}

// For registration
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobileno = $_POST['mobileno'];
    $password = $_POST['password'];
    $bloodGroup = $_POST['bloodGroup'];

    $sql = "INSERT INTO your_table_name (name, email, mobileno, password, bloodGroup) 
            VALUES ('$name', '$email', '$mobileno', '$password', '$bloodGroup')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
