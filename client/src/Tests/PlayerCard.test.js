import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from '../Components/PlayerCard';

///////////// Test(s) Empty Template /////////////

test("", () => {
    const {  } = render(<PlayerCard />);
  
    (/yourtexthere/i);
});

///////////// ContactForm Render Test(s) /////////////

test("Renders PlayerCard without crashing", () => {
    render(<PlayerCard />);
  });