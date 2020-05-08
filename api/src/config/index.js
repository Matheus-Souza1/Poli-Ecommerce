module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "GDSggdg5454545gds4545145f4ds545f124f5d4s51ds54f5as",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.amplie.com" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://loja-teste.amplie.com" : "http://localhost:8000"

};