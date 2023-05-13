const Application = require('./framework/Application.js');
const userRouter = require('./src/user-router.js');
const jsonParser = require('./framework/parseJson.js');
const parseUrl = require('./framework/parseUrl.js');

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));

app.addRouter(userRouter);


app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`));
