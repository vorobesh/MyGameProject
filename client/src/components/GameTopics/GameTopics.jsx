import React from 'react';
import styles from './gameTopics.module.css'


function GameTopics({ topic }) {


  return (
    <div className={styles.topic}>
      <p>{topic.topic_name}</p>
    </div>
  );
}

export default GameTopics;
