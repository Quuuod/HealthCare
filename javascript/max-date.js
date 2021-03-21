document.addEventListener('DOMContentLoaded', function(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var name_input = document.getElementById('subject')
    name_input.value = year + "-" + month + "-" + day;
});