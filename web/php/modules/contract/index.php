<?php

include '../../root/db.php';

$db = new DB();
$conn = $db->connect();

$sql = 'SELECT * FROM contracts';
$result = $conn->query($sql);

echo $result->fetch_assoc();
