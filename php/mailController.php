<?php

    include 'conex.class.php';
    include 'mail.class.php';

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);

    $userid = $request->userid;

    $conexObj = new conex();
    $mailObj  = new mail($userid);

    $conexObj->connect();

    $mail = $mailObj->fetchEmail( $conexObj->doSQL( $mailObj->getData() ) );
    $data = $mailObj->fetchData( $conexObj->doSQL( $mailObj->getData() ) );

    $dataArray = json_decode($data);
    $dataArrayLength = count($dataArray);
    $stringMail = "";

    for($i = 0; $i < $dataArrayLength; $i++){

        $tasksArray = $dataArray[$i]->tasks;
        $tasksArrayLength = count($tasksArray);
        $stringMail .= "Date ".$mailObj->millisecondsToDate($dataArray[$i]->date).":\n";

        for($j = 0; $j < $tasksArrayLength; $j++){
            $stringMail .= $tasksArray[$j]->taskText." at ".$mailObj->millisecondsToHour($tasksArray[$j]->taskHour)."\n";
        }
        $stringMail .= "---------------\n";

    }

    print_r(mail($mail, "ToDoList App", $stringMail));

    /*
    $tasksArray = $dataArray[0]->tasks;
    $stringMail = "Date: ".$dataArray[0]->date."\n".$tasksArray[0]->taskText." at ".$tasksArray[0]->taskHour."\n";
    */

?>