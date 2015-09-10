(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('login/login.tpl.html',
    '<div  layout="column" class="inputdemoIcons" id="loginContainer">\n' +
    '  <br>\n' +
    '  <md-content layout-padding="" class="autoScroll">\n' +
    '    <md-input-container class="md-icon-float">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Email\' | translate">Email</label>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:rgb(255,64,129)"></ng-md-icon>\n' +
    '      <input ng-model="login.email" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-icon-float">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Password\' | translate">Password</label>\n' +
    '      <ng-md-icon icon="security" size="24" style="fill:rgb(255,64,129)"></ng-md-icon>\n' +
    '      <input ng-model="login.password" type="password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '    <div layout="row" ng-show="loading" layout-sm="column" layout-align="space-around" class="layout layout-row layout-align-space-around layout-sm layout-sm-column">\n' +
    '      <md-progress-circular md-mode="indeterminate" aria-valuemin="0" aria-valuemax="100" role="progressbar" class="ng-scope md-default-theme" style="transform: scale(0.5);"><div class="md-spinner-wrapper md-mode-indeterminate"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div></md-progress-circular>\n' +
    '      <p ng-bind="\'Please wait while the account creation is in progress\' | translate">Please wait while we check your account</p>\n' +
    '    </div>\n' +
    '     <md-button md-no-ink="" class="md-raised md-primary md-button md-default-theme" ng-click="checkCredential()">Submit</md-button>\n' +
    '  </md-content>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/user-add.tpl.html',
    '<div  layout="column" class="inputdemoIcons" id="userContainer">\n' +
    '  <br>\n' +
    '  <md-content layout-padding="" class="autoScroll">\n' +
    '    <md-input-container class="md-icon-float">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Name\' | translate">Name</label>\n' +
    '      <ng-md-icon icon="person" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.name" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <label ng-bind="\'I am\' | translate">I am </label>\n' +
    '      <md-select ng-model="user.role">\n' +
    '          <md-option ng-repeat="role in roles" value="{{role.code}}">{{role.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <label ng-bind="\'Country\' | translate">Country</label>\n' +
    '      <md-select ng-model="user.country">\n' +
    '          <md-option ng-repeat="country in countries" value="{{country.code}}">{{country.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container md-no-float="">\n' +
    '      <ng-md-icon icon="phone" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.phone" type="text" placeholder="Phone Number">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.email" type="email" placeholder="Email (required)" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container md-no-float="">\n' +
    '      <ng-md-icon icon="place" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.address" type="text" placeholder="Address">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <ng-md-icon icon="security" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.password" type="password" placeholder="Password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <!-- Use floating placeholder instead of label -->\n' +
    '      <ng-md-icon icon="security" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.confirmpassword" type="password" placeholder="Confirm password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <md-switch ng-model="user.notification" aria-label="Receive notifications">\n' +
    '        Receive notification\n' +
    '      </md-switch>\n' +
    '    </md-input-container>\n' +
    '    <div layout="row" ng-show="loading" layout-sm="column" layout-align="space-around" class="layout layout-row layout-align-space-around layout-sm layout-sm-column">\n' +
    '      <md-progress-circular md-mode="indeterminate" aria-valuemin="0" aria-valuemax="100" role="progressbar" class="ng-scope md-default-theme" style="transform: scale(0.5);"><div class="md-spinner-wrapper md-mode-indeterminate"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div></md-progress-circular>\n' +
    '      <p ng-bind="\'Please wait while the account creation is in progress\' | translate">Please wait while the account creation is in progress</p>\n' +
    '    </div>\n' +
    '     <md-button md-no-ink="" class="md-raised md-primary md-button md-default-theme" ng-click="createUser()">Submit</md-button>\n' +
    '  </md-content>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/ng-template" id="signupErrors.tmpl.html">\n' +
    '  <md-dialog aria-label="Signup Errors">\n' +
    '    <form>\n' +
    '    <md-toolbar>\n' +
    '    <div class="md-toolbar-tools">\n' +
    '      <h2 ng-bind="\'Signup Errors\' | translate"></h2>\n' +
    '      <span flex></span>\n' +
    '      <md-button class="md-icon-button" ng-click="hide()">\n' +
    '        <ng-md-icon icon="close" size="30" style="fill:white" aria-label="Close dialog"></ng-md-icon>\n' +
    '      </md-button>\n' +
    '    </div>\n' +
    '  </md-toolbar>\n' +
    '  <md-dialog-content style="max-width:800px;max-height:810px;">\n' +
    '    <div ng-repeat="error in errors">\n' +
    '     <div ng-bind="\'{{ error.fieldNames[0] + error.message }}\' | translate"></div>\n' +
    '     <div ng-show="error.classification == \'UserExistError\'">\n' +
    '      <a ng-bind="\'click here to login to your profile\' | translate"></a>\n' +
    '     </div>\n' +
    '    </div>\n' +
    '  </md-dialog-content>\n' +
    '  </form>\n' +
    '  </md-dialog>\n' +
    '</script>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/user-view.tpl.html',
    '<div  layout="column" class="inputdemoIcons">\n' +
    '  <br>\n' +
    '  <md-content layout-padding="" class="autoScroll">\n' +
    '    <md-input-container class="md-icon-float">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label>Name</label>\n' +
    '      <ng-md-icon icon="person" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.name" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <label>I am </label>\n' +
    '      <md-select ng-model="ctrl.userState">\n' +
    '          <md-option ng-repeat="role in roles" value="{{role}}">{{role}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container md-no-float="">\n' +
    '      <ng-md-icon icon="phone" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.phone" type="text" placeholder="Phone Number">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.email" type="email" placeholder="Email (required)" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container md-no-float="">\n' +
    '      <ng-md-icon icon="place" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.address" type="text" placeholder="Address">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.password" type="password" placeholder="Password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <!-- Use floating placeholder instead of label -->\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.confirm_password" type="password" placeholder="Confirm password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '    <md-input-container>\n' +
    '      <md-switch ng-model="data.cb1" aria-label="Receive notifications">\n' +
    '        Receive notification\n' +
    '      </md-switch>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '     <md-button md-no-ink="" class="md-primary" ng-click="createUser()">Submit</md-button>\n' +
    '\n' +
    '  </md-content>\n' +
    '\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/users.tpl.html',
    '<div  layout="column" class="inputdemoIcons">\n' +
    '  <br>\n' +
    '  <md-content layout-padding="" class="autoScroll">\n' +
    '    <md-input-container class="md-icon-float">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label>Name</label>\n' +
    '      <ng-md-icon icon="person" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.name" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <label>I am </label>\n' +
    '      <md-select ng-model="ctrl.userState">\n' +
    '          <md-option ng-repeat="role in roles" value="{{role}}">{{role}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container md-no-float="">\n' +
    '      <ng-md-icon icon="phone" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.phone" type="text" placeholder="Phone Number">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.email" type="email" placeholder="Email (required)" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container md-no-float="">\n' +
    '      <ng-md-icon icon="place" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.address" type="text" placeholder="Address">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.password" type="password" placeholder="Password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <!-- Use floating placeholder instead of label -->\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.confirm_password" type="password" placeholder="Confirm password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '    <md-input-container>\n' +
    '      <md-switch ng-model="data.cb1" aria-label="Receive notifications">\n' +
    '        Receive notification\n' +
    '      </md-switch>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '     <md-button md-no-ink="" class="md-primary" ng-click="createUser()">Submit</md-button>\n' +
    '\n' +
    '  </md-content>\n' +
    '\n' +
    '</div>');
}]);
})();
