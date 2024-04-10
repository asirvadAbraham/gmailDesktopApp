const packagejson = require("./package.json"); /** * Configuration of Electron build parameters */
const config = {
  // Application name, this name is used to name the application and the APP icon
  productName: `${process.env.APP_NAME}`,
  // Unique ID used to identify the app, electrom updater uses this ID
  appId: `${process.env.APP_ID}`,
  // The name of the .exe file
  artifactName: `${process.env.ARTIFACT_NAME}-${packagejson.version}.exe`,
  // Files and folders list to include in the exe package
  //   extraResources: ["./extraResources/**"],
  files: [
    "main.js",
    "constants.js",
    // "preload.js",
    "build/**/*",
    "node_modules/**/*",
    ".env",
  ],

  //   publish: {
  //     provider: "s3",
  //     bucket: "",
  //     region: "ap-northeast-1",
  //     path: "/",
  //   },

  // Windows specific build configurations such as
  // electron builder, app icons
  win: { target: ["nsis"], icon: `./${process.env.APP_ICON}` },
  extraMetadata: { main: "./main.js" },
  extends: null,
  // Electron Installer configurations(windows)
  nsis: {
    installerIcon: `./${process.env.APP_ICON}`,
    uninstallerIcon: `./${process.env.APP_ICON}`,
    uninstallDisplayName: "G-MAIL App",
    license: "licence.txt",
    oneClick: "false",
    allowToChangeInstallationDirectory: true,
  },
};
module.exports = config;
