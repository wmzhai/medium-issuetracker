Patients = new Mongo.Collection('patients');

Patients.attachSchema(new SimpleSchema({
  name:{
    type: String,
    label: "姓名",
    max: 10
  },

  spellCode:{
    type: String,
    label: "缩写",
    max: 10
  },

  gender:{
    type: String,
    label: "性别",
    allowedValues: ['男', '女']
  },

  phone:{
    type: String,
    label: "电话",
    max: 20
  },

  wechat:{
    type: String,
    label: "微信号",
    max: 50
  },

  address:{
    type: String,
    label: "地址",
    max: 100
  },

  birthday:{
    type: Date,
    label: "生日"
  },

  birthplace:{
    type: String,
    label: "出生地",
    max: 100
  },

  createdBy: {
    type: String,
    label: "创建人",
    autoValue: function() {
      return this.userId
    }
  },

  createdAt:{
    type: Date,
    label: "创建日期"
  },

  updatedAt:{
    type: Date,
    label: "更新日期"
  }

}));

if (Meteor.isServer) {
  Patients.allow({
    insert: function (userId, doc) {
      return userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId;
    },

    remove: function (userId, doc) {
      return userId;
    }
  });
}
