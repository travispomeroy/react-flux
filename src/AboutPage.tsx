import React from "react";

export default class AboutPage extends React.Component<{}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>About</h2>
        <p>This app uses React.</p>
      </>
    );
  }
}
