# hands_on_react
To support my Hands On React course on O'Reilly Learning Portal

# Connect with Rap
I'd love to connect with you to provide help learning React. Please reach out.
- X: [@RapPayne](https://X.com/RapPayne)
- LinkedIn: [RapPayne](https://www.linkedin.com/in/rappayne/)
- Github: [RapPayne](https://github.com/rapPayne)
- Web: AgileGadgets.com

We've created solutions at certain checkpoints. 
1. [Create a React app](02_create_a_react_app)
2. [Creating a React component](03_creating_a_react_component)
1. [JSX](04_JSX)
1. [Events](05_events)
1. [Styling](06_styling)
1. [State](07_state)
5. [Props](08_props)
1. [Composition](09_composition)

## How to run these examples
1. cd to the folder of your choice
3. npm install
4. npm run dev

Of course you can make any changes to the code you like at this point. Just save a file and the app will refresh in your browser.

## Exercises
(No exercise for section 1 - Intro to React).

### 2. Create a React app
This one is simple. Just `npm create vite` to create the application.

### 3. Creating a React component
1. Make two component files: People.jsx and Person.jsx.
2. Add the data-reading code to People.jsx. If you like, you can copy the fetcher from assets/fetchPeople.js.

### 4. JSX
Now, drawing the people in App.js doesn't seem clean. We should be drawing the people in People.js. But we have to get those people into PeopleList somehow. Props will do the trick!
3. Add JSX to App.jsx to host People.js.
4. Add JSX to People.js to host Person.js.
5. Add a button to People.js to fetch 10 people. Console.log() them.

### 5. Events
1. Make the delete button call your new deletePerson function

### 6. Styling
1. Add in CSS to format the Person. Put this in Person.css and import it.
2. Use JavaScript styles for the flexbox layout.

### 7. State
1. In People, add a function to delete a single person from the people list. Make it call setState() with the new list of people.
1. Add a delete button to each Person. 
1. Pass the function from People into Person via a prop.
1. Make the delete button call your new deletePerson function

### 8. Props
Now, drawing the people in App.js doesn't seem clean. We should be drawing the people in People.js. But we have to get those people into PeopleList somehow. Props will do the trick!
1. Pass people from People.js down to Person.js

### 9. Composition
