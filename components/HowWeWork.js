import React from 'react';
import styles from './LandingPage.module.css';

const HowWeWork = () => {
    return (
        <div className={styles.section2}>
        <div className={styles.section2ImageHolder}>
          <div className={styles.section2ImageShadow}></div>
          <div className={styles.section2Image}></div>
        </div>
        <div className={styles.section2TextContainer}>
          <p className={styles.section2Header}>so, how do we work?</p>
          <p className={styles.section2Body}>
            Come on in with your friends and family and play board games from our collection of over 500+ games! 
            Just $10 a person for 3 hours of gameplay. ($12 a person Friday-Sunday and Holidays) 
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