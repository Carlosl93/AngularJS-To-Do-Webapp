<?php

    include 'conex.class.php';
    include 'task.class.php';

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);

    $userid = $request->userid;
    $jsondat = $request->jsondat;
    $control = $request->control;

    $conexObj = new conex();
    $taskObj  = new task($userid, $jsondat);


    $conexObj->connect();

    switch($control){
        case 0: //Get JSON 
            $taskObj->getData( $conexObj->doSQL( $taskObj->getJSON() ) );
            break;
        case 1: //Get JSON 
            $conexObj->doSQL( $taskObj->setJSON() );
            break;
    }


?>