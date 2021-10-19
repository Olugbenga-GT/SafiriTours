import React from 'react';

const DashboardCard = ({amount, title, color, icon, width , height}) => {

    const cardStyle =  {
        backgroundColor: color.bgColor,
        color: color.col,
        width : width,
        height: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
       padding: '2rem 3rem',
       cursor : 'pointer',
       marginBottom: '2rem',
    };

    return (
        <div style={cardStyle}>
            { icon && <img src={icon} alt="icon" style ={{marginBottom : '2rem'}}/>}
            {amount &&  <h2 style={{ fontSize: '2.5rem', lineHeight: '1.6'  }}>${amount}</h2>}
            { title &&  <p style={{color: "#222428", fontFamily: 'Roboto', fontSize: '1.8rem'}}>{title}</p>}
        </div>
    );
};

export default DashboardCard;