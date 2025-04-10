// File: Main.js
// Date: 2025-04-10
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

// Object of class DisplayImage
var g_display_image = null;

// Instance of class JazzUploadImage
var g_upload_image_object = null;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Main Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Main (onload) function for the controls test application 
function initTestControls()
{
   
    
    // createDisplayImage();

    // createTextBox();

    // createToolbar();

    // createIcon();

    createControlUploadImageToServer();
 

} // initTestControls


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Main Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Controls And Events ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////



// Create DisplayImage object
function createDisplayImage()
{

    g_display_image = new DisplayImage('jazz_guests', getIdDivDisplayImageContainer());

    setDisplayImageArrays();

    setDisplayImageText();

    setDisplayImageEventFunctions();

    g_display_image.setImageContainerHeight('400px');

    g_display_image.setImageContainerWidth('94%');

    g_display_image.instantiate();

    var active_rec_number = g_display_image.getActiveRecordNumber();

    console.log("Active record number is " + active_rec_number.toString());

} // createDisplayImage

// Set the DisplayImageText event functions
function setDisplayImageEventFunctions()
{
    g_display_image.setOnclickNextImageFunctionName('displayNextJazzGuestImage');

    g_display_image.setOnclickPrevImageFunctionName('displayPreviousJazzGuestImage');

    g_display_image.setOnclickFullScreenImageFunctionName('displayJazzGuestImageFullScreen');

    g_display_image.setOnclickCloseImageFunctionName('closeJazzGuestImageWindow');

    g_display_image.setMouseOverFunctionName('onMouseOverGuestImageToolbar');

    g_display_image.setMouseOutFunctionName('onMouseOutGuestImageToolbar');

} // setDisplayImageEventFunctions

// Display next 
function displayNextJazzGuestImage()
{
    g_display_image.setAndDisplayNextRecord();

} // displayNextJazzGuestImage

// Display previous 
function displayPreviousJazzGuestImage()
{
    g_display_image.setAndDisplayPreviousRecord();

} // displayPreviousJazzGuestImage

function displayJazzGuestImageFullScreen()
{
    alert("displayJazzGuestImageFullScreen User clicked show image on full screen");

} // displayJazzGuestImageFullScreen

function closeJazzGuestImageWindow()
{
    //QQ alert("closeJazzGuestImageWindow User clicked close window");

    g_display_image.hideImageContainerDiv();

} // closeJazzGuestImageWindow

// Mouse over image toolbar left or right
function onMouseOverGuestImageToolbar()
{
    g_display_image.displayImageToolbars();

} // onMouseOverGuestImageToolbar

// Mouse out from image toolbar left or right
function onMouseOutGuestImageToolbar()
{
    g_display_image.hideImageToolbars();

} // onMouseOutGuestImageToolbar


// Set the DisplayImageText object
function setDisplayImageText()
{
    var b_desktop = true;

    var font_size = '; font-size: 15px';
    if (!b_desktop)
    {
        font_size = '; font-size: 10px';
    }

    var style_text_group_all = 'clear: both; overflow: hidden; background-color: black; color: white';
    g_display_image.setStyleTextGroupAll(style_text_group_all);

    var style_text_group_one = 'clear: both; overflow: hidden';
    g_display_image.setStyleTextGroupOne(style_text_group_one);

    var style_text_group_two = 'clear: both; overflow: hidden';
    g_display_image.setStyleTextGroupTwo(style_text_group_two);

    var style_text_one = 'float: left; padding: 5px; font-weight: bold' + font_size;
    g_display_image.setStylTextOneString(style_text_one);

    var style_text_two = 'float: right; padding: 5px; font-weight: bold' + font_size;;
    g_display_image.setStylTextTwoString(style_text_two);

    var style_text_three = 'clear:both; padding: 5px; text-align: center; font-style: italic; font-weight: bold' + font_size;;
    g_display_image.setStylTextThreeString(style_text_three);

    var style_text_four = 'clear:both; padding: 5px; font-style: italic; font-weight: bold' + font_size;;
    g_display_image.setStylTextFourString(style_text_four);

    //g_display_image.m_display_image_text.display();


} // setDisplayImageText

// Set the DisplayImage arrays
function setDisplayImageArrays()
{
    var jazz_guest_array = getJazzGuestArray();

    var rec_number_array = [];

    var text_field_one_array = [];

    var text_field_two_array = [];

    var text_field_three_array = [];

    var text_field_four_array = [];

    var image_file_name_array = [];

    for (var index_rec=0; index_rec < jazz_guest_array.length; index_rec++)
    {
        var current_rec = jazz_guest_array[index_rec];

        var guest_year = current_rec.getYear();
        var guest_month = current_rec.getMonth();
        var guest_day = current_rec.getDay();
        var guest_date = UtilDate.getSwissDateString(guest_year, guest_month, guest_day);

        var guest_header = current_rec.getHeader();

        var guest_names = current_rec.getNames();

        var guest_text = current_rec.getText();

        var text_one_str = guest_header;
        var text_two_str = guest_date;
        var text_three_str = guest_names;
        var text_four_str = guest_text;

        var image_file_name = current_rec.getFileName();

        rec_number_array[index_rec] = current_rec.getRegNumber();

        text_field_one_array[index_rec] = text_one_str;

        text_field_two_array[index_rec] = text_two_str;

        text_field_three_array[index_rec] = text_three_str;

        text_field_four_array[index_rec] = text_four_str;

        image_file_name_array[index_rec] = image_file_name;

    } // index_rec

    g_display_image.setRecordNumberArray(rec_number_array);
    g_display_image.setRecordTextFieldOneArray(text_field_one_array);
    g_display_image.setRecordTextFieldTwoArray(text_field_two_array);
    g_display_image.setRecordTextFieldThreeArray(text_field_three_array);
    g_display_image.setRecordTextFieldFourArray(text_field_four_array);
    g_display_image.setRecordImageFileNameArray(image_file_name_array);

} // setDisplayImageArrays

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

function onClickReplaceDefaultImage()
{
    var full_server_file_name = 'https://jazzliveaarau.ch/WwwControls/UploadedImages/ChangedFileName.jpg';

    g_upload_image_object.changeDefaultImageFile(full_server_file_name);

} // onClickReplaceDefaultImage

// Callback function: An image was loaded to the <img> element that displays the uploaded image
// b_default_img equals true: The default image is loaded (normally perhaps do nothing)
// b_default_img equals false: The selected picture is loaded/displayed. The user can continue
function callbackImageIsUploaded(b_default_img)
{
    var n_images = g_upload_image_object.getNumberOfUploadedImages();

    if (b_default_img)
    {
        console.log("callbackImageIsUploaded Default image was loaded n_images= " + n_images.toString());
    }
    else
    {
        console.log("callbackImageIsUploaded Selected image was loaded n_images= " + n_images.toString());

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

// Returns the element display image container
function getElementDivDisplayImageContainer()
{
    return document.getElementById(getIdDivDisplayImageContainer());

} // getElementDivDisplayImageContainer

// Returns the identity of the display image container
function getIdDivDisplayImageContainer()
{
    return 'id_div_control_display_image';

} // getIdDivDisplayImageContainer

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Id And Element Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Test Data Functions ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get test data array
function getJazzGuestArray()
{
    var jazz_guest_array = []; 
    jazz_guest_array[0] = new JazzGuest(); 
    jazz_guest_array[0].setHeader("Stewy von Wattenwyl Trio"); 
    jazz_guest_array[0].setText(""); 
    jazz_guest_array[0].setNames("Gianin Flucher"); 
    jazz_guest_array[0].setFileName("https://jazzliveaarau.ch/JazzGuests/d20060218_GianinFlucher.jpg"); 
    jazz_guest_array[0].setFileType("IMG"); 
    jazz_guest_array[0].setStatus("AddedOrCheckedRecordByAdmin"); 
    jazz_guest_array[0].setBand("Stewy von Wattenwyl Trio"); 
    jazz_guest_array[0].setMusicians("Stewy von Wattenwyl, Daniel Schläppi, Tobias Friedli"); 
    jazz_guest_array[0].setYear(2006); 
    jazz_guest_array[0].setMonth(2); 
    jazz_guest_array[0].setDay(18); 
    jazz_guest_array[0].setRemark("Sohn von Martin Flucher (Konzertbesucher)"); 
    jazz_guest_array[0].setAvatar(""); 
    jazz_guest_array[0].setEmail(""); 
    jazz_guest_array[0].setTelephone(""); 
    jazz_guest_array[0].setPublish("TRUE"); 
    jazz_guest_array[0].setRegNumber(1); 
    jazz_guest_array[1] = new JazzGuest(); 
    jazz_guest_array[1].setHeader("Peter Schärli Trio featuring Ithamara Koorax"); 
    jazz_guest_array[1].setText(""); 
    jazz_guest_array[1].setNames("Peter Schärli, Ithamara Koorax, Markus Stalder, Thomas Dürst"); 
    jazz_guest_array[1].setFileName("https://jazzliveaarau.ch/JazzGuests/d20061125_PeterScharli.jpg"); 
    jazz_guest_array[1].setFileType("IMG"); 
    jazz_guest_array[1].setStatus("AddedOrCheckedRecordByAdmin"); 
    jazz_guest_array[1].setBand("Peter Schärli Trio featuring Ithamara Koorax"); 
    jazz_guest_array[1].setMusicians("Peter Schärli, Ithamara Koorax, Markus Stalder, Thomas Dürst"); 
    jazz_guest_array[1].setYear(2006); 
    jazz_guest_array[1].setMonth(11); 
    jazz_guest_array[1].setDay(25); 
    jazz_guest_array[1].setRemark(""); 
    jazz_guest_array[1].setAvatar(""); 
    jazz_guest_array[1].setEmail(""); 
    jazz_guest_array[1].setTelephone(""); 
    jazz_guest_array[1].setPublish("TRUE"); 
    jazz_guest_array[1].setRegNumber(2); 
    jazz_guest_array[2] = new JazzGuest(); 
    jazz_guest_array[2].setHeader("Erich Gandet Quintet"); 
    jazz_guest_array[2].setText(""); 
    jazz_guest_array[2].setNames("Erich Gandet, Bruno Gandet, Rougie Rothenbühler, Tico Keller, Hannes Hänggli"); 
    jazz_guest_array[2].setFileName("https://jazzliveaarau.ch/JazzGuests/d20061209_ErichGandetQuintet.png"); 
    jazz_guest_array[2].setFileType("IMG"); 
    jazz_guest_array[2].setStatus("AddedOrCheckedRecordByAdmin"); 
    jazz_guest_array[2].setBand("Erich Gandet Quintet"); 
    jazz_guest_array[2].setMusicians("Erich Gandet, Bruno Gandet, Rougie Rothenbühler, Tico Keller, Hannes Hänggli"); 
    jazz_guest_array[2].setYear(2006); 
    jazz_guest_array[2].setMonth(12); 
    jazz_guest_array[2].setDay(9); 
    jazz_guest_array[2].setRemark(""); 
    jazz_guest_array[2].setAvatar(""); 
    jazz_guest_array[2].setEmail(""); 
    jazz_guest_array[2].setTelephone(""); 
    jazz_guest_array[2].setPublish("TRUE"); 
    jazz_guest_array[2].setRegNumber(3); 
    jazz_guest_array[3] = new JazzGuest(); 
    jazz_guest_array[3].setHeader("Urban Spaces Quartet"); 
    jazz_guest_array[3].setText(""); 
    jazz_guest_array[3].setNames("Francis Petter, Edgar Marc Petter, Peter Hunziker, Bruno Huwyler"); 
    jazz_guest_array[3].setFileName("https://jazzliveaarau.ch/JazzGuests/20070127_UrbanSpaces.png"); 
    jazz_guest_array[3].setFileType("IMG"); 
    jazz_guest_array[3].setStatus("AddedOrCheckedRecordByAdmin"); 
    jazz_guest_array[3].setBand("Urban Spaces Quartet"); 
    jazz_guest_array[3].setMusicians("Francis Petter, Edgar Marc Petter, Peter Hunziker, Bruno Huwyler"); 
    jazz_guest_array[3].setYear(2007); 
    jazz_guest_array[3].setMonth(1); 
    jazz_guest_array[3].setDay(27); 
    jazz_guest_array[3].setRemark("GaestebuchJazzLiveAarau. Erlaubnis Veronique Weiersmüller"); 
    jazz_guest_array[3].setAvatar(""); 
    jazz_guest_array[3].setEmail(""); 
    jazz_guest_array[3].setTelephone(""); 
    jazz_guest_array[3].setPublish("TRUE"); 
    jazz_guest_array[3].setRegNumber(4); 
    jazz_guest_array[4] = new JazzGuest(); 
    jazz_guest_array[4].setHeader("Voice it"); 
    jazz_guest_array[4].setText(""); 
    jazz_guest_array[4].setNames("Lisette Spinnler"); 
    jazz_guest_array[4].setFileName("https://jazzliveaarau.ch/JazzGuests/d20070210_VoiceIt.jpg"); 
    jazz_guest_array[4].setFileType("IMG"); 
    jazz_guest_array[4].setStatus("AddedOrCheckedRecordByAdmin"); 
    jazz_guest_array[4].setBand("Voice it"); 
    jazz_guest_array[4].setMusicians("Lisette Spinnler, Roland Köppel, Andreas Schnyder, Jean-Pierre Schaller"); 
    jazz_guest_array[4].setYear(2007); 
    jazz_guest_array[4].setMonth(2); 
    jazz_guest_array[4].setDay(10); 
    jazz_guest_array[4].setRemark(""); 
    jazz_guest_array[4].setAvatar(""); 
    jazz_guest_array[4].setEmail(""); 
    jazz_guest_array[4].setTelephone(""); 
    jazz_guest_array[4].setPublish("TRUE"); 
    jazz_guest_array[4].setRegNumber(5); 
    
    return jazz_guest_array;

} // getJazzGuestArray

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Test Data Functions /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Merge Code Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// User clicked merge files. 
// The JavaScript files will be merged to one file and written to the server directory
// /www/JazzScripts/. The directory name is defined in file MergeControls.php.
function eventMergeFiles()
{
    var file_name = 'Controls_20250406.js';

    var reservation_file_name = 'Controls_Reservation_20240317.js';

    $.post
      ('PhpMerge/MergeControls.php',
        {
          file_name: file_name,
          reservation_file_name: reservation_file_name
        },
        function(data_save,status_save)
		{
            if (status_save == "success")
            {
                alert("JavaScript files merged to " + file_name + " and " + reservation_file_name +
                " saved to server directory /www/JavaScripts/ and www/ReservationLayout/Libs/.");
            }
            else
            {
				alert("Execution of MergeControls.php failed");
            }          
        } // function

      ); // post
	  

} // eventMergeFiles


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Merge Code Functions ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

