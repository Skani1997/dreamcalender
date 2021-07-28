import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import SurveyP from './SurveyPage';
import Home from './Home';

export default () => (
    <div >
      <BrowserRouter>
            <Route exact={true} path="" component={Home}/>
            <Route path="/surveypage" component={SurveyP}/>
      </BrowserRouter>
    </div>
  )
