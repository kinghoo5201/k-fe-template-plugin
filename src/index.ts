// _IRIM_PROJECT_NAME_
// @author _IRIM_AUTHOR_ <_IRIM_EMAIL_>
// @create _IRIM_GMT_CREATE_

// 插件入口

import { Action } from "./Action";

export default function init(args: string[], options: Record<string, any>) {
  new Action(args, options);
}
