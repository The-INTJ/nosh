import React from 'react';
import styles from '@styles/pages/About.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About Old Baptist Hymanals</h1>
      <p className={styles.aboutDescription}>
        Old Baptist Hymnals is an app dedicated to making hymnals more accessible for everyone. Our mission is to help people from all walks of life experience the rich tradition of old Baptist hymn singing. By providing an easy-to-use platform, we aim to bring the joy and praise of hymn singing to a wider audience.
      </p>
      <p className={styles.aboutDescription}>
        Worship is our purpose here on earth. We believe also that worship has the power to connect people and uplift their spirits. Through this, we hope to preserve and share the beauty of these timeless hymns, allowing users to explore, learn, and appreciate the depth and history of this incredible music tradition, and most of all praise Him more abely. 
      </p>
    </div>
  );
};

export default About;
