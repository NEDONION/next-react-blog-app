import { useState } from 'react';
import { message, Tabs, Button, Tooltip } from 'antd';
import styles from './index.module.scss';

interface IProps {
  isShow: boolean;
  onClose: Function;
}

const { TabPane } = Tabs;

const Login = (props: IProps) => {
  const { isShow = false, onClose } = props;
  // 验证码展示的设置
  const [isShowVerifyCode, setIsShowVerifyCode] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    comfirmPassword: '',
  });

  const handleClose = () => {
    // 点击关闭窗口
    onClose && onClose();
  };

  const handleGetVerifyCode = () => {};

  const handleLogin = () => {};

  const handleRegister = () => {};

  const handleOAuthGithub = () => {};

  // 登录表单的提交
  const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  // 注册表单的提交
  const handleRegisterFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleCountDownEnd = () => {
    setIsShowVerifyCode(false);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <button className={styles.close} onClick={handleClose}>
          x
        </button>
        {/* 登录注册tabs页 居中 */}
        <Tabs
          defaultActiveKey="1"
          centered={true}
          tabBarStyle={{ fontWeight: 'bold' }}
          onChange={onChange}
        >
          <TabPane tab="注册" key="1">
            <input
              name="username"
              type="text"
              placeholder="请输入用户名"
              value={registerForm.username}
              onChange={handleRegisterFormChange}
            />
            <div className={styles.verifyCodeArea}>
              <input
                name="password"
                type="text"
                placeholder="请输入密码"
                value={registerForm.password}
                onChange={handleRegisterFormChange}
              />
            </div>
            <div className={styles.verifyCodeArea}>
              <input
                name="comfirmPassword"
                type="text"
                placeholder="请再次输入密码"
                value={registerForm.comfirmPassword}
                onChange={handleRegisterFormChange}
              />
            </div>

            <div className={styles.loginBtn} onClick={handleRegister}>
              注册
            </div>
          </TabPane>
          <TabPane tab="登录" key="2">
            <input
              name="username"
              type="text"
              placeholder="请输入用户名"
              value={loginForm.username}
              onChange={handleLoginFormChange}
            />
            <div className={styles.verifyCodeArea}>
              <input
                name="password"
                type="text"
                placeholder="请输入密码"
                value={loginForm.password}
                onChange={handleLoginFormChange}
              />
            </div>
            <div className={styles.loginBtn} onClick={handleLogin}>
              登录
            </div>
            <div className={styles.otherLogin} onClick={handleOAuthGithub}>
              GitHub 登录
            </div>
            <div className={styles.otherLogin} onClick={handleOAuthGithub}>
              还没有账号？注册新账号
            </div>
            <div className={styles.loginPrivacy}>
              注册登录即表示同意
              <a
                href="https://moco.imooc.com/privacy.html"
                target="_blank"
                rel="noreferrer"
              >
                用户协议
              </a>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  ) : null;
};

export default Login;
