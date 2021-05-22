import React from 'react';
import Header from '../GeneralComponents/Header/header';
import Footer from '../GeneralComponents/footer'
import Main from './main';
import ScrollAndChat from '../GeneralComponents/scrollandchat';
import ScrollTop from '../GeneralComponents/scrolltop';

// ReactDOM.render(
//   <React.StrictMode>
    
//   </React.StrictMode>,
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

const Home = function () {
    return (
        <div>
            <Header />
            <ScrollTop />
            <Main />
            <ScrollAndChat />
            <Footer />
        </div>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

export default Home;