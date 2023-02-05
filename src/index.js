import { app, PORT} from './controller/expressController.js'
import connectDatabase from './database/db.js'
import routes from './routes/routers.js'

//ROUTERS
app.use(routes)


//CONNECTIONS
connectDatabase()
    .then(()=>{
        console.log('A conexão com o banco de dados foi estabelecida')
        app.listen(PORT, ()=> console.log('API inicializada e pronta'))

    })
    .catch((err)=> console.log('Erro ao tentar estabelecer conexão com o bando e dados, erro: '+err))