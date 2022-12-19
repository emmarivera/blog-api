app.use('/example', (req, res)  => {
    res.status(200).json({message:'Hola!!!'})
})

const methodMiddleware = (req, res, next) => {

}