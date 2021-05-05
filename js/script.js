$(document).ready(function() {

    // blue border active delivery
    $('.delivery-block .form-check-input:checked').closest('.form-check-label').toggleClass('active');
    $('.delivery-block .form-check-input').change(function() {
        if ($(!this.checked)) {
            $(this).closest('.delivery-block').find('.form-check-label').removeClass('active');
            $(this).closest('.form-check-label').toggleClass('active');
            console.log(this.value);
        }
    });

    // blue border active payment
    $('.payment-block .form-check-input:checked').closest('.form-check-label').toggleClass('active');
    $('.payment-block .form-check-input').change(function() {
        if ($(!this.checked)) {
            $(this).closest('.payment-block').find('.form-check-label').removeClass('active');
            $(this).closest('.form-check-label').toggleClass('active');
            console.log(this.value);
        }
    });

}); //document ready end