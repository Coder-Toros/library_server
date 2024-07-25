
//====================================
const app = require('./src/app')
//======================================
require('dotenv').config()
 
const PORT = process.env.PORT || 5000;
const HOST_NAME = '127.0.0.1'

app.listen(PORT, HOST_NAME, () => {
    console.log(`Server starting at http://${HOST_NAME}:${PORT}`);
})
