var DIC = {
    GetUnreadSubscriptions: function(callback){
        $.ajax({
            url: Config.Settings.subsUrl,
            dataType: 'html',
            cache: false
        }).done(function (res) {
            var $res = $(res);
            if (($res).find('input#username').length > 0 && callback) {
                callback(null);
                return;
            }
            var unread = $res.find(Config.Settings.unreadSelector);
            var rows = unread.parent().parent();
            if (callback) callback(rows);
        });
    }
};