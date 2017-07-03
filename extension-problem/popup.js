document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.executeScript({
    file: 'script.js',
    runAt: 'document_end'
  });

});
