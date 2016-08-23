import React from 'react';
import styles from 'wechart/panel.scss';
import avatatImg from 'avatar.jpg';

function Panel() {
  return (
    <div className={styles.container}>
      {/* 头部个人信息 */}
      <div className={styles.head}>
        <img src={avatatImg} className={styles.avatar} alt="头像" />
        <span className={styles.nickname}>刘东宇</span>
        <a className={styles.more} />
      </div>
      {/* 搜索框 */}
      <div className={styles.search}>
        <input type="text" placeholder="搜索" />
      </div>
      {/* 选项框 */}
    </div>
  );
}
export default Panel;
