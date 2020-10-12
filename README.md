# react_first_steps
To support my React First Steps course on O'Reilly Learning Portal

We've created solutions at certain checkpoints. 
1. [How to create a React app](01_how_to_create_a_react_app)
2. Creating a React component
3. Props
4. Styling
5. Events
6. State

## How to run these examples
1. cd to the folder of your choice
3. npm install
4. npm run start

Of course you can make any changes to the code you like at this point.Just save a file and the app will refresh in your browser.

## Exercises

### 1. How to create a React app
This one is simple. Just run create-react-app to create the application.

### 2. Creating a React component
1. Make two component files: PeopleQuery.js and PeopleList.js.
2. Add the data-reading code to App.js. If you like, you can copy the fetcher from assets/fetchPeople.js.
3. Add JSX to App.js to host PeopleQuery.js and PeopleList.js.
4. Add a button to App.js to fetch 10 people. Console.log() them.
5. Add a people.map() to display all 10 of their names.

### 3. Props
Now, drawing the people in App.js doesn't seem clean. We should be drawing the people in PeopleList.js. But we have to get those people into PeopleList somehow. Props will do the trick!
1. Pass people from App.js down to PeopleList.js
2. Pass setState down to PeopleQuery.js and run the fetch from there.

### 4. Styling
1. Add in a CSS library like material-design-lite.
2. Use JavaScript styles for flexbox layout.

### 5. Events and State

1. Set queryParams; nationality, gender, and number of results.
2. Call the setQueryParams on each of the changes to nationality, gender, and number of results.