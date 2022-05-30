const mailjet = require('node-mailjet').connect(process.env.MJ_KEY, process.env.MJ_SECRET);

const sendMail = (to, subject, text) => {
  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: process.env.EMAIL_FROM,
            Name: process.env.EMAIL_FROM_NAME,
          },
          To: [
            {
              Email: to,
            },
          ],
          Subject: subject,
          TextPart: text,
        },
      ],
    });
  request
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err.statusCode);
    });
};

module.exports = sendMail;
