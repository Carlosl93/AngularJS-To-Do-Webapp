<?php

    class task{

        public $iduser;
        public $jsondat;

        public function __construct($iiduser, $jjsondat){
            $this->iduser  = $iiduser;
            $this->jsondat = $jjsondat;
        }

        public function addJSON(){
            
        }

        public function getJSON(){
            $sql = "SELECT textdat FROM textdata WHERE id_user = '$this->iduser'";
            return $sql;
        }

        public function setJSON(){
            $sql = "UPDATE textdata SET textdat='$this->jsondat' WHERE id_user = '$this->iduser'";
            return $sql;
        }

        public function createJSON(){
            $sql = "INSERT INTO textdata(textdat, id_user) VALUES ('$this->jsondat', '$this->iduser')";
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
