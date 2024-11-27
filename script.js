function openNav() {
    document.getElementById("sidebar").style.width = "250px"; // Adjust width as needed
    document.getElementById("overlay").style.display = "block"; // Show the overlay
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none"; // Hide the overlay
}