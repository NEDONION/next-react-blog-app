export function validEmail(val: string): boolean  {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val);
  }
  
  export function validPhone(val: string): boolean {
    return /^1[3456789]\d{9}$/.test(val);
  }
  
  export function validPass(val: string): boolean {
    return /^[a-zA-Z\d]{8,20}$/.test(val);

  }
  
  export function validUserName(name: string): boolean {
    return validEmail(name) || validPhone(name);
  }
  
  export function validCode(val: string): boolean {
    return /^[0-9]{6}$/.test(val);
  }
  
  export function userName(str: string): boolean {
    const re = /^[\u4E00-\u9FA5A-Za-z0-9]+$/
    return re.test(str);
  }
  
  export function validateMainName2(name: string): boolean {
    const re = /^[a-zA-Z0-9_-]{1,19}$/
    return re.test(name);
  }
  
  export function validateNickName(name: string): boolean {
    const re = /^[a-zA-Z0-9\u4E00-\u9FA5]{2,10}$/
    return re.test(name);
  }
  
  export function formatDate(value: string): string {
    if (!value) {
      return '';
    }
    let d = new Date(value);
    let year = d.getFullYear();
    let month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
    return  year + '-' + month + '-' + day;
  }
  
  export function formatTime(value: string): string {
    if (!value) {
      return '';
    }
    let d = new Date(value);
    let month = d.getMonth() + 1;
    let day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
    let hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
    return  `${month}月${day}日 ${hour}时`;
  }
      
  
  export default {
    validEmail,
    validPhone,
    validUserName,
    validCode,
    validPass,
    userName,
    validateMainName2,
    validateNickName,
    formatDate
  }
  