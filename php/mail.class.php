<?php 

    class mail{
        public $user;
        public $mail;
        public $data;

        public function __construct($uuser){
            $this->user = $uuser;
        }

        public function getData(){
            $sql = "SELECT u.email, t.textdat FROM user u, textdata t WHERE u.id_user = '$this->user' and t.id_user = '$this->user'";
            return $sql;
        }

        public function fetchEmail($result){
            $arr = mysqli_fetch_array($result);
            return $arr[0];
        }
        public function fetchData($result){
            $arr = mysqli_fetch_array($result);
            return $arr[1];
        }
        public function millisecondsToDate($mill){
            $seconds = $mill / 1000;
            return date("d/m", $seconds);
        }
        public function millisecondsToHour($mill){
            $seconds = $mill / 1000;
            date_default_timezone_set('America/Caracas');
            return date('H:i', $seconds);
        }
    }

?>