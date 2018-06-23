var jDatePicker = {
    set: function (id) {
        var $date = $('#' + id);
        var options = {
            language: 'pt-BR',
            format: 'dd/mm/yyyy'
        };
        $date.datepicker(options);
    },

    setMes: function (id) {
        var $date = $('#' + id);
        var options = {
            language: 'pt-BR',
            format: 'mm/yyyy'
        };
        $date.datepicker(options);
    }
}