define(function (require) {
    var view = require('text!./view.html');
    var ko = require('knockout');
    var bootstrap = require('bootstrap');
    var color = require('utility/color');
    require('lib/globalize');
    require('lib/dx.chartjs');

    function viewmodel() {
        console.log('viewmodel constructor');
        this.bgColor = ko.observable('black');
        this.fgColor = ko.observable('white');
        this.compliance = ko.observable();
        this.bgRGBValue = '';
        this.fgRGBValue = '';
        this.color = new color();
    }

    //var base = Object.inherit(KnockoutViewModel, SummaryHealthViewModel);

    viewmodel.prototype.activate = function () {
        var self = this;
        $('body').append(view);
        
        this.bgColor.subscribe(function(newValue) {
            var hexValue = self.color.nameToHex(newValue) || newValue;
            self.bgRGBValue = self.color.hexToRGB(hexValue);
            self.checkCompliance();
        });

        this.fgColor.subscribe(function(newValue) {
            var hexValue = self.color.nameToHex(newValue) || newValue;
            self.fgRGBValue = self.color.hexToRGB(hexValue);
            self.checkCompliance();
        });
        this.initChart();
        ko.applyBindings(this);

    };


    viewmodel.prototype.deactivate = function () {

    };

    viewmodel.prototype.initChart = function () {
       
    };

    viewmodel.prototype.checkCompliance = function(){
        var self = this;
        console.log(self);
        var l1 = self.color.getLuminosity(self.bgRGBValue);
        var l2 = self.color.getLuminosity(self.fgRGBValue);
        console.log(self.fgRGBValue);

        self.contrast = self.color.getContrast(l1, l2);
        
        if(self.contrast < 5) {
            self.compliance('bad');
        } else if(self.contrast < 10) {
            self.compliance('could be better');
        } else if(self.contrast < 13) {
            self.compliance('OK');
        } else if(self.contrast < 18) {
            self.complianc1('Good');
        } else {
            self.compliance('Great');
        }

    }



    return viewmodel;
});