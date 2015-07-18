import React from 'react';
import Note from './Note';

export default class App extends React.Component {
  render() {

    var notes = [{
      task: "Learn webpack"
    }, {
      task: "Learn React"
    }, {
      task: "Do Laundry"
    }, {
      task: "And another task"
    }];

    return (
      <div>
        <ul>{notes.map((note, i) =>
          <li key={'note'+i}>
            <Note value={note.task} />
          </li>
        )}</ul>
      </div>
    );
  }
}
