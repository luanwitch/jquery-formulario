$(document).ready(function() {
    $('#task-form').on('submit', function(event) {
        event.preventDefault();

        const taskName = $('#task-input').val().trim();

        if (taskName === '') {
            alert('Por favor, insira uma tarefa.');
            return;
        }

        const listItem = $('<li></li>').text(taskName);

        $('#task-list').append(listItem);

        $('#task-input').val('');
    });

    $('#clear-button').on('click', function() {
        $('#task-input').val('');
    });

    $(document).on('click', '#task-list li', function() {
        $(this).toggleClass('completed');
    });

    $('#clear-button').on('click', function() {
        $('#task-input').val('');
    });
    
});
