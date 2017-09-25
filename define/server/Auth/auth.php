<?php

require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../Common/config.php';

// Import the necessary classes
use Illuminate\Database\Capsule\Manager as Capsule;

// Create the Sentry alias
class_alias('Cartalyst\Sentry\Facades\Native\Sentry', 'Sentry');

// Create a new Database connection
$capsule = new Capsule;

$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => $config->mysql->main_db->host,
    'database'  => $config->mysql->main_db->db,
    'username'  => $config->mysql->main_db->user,
    'password'  => $config->mysql->main_db->pass,
    'charset'   => 'utf8',
    'collation' => 'utf8_general_ci',
]);

$capsule->bootEloquent();

class User extends Sentry {
    public static $currentUser = null;

    public static function isUserLoggedIn() {
        return self::check();
    }

    public static function getCurrentUser() {       
        try {

            if (self::isUserLoggedIn()) {
                if (!self::$currentUser) {
                    self::$currentUser = self::getUser();
                }
                
                return self::$currentUser;
            }
        }
        catch (Cartalyst\Sentry\Users\UserNotFoundException $e) {
            // user was deleted;
        }
    }

    public static function getAllUsers() {
        return self::findAllUsers();
    }

    public static function logoutCurrentUser() {
        self::logout();
    }

    public static function signInUser($login, $password) {
        self::authenticate(array(
            'email'      => $login,
            'password'   => $password
        ), true);
    }
}