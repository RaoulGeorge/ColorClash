define(function (require) {
    var view = require('text!./view.html');
    var ko = require('knockout');
    var bootstrap = require('bootstrap');

    function viewmodel() {
        console.log('viewmodel constructor');
        bgColor = ko.observable('black');
        fgColor = ko.observable('white');
    }

    //var base = Object.inherit(KnockoutViewModel, SummaryHealthViewModel);

    viewmodel.prototype.activate = function () {
        $('body').append(view);
        ko.applyBindings(this);
    };

    viewmodel.prototype.deactivate = function () {

    };

    return viewmodel;
});