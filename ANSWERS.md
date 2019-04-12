1. What is the DOM?

    The DOM is an object that holds HTML (and thus all the CSS and Javascript) content from a webpage then displays it to the user. The Document Object Model is what the browser uses to build out a page from the HTML blueprint for the user to see.

2. What is an event?

    An event is anything that the user does inside the web page. Moving the mouse, clicking, pressing keys, etc.

3. What is an event listener?

    An event listener is a method that tells a specific element to do something when an event happens on it.

4. Why would we convert a NodeList into an Array?

    We convert a NodeList into an array to use actual array methods on it. As it stands, you can only use forEach, and that's only because it's a part of the NodeList's methods. It's not even actually the same method. 

5. What is a component?

    A component is a reusable piece of code that doesn't depend on anything outside of itself (that can't be imported, I don't want to imply you can't use jQuery or something). A component is written such that it'll work independently as many times as it's placed inside a web page, irregardless of what else is happening on the page. 