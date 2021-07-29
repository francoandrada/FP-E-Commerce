const { User } = require('../db');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });
var nodemailer = require('nodemailer');

exports.authUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const { email, password } = req.body;
		console.log(req.body)

		let user = await User.findOne({
			where: {
				email: email,
			},
		});
		if (!user) {
			res.status(401).send({ msg: 'The user does not exist' });
		}

		if (bcrypt.compareSync(password, user.password)) {
			console.log('antes del token');
			const token = jwt.sign(
				{
					id: user.userId,
					name: user.name,
				},
				process.env.SECRET,
				{
					expiresIn: '8h',
				}
			);

			res.send({ token, user });
		} else {
			res.status(401).send({ msg: 'The password is incorrect' });
		}
	} catch (error) {
		console.log('ERRORORROOR', error);
	}
};

exports.userAuth = async (req, res, next) => {
	res.json({ user: req.user });
};

///FORGOT PASWORD
exports.forgotPassword = async (req, res) => {
	const { email } = req.body;
	let user = await User.findOne({
		where: {
			email: email,
		},
	});
	if (!user) {
		res.status(400).send({ msg: "The user doesn't exist" });
	}

	try {
		let transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: process.env.MAIL_USERNAME,
				pass: process.env.MAIL_PASSWORD,
				clientId: process.env.OAUTH_CLIENTID,
				clientSecret: process.env.OAUTH_CLIENT_SECRET,
				refreshToken: process.env.OAUTH_REFRESH_TOKEN,
			},
		});

		const token = jwt.sign(
			{ id: user.userId, name: user.name },
			process.env.RESET_PASSWORD_KEY,
			{ expiresIn: '6h' }
		);
		var mailOptions = {
			from: 'hardwarecommerce@gmail.com',
			to: email,
			subject: 'Reset your password',
			html: `
			<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
			<head>
			
			  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
			  <meta name="viewport" content="width=device-width, initial-scale=1.0">
			  <meta name="x-apple-disable-message-reformatting">
			  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
			  <title></title>
			  
				<style type="text/css">
				  table, td { color: #000000; } a { color: #303030; text-decoration: underline; }
			@media only screen and (min-width: 620px) {
			  .u-row {
				width: 600px !important;
			  }
			  .u-row .u-col {
				vertical-align: top;
			  }
			
			  .u-row .u-col-50 {
				width: 300px !important;
			  }
			
			  .u-row .u-col-100 {
				width: 600px !important;
			  }
			
			}
			
			@media (max-width: 620px) {
			  .u-row-container {
				max-width: 100% !important;
				padding-left: 0px !important;
				padding-right: 0px !important;
			  }
			  .u-row .u-col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			  }
			  .u-row {
				width: calc(100% - 40px) !important;
			  }
			  .u-col {
				width: 100% !important;
			  }
			  .u-col > div {
				margin: 0 auto;
			  }
			}
			body {
			  margin: 0;
			  padding: 0;
			}
			
			table,
			tr,
			td {
			  vertical-align: top;
			  border-collapse: collapse;
			}
			
			p {
			  margin: 0;
			}
			
			.ie-container table,
			.mso-container table {
			  table-layout: fixed;
			}
			
			* {
			  line-height: inherit;
			}
			
			a[x-apple-data-detectors='true'] {
			  color: inherit !important;
			  text-decoration: none !important;
			}
			
			</style>
			  
			  
			
			<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
			
			</head>
			
			<body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
			  <!--[if IE]><div class="ie-container"><![endif]-->
			  <!--[if mso]><div class="mso-container"><![endif]-->
			  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
			  <tbody>
			  <tr style="vertical-align: top">
				<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
			
			
			<div class="u-row-container" style="padding: 0px;background-color: #f9f9f9">
			  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f9f9f9;">
				<div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
		
			<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
			  <div style="width: 100% !important;">
			  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
			  
			<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
			  <tbody>
				<tr>
				  <td style="overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:'Lato',sans-serif;" align="left">
					
			  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #f9f9f9;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
				<tbody>
				  <tr style="vertical-align: top">
					<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
					  <span>&#160;</span>
					</td>
				  </tr>
				</tbody>
			  </table>
			
				  </td>
				</tr>
			  </tbody>
			</table>
			
			  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
			  </div>
			</div>
			
				</div>
			  </div>
			</div>
			
			
			
			<div class="u-row-container" style="padding: 0px;background-color: transparent">
			  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
				<div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
				
			<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
			  <div style="width: 100% !important;">
			  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
			  
			<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
			  <tbody>
				<tr>
				  <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px;font-family:'Lato',sans-serif;" align="left">
					
			<table width="100%" cellpadding="0" cellspacing="0" border="0">
			  <tr>
				<td style="padding-right: 0px;padding-left: 0px;" align="center">
			<h1 style="color: #ff3c4a; font-weight: bold; font-family:'Lato',sans-serif;">HARDWARE STORE</h1>
				  
				</td>
			  </tr>
			</table>
			
				  </td>
				</tr>
			  </tbody>
			</table>
			
			  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
			  </div>
			</div>
			<!--[if (mso)|(IE)]></td><![endif]-->
				  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
				</div>
			  </div>
			</div>
			
			
			
			<div class="u-row-container" style="padding: 0px;background-color: transparent">
			  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #303030;">
				<div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
			
			<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
			  <div style="width: 100% !important;">
			  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
			  
			<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
			  <tbody>
				<tr>
				  <td style="overflow-wrap:break-word;word-break:break-word;padding:35px 10px 10px;font-family:'Lato',sans-serif;" align="left">
					
			
			
			<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
			  <tbody>
				<tr>
				  <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 30px;font-family:'Lato',sans-serif;" align="left">
					
			  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
				<p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 28px; line-height: 39.2px; color: #ffffff; font-family: Lato, sans-serif;">Please reset your password </span></p>
			  </div>
			
				  </td>
				</tr>
			  </tbody>
			</table>
	
			  </div>
			</div>
			
				</div>
			  </div>
			</div>
			
			<div class="u-row-container" style="padding: 0px;background-color: transparent">
			  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
				<div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
			
			<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
			  <div style="width: 100% !important;">
			  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
			  
			<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
			  <tbody>
				<tr>
				  <td style="overflow-wrap:break-word;word-break:break-word;padding:40px 40px 30px;font-family:'Lato',sans-serif;" align="left">
					
			  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
				<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px; color: #666666;">Hello,</span></p>
			<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
			<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px; color: #666666;">We have sent you this email in response to your request to reset your password on company name.</span></p>
			<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
			<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px; color: #666666;">To reset your password, please follow the link below: </span></p>
			  </div>
			
				  </td>
				</tr>
			  </tbody>
			</table>
			
			<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
			  <tbody>
				<tr>
				  <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 40px;font-family:'Lato',sans-serif;" align="left">
					
			<div align="left">
				<a href="${process.env.CLIENT_URL}/reset-password/${token}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Lato',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #ff3c4a; border-radius: 1px; -webkit-border-radius: 1px; -moz-border-radius: 1px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
				  <span style="display:block;padding:15px 40px;line-height:120%;"><span style="font-size: 18px; line-height: 21.6px;">Reset Password</span></span>
				</a>
			  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
			</div>
			
				  </td>
				</tr>
			  </tbody>
			</table>
			
			<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
			  <tbody>
				<tr>
				  <td style="overflow-wrap:break-word;word-break:break-word;padding:40px 40px 30px;font-family:'Lato',sans-serif;" align="left">
					
			  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
				<p style="font-size: 14px; line-height: 140%;"><span style="color: #888888; font-size: 14px; line-height: 19.6px;"><em><span style="font-size: 16px; line-height: 22.4px;">Please ignore this email if you did not request a password change.</span></em></span><br /><span style="color: #888888; font-size: 14px; line-height: 19.6px;"><em><span style="font-size: 16px; line-height: 22.4px;">&nbsp;</span></em></span></p>
			  </div>
			
				  </td>
				</tr>
			  </tbody>
			</table>
			  </div>
			</div>
		
				</div>
			  </div>
			</div>
			<div class="u-row-container" style="padding: 0px;background-color: transparent">
			  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #303030;">
				<div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
			
			<div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
			  <div style="width: 100% !important;">
			  <!--[if (!mso)&(!IE)]><!--><div style="padding: 20px 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
			  
			<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
			  <tbody>
				<tr>
				  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
					
			  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
				<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px; color: #ecf0f1;">Contact</span></p>
			<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 14px; line-height: 19.6px; color: #ecf0f1;"> hardwarestore@gmail.com</span></p>
			  </div>
			
				  </td>
				</tr>
			  </tbody>
			</table>
			  </div>
			</div>
			
			<div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
			  <div style="width: 100% !important;">
			  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px 0px 0px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
			 
			
			<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
			  <tbody>
				<tr>
				  <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px;font-family:'Lato',sans-serif;" align="left">
					
			  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
				<p style="line-height: 140%; font-size: 14px;"><span style="font-size: 14px; line-height: 19.6px;"><span style="color: #ecf0f1; font-size: 14px; line-height: 19.6px;"><span style="line-height: 19.6px; font-size: 14px;">HardwareStore &copy;&nbsp; All Rights Reserved</span></span></span></p>
			  </div>
			
				  </td>
				</tr>
			  </tbody>
			</table>
			
			  </div>
			</div>
	
				</div>
			  </div>
			</div>
			<div class="u-row-container" style="padding: 0px;background-color: #f9f9f9">
			  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #1c103b;">
				<div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
			
			
			</body>
			
			</html>
	
	
		 `,
		};

		user.update({ resetLink: token });

		transporter.sendMail(mailOptions, function (err, data) {
			if (err) {
				console.log('Error ===> ' + err);
			} else {
				console.log('Email sent successfully');
			}
		});
	} catch (error) {
		console.log(error);
	}
};

///RESET PASWORD
exports.resetPassword = async (req, res) => {
	const { resetLink, newPass } = req.body;
	console.log(req.body);
	if (!resetLink || !newPass) {
		return res.status(401).json({
			msg: 'Incorrect token or it is expired',
		});
	}

	let user;
	try {
		let jwtPayload = jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY);
		user = await User.findOne({ where: { resetLink } });
	} catch (error) {
		console.log(error);
		return res.status(401).json({ msg: 'Something went wrong' });
	}

	const salt = await bcrypt.genSalt(10);
	const pass = await bcrypt.hash(newPass, salt);

	user.password = pass;
	user.save();

	res.send({ msg: 'pasword change' });
};

exports.authUserGmail = async (req, res) => {
	console.log(req.body)
	try {
		const emailBody = req.body.email;
		const passwordBody = req.body.password;
		const nameBody = req.body.name;
		const surnameBody = req.body.surname;
		
		let userGmail = await User.findOrCreate({
			where: {
				email: emailBody,
			},
			defaults: {
				email: emailBody,
				password: passwordBody,
				name: nameBody,
				surname: surnameBody
			},
		});
		
		const token = jwt.sign(
			{
				id: userGmail.userId,
				email: userGmail.email,
			},
			process.env.SECRET,
			{
				expiresIn: '8h',
			}
		);

		let user = userGmail[0]

		res.send({ token, user });
	} catch (error) {
		 console.log(error);
	}
};
