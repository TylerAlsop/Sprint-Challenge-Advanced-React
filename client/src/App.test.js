import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

///////////// Test(s) Empty Template /////////////

test("", () => {
  const {  } = render(<App />);

  (/yourtexthere/i);
});

///////////// ContactForm Render Test(s) /////////////

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
