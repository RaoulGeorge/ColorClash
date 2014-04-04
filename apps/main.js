require(['config/global'], function () {
    require(['startup/viewmodel'], function (application) {
        new application().activate();
    });
});
