# Chrome extension tests

I'm trying to access `__data__` attributes of SVG elements on a page. 
If I paste my script into the console, it's fine and I can access them OK.

But if I inject the same script with `chrome.tags.executeScript(...)`, then they're all undefined. 
(I've tried all the ['runAt' options](https://developer.chrome.com/extensions/tabs#method-executeScript)).

Here's a small sample project that demonstrates this.

## Instructions

* Install the local Chrome extension from the <code>extension-problem</code> directory. [Here's how](https://developer.chrome.com/extensions/getstarted#unpacked).
* Go to the index page (it's hosted [here](https://poshaughnessy.github.io/chrome-extension-tests/index.html)), click the extension and click the revealed button.
* Check the console. It should output the data (200 and 400) but instead it is `undefined`.

*Update*: It's solved now. See the <code>extension-solution</code> directory. Thanks to [wOxxOm](https://stackoverflow.com/users/3959875/woxxom) and 
[apsillers](https://stackoverflow.com/users/710446/apsillers) over [on Stack Overflow](https://stackoverflow.com/questions/44889907/chrome-extension-does-not-have-access-to-dom-data?noredirect=1#comment76758178_44889907)!
