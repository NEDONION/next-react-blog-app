import { IronSession } from 'iron-session';

// 设置session  
export type ISession = IronSession & Record<string, any>;