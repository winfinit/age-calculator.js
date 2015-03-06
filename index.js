(function(global) {

    var getAge = function(birthday) {
        if (! (birthday instanceof Date) ) {
    	birthday = new Date(birthday);
        }
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    var getAgeDate = function(birthday) {
        if (! (birthday instanceof Date) ) {
    	birthday = new Date(birthday);
        }
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); 
        return ageDate;
    };

    global.getAge = getAge;
    global.getAgeDate = getAgeDate;
}(this));
