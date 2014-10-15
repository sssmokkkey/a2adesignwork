  // DATEPICKER
  // ==========

+function ($) {
  'use strict';

    $('.datepicker').datepicker({
        format: "dd M yyyy",
        startDate: "today",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true,
        todayHighlight: true
    });
    $('.datepickertwo').datepicker({
        format: "dd M yyyy",
        startDate: "today",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true,
        todayHighlight: true
    });
    /*$('#sandbox-container div').datepicker({
        startDate: "today",
        keyboardNavigation: false,
        todayHighlight: true
    });*/

}(jQuery);