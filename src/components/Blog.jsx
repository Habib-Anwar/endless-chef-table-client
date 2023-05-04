import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h3>Tell us the differences between uncontrolled and controlled components.</h3>
            <p>Uncontrolled components are traditional HTML form elements that maintain their own internal state. When a user types something into an input field, for example, the value of that input is stored within the DOM and not in the React state. Uncontrolled components are simple to set up because you don't need to do anything in code to manage their state. However, because the state is managed by the DOM rather than React, it can be more difficult to write complex form functionality and manage data flow throughout your application.

                Controlled components, on the other hand, have their value and other properties controlled by the React state. When the user interacts with a controlled component, the state is updated, and then the component is re-rendered to reflect that new state. Controlled components are often more complex to set up than uncontrolled components, but they provide more control and flexibility over the state of the form and can simplify data management within the application.

                In general, if you need complex functionality in your forms, or if you need to manage the state of your form data across multiple components, you should consider using controlled components. If your forms are simple and don't require much data management, you can use uncontrolled components instead.
                </p>

                <h3>How to validate React props using PropTypes</h3>
                <p>React provides a library called PropTypes that allows you to validate the props passed to a component. PropTypes help you catch errors early in development by defining the types of data that your component expects.
                Using PropTypes to validate props is a good practice that can help avoid bugs and improve the overall quality of React code.
                </p>
                <h3>Tell us the difference between nodejs and express js.</h3>
                <p>Node.js and Express.js are two related technologies in the web development ecosystem, but they serve different purposes.

Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code on the server-side. It provides a platform that enables the creation of server-side applications using JavaScript. Node.js is built on top of the V8 JavaScript engine and it allows developers to build scalable network applications.

Express.js, on the other hand, is a web application framework for Node.js that simplifies the development of web applications and APIs. It provides a set of features and tools that help developers create web applications faster and more efficiently. Express.js is built on top of Node.js, and it provides a layer of abstraction that makes it easier to handle HTTP requests, manage routes, and interact with databases.

Here are some of the key differences between Node.js and Express.js:

- Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js.

- Node.js provides a platform for executing JavaScript code on the server, while Express.js provides a set of features and tools for building web applications.

- Node.js is relatively low-level and requires more manual configuration, while Express.js provides a higher-level abstraction that simplifies the development of web applications.

- Node.js can be used to build a variety of server-side applications, while Express.js is specifically designed for building web applications and APIs.

In summary, Node.js provides a platform for running JavaScript code on the server, while Express.js provides a framework for building web applications and APIs on top of Node.js. Together, they form a powerful ecosystem for building scalable and high-performance web applications.</p>
<h3>What is a custom hook, and why will you create a custom hook?</h3>
<p>In React, a custom hook is a JavaScript function that allows to reuse logic across multiple components. Custom hooks are created using the use prefix and are typically used to encapsulate complex logic that is shared between different components.

Custom hooks can be used to:

<li>
Abstract complex logic into reusable code
Prevent code duplication
Improve code organization and readability
Encapsulate stateful logic for reuse across different components
Handle common scenarios such as fetching data, handling form submissions, managing local storage, and more.</li>
We can then use this custom hook in multiple components to fetch data from an API, without duplicating the same code in each component.

Custom hooks are a powerful way to share functionality between components in React, and they can greatly improve code organization and reusability.
</p>

        </div>
    );
};

export default Blog;