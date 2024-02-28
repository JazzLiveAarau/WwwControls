// File: Main.js
// Date: 2024-02-28
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Functions for the test of controls and for the function eventMergeFiles that uploads 
// the JavaScript files to the server directory JazzScripts. In eventMergeFiles is also
// the name of the merge file defined.
//
// The JavaScripts files that shall be merged are defined in the file MergeControls.php
//
// Files from the local directory WwwControls shall be uploaded to the server direcory
// www/WwwControls. Please note that the merge PHP function only works for the uploaded
// files, i.e. the HTML web page https://www.jazzliveaarau.ch/WwwControls/TestControls.htm

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Text box 
var g_text_box = null;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Main Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Main (onload) function for the controls test application 
function initTestControls()
{

    createTextBox();

    createControlUploadImageToServer();
 

} // initTestControls

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Main Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Controls And Events ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create a control for the upload of images to the server
function createControlUploadImageToServer()
{
    var upload_path = 'https://jazzliveaarau.ch/WwwControls/UploadedImages/';

    var upload_file_name = 'Image_' + UtilDate.getTimeStamp();

    // The extension will be defined by the image file that the user selected
    var upload_file_extension = ''; 

    var image_max_size_mb = 1.5;

    var default_img = 'https://jazzliveaarau.ch/WwwControls/Icons/default_upload_image.jpg';

    var caption_select_img = 'Bild wählen';

    var input_data = new JazzUploadImageInput(upload_file_name, upload_file_extension, upload_path, 
            image_max_size_mb, default_img, caption_select_img, callbackImageIsUploaded);

    g_upload_image_object = new JazzUploadImage(getIdDivImageContainer(), input_data);


} // createControlUploadImageToServer

// Callback function: An image was loaded to the <img> element that displays the uploaded image
// b_default_img equals true: The default image is loaded (normally perhaps do nothing)
// b_default_img equals false: The selected picture is loaded/displayed. The user can continue
function callbackImageIsUploaded(b_default_img)
{
    if (b_default_img)
    {
        console.log("callbackImageIsUploaded Default image was loaded");
    }
    else
    {
        console.log("callbackImageIsUploaded Selected image was loaded");

        // alert("callbackImageIsUploaded Selected image was loaded");
    }
    
} // callbackImageIsUploaded

// Create the title text box
function createTextBox()
{
    g_text_box = new JazzTextBox("id_control_text_box", getIdDivTextBox());

    g_text_box.setLabelText("Label for the textbox");

    g_text_box.setSize("50");

    g_text_box.setLabelTextPositionAbove();

    g_text_box.setTitle("Tooltip for the textbox");

    g_text_box.setOninputFunctionName("oninputTextBox");
  
} // createTextBox

// Event function when user adds or delets a character in the text box
function oninputTextBox()
{
    alert("oninputTextBox Character(s) added or deleted");

} // oninputTextBox

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create Controls And Events //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Id And Element Functions //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Returns the identity of the <div> element for the textbox control
function getIdDivTextBox()
{
    return 'id_div_control_text_box';

} // getIdDivTextBox

// Returns the identity of the <div> element for the textbox control
function getIdDivButton()
{
    return 'id_div_control_button';

} // getIdDivButton

// Returns the identity of the image <div> container
function getIdDivImageContainer()
{
    return 'id_div_control_upload_image';

} // getIdDivImageContainer


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Id And Element Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// User clicked merge files. 
// The JavaScript files will be merged to one file and written to the server directory
// /www/JazzScripts/. The directory name is defined in file MergeControls.php.
function eventMergeFiles()
{
    var file_name = 'Controls_20240106.js';

    $.post
      ('PhpMerge/MergeControls.php',
        {
          file_name: file_name
        },
        function(data_save,status_save)
		{
            if (status_save == "success")
            {
                alert("JavaScript files merged to " + file_name + 
                " saved to server directory /www/JavaScripts/.");
            }
            else
            {
				alert("Execution of MergeControls.php failed");
            }          
        } // function

      ); // post
	  

} // eventMergeFiles

