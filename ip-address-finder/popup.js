// Select the <div> and <button> from popup.html 
// as we want to change/action these.
let divIp = document.querySelector('#ip');
let btnCopy = document.querySelector('#btnCopy');

// Assign a 'onclick' event to the button
// which copies to the clipboard the text in the <div>
btnCopy.onclick = () =>
{
    const el = document.createElement('textarea');
    el.value = divIp.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

const getIp = async () =>
{
    let ip = 'No internet';

    let response = await fetch('https://api.ipify.org/');

    if (response.ok)
    {
        ip = await response.text();
        console.log(ip)
    }

    // Set our <div> to the retrieved IP address
    divIp.innerHTML = ip;
}

// Run the 'getIp' function once the popup is loaded
getIp();