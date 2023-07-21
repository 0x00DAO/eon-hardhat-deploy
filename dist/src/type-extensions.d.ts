import "hardhat/types/config";
import "hardhat/types/runtime";
import { ExampleHardhatRuntimeEnvironmentField } from "./ExampleHardhatRuntimeEnvironmentField";
declare module "hardhat/types/config" {
    interface ProjectPathsUserConfig {
        newPath?: string;
    }
    interface ProjectPathsConfig {
        newPath: string;
    }
}
declare module "hardhat/types/runtime" {
    interface HardhatRuntimeEnvironment {
        example: ExampleHardhatRuntimeEnvironmentField;
    }
}
//# sourceMappingURL=type-extensions.d.ts.map