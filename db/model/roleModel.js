const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
  roleId: String, // 角色id
  roleName: String, // 角色名称
  authIds: String, // 具有的权限id的结合
  handle: String, // 操作
  roleDesc: String, // 角色描述
  _id: String,
  __v: String,
});

var Role = mongoose.model('roles', roleSchema);

module.exports = Role;