import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default Layout;
