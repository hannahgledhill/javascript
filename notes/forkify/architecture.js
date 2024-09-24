/***
 * COMPONENTS OF ANY ARCHITECTURE
 * business logic - code that solves the actual business problem eg. sending messages, storing transactions, calculating taxes
 * state - stores all the data about the application that is running in the browser, UI needs to be kept in sync with the state eg. redux, react
 * http library - making and receiving AJAX requests, eg. fetch, atom
 * application logic (router) - implementation of the application itself, handling UI events and navigation
 * presentation logic (UI layer) - visible part of the application, displaying the application state on the UI to keep everything in state
 * 
 * need to separate out different components so we don't have a great big mess
 * 
 * MVC - model, view, controller
 * view - presentation logic
 * model - business logic, state, http library
 * controller - application logic, creates bridge between model and view
 * 
 * separate business logic from application logic which makes developing the application so much easier
 * 
 * EXAMPLE
 * user clicks in UI
 * controller handles event, requests data from model and updates the view
 * so only the controller executes functions
 * 
 * often model and controller are modules while the view is one or more classes
 * 
 * PUBLISHER SUBSCRIBER PATTERN
 * we want to LISTEN for dom events in the view but HANDLE those events in the controller (otherwise we have presentation logic in the controller)
 * the view doesn't import the controller so we can't call controller functions from the view
 * the solution is the publisher subscriber pattern
 * we have a publisher which knows when to react and the subscriber which controls how to react in the controller
 * the subscriber subscribes to the publisher during init, passing the subscriber's execution function
 * 
 */