await strapi.plugins['email'].services.email.send({
    to: ctx.request.body.to,
    from: 'humidigital@yahoo.com',
    replyTo: ctx.request.body.to,
    subject: 'New email from the website',
    text: `<h1>${ctx.request.body.to}</h1><p>${ctx.request.body.message}</p>`,
    html: `<h1>${ctx.request.body.to}</h1><p>${ctx.request.body.message}</p>`
  }, config);