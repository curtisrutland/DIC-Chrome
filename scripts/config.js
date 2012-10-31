var Config = {
    Settings: {},
    initialize: function () {
        if (!localStorage['settings']) {
            Config.Settings = {
                subsUrl: 'http://www.dreamincode.net/forums/index.php?app=core&module=usercp&tab=forums&area=topicsubs',
                signinUrl: 'http://www.dreamincode.net/forums/index.php?&app=core&module=global&section=login&do=form',
                unreadSelector: 'img[src*="unread"]',
                linkSelector: 'a[href*="topic"]',
                recheckFrequency: 300000,
                otherPages: []
            };
        }
        else {
            Config.Settings = JSON.parse(localStorage['settings']);
        }
    },
    reinitialize: function () {
        localStorage.removeItem('settings');
    },
    save: function () {
        localStorage['settings'] = JSON.stringify(Config.Settings);
    }
};

Config.initialize();

var Tools = {
    createTab: function (url) {
        chrome.tabs.create({ 'url': url });
    },

    setBadge: function (text, color) {
        var textObj = { text: text };
        var colorObj = { color: color };
        chrome.browserAction.setBadgeBackgroundColor(colorObj);
        chrome.browserAction.setBadgeText(textObj);
    },

    setErrorBadge: function () {
        Tools.setBadge("error", [255, 0, 0, 255]);
        setTimeout(Tools.clearBadge, 3000);
    },

    clearBadge: function () {
        Tools.setBadge("", [0, 255, 0, 0]);
    },

    setLoadingBadge: function () {
        Tools.setBadge("....", [255, 165, 0, 255]);
    },

    setUnreadBadge: function (number) {
        Tools.setBadge(number, [0, 255, 0, 255]);
    }
}