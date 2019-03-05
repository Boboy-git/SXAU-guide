// pages/sxauguide/sxauguide.js
var click =true
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 112.5840817937609,
    latitude: 37.42334029843902,
    scale:16,
    ishow:true
  },
  // 校门
  hx_door: function () {
    this.setData({
      hx_door: true,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      ishow:false,
      latitude: 37.42334029843902, //经度
      longitude: 112.5840817937609, //纬度
      scale: 16,
      markers: [{
          iconPath: '../../images/hxLocation.png',
          latitude: 37.42460923822909,
          longitude: 112.57850807958519,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.42505982099957,
          longitude: 112.58448746351345,
          width: 20,
          height: 30
        },{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.423356091749176,
        longitude: 112.59020697584626,
        width: 20,
        height: 30
      },{
        iconPath: '../../images/hxLocation.png',
          latitude: 37.420850652498494,
          longitude: 112.58636394568849,
        width: 20,
        height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.42046830521278,
          longitude: 112.59089438639249,
          width: 20,
          height: 30
        }]
    })
  },
  // 餐厅
  hx_canteen: function () {
    this.setData({
      hx_door: false,
      hx_canteen: true,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      ishow: false,
      latitude: 37.42334029843902, //经度
      longitude: 112.5840817937609, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.42217098294637,
        longitude: 112.58554120048987,
        width: 20,
        height: 30
      },
        {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.424741,
          longitude: 112.580423,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.421674,
          longitude: 112.591431,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.421563,
          longitude: 112.585369,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.421137,
          longitude: 112.585305,
          width: 20,
          height: 30
        }
      ]
    })
  },
  /******超市***/
  hx_supermarket: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: true,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      ishow: false,
      latitude: 37.42334029843902, //经度
      longitude: 112.5840817937609, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',   //大超市
        latitude: 37.422066,  /**大超市 */
        longitude: 112.585868,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //进门超市
          latitude: 37.421014, /**进门超市*/
          longitude: 112.585155,
        width: 20,
        height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //进门超市
          latitude: 37.421546, /**进门超市*/
          longitude: 112.591259,
          width: 20,
          height: 30
        }

      ]
    })
  },
  /****************************************教学楼***************************************** */
  hx_teach: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: true,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      ishow: false,
      latitude: 37.42334029843902, //经度
      longitude: 112.5840817937609, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',   //教学楼1
        latitude: 37.423821,
        longitude: 112.585863,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //教学楼2
        latitude: 37.424622,
        longitude: 112.581378,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //实验楼3
          latitude: 37.425074,
          longitude: 112.583610,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //实验楼4
          latitude: 37.424545,
          longitude: 112.585037,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //办公楼5
          latitude: 37.424230,
          longitude: 112.585917,
        width: 20,
        height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //办公楼6
          latitude: 37.423016,
          longitude: 112.586625,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //办公楼7
          latitude: 37.421550,
          longitude: 112.582945,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //办公楼8
          latitude: 37.423335,
          longitude: 112.584801,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //办公楼9
          latitude: 37.421452,
          longitude: 112.580155,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //办公楼10
          latitude: 37.421555,
          longitude: 112.579050,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //办公楼11
          latitude: 37.422398,
          longitude: 112.578599,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //办公楼12
          latitude: 37.424882,
          longitude: 112.582687,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',   //办公楼13
          latitude: 37.421883,
          longitude: 112.587698,
          width: 20,
          height: 30
        }

      ]
    })
  },

  /****************************************医 务 室***************************************** */
  hx_hospital: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: true,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      ishow: false,
      latitude: 37.42334029843902, //经度
      longitude: 112.5840817937609, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.425022,
        longitude: 112.585133,
        width: 20,
        height: 30
      }]
    })
  },
  /****************************************农大 体 育 场***************************************** */
  hx_playground: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: true,
      hx_library: false,
      hx_dorm: false,
      ishow: false,
      latitude: 37.42334029843902, //经度
      longitude: 112.5840817937609, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.421947,  /**大操场 */
        longitude: 112.589071,
        width: 20,
        height: 30
      },
      {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.425636,
        longitude: 112.582322,   /**小操场 */
        width: 20,
        height: 30
      }]
    })
  },
  /****************************************农大 图 书 馆***************************************** */
  hx_library: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: true,
      hx_dorm: false,
      ishow: false,
      latitude: 37.42334029843902, //经度
      longitude: 112.5840817937609, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.424051,  /**图书馆 */
        longitude: 112.580541,
        width: 20,
        height: 30
      }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.424524,  /**图书馆 */
          longitude: 112.583980,
          width: 20,
          height: 30
        }]
    })
  },

  /****************************************农大 宿 舍***************************************** */
  hx_dorm: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: true,
      ishow: false,
      latitude: 37.42334029843902, //经度
      longitude: 112.5840817937609, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.422066,  /**学生公寓1 */
        longitude: 112.584833,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 37.422394,   /**学生公寓2 */
          longitude: 112.586399,
        width:20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 37.421751,   /**学生公寓3 */
          longitude: 112.590798,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 37.425917,   /**学生公寓4 */
          longitude: 112.580520,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 37.421261,  /**活动中心宿舍楼*/
          longitude: 112.587896,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
          latitude: 37.421090,  /**洗浴中心宿舍楼 */
          longitude: 112.589441,
        width: 20,
        height: 30
      }


      ]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  go: function (e) {
    var id = e.currentTarget.id; //获取id
    switch (id) {
      /*农大校门门*/
      case "door1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.42460923822909,
          longitude: 112.57850807958519,
          scale: 25
        })
        break;
      case "door2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.42505982099957,
          longitude: 112.58448746351345,
          scale: 25
        })
        break;
      case "door3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.423356091749176,
          longitude: 112.59020697584626,
          scale: 25
        })
        break;
      case "door4":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.420850652498494,
          longitude: 112.58636394568849,
          scale: 25
        })
        break;
      case "door5":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.42046830521278,
          longitude: 112.59089438639249,
          scale: 25
        })
        break;

      /*农大餐饮*/
      case "canteen1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.42217098294637,
          longitude: 112.58554120048987,
          scale: 25
        })
        break;
      case "canteen2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.421674,
          longitude: 112.591431,
          scale: 25
        })
        break;
      case "canteen3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.424741,
          longitude: 112.580423,
          scale: 25
        })
        break;
      case "canteen4":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.421563,
          longitude: 112.585369,
          scale: 25
        })
        break;
      case "canteen5":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.421137,
          longitude: 112.585305,
          scale: 25
        })
        break;
      
      /*农大超市*/
      case "supermarket1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.422066,  /**大超市 */
          longitude: 112.585868,
          scale: 25
        })
        break;
      case "supermarket2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.421014, /**进门超市*/
          longitude: 112.585155,
          scale: 25
        })
        break;
      case "supermarket3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.421546, /**进门超市*/
          longitude: 112.591259,
          scale: 25
        })
        break;




      /**农大教学楼 */
      case "teach1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.423821,
          longitude: 112.585863,
          scale: 25
        })
        break;
      case "teach2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.424622,
          longitude: 112.581378,
          scale: 25
        })
        break;
      case "teach3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.425074,
          longitude: 112.583610,
          scale: 25
        })
        break;
      case "teach4":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.424545,
          longitude: 112.585037,
          scale: 25
        })
        break;
      case "teach5":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.424230,
          longitude: 112.585917,
          scale: 25
        })
        break;
      case "teach6":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.423016,
          longitude: 112.586625,
          scale: 25
        })
        break;
      case "teach7":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.421550,
          longitude: 112.582945,
          scale: 25
        })
        break;
      case "teach8":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.423335,
          longitude: 112.584801,
          scale: 25
        })
        break;
      case "teach9":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.421452,
          longitude: 112.580155,
          scale: 25
        })
        break;
      case "teach10":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.421555,
          longitude: 112.579050,
          scale: 25
        })
        break;
      case "teach11":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.422398,
          longitude: 112.578599,
          scale: 25
        })
        break;
      case "teach12":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.424882,
          longitude: 112.582687,
          scale: 25
        })
        break;
      case "teach13":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.421883,
          longitude: 112.587698,
          scale: 25
        })
        break;
      /**农大医务室 */
      case "hospital1":
        wx.openLocation({
          latitude: 37.425022,
          longitude: 112.585133,
          scale: 25
        })
        break;
      /**农大体育场 */
      case "playground1":
        wx.openLocation({
          latitude: 37.421947,  /**大操场 */
          longitude: 112.589071,
          scale: 25
        })
        break;
      case "playground2":
        wx.openLocation({
          latitude: 37.425636,
          longitude: 112.582322,   /**小操场 */
          scale: 25
        })
        break;
      /**农大图书馆*/
      case "library1":
        wx.openLocation({
          latitude: 37.424051,  /**图书馆 */
          longitude: 112.580541,
          scale: 25
        })
        break;
      case "library2":
        wx.openLocation({
          latitude: 37.424524,  /**图书馆 */
          longitude: 112.583980,
          scale: 25
        })
        break;


      /**农大宿舍楼*/
      case "dorm1":
        wx.openLocation({
          latitude: 37.422066,  /**学生公寓1 */
          longitude: 112.584833,
          scale: 25
        })
        break;
      case "dorm2":
        wx.openLocation({
          latitude: 37.422394,   /**学生公寓2 */
          longitude: 112.586399,
          scale: 25
        })
        break;
      case "dorm3":
        wx.openLocation({
          latitude: 37.421751,   /**学生公寓3 */
          longitude: 112.590798,

          scale: 25
        })
        break;
      case "dorm4":
        wx.openLocation({
          latitude: 37.425917,   /**学生公寓4 */
          longitude: 112.580520,
          scale: 25
        })
        break;
      case "dorm5":
        wx.openLocation({
          latitude: 37.421261,  /**活动中心宿舍楼*/
          longitude: 112.587896,
          scale: 25
        })
        break;
      case "dorm6":
        wx.openLocation({
          latitude: 37.421090,  /**洗浴中心宿舍楼 */
          longitude: 112.589441,
          scale: 25
        })
        break;
    }
  }
})