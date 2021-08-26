import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "./index.css";

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis
      molestie placerat. Nam vitae iaculis mi. Mauris consequat venenatis
      ultrices. Ut aliquam sapien ac dictum imperdiet. Mauris in elit eu risus
      elementum suscipit nec rhoncus tellus. Nunc sodales augue in sagittis
      condimentum. Mauris sodales a ex et tincidunt. Fusce efficitur quis nisi
      quis egestas. Vivamus a odio mollis, tristique justo nec, vehicula tellus.
      Nulla vel accumsan elit, nec faucibus turpis. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Duis ac vehicula orci. Duis gravida facilisis
      ligula, sit amet sollicitudin ligula. Etiam tempus malesuada metus, eget
      viverra nisi auctor at. Donec ac lorem lacinia, eleifend ipsum vitae,
      bibendum mauris. Curabitur sit amet turpis vel nisi aliquet congue.
    </p>
    <h1>Chat!</h1>
    <div>Chat window here!</div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis
      molestie placerat. Nam vitae iaculis mi. Mauris consequat venenatis
      ultrices. Ut aliquam sapien ac dictum imperdiet. Mauris in elit eu risus
      elementum suscipit nec rhoncus tellus. Nunc sodales augue in sagittis
      condimentum. Mauris sodales a ex et tincidunt. Fusce efficitur quis nisi
      quis egestas. Vivamus a odio mollis, tristique justo nec, vehicula tellus.
      Nulla vel accumsan elit, nec faucibus turpis. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Duis ac vehicula orci. Duis gravida facilisis
      ligula, sit amet sollicitudin ligula. Etiam tempus malesuada metus, eget
      viverra nisi auctor at. Donec ac lorem lacinia, eleifend ipsum vitae,
      bibendum mauris. Curabitur sit amet turpis vel nisi aliquet congue.
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
