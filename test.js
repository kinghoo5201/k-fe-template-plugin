const { utils } = require("@irim/cli-base");

(async () => {
  const projectDesc = await utils.prompt("请输入项目描述: ");
  console.log("log[projectDesc]-->", projectDesc);
})();
