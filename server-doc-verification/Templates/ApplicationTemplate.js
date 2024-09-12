const ApplicationTemplate = (instituteName, StudentName , courseName, StartDate, EndDate) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>Applied Successfully!!</title>
		<style>
			body {
				background-color: #0f1011;
				font-family: Arial, sans-serif;
				font-size: 8px;
				line-height: 1.4;
				color: white;
				margin: 0;
				padding: 0;
				
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.containt {
				font-size: 18px;
				font-family: 'Ubuntu', sans-serif; 
			}

			.containt p span{
				font-size: 18px;
				color: aqua;
			 }

			.head-short{
				padding: 0 0;
                font-size: 20px;
                font-weight: bolder;
			 }

			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}

		</style>
	
	</head>
	
	<body>
		<div class="container">
			<a href="https://imgbb.com/"><img src="https://i.ibb.co/nbr2BmG/Chain-Vault-removebg-preview.png" alt="Chain-Vault-removebg-preview" border="0"></a>

			<div class="containt" style="text-align: left;">
			<p>Hi, <span>${StudentName}</span></p>
            <p>You have Successfully apply for the <span style="font-size: 20px;font-weight: bold;">Certificate</span></p>
			</div>

			<div class="head-short">
			<p>CERTIFICATE DETAILS</p>
			</div>

			<div style="font-size: large;text-align: left;">
			<p style="font-size: 15px;">Your Name: <span style="color: #ef5b5b;">${StudentName}</span></p>
			<p style="font-size: 15px;">Institute Name: <span style="color: #ef5b5b;">${instituteName}</span></p>
			<p style="font-size: 15px;">Course Name: <span style="color: #ef5b5b;">${courseName}</span></p>
			<p style="font-size: 15px;">Start Date: <span style="color: #ef5b5b;">${StartDate}</span></p>
			<p style="font-size: 15px;">End Date: <span style="color: #ef5b5b;">${EndDate}</span></p>
            </div>

            <div style="text-align: center; font-size: large;">
            </div>


            <div style=" width: 100%; height: 0px; margin-top: 50px;margin-bottom: 50px; background-color: white;">-------------------------------------------------------</div>

			<div style=" font-size: 13px;text-align: left;">
            <p>-> Your Certificate will be generated by the institute after the approval and will be uploaded by them to the IPFS network.</p>
            <p>-> Then you can access your certificate by the IPFS hash of your certificate provided by the institute.</p>
           </div>

		   <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
					href="mailto:chainvaultpro@gmail.com">chainvaultpro@gmail.com</a>. We are here to help!</div>
			<div><img height="15px" src="https://i.ibb.co/nbr2BmG/Chain-Vault-removebg-preview.png" alt="chainvault"></div>

	</body>
	
	</html>`;
};
module.exports = ApplicationTemplate;