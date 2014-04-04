define(function (require) {
    var view = require('text!./view.html');
    var ko = require('knockout');
    var bootstrap = require('bootstrap');

    function viewmodel() {
        console.log('viewmodel constructor');
        leftBackground = ko.observable();
        rightBackground = ko.observable();
    }

    //var base = Object.inherit(KnockoutViewModel, SummaryHealthViewModel);

    viewmodel.prototype.activate = function () {
        console.log('viewmodel activate');
        $('body').append(view);
        ko.applyBindings(this);
    };

    viewmodel.prototype.deactivate = function () {

    };

    return viewmodel;
});