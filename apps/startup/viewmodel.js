define(function (require) {
    var view = require('text!./view.html');
    var ko = require('knockout');
    var bootstrap = require('bootstrap');
    var color = require('utility/color');

    function viewmodel() {
        console.log('viewmodel constructor');
        this.bgColor = ko.observable('black');
        this.fgColor = ko.observable('white');
        this.bgRGBValue = '';
        this.fgRGBValue = '';
        this.color = new color();
    }

    //var base = Object.inherit(KnockoutViewModel, SummaryHealthViewModel);

    viewmodel.prototype.activate = function () {
        var self = this;
        $('body').append(view);
        ko.applyBindings(this);

        this.bgColor.subscribe(function(newValue) {
            var hexValue = self.color.nameToHex(newValue);
            self.bgRGBValue = self.color.hexToRGB(hexValue);
            checkCompliance(self);
        });

        this.fgColor.subscribe(function(newValue) {
            var hexValue = self.color.nameToHex(newValue);
            self.fgRGBValue = self.color.hexToRGB(hexValue);
            checkCompliance(self);
        });


    };


    viewmodel.prototype.deactivate = function () {

    };

    function checkCompliance(self){
        console.log(self.bgRGBValue);
        console.log(self.fgRGBValue);

    }



    return viewmodel;
});