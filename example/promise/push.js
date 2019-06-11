let RongSDK = require('../../index')({
  appkey: '8luwapkvucoil',
  secret: 'y0icysjl4h3LWz'
});

let Push = RongSDK.Push;

// let content = {
//   platform: ["ios", "android"],
//   audience: { tag: ["女", "年轻"], tag_or: ["北京", "上海"], userid: ["123", "456"], "is_to_all": false },
//   notification: {
//     alert: "this is a push",
//     ios: { title: "标题", alert: "override alert", extras: { id: "userId2", name: "Lisa" } },
//     android: { alert: "override alert", extras: { id: "userId", name: "martin" } }
//   }
// };
// Push.push(content).then(result => {
// 	console.log(result);
// }, error => {
// 	console.log(error);
// });

let content = {
  platform: ["ios", "android"],
  fromUserId: 'mon888',
  audience: { tag: ["女", "年轻"], tag_or: ["北京", "上海"], userid: ["123", "456"], is_to_all: false },
  message: {
    content: JSON.stringify({ content: 'hello' }),
    objectName: "RC:TxtMsg"
  },
  notification: {
    alert: "this is a push",
    ios: { title: "标题", alert: "override alert", extras: { id: "userId2", name: "Lisa" } },
    android: { alert: "override alert", extras: { id: "userId", name: "martin" } }
  }
};
Push.message(content).then(result => {
  console.log(result);
}, error => {
  console.log(error);
});

