<?php

// localhost/MCR/server/Auth/createUser.php
require_once 'auth.php';

$user = Sentry::createUser(array(
    'email'     => 'samoylov',  //Это login!!!
    'password'  => 'ghb21ghb',
    'first_name' => 'Александр',  //Имя Не обязательно, можно оставить пустым
    'last_name' => 'Самойлов',  //Фамилия Не обязательно, можно оставить пустым   
    'activated' => true,
    'permissions' => array(
        'superuser' => 1
    )
));