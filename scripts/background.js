function checkSubscribed() {
    Tools.setLoadingBadge();
    DIC.GetUnreadSubscriptions(function (unread) {
        Tools.clearBadge();
        if (!unread) {
            Tools.setErrorBadge();
        }
        else if (unread.length > 0) {
            Tools.setUnreadBadge(unread.length.toString());
        }
    });
}

checkSubscribed();

setInterval(checkSubscribed, Config.Settings.recheckFrequency);