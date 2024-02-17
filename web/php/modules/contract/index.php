<?php
include '../../root/db.php';

$db = new DB();
$conn = $db->connect();

$sql = "SELECT * FROM contract";
$result = $conn->query($sql);