<?php

date_default_timezone_set('America/Chicago');

try
{
	$m = new MongoClient();
	$db = $m->select('test');
}
catch (MongoConnectionException $e)
{
	echo "<h1>Couldn't connect to mongodb</h1>";
	exit();
}
