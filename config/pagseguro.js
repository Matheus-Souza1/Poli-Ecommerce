module.exports = {
    mode: process.env.NODE_ENV === "production" ? "live" : "sandbox",
    sandbox:  process.env.NODE_ENV === "production" ? false:true,
    sandbox_email:  process.env.NODE_ENV === "production" ? null: "**@sandbox.pagseguro.com.br",
    email:"**",
    token: "**",
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao"
};
