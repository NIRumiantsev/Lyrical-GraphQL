import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import {App, SongList, SongCreate, SongDetail} from "./components"
import "./style/style.css"

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/"
               component={App}
        >
          <IndexRoute component={SongList}/>
          <Route path="song/new" component={SongCreate}/>
          <Route path="song/:id" component={SongDetail}/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
