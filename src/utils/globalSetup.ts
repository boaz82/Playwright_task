import { FullConfig } from "@playwright/test";
import dotenv from "dotenv"

async function globalSetup(config: FullConfig) {
    if (process.env.test_env === "env") {
        dotenv.config({
            path: `.${process.env.test_env}`,
            override: true
        })
    }else{
        throw "Environment file does not exist"
    }
}
export default globalSetup