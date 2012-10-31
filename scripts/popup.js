function makeLinksOpenInTabs() {
    $('a').on('click', function () {
        if ($(this).attr('href') == '#') return;
        Tools.clearBadge();
        Tools.createTab($(this).attr('href'));
    });
}

function setOpenAllLink(links) {
    $('#open-all').on('click', function () {
        Tools.clearBadge();
        for (var i = 0; i < links.length; i++) {
            Tools.createTab(links[i].attr('href'));
        }
    });
}

$(document).on('ready', function () {
    $('#loader').show();
    Tools.setLoadingBadge();
    DIC.GetUnreadSubscriptions(function (unread) {
        $('#loader').hide();
        Tools.clearBadge();
        if (!unread) {
            $('#alert-error').show();
            Tools.setErrorBadge();
        }
        else if (unread.length < 1) {
            $('#alert-info').show();
        }
        else {
            $('#entries').show();
            var list = $('#entries').find('ul');
            var links = new Array();
            unread.find(Config.Settings.linkSelector).each(function () {
                list.append($('<li></li>').append($(this)));
                links.push($(this));
            });
            list.append($('<li class="divider"></li>'));
            list.append($('<li><a href="#" id="open-all">Open All</a></li>'));
            setOpenAllLink(links);
        }

        makeLinksOpenInTabs();
    });
});