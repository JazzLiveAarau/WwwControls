// File: Main.js
// Date: 2023-10-25
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
// www/Controls. Please note that the merge PHP function only works for the uploaded
// files, i.e. the HTML web page https://www.jazzliveaarau.ch/Controls/TestControls.htm

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
 

} // initTestControls

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Main Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Controls And Events ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Id And Element Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// User clicked merge files. 
// The JavaScript files will be merged to one file and written to the server directory
// /www/JazzScripts/. The directory name is defined in file MergeLoginLogout.php.
function eventMergeFiles()
{
    var file_name = 'Controls_20231025.js';

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

