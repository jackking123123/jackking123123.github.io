async function checkNetwork() {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            const chainId = await web3.eth.getChainId();
            const button = document.getElementById('networkButton');
            const button2 = document.getElementById('networkButton2');

            // Check if the current network is BSC (Binance Smart Chain)
            if (chainId === 56) { // 56 is the chain ID for BSC Mainnet
                button.textContent = 'Buy with BNB';
                button2.textContent = 'Buy with BNB';
                button.onclick = buyTokens;
                button2.onclick = buyTokens;
            } else {
                button.textContent = 'Switch to BNB Smart Chain';
                button2.textContent = 'Switch to BNB Smart Chain';
                button.onclick = switchNetwork;
                button2.onclick = switchNetwork;
            }
        } catch (error) {
            console.error('Error checking network:', error);
            button.textContent = 'Switch to BNB Smart Chain';
            button2.textContent = 'Switch to BNB Smart Chain';
            button.onclick = switchNetwork;
            button2.onclick = switchNetwork;
        }
    } else {
        alert('MetaMask is not installed!');
    }
}

async function switchNetwork() {
    if (window.ethereum) {
        try {
            // Request user to switch to BSC network
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x38', // BSC Mainnet Chain ID in hexadecimal
                    chainName: 'Binance Smart Chain',
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    nativeCurrency: {
                        name: 'Binance Coin',
                        symbol: 'BNB',
                        decimals: 18
                    },
                    blockExplorerUrls: ['https://bscscan.com']
                }]
            });
            // Reload the page to update button text
            window.location.reload();
        } catch (error) {
            console.error('Error switching network:', error);
        }
    } else {
        alert('MetaMask is not installed!');
    }
}


// Check the network when the page loads
window.addEventListener('load', checkNetwork);
