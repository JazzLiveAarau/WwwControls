

<?php

// Merges control files
// -------------------------
// Input data is the output file name 
// Please note that escape characters like \n not is allowed in the string
//
// This function is called from another HTML (or PHP) page this way:
// $.post("SaveFileOnServer.php", {file_content: content_string, file_name: file_name_str},function(data,status){alert(data);});
//
// $.post():               Method requesting data from the server using an HTTP POST request. 
//                         Hier actually only requesting an execution, i.e. create a file 
// "MergeLoginLogout.php": URL parameter specifies the URL you wish to request
//                         Please note that the whole file will be executed. Not a normal function call
// file_name:              Input PHP parameter for the execution (file_name_str is the JavaScript parameter) 
// function:               The callback function, i.e. defining what to do with the PHP result
//                         In this case nothing needs to be done in the calling JavaScript function
// data:                   The result of the execution. In this case only a message.
//                         The data is a string that is created from calls of PHP function echo
// status:                 Status from the execution. The value is success for a succesfull execution
//
// The function $.post is defined in a jQuery library that has to be included on calling web page
// The library may be downloaded, but also a CDN (Content Delivery Network) library can be referenced with
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//
// The above things are described on these pages:
// https://www.w3schools.com/jquery/jquery_ajax_get_post.asp
// https://www.w3schools.com/jquery/jquery_get_started.asp
// https://www.youtube.com/watch?v=jVAaxkbmCts
//
// Merging is described in
// https://www.wikicoode.com/php/merge-text-files-using-php-code


// Passed data from the calling function
$file_name = $_POST['file_name'];
$reservation_file_name = $_POST['reservation_file_name'];

$file_content = file_get_contents('../Scripts/JazzButton.js');
$file_content .= "\n" . file_get_contents('../Scripts/JazzTextBox.js');
$file_content .= "\n" . file_get_contents('../Scripts/JazzControlCheckBox.js');
$file_content .= "\n" . file_get_contents('../Scripts/JazzDropdown.js');
$file_content .= "\n" . file_get_contents('../Scripts/JazzControlUploadFile.js');
$file_content .= "\n" . file_get_contents('../Scripts/JazzControlDatePicker.js');
$file_content .= "\n" . file_get_contents('../Scripts/UtilControls.js');
$file_content .= "\n" . file_get_contents('../Scripts/GridList.js');
$file_content .= "\n" . file_get_contents('../Scripts/UtilHtml.js');
$file_content .= "\n" . file_get_contents('../Scripts/DisplayImage.js');
$file_content .= "\n" . file_get_contents('../Scripts/DisplayImageText.js');
$file_content .= "\n" . file_get_contents('../Scripts/JazzTextArea.js');
$file_content .= "\n" . file_get_contents('../Scripts/JazzUploadImage.js');
$file_content .= "\n" . file_get_contents('../Scripts/JazzIcon.js');
$file_content .= "\n" . file_get_contents('../Scripts/JazzToolbar.js');

$dir_name= '../../JazzScripts/';

$file_name_full = $dir_name . $file_name;

$fp = fopen($file_name_full, 'w');
if(!$fp)
    die('Could not create / open js file for writing (JazzScripts).');
if(fwrite($fp, $file_content) === false)
    die('Could not write to js file (JazzScripts).');

echo 'JavaScript files have been merged (JazzScripts).';

$reservation_file_content = file_get_contents('../Scripts/JazzButton.js');
$reservation_file_content .= "\n" . file_get_contents('../Scripts/JazzTextBox.js');
$reservation_file_content .= "\n" . file_get_contents('../Scripts/JazzControlCheckBox.js');
$reservation_file_content .= "\n" . file_get_contents('../Scripts/JazzDropdown.js');
$reservation_file_content .= "\n" . file_get_contents('../Scripts/UtilControls.js');
// $reservation_file_content .= "\n" . file_get_contents('../Scripts/JazzUploadImage.js');

$reservation_dir_name= '../../ReservationLayout/Libs/';

$reservation_file_name_full = $reservation_dir_name . $reservation_file_name;

$fp_reservation = fopen($reservation_file_name_full, 'w');
if(!$fp_reservation)
    die('Could not create / open js file for writing (Reservation).');
if(fwrite($fp_reservation, $reservation_file_content) === false)
    die('Could not write to js file (Reservation).');

echo 'JavaScript files have been merged (Reservation).';
 
?>
 
