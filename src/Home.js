import React from 'react';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './Layout/Header';
import MainProgress from './Layout/Main-progress';
import MainConfig from './Layout/Main-config';
import MainRecommend from './Layout/Main-recommend';
import MainRequest from './Layout/Main-request';
import MainUsage from './Layout/Main-usage';
import MainIntroduce from './Layout/Main-introduce';
import MainReview from './Layout/Main-review';
import Qna from './Layout/Qna';
import Contact from './Layout/Contact';

function Home(){
    return(
        <>
                <Header />
                <MainIntroduce />
                <MainProgress />       
                <MainConfig />        
                <MainRequest />
                <MainUsage/>
                <MainRecommend />  
                <MainReview />
                <Qna/>
                <Contact />
        </>
    );
}

export default Home;