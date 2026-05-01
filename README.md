# This repo is for basic understanding and let's you understand the foundation of React-Router concepts.

Here, You can understand how to build basic Single-Page-Applications using React. 
To get started, install the web-specific package for React Router using command
***npm install react-router-dom***

### What is meant by SPA ?

SPA stands for Single Page Application. It loads only one HTML page (index.html).
The page never reloads during navigation.
Content updates using JavaScript and React Router.
Makes the us feel the app is fast and smooth.

without React-Router, Clicking a link reloads the page and in that case, react components are lost and reloaded.

### Core Concepts & Components:

The React Router library provides several essential components to build your navigation system.

**BrowserRouter:** It is the Main wrapper and The parent component that enables routing.
**Routes:** A container that looks through all its child Route elements to find the one that matches the current URL.
**Route:** Defines a single mapping between a URL path and a React element.
**Link:** Used to create navigation links. Unlike a standard anchor tag (<a>), it prevents a page reload and updates the URL internally.

### Advanced Features:

**Dynamic Routing:** Use colons (e.g., :id) in a path to capture dynamic values from the URL. You can retrieve these values inside your component using the useParams hook.
**Nested Routes:** You can place routes inside other routes to create complex layouts. Use the <Outlet /> component in the parent route to specify where child components should render.
**Programmatic Navigation:** Use the useNavigate hook to change pages based on logic, such as redirecting a user after they click a button or submit a form.
**Active Links:** Use <NavLink> instead of <Link> to automatically apply a "active" class or style to the link when it matches the current URL. the <NavLink> gives you the class `active` such that you can use to improve css of the page.
**loader:** A loader is an asynchronous function that fetches data for a route before it renders. It Ensures data is ready when the component mounts, preventing "loading flickers" or empty states.  Inside your component, use the useLoaderData() hook to retrieve whatever the loader returned.

### Some important Hooks related to React-Router:

**useNavigate:** This hook is used for programmatic navigation. It’s what you use when you want to redirect a user after an action, like clicking a button or submitting a form.

**useParams:** This is how you access dynamic parameters from the URL. If your route is defined as /product/:id, this hook grabs that id. Useful for fetching specific data from an API based on an ID in the URL.

**useLocation:** This hook returns the current location object, which contains information about the current URL, including the path, query string (search), and state. Useful for triggering an analytics event on page change or accessing state passed from a previous page.

**useSearchParams:** Similar to useState, but for query strings (the stuff after the ? in a URL). It returns an array with the current search params and a function to update them. Useful for handling filters or search bars without leaving the page.

**useLoaderData:** This hook is the bridge that brings data from your loader function into your component Useful for displaying data fetched before the component even rendered.

**useRouteError:** This hook is your primary tool for retrieving error details when something goes wrong during a route transition. It works specifically with the errorElement property as showcased and implemented in code.

**Tips to run server:** you can see jobs in jobs page can be loaded from server using loader. but to run server try using this command ***npx json-server --watch data.json --port 5000***. This starts server.
