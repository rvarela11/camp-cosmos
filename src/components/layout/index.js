import React from 'react';
import styles from './layout.module.scss';

const Layout = ({ children }) => <div className={styles.layout}>{children}</div>;

export default Layout;
