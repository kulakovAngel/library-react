import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './layouts/NavBar';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import PageHome from './pages/Home';
import PageBooks from './pages/Books';
import PageSingleBook from './pages/SingleBook';
import PageAuth from './pages/Auth';
import PageManager from './pages/Manager';
import style from './App.module.css';


function App() {
    return (
        <Router>
            <NavBar />
            <div className={style.mainContent}>
                <Header />
                <main className={style.documentMain}>
                    <Switch>
                        <Route exact path='/' component={ PageHome } />
                        <Route exact path='/books' component={ PageBooks } />
                        <Route path='/books/:id' component={ PageSingleBook } />
                        <Route path='/manage' component={ PageManager } />
                        <Route path='/auth' component={ PageAuth } />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;


/*





<Tabs titles={['Главная', 'Книги', 'Регистрация']} options={{orientation: 'vertical'}}>
            <a href='https://material-ui.com/ru/'>material-ui</a>
            <h2>sdvfds</h2>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <AuthForm />
                </Grid>
                <Grid item xs={6}>
                    <a href='https://material-ui.com/ru/'>material-ui</a>
                </Grid>
            </Grid>
        </Tabs>





*/