const bcrypt = require('bcrypt');
exports.Encrypt = async (password)=>{
    return await bcrypt.hash(password,2);
};

exports.Decrypt = async (password,hash)=>{
    return await bcrypt.compare(password,hash);
}