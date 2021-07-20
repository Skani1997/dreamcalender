import React from 'react';
import { HashRouter , Route } from 'react-router-dom';
import SurveyP from './SurveyPage';
import Home from './Home';

export default () => (
    <div >
      <HashRouter>
        <Route exact={true} path="/aia-survey-dev" component={Home}/>
        <Route path="/surveypage" component={SurveyP}/>
      </HashRouter>
    </div>
  )