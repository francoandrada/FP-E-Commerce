



// exports.emailCompra = async (req, res) => {
    
// 	const { email } = req.body;
// 	let user = await User.findOne({
// 		where: {
// 			email: email,
// 		},
// 	});
// 	if (!user) {
// 		res.status(400).send({ msg: "The user doesn't exist" });
// 	}

// 	try {
// 		let transporter = nodemailer.createTransport({
// 			service: 'gmail',
// 			auth: {
// 				type: 'OAuth2',
// 				user: process.env.MAIL_USERNAME,
// 				pass: process.env.MAIL_PASSWORD,
// 				clientId: process.env.OAUTH_CLIENTID,
// 				clientSecret: process.env.OAUTH_CLIENT_SECRET,
// 				refreshToken: process.env.OAUTH_REFRESH_TOKEN,
// 			},
// 		});
// 		const token = jwt.sign(
// 			{ id: user.userId, name: user.name },
// 			process.env.RESET_PASSWORD_KEY,
// 			{ expiresIn: '6h' }
// 		);
// 		var mailOptions = {
// 			from: 'hardwarecommerce@gmail.com',
// 			to: email,
// 			subject: 'Reset your password',
// 			html: `
// 		 <h2>Please click on given link to reset your password </h2>
// 		 <a href="${process.env.CLIENT_URL}/reset-password/${token}">Reset Password</a>
// 		 `,
// 		};

// 		user.update({ resetLink: token });

// 		transporter.sendMail(mailOptions, function (error, info) {
// 			if (error) {
// 				console.log(error);
// 			}
// 			res.send({ msg: 'Check your email and open the link we sent to continue' });
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// };