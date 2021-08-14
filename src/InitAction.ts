// _IRIM_PROJECT_NAME_
// @author _IRIM_AUTHOR_ <_IRIM_EMAIL_>
// @create _IRIM_GMT_CREATE_

//  action

import { consts, utils, files } from "@irim/cli-base";
import { WORKSPACE, NPM_COMMAND, getInfo, NPM_REGISTRY } from "k-cli-utils";

const { HOMEPATH } = consts;

export class InitAction {
  args: string[];
  options: Record<string, any>;

  constructor(args: string[], options: Record<string, any>) {
    this.args = args;
    this.options = options;

    this.run();
  }

  /** 运行插件-done */
  async run() {
    utils.print("info", WORKSPACE);
  }
}
