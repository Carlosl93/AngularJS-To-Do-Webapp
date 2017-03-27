<?php

    class conex{

        private $server;
        private $user;
        private $db;
        private $pass;
        private $conex;
        private $result;

        public function __construct(){
            $this->server = 'localhost';
            $this->user   = 'root';
            $this->db     = 'todoapp';
            $this->pass   = 'mysql';
        }

        public function connect(){
            $this->conex = mysqli_connect($this->server, $this->user, $this->pass, $this->db);
            return $this->conex;
        }

        public function doSQL($query){
            $this->result = mysqli_query($this->conex, $query);
            return $this->result;
        }

    }

?>