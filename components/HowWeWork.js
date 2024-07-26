import React from 'react';
import styles from './LandingPage.module.css';

const HowWeWork = () => {
    return (
        <div className="bg-light-brown w-full flex flex-col items-center justify-center p-6 box-border relative md:flex-row">
        <div className="relative w-[350px] h-[350px] flex-shrink-0 m-12">
          <div className="relative w-[300px] h-[300px] bg-white z-10 shadow-[20px_20px_0px_0px_#f4ead7]"></div>
        </div>
        <div className="mt-8 mb-8 m-12 max-w-xl flex-1">
          <p className="text-eggshell text-3xl mb-4 font-inknut">so, how do we work?</p>
          <p className="text-dark-brown text-xl">
            Come on in with your friends and family and play board games from our collection of over 500+ games! 
          </p>
          <br></br>
          <ul className="text-dark-brown text-xl">
            <li>Just $10 a person for 3 hours of gameplay</li>
            <li>$12 a person Friday-Sunday and Holidays</li>
          </ul>
          <br></br>
          <p className="text-dark-brown text-xl">
            Play while enjoying bubble tea, coffee, beer sandwiches or salads and have a great time! 
            If you want to guarantee a table, you can make a reservation which is $15 a person for 3 hours of gameplay. 
            <br></br>
            <br></br>
            <a className="text-xl font-bold font-inknut" href="https://www.exploretock.com/sipnplay/">RSVP</a>
          </p>
        </div>
      </div>
    );
};

export default HowWeWork;