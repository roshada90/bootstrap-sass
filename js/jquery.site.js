$(document).ready(function(){
    // CONDITION MODAL
    $('#account-modal').on('show.bs.modal', function (event){
        var $button = $(event.relatedTarget);
        var $case = $button.data('case');
        var $modal = $(this);

        console.log("Test");
        if($case == "register"){
            console.log('register case');
            $modal.find('#login-case').hide();
            $modal.find('#register-case').show();
        }else{
            console.log('login case');
            $modal.find('#register-case').hide();
            $modal.find('#login-case').show();
        }
    });

    // TOOLTIPS
    $('[data-toggle="tooltip"]').tooltip();

    $('.specific-tip').tooltip({
        html: true,
        placement: 'bottom',
        trigger: click
    });

    // POPOVERS
    $('[data-toggle="popover"]').popover();

    // DYNAMIC POPOVER
    const getAttr = (el, child) =>{
        return $(`.data-${child}`, $(el).attr('data-bind')).html();
    };

    $('.dynamic-popover').popover({
        html:true,
        placement: 'bottom',
        title: function(){
            return getAttr(this, 'title');
        },
        content: function(){
            return getAttr(this, 'content')
        }
    });
});