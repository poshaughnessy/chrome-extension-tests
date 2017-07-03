document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.executeScript({
    file: 'content-script.js',
    runAt: 'document_end'
  });

});
