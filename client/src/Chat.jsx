import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useSubscription,
  gql,
  useMutation,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const link = new WebSocketLink({
  // uri: "ws://localhost:4000/subscriptions",
  uri: "ws://localhost:5000",
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link,
  uri: "http://localhost:5000/",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      content
      user
    }
  }
`;

const POST_MESSAGES = gql`
  mutation ($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

const Messages = ({ user }) => {
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }

  return (
    <>
      {data.messages.map(({ id, user: messageUser, content }) => (
        <div
          style={{
            display: "flex",
            jusifyContent: user === messageUser ? "flex-end" : "flex-star",
            paddingBotton: "1em",
          }}
        >
          {user !== messageUser && (
            <div
              style={{
                height: 50,
                width: 50,
                marginRight: "0.5em",
                border: "2px solid #e5e6ea",
                borderRadius: 25,
                textAlign: "center",
                fontsize: "18pt",
                paddingTop: 10,
              }}
            >
              {messageUser.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div
            style={{
              background: user === messageUser ? "#58bf56" : "#e5e6ea",
              color: user === messageUser ? "white" : "black",
              padding: "1em",
              borderRadius: "1em",
              maxWidth: "60%",
            }}
          >
            {content}
          </div>
        </div>
      ))}
    </>
  );
};

const Chat = () => {
  const [state, setstate] = useState({ user: "Samuel", content: "" });
  const [postMessage] = useMutation(POST_MESSAGES);
  const onSend = () => {
    if (state.content.length > 0) {
      postMessage({
        variables: state,
      });
    }
    setstate({ ...state, content: "" });
  };
  return (
    <>
      <Container>
        <Messages user={state.user} />
        <Row>
          <Col
            xs={2}
            style={{
              padding: 0,
            }}
          >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  value={state.user}
                  onChange={(evt) =>
                    setstate({ ...state, user: evt.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Col>
          <Col
            xs={8}
            style={{
              padding: 0,
            }}
          >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  value={state.content}
                  onChange={(evt) =>
                    setstate({ ...state, content: evt.target.value })
                  }
                  onKeyUp={(evt) => {
                    if (evt.keyCode === 13) {
                      onSend();
                    }
                  }}
                  /* onKeyUp={(evt) => {
                    evt.preventDefault();
                    if (evt.key == "Enter") {
                      console.log(evt.key);
                      onSend();
                    }
                  }} */
                />
              </Form.Group>
            </Form>
          </Col>
          <Col
            xs={2}
            style={{
              padding: 0,
            }}
          >
            <Button onClick={() => onSend()} style={{ width: "100%" }}>
              Send
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
