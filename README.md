# Chrome extension tests

I'm trying to access `__data__` attributes of SVG elements on a page. 
If I paste my script into the console, it's fine and I can access them OK.

But if I inject the same script with `chrome.tags.executeScript(...)`, then they're all undefined. 
(I've tried all the ['runAt' options](https://developer.chrome.com/extensions/tabs#method-executeScript)).

Here's a small sample project that demonstrates this.

## Instructions

* Install the local Chrome extension from the <code>extension</code> directory. [Here's how](https://developer.chrome.com/extensions/getstarted#unpacked).
* Go to the index page (it's hosted [here](https://poshaughnessy.github.io/chrome-extension-tests/index.html)), click the extension and click the revealed button.
* Check the console. It should output the data (200 and 400) but instead it is `undefined`.
