
var Displayer = Class.create({
    
    initialize: function (account) {
        
        this._account = account;
    },
    showRepos: function () {
        
        jQuery.getJSON(
            'https://api.github.com/users/'+this._account+'/repos?callback=?',
            function (data, txtStatus, jqXHR) {
                
                alert(data.length);
            }
        );
    }
});

var _account = 'Syr3f';

jQuery(document).ready(function ($) {
    
    var _displayer = new Displayer(_account);
    
    _displayer.showRepos();
});