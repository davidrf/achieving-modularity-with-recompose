// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
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
  Quote,
  Slide,
  S,
  Text,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import githubSrc from './github.png';
import twitterSrc from './twitter.svg';
import profileSrc from './profile.jpg';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { compose, lifecycle, withProps, withStateHandlers } from 'recompose';

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
      <Deck theme={theme}>
        <Slide bgColor="background">
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
        <Slide bgColor="background" textColor="grey">
          <Heading size={6} textColor="grey" caps>About Me</Heading>
          <Image height="150px" src={profileSrc} style={{ borderRadius: '5px' }}/>
          <List style={{ listStylePosition: 'outside' }}>
            <ListItem>Web Developer at Intrepid Pursuits. Recently acquired by Accenture.</ListItem>
            <ListItem>Previously Instructor at Launch Academy. Wrote first version of React curriculum.</ListItem>
            <ListItem>Enjoys Sailing, Skiing, and Salsa Dancing.</ListItem>
            <ListItem>Fan of Boston Sports Teams.</ListItem>
          </List>
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <BlockQuote textColor="grey">
            <Quote textColor="grey">
            Build encapsulated components that manage their own state, then compose them to make complex UIs.
            </Quote>
            <Cite textColor="blue">React Docs</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="background">
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
        <Slide bgColor="background" textColor="secondary">
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
        <Slide bgColor="background">
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
        <Slide bgColor="background">
          <Heading size={6} textColor="grey">Side to Side Component Comparison</Heading>
          <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/DeleteButtonFirstHalfForComparison.js")}
              />
            </Fit>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/PopUpFirstHalfForComparison.js")}
              />
            </Fit>
          </Layout>
        </Slide>
        <Slide bgColor="background">
          <Layout style={{ flexDirection: 'column', height: '80vh', justifyContent: 'space-between' }}>
            <Heading size={4} textColor="grey">Refactoring Logic</Heading>
            <Text textColor="grey">What technique can we use here to refactor this shared component logic??</Text>
            <Appear><Text italic textColor="grey" margin="0 0 20vh 0">Answer: Higher-Order Components (HOCs)</Text></Appear>
          </Layout>
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <Layout style={{ flexDirection: 'column', height: '100vh'}}>
            <Heading size={4} textColor="grey">Review of Higher Order Functions</Heading>
            <Text textColor="grey" margin="20px auto 0 0" textSize="2rem">Definition:</Text>
            <Text textColor="grey" margin="0 auto 0 0" textAlign="left" textSize="2rem" italic>A function that either receives a function as an argument (callback) or returns a function.</Text>
          </Layout>
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <Layout style={{ alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
            <Heading size={4} textColor="grey">Review of Higher Order Functions</Heading>
            <CodePane
              lang="jsx"
              source={require("./examples/higherOrderFunctions.js")}
              textSize="1.5rem"
              margin="0"
            />
          </Layout>
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <Layout style={{ flexDirection: 'column', height: '100vh' }}>
            <Heading size={4} textColor="grey">Higher Order Component</Heading>
            <Text textColor="grey" margin="20px auto 0 0" textSize="2rem">Definition:</Text>
            <Text textColor="grey" margin="0 auto 0 0" textAlign="left" textSize="2rem" italic>A higher-order component is a function that takes a component and returns a new component.</Text>
          </Layout>
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <Layout style={{ alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
            <Heading size={4} textColor="grey">Higher Order Component</Heading>
            <CodePane
              lang="jsx"
              source={require("./examples/higherOrderComponents.js")}
              margin="0"
              style={{ minWidth: '0px' }}
            />
          </Layout>
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <ComponentPlayground
            lang="jsx"
            code={require("./examples/higherOrderComponentsForPlayground.js")}
            scope={{
              Modal,
              PropTypes,
            }}
            style={{ textAlign: 'left' }}
            theme="light"
          />
        </Slide>
        <Slide bgColor="background">
          <Heading size={6} textColor="grey">Side to Side Component Comparison</Heading>
          <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/DeleteButtonFirstHalfForComparison.js")}
              />
            </Fit>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/PopUpFirstHalfForComparison.js")}
              />
            </Fit>
          </Layout>
        </Slide>
        <Slide bgColor="background">
          <Heading size={6} textColor="grey">Creating addModalProps HOC</Heading>
          <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/CreatingAddModalPropsFirstHalf.js")}
              />
            </Fit>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/CreatingAddModalPropsSecondHalf.js")}
              />
            </Fit>
          </Layout>
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <ComponentPlayground
            lang="jsx"
            code={require("./examples/CreatingAddModalPropsForPlayground.js")}
            scope={{
              Modal,
              PropTypes,
            }}
            style={{ textAlign: 'left' }}
            theme="light"
          />
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <Heading size={4} textColor="grey">Improving the addModalProps HOC</Heading>
          <List>
            <ListItem>Needs to set display name</ListItem>
            <ListItem>ShouldComponentUpdate Optimizations</ListItem>
          </List>
          <Appear>
            <Text size={6} textColor="grey" italic>
              .....or we could use Recompose!
              <span role="img" aria-label="raised-hands">🙌</span>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <Heading size={4} textColor="grey">Recompose by Andrew Clark</Heading>
          <List style={{ listStylePosition: 'outside' }}>
            <ListItem>From README: Recompose is a React utility belt for function components and higher-order components.</ListItem>
            <ListItem>Has functions to easily create HOCs.</ListItem>
            <ListItem>Has functions for working with HOCs.</ListItem>
          </List>
        </Slide>
        <Slide bgColor="background">
          <Heading size={6} textColor="grey" fit>Refactoring addModalProps using withStateHandlers</Heading>
          <Layout>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/CreatingAddModalPropsFirstHalf.js")}
              />
            </Fit>
            <Fit>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require("./examples/addModalPropsWithStateHandlers.js")}
                />
              </Appear>
            </Fit>
          </Layout>
        </Slide>
        <Slide bgColor="background">
          <Heading size={6} textColor="grey">Combining Multiple HOCs</Heading>
          <Layout>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/CombiningHOCs.js")}
              />
            </Fit>
          </Layout>
        </Slide>
        <Slide bgColor="background">
          <Code textSize="1.4rem">withRouter(connect(mapStateToProps)(addModalProps(DeleteButton)))</Code>
          <Appear>
            <div>
              <span role="img" aria-label="Expressionless" style={{ display: 'block', marginTop: '30px', fontSize: '100px' }}>😑</span>
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="background">
          <Layout style={{ alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
            <Heading size={6} textColor="grey">Combining Multiple HOCs with compose</Heading>
            <CodePane
              lang="jsx"
              source={require("./examples/CombiningHOCsWithCompose.js")}
              margin="0"
              style={{ minWidth: '0px' }}
            />
          </Layout>
        </Slide>
        <Slide bgColor="background">
          <Layout style={{ alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
            <Heading size={6} textColor="grey">Using lifecycle HOC</Heading>
            <CodePane
              lang="jsx"
              source={require("./examples/lifecycle.js")}
              margin="0"
              style={{ minWidth: '0px' }}
            />
          </Layout>
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <ComponentPlayground
            lang="jsx"
            code={require("./examples/lifecycleForPlayground.js")}
            scope={{
              compose,
              lifecycle,
              withStateHandlers,
            }}
            style={{ textAlign: 'left' }}
            theme="light"
          />
        </Slide>
        <Slide bgColor="background">
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
        <Slide bgColor="background">
          <Heading size={6} textColor="grey">Enhanced PopUp Component</Heading>
          <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/PopUpRefactoredFirstHalf.js")}
              />
            </Fit>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/PopUpRefactoredSecondHalf.js")}
              />
            </Fit>
          </Layout>
        </Slide>
        <Slide bgColor="background">
          <Heading size={6} textColor="grey">Generalizing HOCs</Heading>
          <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/GeneralizingHOCs.js")}
              />
            </Fit>
            <Fit>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require("./examples/GeneralizingHOCsSecond.js")}
                />
              </Appear>
            </Fit>
          </Layout>
        </Slide>
        <Slide bgColor="background">
          <Layout style={{ alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
            <Heading size={6} textColor="grey">Developing Using withProps</Heading>
            <CodePane
              lang="jsx"
              source={require("./examples/DevelopingUsingWithProps.js")}
              margin="0"
              style={{ minWidth: '0px' }}
            />
          </Layout>
        </Slide>
        <Slide bgColor="background" textColor="grey">
          <ComponentPlayground
            lang="jsx"
            code={require("./examples/DevelopingUsingWithPropsForPlayground.js")}
            scope={{
              withProps,
            }}
            style={{ textAlign: 'left' }}
            theme="light"
          />
        </Slide>
        <Slide bgColor="background">
          <Layout style={{ alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
            <Heading size={6} textColor="grey">Extracting Logic Using withProps</Heading>
            <CodePane
              lang="jsx"
              source={require("./examples/ExtractingLogicWithProps.js")}
              margin="0"
              style={{ minWidth: '0px' }}
            />
          </Layout>
        </Slide>
        <Slide bgColor="background">
          <Heading fit size={3} textColor="grey">Maximizing Component Reusability</Heading>
          <List style={{ listStylePosition: 'outside' }}>
            <ListItem>React pure components render the same UI if given the same data (i.e. <S type="italic">f(D<sub>0</sub>)=V<sub>0</sub></S>).</ListItem>
            <Appear><ListItem>If we want to render the same UI with new data we could create a new component (i.e. <S type="italic">f(D<sub>1</sub>)=V<sub>0</sub></S>).</ListItem></Appear>
            <Appear><ListItem>Or if we can derive the original data from the new data we could reuse the original component (i.e. first <S type="italic">f(D<sub>1</sub>)=D<sub>0</sub></S> and then use <S type="italic">f(D<sub>0</sub>)=V<sub>0</sub></S>).</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="background">
          <Heading size={6} textColor="grey">Component Resuability with flattenProps</Heading>
          <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/MaximizingComponentReusabilityFirst.js")}
              />
            </Fit>
            <Fit>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require("./examples/MaximizingComponentReusabilitySecond.js")}
                />
              </Appear>
            </Fit>
          </Layout>
        </Slide>
        <Slide bgColor="background">
          <Heading size={6} textColor="grey">Component Resuability with renameProp</Heading>
          <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Fit>
              <CodePane
                lang="jsx"
                source={require("./examples/MaximizingComponentReusabilityFirst.js")}
              />
            </Fit>
            <Fit>
              <Appear>
                <CodePane
                  lang="jsx"
                  source={require("./examples/MaximizingComponentReusabilityThird.js")}
                />
              </Appear>
            </Fit>
          </Layout>
        </Slide>
        <Slide bgColor="background">
          <Heading size={4} textColor="grey">Optimization HOCs</Heading>
          <List style={{ listStylePosition: 'outside' }}>
            <ListItem><Code>pure</Code> - Prevents re-render if next props are shallowly equal to current props.</ListItem>
            <ListItem><Code>onlyUpdateForKeys</Code> - Same as <Code>pure</Code> but you specify a subset of props.</ListItem>
            <ListItem><Code>onlyUpdateForPropTypes</Code> - Same as <Code>pure</Code> but only for props in PropTypes.</ListItem>
            <ListItem><Code>withPropsOnChange</Code> - returns memoized onChange result unless either specified props changed or given test function returns true.</ListItem>
          </List>
        </Slide>
        <Slide bgColor="background">
          <Heading size={4} textColor="grey">Summary</Heading>
          <List style={{ listStylePosition: 'outside' }}>
            <ListItem>Cross cutting concerns in components can be modularized via higher-order components.</ListItem>
            <ListItem>Small, focused higher-order components can be combined to achieve complex behaviors and increase component reusability.</ListItem>
            <ListItem>Use <Code>recompose</Code> to ease creation and usage of higher-order components in your code.</ListItem>
          </List>
        </Slide>
        <Slide bgColor="background">
          <Heading size={4} textColor="grey">Acknowledgements</Heading>
          <List style={{ listStylePosition: 'outside' }}>
            <ListItem>Nik Graf for his awesome talk at React Europe and Andrew Clark for creating <Code>recompose</Code>.</ListItem>
            <ListItem>Intrepid Pursuits/Accenture for employing me and sending me to React Europe.</ListItem>
            <ListItem>My director Benn Salter and the rest of my team for their support and help.</ListItem>
          </List>
        </Slide>
        <Slide bgColor="background">
          <Heading size={2} lineHeight={1} textColor="blue" margin="40px 0">
            Thank You ReactJS Boston!!!
          </Heading>
          <Text margin="0 0 10px 0" size={6} textColor="grey">David Rodriguez Fuentes (D-Rod)</Text>
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
      </Deck>
    );
  }
}

// <Slide transition={["fade"]} bgColor="tertiary">
  // <Heading size={6} textColor="primary" caps>Typography</Heading>
  // <Heading size={1} textColor="secondary">Heading 1</Heading>
  // <Heading size={2} textColor="secondary">Heading 2</Heading>
  // <Heading size={3} textColor="secondary">Heading 3</Heading>
  // <Heading size={4} textColor="secondary">Heading 4</Heading>
  // <Heading size={5} textColor="secondary">Heading 5</Heading>
  // <Text size={6} textColor="secondary">Standard text</Text>
// </Slide>
// <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
  // <Heading size={6} textColor="secondary" caps>Standard List</Heading>
  // <List style={{ listStylePosition: 'outside' }}>
    // <ListItem>Item 1</ListItem>
    // <ListItem>Item 2</ListItem>
    // <ListItem>Item 3</ListItem>
    // <ListItem>Item 4</ListItem>
  // </List>
// </Slide>
// <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
  // <BlockQuote>
    // <Quote>Example Quote</Quote>
    // <Cite>Author</Cite>
  // </BlockQuote>
// </Slide>
