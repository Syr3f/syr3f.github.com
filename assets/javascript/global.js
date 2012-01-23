
var Displayer = Class.create({
    
    initialize: function (account) {
        
        this._account = account;
    },
    showRepos: function () {
        
        jQuery.getJSON(
            'https://api.github.com/users/'+this._account+'/repos?callback=?',
            function (data, txtStatus, jqXHR) {
                
                var _meta = data.meta;
                var _data = data.data;
                
                var _html = '';
                
                for (var i=0; i<_data.length; i++) {
                    
                    var _url = _data[i].url;
                    var _name = _data[i].name;
                    var _desc = _data[i].description;
                    
                    _html += '<a href="'+_url+'" title="'+_desc+'">'+_name+'</a>: <sub>'+_desc+'</sub><br><br>\n';
                }
                
                jQuery('#well-repos').append(_html);
            }
        );
    }
});

var _account = 'Syr3f';

jQuery(document).ready(function ($) {
    
    var _displayer = new Displayer(_account);
    
    _displayer.showRepos();
});