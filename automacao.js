(function executeRule(current, previous) {

    if (!current.email.nil()) {
        var partes = current.email.toString().split('@');
        current.user_name = partes[0]; 
    }

    if (!current.data_de_nasciment0.nil()) {
        
        var birthDate = new GlideDateTime(current.data_de_nasciment0);
        var today = new GlideDateTime();
        
        var age = today.getYearLocalTime() - birthDate.getYearLocalTime();
        
    
        if (today.getMonthLocalTime() < birthDate.getMonthLocalTime() || 
           (today.getMonthLocalTime() == birthDate.getMonthLocalTime() && today.getDayOfMonthLocalTime() < birthDate.getDayOfMonthLocalTime())) {
            age--;
        }
        
        current.idad0 = age; 
    }

})(current, previous);