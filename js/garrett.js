/**
 * Created by Rakshith on 11/20/17.
 */
    $(document).ready(function () {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:63342/untitled1/aboutme.html?_ijt=el84kr5cv8j9s3o62bnken9o0v',
            success: function (data) {
                $('#uuu').append(data);
                }

        });
    });
