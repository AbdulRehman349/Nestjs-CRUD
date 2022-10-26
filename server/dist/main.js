"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    var cors = require('cors');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    await app.listen(5000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map