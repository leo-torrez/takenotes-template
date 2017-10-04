$(document).ready(function() {
    $('#inputAvaliableForOthers').change(function() {
        if ($(this).is(':checked')) {
            $('#inputNoteURL').attr('disabled', 'disabled');
        } else {
            $('#inputNoteURL').removeAttr('disabled');
        }
    });
});