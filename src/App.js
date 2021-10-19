import React from 'react'
import {lazy , Suspense} from 'react'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import AppStyles from './styles/AppStyles';
import TheNavbar from './components/navbar/TheNavbar';
import Footer from './components/footer/Footer';

const Home = lazy(() => import("./views/home/Home"));
const Register = lazy(() => import ('./auth/signup/SignUp'))
const Account = lazy(() => import ('./views/account/Account'))
const Saving = lazy(() => import ('./views/savings/Saving'))
const Dashboard = lazy(() => import ('./views/dashboard/Dashboard'))



const  App = () =>  {


  const theme = {
        colors : {
          primaryColor: '#0692C4',
          darkGreyColor:'#222428',
          lightGreyColor: '#E5E5E5',
          whiteColor: '#ffffff',
          signUpColor: '#E90C13'
        }
  }

  return (
<Router>
    <ThemeProvider  theme = {theme}>
          <GlobalStyle/>
            <AppStyles>
            <Suspense fallback =  { <h1>Page Loading, Please hold on ...</h1>}>
            <TheNavbar/>
              <Switch>
                <Route strict exact path = "/" component = {Home} />
                <Route strict exact path = "/register" component = {Register} />
                <Route strict exact path = "/account" component = {Account} />
                <Route strict exact path = "/savings" component = {Saving} />
                <Route strict exact path = "/dashboard" component = {Dashboard} />
                </Switch>
            <Footer/>
            </Suspense>
            </AppStyles>
    </ThemeProvider>
</Router>
  );
}

export default React.memo(App);
