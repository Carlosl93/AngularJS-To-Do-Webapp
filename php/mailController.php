<?php

    include 'conex.class.php';

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdate);

    $userid = $request->userid;

    $conexObj = new conex();

    $conexObj->connect();

    print 'yoooo';

?>