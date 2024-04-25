// script.js

// Function to calculate age and display the result
function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    // Calculate the difference in years, months, days, hours, minutes, and seconds
    let ageInMilliseconds = currentDate - birthdate;
    
    let ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    let ageInMinutes = Math.floor(ageInSeconds / 60);
    let ageInHours = Math.floor(ageInMinutes / 60);
    let ageInDays = Math.floor(ageInHours / 24);
    let ageInYears = Math.floor(ageInDays / 365.25);

    // Calculate the remaining days, hours, minutes, and seconds
    ageInDays = ageInDays % 365;
    ageInHours = ageInHours % 24;
    ageInMinutes = ageInMinutes % 60;
    ageInSeconds = ageInSeconds % 60;

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Your age is ${ageInYears} years, ${ageInDays} days, ${ageInHours} hours, ${ageInMinutes} minutes, and ${ageInSeconds} seconds.`;
}

// Function to reset the form and result
function resetForm() {
    const birthdateInput = document.getElementById('birthdate');
    const resultDiv = document.getElementById('result');
    
    birthdateInput.value = '';
    resultDiv.innerText = '';
}

// Function to show Vignette Banner ad
function showVignetteBanner() {
    const adContainer = document.getElementById('vignette-banner-ad');
    // Load and display the vignette banner ad using your ad provider's API
    // For example, if using Google AdSense:
    // (adsbygoogle = window.adsbygoogle || []).push({});
    // Replace this with the correct function call and attributes for your ad provider
}

// Function to show Native Banner ad
function showNativeBanner() {
    const adContainer = document.getElementById('native-banner-ad');
    // Load and display the native banner ad using your ad provider's API
    // For example, if using Google AdSense:
    // (adsbygoogle = window.adsbygoogle || []).push({});
    // Replace this with the correct function call and attributes for your ad provider
}

// Function to send a push notification ad
function sendPushNotification() {
    const adContainer = document.getElementById('push-notification-ad');
    // Send a push notification ad using your ad provider's API
    // Replace this with the correct function call and attributes for your ad provider
}

// Function to trigger OnClick (Popunder, In-Page Push) ad
function triggerOnClick() {
    const adContainer = document.getElementById('onclick-ad');
    // Trigger an OnClick ad using your ad provider's API
    // Replace this with the correct function call and attributes for your ad provider
}

// Add event listeners for ad buttons
document.getElementById('vignette-banner-btn').addEventListener('click', showVignetteBanner);
document.getElementById('native-banner-btn').addEventListener('click', showNativeBanner);
document.getElementById('push-notification-btn').addEventListener('click', sendPushNotification);
document.getElementById('onclick-btn').addEventListener('click', triggerOnClick);
