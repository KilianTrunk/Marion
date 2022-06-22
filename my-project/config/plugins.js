module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.mail.yahoo.com',
          port: 465,
          secure: true,
          auth: {
            user: 'humidigital@yahoo.com',
            pass: 'wfewnhwwxephefhh',
          },
          logger: true
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'humidigital@yahoo.com',
          defaultReplyTo: 'humidigital@yahoo.com',
        },
      },
    },
    // ...
  });