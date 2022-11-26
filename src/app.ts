import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import swaggerUi from 'swagger-ui-express';
import router from './routes';

// const swaggerFile = require('../swagger_output.json');

const PORT = process.env.PORT || 3000;

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        // this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(methodOverride('_method'));
        this.app.use(cookieParser());
        this.app.use(cors({
        allowedHeaders: [
            "Origin",
            "X-Requested-With",
            "Content-Type",
            "Accept",
            "X-Access-Token",
        ],
        origin: true,
        credentials: true,
        preflightContinue: false,
        }));
        this.app.use(function(_req, res, next){
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            res.setHeader("Access-Control-Allow-Headers", "content-type");
            res.setHeader("Content-Type", "application/json");
            res.setHeader("Access-Control-Allow-Credentials", 'true');
            next();
        });
        
        this.app.use('/', router);
    }

    public async start() {
        try {
            // await db_connection.sync();
            this.app.listen(PORT, () => {
              console.log("Server started on port 3000");
            });
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }
}

export default App;

