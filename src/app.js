// Creating React element with text content
const elt = React.createElement('h1', {className: 'text-2xl'}, 'Step 1: React Elements');

// Creating React element with nested elements
const card = React.createElement('div', {className: 'max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg'},
  React.createElement('div', {className: 'px-6 py-4'}, [
    React.createElement('div', {className: 'font-bold text-xl mb-2', key: 2}, 'Just Elements'),
    React.createElement('p', {className: 'text-gray-700 text-base', key: 3}, `
            React baut einen internen Elemente-Baum auf, der durch die ReactDOM Bibliothek in
            einen Container gerendert wird. Dass heißt: jetzt werden die React-Elemente umgewandelt in
            DOM-Knoten und nach einem Abgleich mit dem bestehenden DOM die Unterschiede/Änderungen angewandt.
        `)
  ])
);

ReactDOM.render(elt, document.getElementById('root'));
ReactDOM.render(card, document.getElementById('card'));
