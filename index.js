const mockserver = require('mockserver-node');

mockserver.start_mockserver({
    serverPort: 9001,
    trace: true,
});