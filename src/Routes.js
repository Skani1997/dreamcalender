import React from 'react';
import { HashRouter, Route ,Switch } from 'react-router-dom';
import SurveyP from './SurveyPage';
import Home from './Home';

export default () => (
    <div >
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/surveypage" component={SurveyP}/>
        </Switch>
      </HashRouter>
    </div>
  )
