// _IRIM_PROJECT_NAME_
// @author _IRIM_AUTHOR_ <_IRIM_EMAIL_>
// @create _IRIM_GMT_CREATE_

// 插件入口

import { InitAction } from "./InitAction";

export default function init(args: string[], options: Record<string, any>) {
  new InitAction(args, options);
}
