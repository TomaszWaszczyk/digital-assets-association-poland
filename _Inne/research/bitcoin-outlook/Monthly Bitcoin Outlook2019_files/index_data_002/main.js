'use strict';

try {
  angular.module('shoutoutGetSubscriberPreload');
} catch (e) {
  angular.module('shoutoutGetSubscriberPreload', []);
}

angular.module('shoutoutGetSubscriberPreload').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('modules/widget/main.html',
    "<div class='app-container' focus-first-erroneous-field='main.ngForm.$submitted &amp;&amp; main.ngForm.$invalid' ng-class='[main.getSkin(), main.getLayout(), main.popupBackground()]' ng-form='main.ngForm' ng-if='!main.hideFormIfPopupIsOpen() &amp;&amp; !main.hideForm'>\n" +
    "<div class='app-view' ng-if='!main.isSubscribeSuccessful'>\n" +
    "<div class='header-block' ng-class='main.getHeaderAlignment()'>\n" +
    "<i class='fa fa-times close-popup' ng-click='main.closePopup()' ng-if='main.isInPopup()'></i>\n" +
    "<div class='title'>\n" +
    "<span ng-if='main.settings.signupForm.showTitle &amp;&amp; !main.isInPopup()'>\n" +
    "{{main.settings.signupForm.titleText || \"popup.titlePlaceholder\" | translate}}\n" +
    "</span>\n" +
    "<span ng-if='main.isInPopup()'>\n" +
    "{{main.settings.popup.popupTitleText || 'popup.titlePlaceholder' | translate}}\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class='subtitle'>\n" +
    "<span ng-if='main.settings.signupForm.showSubtitle &amp;&amp; main.settings.signupForm.showTitle &amp;&amp; !main.isInPopup()'>\n" +
    "{{main.settings.signupForm.subtitleText || 'formFields.subtitle.placeholder' | translate}}\n" +
    "</span>\n" +
    "<span ng-if='main.settings.popup.showSubtitle &amp;&amp; main.isInPopup()'>\n" +
    "{{main.settings.popup.popupSubtitleText || 'formFields.subtitle.placeholder' | translate}}\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div aria-label='Subscribe' class='collectable-info' ng-class='main.getBodyAlignment()' role='form'>\n" +
    "<!-- / name -->\n" +
    "<div class='field field--name' ng-class='main.getInvalid(&#39;subscriberName&#39;)' ng-if='main.settings.generalSettings.collectName'>\n" +
    "<div class='field__label'>\n" +
    "{{main.settings.generalSettings.namePlaceholder || 'formFields.name.placeholder' | translate}}\n" +
    "</div>\n" +
    "<i class='field__icon fa fa-user'></i>\n" +
    "<input aria-label='{{main.settings.generalSettings.namePlaceholder || &#39;formFields.name.placeholder&#39; | translate}}' class='field__input' name='subscriberName' ng-model='main.subscriberName' ng-pattern='main.validatorPatterns.name' ng-required='main.settings.generalSettings.nameRequired' placeholder='{{main.settings.generalSettings.namePlaceholder || &#39;formFields.name.placeholder&#39; | translate}}' size='1'>\n" +
    "</div>\n" +
    "<!-- / phone prefix -->\n" +
    "<div class='field field--phone-prefix field--dropdown' ng-if='main.generalSettings.collectPhone'>\n" +
    "<div class='field__label'>\n" +
    "<span ng-if='main.getSkin() === &#39;postcard&#39;'>\n" +
    "{{main.settings.generalSettings.phonePlaceholder || 'formFields.mobile.label' | translate}}\n" +
    "</span>\n" +
    "<span ng-if='main.getSkin() !== &#39;postcard&#39;'>\n" +
    "Country Code\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class='field__phone-prefix-wrap'>\n" +
    "<i class='field__icon fa fa-mobile'></i>\n" +
    "<div class='field__input'>\n" +
    "<select aria-label='{{ &#39;formFields.mobile.prefix&#39; | translate }}' name='subscriberDialCode' ng-model='main.subscriberDialCode' role='listbox'>\n" +
    "<option ng-repeat='phone in main.phonePrefixes track by $index' ng-selected='main.dialCode === phone.dialCode' value='{{phone.dialCode}}'>{{phone.name}} ({{phone.dialCode}})</option>\n" +
    "</select>\n" +
    "<span>{{main.subscriberDialCode || '+000'}}</span>\n" +
    "<i class='dropdown-arrow fa fa-angle-down'></i>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<!-- / phone number -->\n" +
    "<div class='field field--phone-number field--auto-width' ng-class='main.getInvalid(&#39;subscriberPhone&#39;)' ng-if='main.generalSettings.collectPhone'>\n" +
    "<div class='field__label'>\n" +
    "{{main.settings.generalSettings.phonePlaceholder || 'formFields.mobile.label' | translate}}\n" +
    "</div>\n" +
    "<i class='field__icon fa fa-mobile'></i>\n" +
    "<input aria-label='{{main.settings.generalSettings.phonePlaceholder || &#39;formFields.mobile.placeholder&#39; | translate}}' class='field__input' name='subscriberPhone' ng-model='main.subscriberPhone' ng-pattern='main.validatorPatterns.phone' ng-required='main.settings.generalSettings.phoneRequired' placeholder='{{main.settings.generalSettings.phonePlaceholder || &#39;formFields.mobile.placeholder&#39; | translate}}' size='1'>\n" +
    "</div>\n" +
    "<!-- / email -->\n" +
    "<div class='field field--email' ng-class='main.getInvalid(&#39;subscriberEmail&#39;)'>\n" +
    "<div class='field__label'>\n" +
    "{{main.settings.generalSettings.emailPlaceholder || 'formFields.email.label' | translate}}\n" +
    "</div>\n" +
    "<i class='field__icon fa fa-envelope-o'></i>\n" +
    "<input aria-label='{{main.settings.generalSettings.emailPlaceholder || &#39;formFields.email.placeholder&#39; | translate }}' class='field__input' name='subscriberEmail' ng-model='main.subscriberEmail' ng-pattern='main.validatorPatterns.email' placeholder='{{main.settings.generalSettings.emailPlaceholder || &#39;formFields.email.placeholder&#39; | translate }}' required size='1'>\n" +
    "</div>\n" +
    "<div class='explicit-consent-block' ng-class='main.getBodyAlignment()' ng-if='main.gdpr.requireConsent &amp;&amp; (main.getLayout() === &#39;layout-vertical&#39; || main.getLayout() === &#39;layout-old-horizontal&#39;) '>\n" +
    "<span class='explicit-consent-checkbox-wrapper' ng-class='main.getInvalid(&#39;explicitConsent&#39;)'>\n" +
    "<input aria-label='{{&#39;GDPR.TAB.CONSENT.ARIA_LABEL&#39; | translate}}' class='explicit-consent-checkbox' name='explicitConsent' ng-model='main.isExplicitConsentGiven' required role='checkbox' type='checkbox'>\n" +
    "</span>\n" +
    "<div class='explicit-consent-text'>\n" +
    "{{main.gdpr.consentMessage || 'GDPR.TAB.CONSENT.MESSAGE.PLACEHOLDER' | translate}}\n" +
    "<a class='explicit-consent-privacy-policy' href='{{main.gdpr.policyLinkUrl}}' ng-if='main.gdpr.isPrivacyPolicyLinkEnabled' target='_blank'>{{main.gdpr.policyLinkText || 'GDPR.TAB.CONSENT.POLICY.LINK.NAME.INPUT.PLACEHOLDER' | translate }}</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<button class='button subscribe-button' ng-click='main.subscribe()' ng-disabled='main.isPreview()'>\n" +
    "<span ng-if='main.isInPopup()'>\n" +
    "{{main.popup.popupButtonText || 'formFields.button.placeholder' | translate}}\n" +
    "</span>\n" +
    "<span ng-if='!main.isInPopup()'>\n" +
    "{{main.signupForm.buttonText || 'formFields.button.placeholder' | translate}}\n" +
    "</span>\n" +
    "</button>\n" +
    "</div>\n" +
    "<div class='explicit-consent-block' ng-class='main.getBodyAlignment()' ng-if='main.gdpr.requireConsent &amp;&amp; main.getLayout() === &#39;layout-horizontal&#39; '>\n" +
    "<span class='explicit-consent-checkbox-wrapper' ng-class='main.getInvalid(&#39;explicitConsent&#39;)'>\n" +
    "<input aria-label='{{&#39;GDPR.TAB.CONSENT.ARIA_LABEL&#39; | translate}}' class='explicit-consent-checkbox' name='explicitConsent' ng-model='main.isExplicitConsentGiven' required role='checkbox' type='checkbox'>\n" +
    "</span>\n" +
    "<div class='explicit-consent-text'>\n" +
    "{{main.gdpr.consentMessage || 'GDPR.TAB.CONSENT.MESSAGE.PLACEHOLDER' | translate}}\n" +
    "<a class='explicit-consent-privacy-policy' href='{{main.gdpr.policyLinkUrl}}' ng-if='main.gdpr.isPrivacyPolicyLinkEnabled' target='_blank'>{{main.gdpr.policyLinkText || 'GDPR.TAB.CONSENT.POLICY.LINK.NAME.INPUT.PLACEHOLDER' | translate }}</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div aria-live='polite' class='error-block' ng-if='main.ngForm.$submitted &amp;&amp; main.ngForm.$invalid'>\n" +
    "<span class='error-message' role='alert'>\n" +
    "{{main.errorMessage}}\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if='main.isSubscribeSuccessful' ng-include='&#39;modules/widget/success-view.html&#39;'></div>\n" +
    "</div>\n"
  );
}]);