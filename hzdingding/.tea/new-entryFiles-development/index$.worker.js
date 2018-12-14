
require('./config$.js?appxworker=1');
require('./importScripts$.js?appxworker=1');
function success() {
require('../..//app.js?appxworker=1');
require('../../node_modules/mini-ddui/es/search-bar/index.js?appxworker=1');
require('../../node_modules/mini-ddui/es/swipe-action/index.js?appxworker=1');
require('../../page/common/badge/index.js?appxworker=1');
require('../../node_modules/mini-ddui/es/list/list-item/index.js?appxworker=1');
require('../../node_modules/mini-ddui/es/breadcrumb/index.js?appxworker=1');
require('../../node_modules/mini-ddui/es/tabs/index.js?appxworker=1');
require('../../node_modules/mini-ddui/es/tabs/tab-content/index.js?appxworker=1');
require('../../node_modules/mini-ddui/es/input-item/index.js?appxworker=1');
require('../../page/component/index.js?appxworker=1');
require('../../page/component/infoNotice/infoNotice.js?appxworker=1');
require('../../page/component/infoNotice/infoDetail/infoDetail.js?appxworker=1');
require('../../page/component/recevieDetail/recevieDetail.js?appxworker=1');
require('../../page/component/taskAssign/taskAssign.js?appxworker=1');
require('../../page/component/taskAssign/infoDetail/infoDetail.js?appxworker=1');
require('../../page/component/approve/approve.js?appxworker=1');
require('../../page/component/meeting/meeting.js?appxworker=1');
require('../../page/component/filter/filter.js?appxworker=1');
require('../../page/component/eventManage/eventManage.js?appxworker=1');
require('../../page/API/date-picker/date-picker.js?appxworker=1');
require('../../page/API/index/index.js?appxworker=1');
require('../../page/API/set-navigation-bar/set-navigation-bar.js?appxworker=1');
require('../../page/API/choose-location/choose-location.js?appxworker=1');
require('../../page/API/get-user-info/get-user-info.js?appxworker=1');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
