<?php

$sql = $_POST['sql'];

include 'conn.php';

$result = mysqli_query($conn, $sql);

$return = array();
while($row = mysqli_fetch_array($result)){
    $return[] = $row;
};

echo json_encode($return);

?>