// File: Main.js
// Date: 2024-04-08
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

// Icon 
var g_icon = null;

// Toolbar
var g_toolbar = null;

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

    createToolbar();

    // createIcon();

    createControlUploadImageToServer();
 

} // initTestControls

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Main Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Controls And Events ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create a toolbar
function createToolbar()
{
    var object_one = new JazzToolbarData('JazzIcon');

    var object_two = new JazzToolbarData('JazzIcon');

    var object_three = new JazzToolbarData('JazzIcon');

    var object_four = new JazzToolbarData('JazzIcon');

    object_one.setImageUrl('https://jazzliveaarau.ch/Homepage/Icons/icon_edit.png'); // getFilenameIconEdit()

    object_one.setOnclickFunctionName('clickGuestBookAdminEdit');

    object_one.setLabelText('Admin');

    object_one.setTitle('Admin title');

    object_one.setImageAlt('Edit icon');

    object_two.setImageUrl('https://jazzliveaarau.ch/Homepage/Icons/icon_add.png'); // getFilenameIconAdd()

    object_two.setOnclickFunctionName('clickGuestBookAddImage');

    object_two.setLabelText('Zufügen');

    object_two.setTitle('Zufügen title');

    object_two.setImageAlt('Add record icon');

    object_two.setImagePadding('5px');

    object_three.setImageUrl('https://jazzliveaarau.ch/Homepage/Icons/icon_random_dice.png'); // getFilenameIconRandomDice()

    object_three.setOnclickFunctionName('clickGuestBookIconRandom');

    object_three.setLabelText('Zufall');

    object_three.setTitle('Zufall title');

    object_three.setImageAlt('Random icon');

    object_four.setImageUrl('https://jazzliveaarau.ch/Homepage/Icons/icon_info_invert.png'); // getFilenameIconInfoInvert()

    object_four.setOnclickFunctionName('clickGuestBookInfo');

    object_four.setLabelText('');

    object_four.setTitle('Info title');

    object_four.setImageAlt('Information icon');

    object_one.setWidth('30px');

    object_two.setWidth('30px');

    object_three.setWidth('30px');

    object_four.setWidth('26px');

    var toolbar_data_array = [];

    toolbar_data_array[0] = object_one;

    toolbar_data_array[1] = object_two;

    toolbar_data_array[2] = object_three;

    toolbar_data_array[3] = object_four;

    g_toolbar = new JazzToolbar(toolbar_data_array, 'guestbook', getIdDivToolbarContainer());

    g_toolbar.setLabelCase('below');

    g_toolbar.setMarginLeft('5px')

    g_toolbar.setMarginTop('2px')

    g_toolbar.setLabelPadding('9px');

    g_toolbar.setFontColor('white');

    g_toolbar.setBackgroundColor('black');

    //g_toolbar.setVerticalToTrue();

    g_toolbar.instantiate();

} // createToolbar

function clickGuestBookAdminEdit()
{
    alert("clickGuestBookAdminEdit Admin edit icon was clicked");

} // clickGuestBookAdminEdit

function clickGuestBookAddImage()
{
    alert("clickGuestBookAddImage Add record icon was clicked");

} // clickGuestBookAddImage

function clickGuestBookIconRandom()
{
    alert("clickGuestBookIconRandom Random show icon was clicked");

} // clickGuestBookIconRandom

function clickGuestBookInfo()
{
    alert("clickGuestBookInfo Information icon was clicked");

} // clickGuestBookInfo

// Create an icon control
function createIcon()
{
    var image_url = 'https://jazzliveaarau.ch/WwwControls/Icons/JazzNote.png';

    g_icon = new JazzIcon(image_url, 'id_icon', getIdDivToolbarContainer());

    g_icon.setHeight('97%');

    g_icon.setOnclickFunctionName('clickTestIcon');

    g_icon.setTitle('Does title work for an image element? Yes it does');

} // createIcon

// Event icon was clicked
function clickTestIcon()
{
    alert("clickTestIcon Icon was clicked");

} // clickTestIcon

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

    var full_server_file_name = 'https://jazzliveaarau.ch/WwwControls/UploadedImages/ChangedFileName.jpg';

    // Possibility to change name: g_upload_image_object.setUploadFileUrl(full_server_file_name);


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

// Returns the identity of the image <div> container
function getIdDivToolbarContainer()
{
    return 'id_div_container_toolbar';

} // getIdDivToolbarContainer

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

