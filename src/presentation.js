// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import githubSrc from './github.png';
import twitterSrc from './twitter.svg';
import profileSrc from './profile.jpg';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  blue: "#268bd2",
  grey: "#586e75",
  background: "#fdf6e3",
  primary: "#586e75",
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      // <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
      <Deck transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="background">
          <Heading size={2} lineHeight={1} textColor="blue" margin="40px 0">
            Increasing Modularity With Recompose
          </Heading>
          <Text margin="0 0 10px 0" size={6} textColor="grey">by David Rodriguez Fuentes (D-Rod)</Text>
          <Layout style={{ alignItems: 'center' }}>
            <Fill>
              <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image display="inline" src={twitterSrc} margin="0 0 0 0" height="90px" />
                <Text size={6} textColor="grey" margin="0">
                  davidrf09
                </Text>
              </Layout>
            </Fill>
            <Fill>
              <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image display="inline" src={githubSrc} margin="0 10px 0 0" />
                <Text size={6} textColor="grey" margin="0">
                  davidrf
                </Text>
              </Layout>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="background" textColor="grey">
          <Heading size={6} textColor="grey" caps>About Me</Heading>
          <Image height="150px" src={profileSrc} style={{ borderRadius: '5px' }}/>
          <List style={{ listStylePosition: 'outside' }}>
            <ListItem>Web Developer at Intrepid Pursuits. Recently acquired by Accenture.</ListItem>
            <ListItem>Previously Instructor at Launch Academy. Wrote first version of React curriculum.</ListItem>
            <ListItem>Enjoys Sailing, Skiing, and Salsa Dancing.</ListItem>
            <ListItem>Fan of Boston Sports Teams.</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="background" textColor="grey">
          <BlockQuote textColor="grey">
            <Quote textColor="grey">
            Build encapsulated components that manage their own state, then compose them to make complex UIs.
            </Quote>
            <Cite textColor="blue">React Docs</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="background">
          <Heading size={6} textColor="grey">DeleteButton Component</Heading>
          <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/DeleteButtonFirstHalf.js")}
              />
            </Fit>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/DeleteButtonSecondHalf.js")}
              />
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="background" textColor="secondary">
          <ComponentPlayground
            lang="jsx"
            code={require("./examples/DeleteButtonForPlayground.js")}
            scope={{
              Modal,
              PropTypes,
            }}
            style={{ textAlign: 'left' }}
            theme="light"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="background">
          <Heading size={6} textColor="grey">PopUp Component</Heading>
          <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/PopUpFirstHalf.js")}
              />
            </Fit>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/PopUpSecondHalf.js")}
              />
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="background" textColor="secondary">
          <ComponentPlayground
            lang="jsx"
            code={require("./examples/PopUpForPlayground.js")}
            scope={{
              Modal,
              PropTypes,
            }}
            style={{ textAlign: 'left' }}
            theme="light"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
