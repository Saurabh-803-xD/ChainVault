                                                            ChainVault
ChainVault is a blockchain-based application developed during the Smart India Hackathon (SIH) that securely manages and verifies student certificates using Ethereum and IPFS. By leveraging decentralized technologies, ChainVault provides a tamper-proof, transparent, and efficient solution for certificate management, ensuring authenticity and security for institutions and students alike.

Features
Decentralized Verification: Certificates are securely stored and verified using Ethereum's blockchain technology.
IPFS Integration: Student certificates are stored on the InterPlanetary File System (IPFS) for decentralized, immutable storage.
Tamper-proof: Ensures the integrity of certificates, preventing unauthorized modifications.
Transparent: Provides a transparent and auditable system for institutions to manage certificates.
Technologies Used
Frontend:
React.js for building the user interface.
CSS for styling the components.
Backend:
Node.js and Express.js for building the API.
Solidity for writing smart contracts.
Blockchain:
Ethereum for decentralized certificate verification.
IPFS for decentralized storage of certificate files.
Smart Contracts:
Solidity-based contracts for certificate management and verification.
Project Architecture
User Registration: Institutions and students can register on the platform using their credentials.
Certificate Issuance: Institutions can issue certificates to students, which are stored on IPFS and their metadata recorded on the Ethereum blockchain.
Certificate Verification: The certificates can be publicly verified by querying the blockchain, ensuring their authenticity and integrity.
How to Run ChainVault
Prerequisites
Before running the project, ensure you have the following installed:

Node.js
Truffle
IPFS
Ganache
MetaMask
Steps to Run Locally
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/chainvault.git
cd chainvault
Install dependencies:

bash
Copy code
npm install
Start the local blockchain (Ganache):

Open Ganache and start a new workspace.

Deploy the smart contracts:

bash
Copy code
truffle migrate --network development
Run IPFS:

Start the IPFS daemon:

bash
Copy code
ipfs daemon
Run the frontend application:

bash
Copy code
npm start
Access the application:

Open your browser and navigate to http://localhost:3000.

Smart Contract Overview
The smart contracts used in ChainVault ensure that certificates are tamper-proof and publicly verifiable. Each certificate is issued by an institution and is linked to the Ethereum blockchain, where its metadata is stored.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or further information, feel free to reach out:

Saurabh Verma
Email: saurabh8031999@gmail.com
