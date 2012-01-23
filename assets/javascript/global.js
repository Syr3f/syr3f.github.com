
var Displayer = Class.create({
    
    initialize: function (account) {
        
        this._account = account;
    },
    showRepos: function () {
        
        jQuery.ajax({
            dataType: 'json',
            error: function (jqXHR, txtStatus, errThrown) {
                
                alert("Error: "+txtStatus+"; "+errThrown);
            },
            success: function (data, txtStatus, jqXHR) {
                
                alert(data);
            },
            type: 'GET',
            url: 'https://api.github.com/users/'+this._account+'/repos?callback=load';
        });
    }
});

var _account = 'Syr3f';

jQuery(document).ready(function ($) {
    
    var _displayer = new Displayer(_account);
    
    _displayer.showRepos();
});