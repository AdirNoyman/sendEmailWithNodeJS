// const nodemailer = require('nodemailer');

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sendEmail = require('@sendgrid/mail');

const sendMailController = async (req, res) => {
	sendEmail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: 'ofahol2009@gmail.com', // Change to your recipient
		from: 'ofahol2007@hotmail.com', // Change to your verified sender
		subject: 'Sending with SendGrid is Fun 2',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};

	const send = await sendEmail
		.send(msg)
		.then(() => {
			console.log('Email sent 😎🤘');
		})
		.catch((error) => {
			console.error(error);
		});

	res.status(200).json(send);
};

module.exports = sendMailController;

/*
  // send email using 'Nodemailer' //////////////////
  const sendEmail = async (req, res) => {
	let testAccount = await nodemailer.createTestAccount();
	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'presley.dickens34@ethereal.email',
			pass: '3eU5QPBhc1WpbVZX17',
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: 'bar@example.com, baz@example.com', // list of receivers
		subject: 'Hellllloooooo 😁', // Subject line
		html: '<h1>Hello Adiros 🤓</h1>', // html body
	});

	res.json({ info });
};
  */
