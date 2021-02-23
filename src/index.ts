import * as dotenv from "dotenv";
import * as express from "express";
import {router} from "./routes/Routes.router";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

/**
 *  App Configuration
 */
app.use(express.json());
app.use("/sku", router);

/**
 * Webpack HotModuleReplacement Activation
 */
type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: any;
        accept(
            dependencies: string[],
            callback?: (updatedDependencies: ModuleId[]) => void,
        ): void;
        accept(dependency: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: any) => void): void;
    };
}

declare const module: WebpackHotModule;

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}

export default app;