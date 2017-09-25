<?php
	$user_id = 88951953;// я

	$request_params = array(
		'user_id' => $user_id,
		'message' => 'test',
		'access_token' => 'ff60a509426738670470ad6db89330d2fac591ad166070fb2a11085736c0230a6cc28408cc3b8d90c6e2b',//моя страница
		'v' => '5.62'
	);

	$get_params = http_build_query($request_params);
	//$result = json_decode(file_get_contents('https://api.vk.com/method/messages.send?'. $get_params));
	echo 'https://api.vk.com/method/messages.send?'. $get_params;
	print_r($result->response );



/*

https://oauth.vk.com/authorize?client_id=5858544&display=page&response_type=code&redirect_uri=https://oauth.vk.com/page.html&display=page&scope=331776&v=5.62&group_ids=141007443


https://oauth.vk.com/authorize?client_id=5858544&display=page&redirect_uri=&group_ids=141007443&scope=messages&response_type=code&v=5.62


https://oauth.vk.com/access_token?client_id=5858544&client_secret=OGW7rvadd5lpeVeqqrqD&redirect_uri=https://oauth.vk.com/page.html&code=6121120ece24075623


{"expires_in":0,"access_token_141007443":"6b3fb6512d05eeb61c8cdb9c18e316488f8db7d83b9631d1a18306c3996d83ff844c23c28acce457a483b"}


https://api.vk.com/method/messages.send?user_id=88951953&message=test&access_token=6b3fb6512d05eeb61c8cdb9c18e316488f8db7d83b9631d1a18306c3996d83ff844c23c28acce457a483b&v=5.62 //сообщество
*/

?> 