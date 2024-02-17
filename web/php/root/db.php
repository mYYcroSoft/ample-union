<?php
class DB 
{
    protected $host;
    protected $user;
    protected $password;
    protected $database;

    public function __construct()
    {
        $this->host = '';
        $this->user = '';
        $this->password = '';
        $this->database = '';
     
    }

    public function connect() 
    {
        $conn = mysqli_connect($this->host, $this->user, $this->password, $this->database);
    
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        } else {
            echo "Connected successfully";
        }
    
        return $conn;
    }
    
}