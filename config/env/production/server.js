module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://mauka-poc.herokuapp.com/'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })
