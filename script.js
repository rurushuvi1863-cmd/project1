$(function() {

                if (!$('.envelope').hasClass('open')) {
                    $('.envelope').click(function() {
                        $(this).removeClass('new').addClass('open');
                        setTimeout(() => {
                            $(this).children('.back').children('.letter').css({
                                height: '500px',
                                transition: '1s'
                            });
                        }, 2200);

                    });
                }

            });