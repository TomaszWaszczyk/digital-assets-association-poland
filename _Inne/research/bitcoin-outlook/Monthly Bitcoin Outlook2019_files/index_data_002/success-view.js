'use strict';

try {
  angular.module('shoutoutGetSubscriberPreload');
} catch (e) {
  angular.module('shoutoutGetSubscriberPreload', []);
}

angular.module('shoutoutGetSubscriberPreload').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('modules/widget/success-view.html',
    "<div aria-live='assertive' class='success-view-container' role='alert'>\n" +
    "<div class='success-view' ng-if='!main.isInEditorOrPreviewMode() &amp;&amp; !main.isInPopup()'>\n" +
    "<i class='fa fa-times close-popup' ng-click='main.closePopup()' ng-if='main.isInPopup() &amp;&amp; !main.isPreview()'></i>\n" +
    "<span class='overlay-view-wrapper'>\n" +
    "<h3 class='success-view-title'>{{ main.settings.signupForm.thankYouTitleText || 'formFields.messages.thankYouTitle.placeholder' | translate }}</h3>\n" +
    "<p class='success-view-subtitle'>{{ main.settings.signupForm.thankYouSubtitleText || 'formFields.messages.thankyou.placeholder' | translate }}</p>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class='success-view' ng-if='main.isInEditorOrPreviewMode() &amp;&amp; !main.isInPopup()'>\n" +
    "<i class='fa fa-times close-popup' ng-click='main.closePopup()' ng-if='main.isInPopup() &amp;&amp; !main.isPreview()'></i>\n" +
    "<span class='overlay-view-wrapper'>\n" +
    "<h3 class='success-view-title'>{{ main.settings.signupForm.thankYouTitleText || 'widget.general.congrats' | translate}}</h3>\n" +
    "<p class='success-view-subtitle'>{{ main.settings.signupForm.thankYouSubtitleText || 'widget.general.subscribeOk' | translate}}</p>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class='success-view' ng-if='main.isInEditorOrPreviewMode() &amp;&amp; main.isInPopup()'>\n" +
    "<i class='fa fa-times close-popup' ng-click='main.closePopup()' ng-if='main.isInPopup() &amp;&amp; !main.isPreview()'></i>\n" +
    "<span class='overlay-view-wrapper'>\n" +
    "<h3 class='success-view-title'>{{ main.settings.popup.popupThankYouTitle || 'widget.general.congrats' | translate}}</h3>\n" +
    "<p class='success-view-subtitle'>{{ main.settings.popup.popupThankYouSubtitle || 'widget.general.subscribeOk' | translate}}</p>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class='success-view' ng-if='!main.isInEditorOrPreviewMode() &amp;&amp; main.isInPopup()'>\n" +
    "<i class='fa fa-times close-popup' ng-click='main.closePopup()' ng-if='main.isInPopup() &amp;&amp; !main.isPreview()'></i>\n" +
    "<span class='overlay-view-wrapper'>\n" +
    "<h3 class='success-view-title'>{{ main.settings.popup.popupThankYouTitle || 'formFields.messages.thankYouTitle.placeholder' | translate}}</h3>\n" +
    "<p class='success-view-subtitle'>{{ main.settings.popup.popupThankYouSubtitle || 'formFields.messages.thankyou.placeholder' | translate}}</p>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n"
  );
}]);