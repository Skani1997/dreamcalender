import React from 'react';
import { BrowserRouter , Route ,Switch } from 'react-router-dom';
import SurveyP from './SurveyPage';
import Home from './Home';

export default () => (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/surveypage" component={SurveyP}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
