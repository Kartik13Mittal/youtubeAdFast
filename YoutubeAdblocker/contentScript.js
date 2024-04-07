// Function to detect ads and perform actions
function checkForAdsAndActions() {
    var adOverlay = document.querySelector('.ytp-ad-overlay-container');
    var adContainer = document.querySelector('.ytp-ad-player-overlay');
    var skipButton = document.querySelector('.ytp-ad-skip-button-container button');

    if (adOverlay || adContainer) {
        console.log('An ad is playing.');
        var video = document.querySelector('video');
        if (video) {
            video.playbackRate = 7.0; // Speed up playback to 7x during ads
        }
        if (skipButton && !skipButton.disabled) {
            console.log('Skip button is active. Clicking...');
            skipButton.click(); // Click skip button if active
        }
    } else {
        console.log('No ad is playing.');
    }
}

// Check for ads and perform actions every second
setInterval(checkForAdsAndActions, 1000);
