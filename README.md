# react_first_steps
To support my React First Steps course on O'Reilly Learning Portal

# Connect with Rap
I'd love to connect with you to provide any help I can with learning React. Please reach out.
- Twitter: [@Rap_Payne](https://twitter.com/Rap_Payne)
- LinkedIn: [RapPayne](https://www.linkedin.com/in/rappayne/)
- Github: [RapPayne](https://github.com/rapPayne)
- Web: AgileGadgets.com

We've created solutions at certain checkpoints. 
1. [How to create a React app](01_how_to_create_a_react_app)
2. [Creating a React component](02_creating_a_react_component)
3. [Props](03_props)
4. [Styling](04_styling)
5. [Events and State](05_events_and_state)

## How to run these examples
1. cd to the folder of your choice
3. npm install
4. npm run start

Of course you can make any changes to the code you like at this point. Just save a file and the app will refresh in your browser.

## Exercises

### 1. How to create a React app
This one is simple. Just run create-react-app to create the application.

### 2. Creating a React component
1. Make three component files: PeopleQuery.js, PeopleList.js and Person.js.
2. Add the data-reading code to App.js. If you like, you can copy the fetcher from assets/fetchPeople.js.
3. Add JSX to App.js to host PeopleQuery.js and PeopleList.js.
4. Add JSX to PeopleList.js to host Person.js.
5. Add a button to App.js to fetch 10 people. Console.log() them.
6. Add a people.map() to display all 10 of their names in App.js.

### 3. Props
Now, drawing the people in App.js doesn't seem clean. We should be drawing the people in PeopleList.js. But we have to get those people into PeopleList somehow. Props will do the trick!
1. Pass people from App.js down to PeopleList.js
2. Pass setState down to PeopleQuery.js and run the fetch from there.

### 4. Styling
1. Add in a CSS library like material-design-lite.
2. Use JavaScript styles for flexbox layout.

### 5. Events and State
1. Create searchParams as a state variable; nationality, gender, and number of results.
2. Call the setSearchParams on each of the changes to nationality, gender, and number of results.
3. Pass those values into the fetch function
