import React from 'react';
import styles from 'wechart/wechart.scss';
import Panel from './Panel';
import ChatArea from './ChatArea';

function Wechat() {
  return (
    <main className={styles.container}>
      <strong className={styles.tips}>未完待续..</strong>
      <Panel />
      <ChatArea />
    </main>
  );
}
export default Wechat;
