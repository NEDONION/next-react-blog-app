import { useState } from 'react';
import styles from './index.module.scss';

interface IProps {
  isShow: boolean;
  onClose: Function;
}

const Login = (props: IProps) => {
  const { isShow = false, onClose } = props;
  const [form, setForm] = useState({
    // 手机号
    phone: '',
    // 验证码
    verify: '',
  });

  const handleClose = () => {};

  const handleGetVerifyCode = () => {};

  const handleLogin = () => {};

  const handleOAuthGithub = () => {};

  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>
          <div>手机号登录</div>
          <div className={styles.close} onClick={handleClose}>
            x
          </div>
        </div>
        <input
          name="phone"
          type="text"
          placeholder="请输入手机号"
          value={form.phone}
        />
        <div className={styles.verifyCodeArea}>
          <input
            name="verify"
            type="text"
            placeholder="请输入验证码"
            value={form.verify}
          />
          {/* 获取验证码的点击函数 */}
          <span className={styles.verifyCode} onClick={handleGetVerifyCode}>
            获取验证码
          </span>
        </div>
        <div className={styles.loginBtn} onClick={handleLogin}>
          登录
        </div>
        <div className={styles.otherLogin} onClick={handleOAuthGithub}>
          GitHub 登录
        </div>
        <div className={styles.loginPrivacy}>
          注册登录即表示同意
          <a
            href="https://moco.imooc.com/privacy.html"
            target="_blank"
            rel="noreferrer"
          >
            《隐私协议》
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
