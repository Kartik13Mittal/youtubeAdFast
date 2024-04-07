// Function to handle tab update events
function handleTabUpdated(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        console.log('Tab updated. Content script will handle ad detection and actions.');
    }
}

// Add listener for tab update events
chrome.tabs.onUpdated.addListener(handleTabUpdated);