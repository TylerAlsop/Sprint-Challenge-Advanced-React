import React from "react";
import { render } from "@testing-library/react";
import PlayerList from '../Components/PlayerList';

///////////// Test(s) Empty Template /////////////

test("", () => {
    const {  } = render(<PlayerList />);
  
    (/yourtexthere/i);
});

///////////// ContactForm Render Test(s) /////////////

test("Renders PlayerList without crashing", () => {
    render(<PlayerList />);
  });