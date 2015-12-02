<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title>MAIN</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/jquery-1.6.4.min.js"></script>
    <script src="/js/script.js"></script>

</head>

<body>  
    <div class="registration-form main-container row">
        <div class="col-xs-12 title-registration">
            Выберите свой тип регистрации
        </div>     
        <div id="registration-tourist" class="col-xs-6 registration registration-tourist">
            <p class="tourist button-registration"><input id="button-tourist" type="button" name="agent" value="Турист"></p>
        </div>
        <div id="registration-agent" class="col-xs-6 registration registration-agent">
            <p class="agent button-registration"><input id="button-agent" type="button" name="tourist" value="Агент"></p>
        </div>
    </div>
    <div class="form-registration-transition main-container row">
        <div id="form-registration-tourist" class="form-registration-tourist col-xs-6 row">
               <div class="send-number-tourist col-xs-12">
                    Введите свой номер телефона для получения смс-подтверждения:<br>
                    <input type="text" id="phone-number-tourist" placeholder="Номер телефона"><br>
                    <input type="button" name="send-number" value="Отправить">
               </div>
        </div>
        <div id="form-registration-agent" class="form-registration-agent col-xs-6">
            
        </div>
    </div>
</body>
</html>