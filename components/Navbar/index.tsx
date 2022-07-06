import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Avatar, Dropdown, Menu, message } from 'antd';
import Login from 'components/Login';
import { navs } from './config';
import styles from './index.module.scss';

const Navbar: NextPage = () => {
    const { pathname, push } = useRouter();
    // hooks定义变量和修改变量的方法
    const [ isShowLogin, setIsShowLogin ] = useState(false);

    const handleGotoEditorPage = () => {
    };

    // 触发登录弹窗
    const handleLogin = () => {
        setIsShowLogin(true);
    };

    const handleClose = () => {
        setIsShowLogin(false);
    };

    return (
        <div className={styles.navbar}>
            <section className={styles.logoArea}>Next-Blog</section>
            <section className={styles.linkArea}>
                {
                    navs?.map(nav => (
                        <Link key={nav?.label} href={nav?.value}>
                            {/* 导航栏标签激活时的样式 */}
                            <a className={pathname === nav?.value ? styles.active : ''}>{nav?.label}</a>
                        </Link>
                    ))
                }
            </section>
            <section className={styles.operationArea}>
                {/* 给button添加触发事件 */}
                <Button onClick={handleGotoEditorPage}>发帖</Button>
                <Button type='primary' onClick={handleLogin}>登录</Button>
            </section>
            {/* 登录弹窗需要关闭和展示 */}
            <Login isShow={isShowLogin} onClose={handleClose} />
        </div>
    )
}

export default Navbar;