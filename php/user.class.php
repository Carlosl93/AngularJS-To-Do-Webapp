<?php

    class user{

        public $user;
        public $pass;
        public $email;
        public $data;

        public function __construct($uuser, $ppass, $eemail){
            $this->user = $uuser;
            $this->pass = $ppass;
            $this->email = $eemail;
        }

        public function registerUser(){
            $sql = "insert into user (user, pass, email) values ('$this->user', '$this->pass', '$this->email')";
            return $sql;
        }

        public function loginUser(){
            $sql = "SELECT user FROM user WHERE user='$this->user' and pass='$this->pass'";
            return $sql;
        }

        public function getData($query){
            if(mysqli_num_rows($query) > 0){
                while($row = mysqli_fetch_assoc($query)){
                    $data[] = $row;
                }
                return print json_encode($data);
            } else {
                $data = 0;
                return print json_encode($data);
            };
        }

    }

?>