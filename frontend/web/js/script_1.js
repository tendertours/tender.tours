$(document).ready(function () {
    
    
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('publication').addEventListener('click', function () {
        document.getElementById('center-layer').classList.toggle('active');
        document.getElementById('tender-menu').classList.toggle('active');
    });

    document.getElementById('header-menu').addEventListener('click', function () {
        document.getElementById('menu').classList.toggle('active');
    });
});



// Открытие форм регистрации reg-confirm


    $("#log").click(function () {
        document.getElementById("login").classList.toggle("active");
        document.getElementById("overlay").classList.toggle("active");
        document.getElementById('overlay').addEventListener('click', function () {
            document.getElementById('login').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
        });
    });
    
    $("#reg").click(function () {
        document.getElementById("regist").classList.toggle("active");
        document.getElementById("overlay").classList.toggle("active");
        document.getElementById('overlay').addEventListener('click', function () {
            document.getElementById('regist').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
        });
    });
    
    //Открытие поля регистрации Туриста
    $("#button-tourist").click(function () {
        document.getElementById('form-registration-tourist').classList.toggle("active");
        document.getElementById('button-agent').classList.toggle("active");
    });
    //Открытие поля регистрации Агента

    $("#button-agent").click(function () {
        document.getElementById('form-registration-agent').classList.toggle("active");
        document.getElementById('button-tourist').classList.toggle("active");
    });
});


$(document).on('click', '#reg', function (e) {
    e.preventDefault();
    $('#regist .registration-form').load('/registration/pre-registration');
});
$(document).on('click', '#log', function (e) {
    e.preventDefault();
    $('#login .login-form').load('/login/index');
});

$(document).on('submit', 'form#PreRegistrationForm', function (e) {
    e.preventDefault();
    $.ajax({
        url: '/registration/pre-registration',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'html',
        success: function (data) {
            $('#registration_form_block').html(data);
        }
    });
});

$(document).on('submit', 'form#LoginForm', function (e) {
    e.preventDefault();
    $.ajax({
        url: '/login/index',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'html',
        success: function (data) {
            $('#login .login-form').replace(data);
        },
        statusCode: {
            302: function () {
                window.location.href = '/';
            }
        }
    });
});

//функция поля календаря
$(function () {
    $("#datepicker1").datepicker({});
});
$(function () {
    $("#datepicker2").datepicker({});
});

