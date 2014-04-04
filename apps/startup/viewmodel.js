define(function (require) {
    var view = require('text!./view.html');
    var ko = require('knockout');
    var bootstrap = require('bootstrap');
    var color = require('utility/color');

    function viewmodel() {
        console.log('viewmodel constructor');
        this.bgColor = ko.observable('black');
        this.fgColor = ko.observable('white');
        this.compliance1 = ko.observable();
        this.bgRGBValue = '';
        this.fgRGBValue = '';
        this.color = new color();
    }

    //var base = Object.inherit(KnockoutViewModel, SummaryHealthViewModel);

    viewmodel.prototype.activate = function () {
        var self = this;
        $('body').append(view);
        
        //this.compliance1 = 'we';
        this.bgColor.subscribe(function(newValue) {
            var hexValue = self.color.nameToHex(newValue);
            self.bgRGBValue = self.color.hexToRGB(hexValue);
            self.checkCompliance();
        });

        this.fgColor.subscribe(function(newValue) {
            var hexValue = self.color.nameToHex(newValue);
            self.fgRGBValue = self.color.hexToRGB(hexValue);
            self.checkCompliance();
        });

ko.applyBindings(this);

    };


    viewmodel.prototype.deactivate = function () {

    };

    viewmodel.prototype.checkCompliance = function(){
        var self = this;
        console.log(self);
        var l1 = self.color.getLuminosity(self.bgRGBValue);
        var l2 = self.color.getLuminosity(self.fgRGBValue);
        console.log(self.fgRGBValue);

        self.contrast = self.color.getContrast(l1, l2);
        
        if(self.contrast < 5) {
            self.compliance1('bad');
        } else if(self.contrast < 10) {
            self.compliance1('could be better');
        } else if(self.contrast < 13) {
            self.compliance1('OK');
        } else if(self.contrast < 18) {
            self.complianc1('Good');
        } else {
            self.compliance1('Great');
        }

    }



    return viewmodel;
});