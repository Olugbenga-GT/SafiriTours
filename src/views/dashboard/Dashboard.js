import React from 'react';
import classes from './Dashboard.module.css';
import DashboardCard from "./DashboardCard";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import carbonquote from '../../assets/carbonquote.svg'
import creditcard from '../../assets/creditcard.svg'
import payment from '../../assets/payment.svg'
import bicheckcircle from '../../assets/bicheckcircle.svg'
import flutterwave from '../../assets/flutterwave.svg'
import reloadly from '../../assets/reloadly.svg'


const Dashboard = () => {
    const data = [
        {
            amount: "1500",
            title: "Amount saved",
            color: {bgColor: "#DCEEF5", col: "#0692C4"}
        },
        {
            amount: "5000",
            title: "Budget",
            color: {bgColor: "#D8FAD2", col: "#1FC406"}
        },
        {
            amount: "800",
            title: "Attainable emergency fund",
            color: {bgColor: "#F7E4E4", col: "#C4060C"}
        },
    ]

    const quickdata = [
        
        {
            icon: `${creditcard}`,
            title: "Make payment from your flutterwave card",
            color: {bgColor: "#D8FAD2", col: "#1FC406"}
        },
        {
            icon: `${bicheckcircle}`,
            title: "Request for travel loan",
            color: {bgColor: "#F7E4F7", col: "#1FC406"}
        },
        {
            icon: `${carbonquote}`,
            title: "Book travel through our partner agencies",
            color: {bgColor: "#DCEEF5", col: "#1FC406"}
        },
        {
            icon: `${payment}`,
            title: "Pay for airtime and data on the go",
            color: {bgColor: "#D8FAD2", col: "#1FC406"}
        },
    ]
    return (
        <div className = {classes.dashboard}>
               <h2>Dashboard</h2>
               <div className={classes.carddata}>
                   {data.map((value, key) =>
                       <DashboardCard
                           key={key}
                           title={value.title}
                           amount={value.amount}
                           color={value.color}
                           width ='370px'
                           height = '195px'
                       />
                   )}
               </div>
               <div className={classes.quicklinks}>
                        <h2>Quick links</h2>
                        <div className={classes.quickdata}>
                            {
                                quickdata.map((value, key) => 
                                
                                <DashboardCard 
                                icon = {value.icon}
                                key={key}
                                title={value.title}
                                color={value.color}
                                width ='275px'
                                height = '180px'
                                />
                                
                                )}
                        </div>
               </div>
               <div className= {classes.chart}>
                   <h2>Spending Analytics</h2>
                        <div className={classes.charts}>
                            <BarChart />
                            <PieChart />
                        </div>
               </div>
               <div className={classes.funds}>
                   <p>Funds secured by ...</p>
                   <span>
                       <img src={flutterwave} alt="flutterwave" />
                       <img src={reloadly} alt="reloadly" />
                   </span>
               </div>
        </div>
    );
};

export default Dashboard;