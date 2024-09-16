const heading = React.createElement('div', { id: 'parent' }, [
  React.createElement('h2', { id: 'child' }, [
    React.createElement('h2', {}, "I'm h2 tag"),
    React.createElement('h1', {}, "I'm h1 tag"),
  ]),
  React.createElement('h2', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h2', {}, "I'm h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
