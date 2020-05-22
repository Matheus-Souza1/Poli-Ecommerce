module.exports = {
    mode: process.env.NODE_ENV === "production" ? "live" : "sandbox",
    sandbox:  process.env.NODE_ENV === "production" ? false:true,
    sandbox_email:  process.env.NODE_ENV === "production" ? null: "c56800673676688913880@sandbox.pagseguro.com.br",
    email:"matheussouzaslv2@gmail.com",
    token: "8BCEABE08FB8415EBD7F9BBB6044349A",
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao"
};