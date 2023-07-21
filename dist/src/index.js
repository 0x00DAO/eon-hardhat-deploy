"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const plugins_1 = require("hardhat/plugins");
const path_1 = __importDefault(require("path"));
const ExampleHardhatRuntimeEnvironmentField_1 = require("./ExampleHardhatRuntimeEnvironmentField");
// This import is needed to let the TypeScript compiler know that it should include your type
// extensions in your npm package's types file.
const task_names_1 = require("./task-names");
require("./type-extensions");
config_1.extendConfig((config, userConfig) => {
    var _a;
    // We apply our default config here. Any other kind of config resolution
    // or normalization should be placed here.
    //
    // `config` is the resolved config, which will be used during runtime and
    // you should modify.
    // `userConfig` is the config as provided by the user. You should not modify
    // it.
    //
    // If you extended the `HardhatConfig` type, you need to make sure that
    // executing this function ensures that the `config` object is in a valid
    // state for its type, including its extensions. For example, you may
    // need to apply a default value, like in this example.
    const userPath = (_a = userConfig.paths) === null || _a === void 0 ? void 0 : _a.newPath;
    let newPath;
    if (userPath === undefined) {
        newPath = path_1.default.join(config.paths.root, "newPath");
    }
    else {
        if (path_1.default.isAbsolute(userPath)) {
            newPath = userPath;
        }
        else {
            // We resolve relative paths starting from the project's root.
            // Please keep this convention to avoid confusion.
            newPath = path_1.default.normalize(path_1.default.join(config.paths.root, userPath));
        }
    }
    config.paths.newPath = newPath;
});
config_1.extendEnvironment((hre) => {
    // We add a field to the Hardhat Runtime Environment here.
    // We use lazyObject to avoid initializing things until they are actually
    // needed.
    hre.example = plugins_1.lazyObject(() => new ExampleHardhatRuntimeEnvironmentField_1.ExampleHardhatRuntimeEnvironmentField());
});
config_1.task(task_names_1.TASK_EON_DEPLOY_GAME_ROOT, async (args, hre) => {
    console.log(hre.example.sayHello());
});
//# sourceMappingURL=index.js.map