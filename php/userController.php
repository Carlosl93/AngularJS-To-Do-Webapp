<?php 

    include 'conex.class.php';
    include 'user.class.php';

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);

    $user    = $request->user;
    $pass    = $request->pass;
    $email   = $request->email;
    $control = $request->control;

    $conexObj = new conex();

    $userObj = new user($user, $pass, $email);


    $conexObj->connect();

    switch($control){
        case 0: //Register user
            $conexObj->doSQL( $userObj->registerUser() );
            $userObj->getData( $conexObj->doSQL( $userObj->loginUser() ) ) ;
            break;
        case 1: //Login user
            $userObj->getData( $conexObj->doSQL( $userObj->loginUser() ) ) ;
            break;
    }

    

?>