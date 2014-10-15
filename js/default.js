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



  // FIXED AD
  // ==========

+function ($) {
  'use strict';

    function ClassForStaticVar(){
  
    }

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 80) {
            $('#fixed-ad').fadeIn();
            clearTimeout(ClassForStaticVar.timeout);
            ClassForStaticVar.timeout = setTimeout(function() { $('#fixed-ad').fadeOut(); }, 4000);    
        } 
    });

}(jQuery);