// File: DisplayImage.js
// Date: 2024-01-29
// Author: Gunnar Lidén

// File content
// =============
//
// Class DisplayImage

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Control Grid List /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// // Class that creates a display image control
class DisplayImage 
{
   // Creates the instance of the class
    // i_id_my_fctn_str: 
    // Application unique string for the calling function. 
    // Used to construct identities and class names
    // i_id_div_container:
    // Place holder for the DisplayImage element
    constructor(i_id_my_fctn_str, i_id_div_container) 
    {
        // Member variables
        // ================

        // String used to construct identities and class names that are
        // unique for an application
        this.m_id_my_fctn_str = i_id_my_fctn_str;

        // The identity of the container for the control
        this.m_id_div_container = i_id_div_container;

        // Image container height
        this.m_image_container_height = '650px';

        // Icon width
        this.m_icon_width = '70px';

        // Icon one width
        this.m_icon_one_width = '70px';

        // Icon two width
        this.m_icon_two_width = '70px';

        // Icon three width
        this.m_icon_three_width = '70px';

        // Icon four width
        this.m_icon_four_width = '70px';

        // Icon five width
        this.m_icon_five_width = '70px';

        // Icon six width
        this.m_icon_six_width = '70px';

        // Image file name
        this.m_image_file_name = '';

        // Image default/undefined file name
        this.m_image_deault_file_name = 'Homepage/Icons/jazz_photo_undefined.png';

        // Image style string No longer used. DisplayImage sets these attributes
        this.m_image_style_str =  '';
        // this.m_image_style_str =  'display:block; margin-left: auto; margin-right: auto';

        // Icon one file name
        this.m_icon_one_file_name = '';

        // Icon two file name
        this.m_icon_two_file_name = '';

        // Icon three file name
        this.m_icon_three_file_name = '';

        // Icon four file name
        this.m_icon_four_file_name = '';

        // Icon five file name
        this.m_icon_five_file_name = '';

        // Icon six file name
        this.m_icon_six_file_name = '';

        // The string for the text one element
        this.m_text_one_str = '';

        // The text for the text two element
        this.m_text_two_str = '';

        // The string for the text three element
        this.m_text_three_str = '';

        // The string for the text four element
        this.m_text_four_str = '';

        // The onclick icon one function name. Only the name is input
        this.m_onclick_icon_one_function_name = '';

        // The onclick icon two function name. Only the name is input
        this.m_onclick_icon_two_function_name = '';

        // The onclick icon three function name. Only the name is input
        this.m_onclick_icon_three_function_name = '';

        // The onclick icon four function name. Only the name is input
        this.m_onclick_icon_four_function_name = '';

        // Styles for the group div with icons. Separate with semicolon
        this.m_style_icons_group = '';

        // Styles for the display image icon one element. Separate with semicolon
        this.m_style_icon_one = '';

        // Styles for the display image icon two element. Separate with semicolon
        this.m_style_icon_two = '';

        // Styles for the display image icon three element. Separate with semicolon
        this.m_style_icon_three = '';

        // Styles for the display image icon four element. Separate with semicolon
        this.m_style_icon_four = '';

        // Styles for the display image icon five element. Separate with semicolon
        this.m_style_icon_five = '';

        // Styles for the display image icon six element. Separate with semicolon
        this.m_style_icon_six = '';

        // Styles for a display image picture container element. Separate with semicolon
        // Function sets clear:both; height: m_image_container_height
        this.m_style_picture_container = '';

        // Styles for the text group all element. Separate with semicolon
        this.m_style_text_group_all = ''; // clear: both; overflow: hidden

        // Styles for the text group one element. Separate with semicolon
        this.m_style_text_group_one = ''; // clear: both; overflow: hidden

        // Styles for the text group two element. Separate with semicolon
        this.m_style_text_group_two = ''; // clear: both; overflow: hidden

        // Styles for text one. Separate with semicolon
        this.m_style_text_one = ''; // float: left; font-size: 15px; font-weight: bold; padding: 5px

        // Styles for text two. Separate with semicolon
        this.m_style_text_two = ''; // float: right; font-size: 15px; font-weight: bold; padding: 5px

        // Styles for text three. Separate with semicolon
        this.m_style_text_three = ''; // clear:both; font-size: 15px; font-style: italic; font-weight: bold; padding: 5px

        // Styles for text four. Separate with semicolon
        this.m_style_text_four = ''; // clear:both; font-size: 15px; font-style: italic; font-weight: bold; padding: 5px

        // Flag telling if div borders shall be displayed for debugging
        this.m_display_div_borders = false;

    } // constructor

    // Set the image file name, scale, position and display image
    setScalePositionDisplayImage(i_image_file_name)
    {
        console.log("DisplayImage.setScalePositionDisplayImage i_image_file_name= " + i_image_file_name);

        this.m_image_file_name = i_image_file_name;   

        var el_div_container = document.getElementById(this.getIdPictureContainer());

        if (null == el_div_container)
        {
            alert("DisplayImage.setScalePositionDisplayImage Picture container element is null");

            return;
        }

        UtilImage.replaceImageInDivContainer(i_image_file_name, el_div_container);

    } // setScalePositionDisplayImage

    // Hide the image container div
    hideImageContainerDiv()
    {
        var el_div_container = document.getElementById(this.m_id_div_container);

        el_div_container.style.display = 'none';

    } // hideImageContainerDiv

    // Display the image container div
    displayImageContainerDiv()
    {
        var el_div_container = document.getElementById(this.m_id_div_container);

        el_div_container.style.display = 'block';

    } // displayImageContainerDiv

    // Set image height
    setImageContainerHeight(i_image_container_height)
    {
      this.m_image_container_height = i_image_container_height;   

    } // setImageContainerHeight

    // Set icon width
    setIconWidth(i_icon_width)
    {
        this.m_icon_width = i_icon_width;  

    } // setIconWidth

    // Set icon one width
    setIconOneWidth(i_icon_one_width)
    {
        this.m_icon_one_width = i_icon_one_width;  

    } // setIconOneWidth

    // Set icon two width
    setIconTwoWidth(i_icon_two_width)
    {
        this.m_icon_two_width = i_icon_two_width;  

    } // setIconTwoWidth

    // Set icon three width
    setIconThreeWidth(i_icon_three_width)
    {
        this.m_icon_three_width = i_icon_three_width;  

    } // setIconThreeWidth

    // Set icon four width
    setIconFourWidth(i_icon_four_width)
    {
        this.m_icon_four_width = i_icon_four_width;  

    } // setIconFourWidth

    // Set icon five width
    setIconFiveWidth(i_icon_five_width)
    {
        this.m_icon_five_width = i_icon_five_width;  

    } // setIconFiveWidth

    // Set icon six width
    setIconSixWidth(i_icon_six_width)
    {
        this.m_icon_six_width = i_icon_six_width;  

    } // setIconSixWidth

    // Set icon one file name
    setIconOneFileName(i_icon_one_file_name)
    {
        this.m_icon_one_file_name = i_icon_one_file_name;    

    } // setIconOneFileName

    // Set icon two file name
    setIconTwoFileName(i_icon_two_file_name)
    {
        this.m_icon_two_file_name = i_icon_two_file_name;    
            
    } // setIconTwoFileName

    // Set icon three file name
    setIconThreeFileName(i_icon_three_file_name)
    {
        this.m_icon_three_file_name = i_icon_three_file_name;    
            
    } // setIconThreeFileName

    // Set icon four file name
    setIconFourFileName(i_icon_four_file_name)
    {
        this.m_icon_four_file_name = i_icon_four_file_name;    
            
    } // setIconFourFileName
    
    // Set icon five file name
    setIconFiveFileName(i_icon_five_file_name)
    {
        this.m_icon_five_file_name = i_icon_five_file_name;    
            
    } // setIconFiveFileName

    // Set icon six file name
    setIconSixFileName(i_icon_six_file_name)
    {
        this.m_icon_six_file_name = i_icon_six_file_name;    
            
    } // setIconSixFileName

    // Set the text one element
    setTextOne(i_text_one_str)
    {      
        this.m_text_one_str = i_text_one_str;

        var el_text_one = this.getElementTextOneDiv();

        if (null == el_text_one)
        {
            alert("DisplayImage.setTextOne Element is not created");

            return;
        }

        el_text_one.innerHTML = this.m_text_one_str;

    } // setTextOne

    // Set the text two element
    setTextTwo(i_text_two_str)
    {      
        this.m_text_two_str = i_text_two_str;

        var el_text_two = this.getElementTextTwoDiv();

        if (null == el_text_two)
        {
            alert("DisplayImage.setTextTwo Element is not created");

            return;
        }

        el_text_two.innerHTML = this.m_text_two_str;
        
    } // setTextTwo

    // Set the text three element
    setTextThree(i_text_three_str)
    {      
        this.m_text_three_str = i_text_three_str;

        var el_text_three = this.getElementTextThreeDiv();

        if (null == el_text_three)
        {
            alert("DisplayImage.setTextThree Element is not created");

            return;
        }

        el_text_three.innerHTML = this.m_text_three_str;
        
    } // setTextThree

    // Set the text four element
    setTextFour(i_text_four_str)
    {      
        this.m_text_four_str = i_text_four_str;

        var el_text_four = this.getElementTextFourDiv();

        if (null == el_text_four)
        {
            alert("DisplayImage.setTextFour Element is not created");

            return;
        }

        el_text_four.innerHTML = this.m_text_four_str;
        
    } // setTextFour

    // Sets the onclick icon one function name. Only the name is input
    setOnclickIconOneFunctionName(i_onclick_icon_one_function_name) 
    {
      this.m_onclick_icon_one_function_name = i_onclick_icon_one_function_name;

    } // setOnclickIconOneFunctionName  

    // Sets the onclick icon two function name. Only the name is input
    setOnclickIconTwoFunctionName(i_onclick_icon_two_function_name) 
    {
      this.m_onclick_icon_two_function_name = i_onclick_icon_two_function_name;

    } // setOnclickIconTwoFunctionName  

    // Sets the onclick icon three function name. Only the name is input
    setOnclickIconThreeFunctionName(i_onclick_icon_three_function_name) 
    {
      this.m_onclick_icon_three_function_name = i_onclick_icon_three_function_name;

    } // setOnclickIconThreeFunctionName  

    // Sets the onclick icon four function name. Only the name is input
    setOnclickIconFourFunctionName(i_onclick_icon_four_function_name) 
    {
      this.m_onclick_icon_four_function_name = i_onclick_icon_four_function_name;

    } // setOnclickIconFourFunctionName  

    // Sets the onclick icon five function name. Only the name is input
    setOnclickIconFiveFunctionName(i_onclick_icon_five_function_name) 
    {
      this.m_onclick_icon_five_function_name = i_onclick_icon_five_function_name;

    } // setOnclickIconFiveFunctionName  

    // Sets the onclick icon six function name. Only the name is input
    setOnclickIconSixFunctionName(i_onclick_icon_six_function_name) 
    {
      this.m_onclick_icon_six_function_name = i_onclick_icon_six_function_name;

    } // setOnclickIconSixFunctionName  

    // Set styles for the group div with icons. Separate with semicolon
    setStyleIconsGroupString(i_style_icons_group)
    {
        this.m_style_icons_group = i_style_icons_group;

    } // setStyleIconsGroupString  

    // Set styles for the display image icon one element. Separate with semicolon
    setStyleIconOneString(i_style_icon_one)
    {
        this.m_style_icon_one = i_style_icon_one;

    } // setStyleIconOneString  

    // Set styles for the display image icon two element. Separate with semicolon
    setStyleIconTwoString(i_style_icon_two)
    {
        this.m_style_icon_two = i_style_icon_two;

    } // setStyleIconTwoString  

    // Set styles for the display image icon three element. Separate with semicolon
    setStyleIconThreeString(i_style_icon_three)
    {
        this.m_style_icon_three = i_style_icon_three;

    } // setStyleIconThreeString  

    // Set styles for the display image icon four element. Separate with semicolon
    setStyleIconFourString(i_style_icon_four)
    {
        this.m_style_icon_four = i_style_icon_four;

    } // setStyleIconFourString  

    // Set styles for the display image icon five element. Separate with semicolon
    setStyleIconFiveString(i_style_icon_five)
    {
        this.m_style_icon_five = i_style_icon_five;

    } // setStyleIconFourString  

    // Set styles for the display image icon six element. Separate with semicolon
    setStyleIconSixString(i_style_icon_six)
    {
        this.m_style_icon_six = i_style_icon_six;

    } // setStyleIconSixString  

    // Set styles for the display image picture element. Separate with semicolon
    // Function sets clear:both; height: m_image_container_height
    setStylePictureContainerString(i_style_picture_container)
    {
        this.m_style_picture_container = i_style_picture_container;

    } // setStylePictureContainerString  

     // Set styles for the text group all element. Separate with semicolon
    setStyleTextGroupAll(i_style_text_group_all)
    {
        this.m_style_text_group_all = i_style_text_group_all;

    } // setStyleTextGroupAll
       
    // Set styles for the text group one element. Separate with semicolon
    setStyleTextGroupOne(i_style_text_group_one)
    {
        this.m_style_text_group_one = i_style_text_group_one;

    } // setStyleTextGroupOne

    // Set styles for the text group two element. Separate with semicolon
    setStyleTextGroupTwo(i_style_text_group_two)
    {
        this.m_style_text_group_two = i_style_text_group_two;

    } // setStyleTextGroupTwo        
       
    // Set styles for text one. Separate with semicolon
    setStylTextOneString(i_style_text_one)
    {
        this.m_style_text_one = i_style_text_one;

    } // setStylTextOneString

    // Set styles for text two. Separate with semicolon
    setStylTextTwoString(i_style_text_two)
    {
        this.m_style_text_two = i_style_text_two;

    } // setStylTextTwoString

    // Set styles for text three. Separate with semicolon
    setStylTextThreeString(i_style_text_three)
    {
        this.m_style_text_three = i_style_text_three;

    } // setStylTextThreeString 

    // Set styles for text three. Separate with semicolon
    setStylTextFourString(i_style_text_four)
    {
        this.m_style_text_four = i_style_text_four;

    } // setStylTextFourString 

    // Returns the identity string for the picture container element
    getIdPictureContainer()
    {
        var ret_id_picure_str = 'id_display_image_';

        ret_id_picure_str = ret_id_picure_str + this.m_id_my_fctn_str;

        return ret_id_picure_str;
        
    } // getIdPictureContainer

    // Returns the HTML string that defines the picture element
    getPictureHtmlString(i_n_tabs)
    {
        var picture_container_style_str = 'clear:both; height: ' + this.m_image_container_height;

        if (this.m_style_picture_container.length > 0)
        {
            picture_container_style_str = picture_container_style_str + '; ' + this.m_style_picture_container;
        }

        if (this.m_display_div_borders.length > 0)
        {
            picture_container_style_str = picture_container_style_str + '; border: 1px solid blue';
        }

        if (this.m_image_file_name.length == 0)
        {
            this.m_image_file_name = this.m_image_deault_file_name;
        }
        
        var image_width = this.m_image_container_height; // TODO 

        var inner_html = UtilHtml.getImgStyleString(this.m_image_file_name, 'Guest Image', '', this.m_image_style_str, image_width, '', '');

        return UtilHtml.getDivElementLeafStyleString(this.getIdPictureContainer(), picture_container_style_str, inner_html, i_n_tabs+1);

    } // getPictureHtmlString

    // Returns the identity of the text group all div
    getIdTextGroupAllDiv()
    {
        return 'id_text_group_all_div_' + this.m_id_my_fctn_str;

    } // getIdTextGroupAllDiv

    // Returns the element text group all div
    getElementTextGroupAllDiv()
    {
        return document.getElementById(this.getIdTextGroupAllDiv());
    }

    // Hide element div text group all div
    hideElementTextGroupAllDiv()
    {
        this.getElementTextGroupAllDiv().style.display = "none";

    } // hideElementTextGroupAllDiv

    // Display element div text group all div
    displayElementTextGroupAllDiv()
    {
        this.getElementTextGroupAllDiv().style.display = "block";
        
    } // hideElementTextGroupAllDiv

    // Get the HTML string defining the text group all div
    getTextGroupAllDivHtmlString(i_n_tabs)
    {
        var text_group_all_div_style_str = '';

        if (this.m_display_div_borders)
        {
            text_group_all_div_style_str = text_group_all_div_style_str + '; border: 1px solid blue';
        }
        
        if (this.m_style_text_group_all.length > 0)
        {
            text_group_all_div_style_str = text_group_all_div_style_str + '; ' + this.m_style_text_group_all;
        }

        var text_group_all_inner_html = '';
		
        text_group_all_inner_html = text_group_all_inner_html + this.getTextGroupOneDivHtmlString(i_n_tabs+1);

        text_group_all_inner_html = text_group_all_inner_html + this.getTextGroupTwoDivHtmlString(i_n_tabs+1);

        return UtilHtml.getDivElementLeafStyleString(this.getIdTextGroupAllDiv(), text_group_all_div_style_str, text_group_all_inner_html, i_n_tabs+1);

    } // getTextGroupAllDivHtmlString

    // Returns the identity of the text group one div
    getIdTextGroupOneDiv()
    {
        return 'id_text_group_one_div_' + this.m_id_my_fctn_str;

    } // getIdTextGroupOneDiv

    // Returns the element text group one div
    getElementTextGroupOneDiv()
    {
        return document.getElementById(this.getIdTextGroupOneDiv());
    }

    // Hide element div text group one div
    hideElementTextGroupOneDiv()
    {
        this.getElementTextGroupOneDiv().style.display = "none";

    } // hideElementTextGroupOneDiv

    // Display element div text group one div
    displayElementTextGroupOneDiv()
    {
        this.getElementTextGroupOneDiv().style.display = "block";
        
    } // hideElementTextGroupOneDiv

    // Returns the identity of the text group two div
    getIdTextGroupTwoDiv()
    {
        return 'id_text_group_two_div_' + this.m_id_my_fctn_str;

    } // getIdTextGroupTwoDiv

    // Returns the element text group two div
    getElementTextGroupTwoDiv()
    {
        return document.getElementById(this.getIdTextGroupTwoDiv());
    }

    // Hide element div text group two div
    hideElementTextGroupTwoDiv()
    {
        this.getElementTextGroupTwoDiv().style.display = "none";

    } // hideElementTextGroupTwoDiv

    // Display element div text group two div
    displayElementTextGroupTwoDiv()
    {
        this.getElementTextGroupTwoDiv().style.display = "block";
        
    } // hideElementTextGroupTwoDiv


    // Get the HTML string defining the text group one div
    getTextGroupOneDivHtmlString(i_n_tabs)
    {
        var text_group_one_div_style_str = '';

        if (this.m_display_div_borders)
        {
            text_group_one_div_style_str = text_group_one_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_text_group_one.length > 0)
        {
            text_group_one_div_style_str = text_group_one_div_style_str + '; ' + this.m_style_text_group_one;
        }

        var text_group_one_inner_html = '';
		
        text_group_one_inner_html = text_group_one_inner_html + this.getTextOneDivHtmlString(i_n_tabs+1);

        text_group_one_inner_html = text_group_one_inner_html + this.getTextTwoDivHtmlString(i_n_tabs+1);

        return UtilHtml.getDivElementLeafStyleString(this.getIdTextGroupOneDiv(), text_group_one_div_style_str, text_group_one_inner_html, i_n_tabs+1);

    } // getTextGroupOneDivHtmlString

    // Get the HTML string defining the text group two div
    getTextGroupTwoDivHtmlString(i_n_tabs)
    {
        var text_group_two_div_style_str = '';

        if (this.m_display_div_borders)
        {
            text_group_two_div_style_str = text_group_two_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_text_group_two.length > 0)
        {
            text_group_two_div_style_str = text_group_two_div_style_str + '; ' + this.m_style_text_group_two;
        }

        var text_group_two_inner_html = '';
		
        text_group_two_inner_html = text_group_two_inner_html + this.getTextThreeDivHtmlString(i_n_tabs+1);

        text_group_two_inner_html = text_group_two_inner_html + this.getTextFourDivHtmlString(i_n_tabs+1);

        return UtilHtml.getDivElementLeafStyleString(this.getIdTextGroupTwoDiv(), text_group_two_div_style_str, text_group_two_inner_html, i_n_tabs+1);

    } // getTextGroupTwoDivHtmlString


    // Returns the identity of the text one div
    getIdTextOneDiv()
    {
        return 'id_text_one_div_' + this.m_id_my_fctn_str;

    } // getIdTextOneDiv

    // Returns the element text one div
    getElementTextOneDiv()
    {
        return document.getElementById(this.getIdTextOneDiv());
    }

    // Hide element div text one div
    hideElementTextOneDiv()
    {
        this.getElementTextOneDiv().style.display = "none";

    } // hideElementTextOneDiv

    // Display element div text one div
    displayElementTextOneDiv()
    {
        this.getElementTextOneDiv().style.display = "block";
        
    } // hideElementTextOneDiv

    // Get the HTML string defining the text one div
    getTextOneDivHtmlString(i_n_tabs)
    {
        var text_one_div_style_str = '';

        if (this.m_display_div_borders)
        {
            text_one_div_style_str = text_one_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_text_one.length > 0)
        {
            text_one_div_style_str = text_one_div_style_str + '; ' + this.m_style_text_one;
        }

        var text_one_inner_html = 'Place holder div for text one';

        return UtilHtml.getDivElementLeafStyleString(this.getIdTextOneDiv(), text_one_div_style_str, text_one_inner_html, i_n_tabs+1);

    } // getTextOneDivHtmlString

    // Returns the identity of the text two div
    getIdTextTwoDiv()
    {
        return 'id_text_two_div_' + this.m_id_my_fctn_str;

    } // getIdTextTwoDiv

    // Returns the element text two div
    getElementTextTwoDiv()
    {
        return document.getElementById(this.getIdTextTwoDiv());
    }

    // Hide element div text two div
    hideElementTextTwoDiv()
    {
        this.getElementTextTwoDiv().style.display = "none";

    } // hideElementTextTwoDiv

    // Display element div text two div
    displayElementTextTwoDiv()
    {
        this.getElementTextTwoDiv().style.display = "block";
        
    } // hideElementTextTwoDiv

    // Get the HTML string defining the text two div
    getTextTwoDivHtmlString(i_n_tabs)
    {
        var text_two_div_style_str = '';

        if (this.m_display_div_borders)
        {
            text_two_div_style_str = text_two_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_text_two.length > 0)
        {
            text_two_div_style_str = text_two_div_style_str + '; ' + this.m_style_text_two;
        }

        var text_two_inner_html = 'Place holder div for text two';

        return UtilHtml.getDivElementLeafStyleString(this.getIdTextTwoDiv(), text_two_div_style_str, text_two_inner_html, i_n_tabs+1);

    } // getTextTwoDivHtmlString

    // Returns the identity of the text three div
    getIdTextThreeDiv()
    {
        return 'id_text_three_div_' + this.m_id_my_fctn_str;

    } // getIdTextThreeDiv

    // Returns the element text three div
    getElementTextThreeDiv()
    {
        return document.getElementById(this.getIdTextThreeDiv());
    }

    // Hide element div text three div
    hideElementTextThreeDiv()
    {
        this.getElementTextThreeDiv().style.display = "none";

    } // hideElementTextThreeDiv

    // Display element div text three div
    displayElementTextThreeDiv()
    {
        this.getElementTextThreeDiv().style.display = "block";
        
    } // hideElementTextThreeDiv

    // Get the HTML string defining the text three div
    getTextThreeDivHtmlString(i_n_tabs)
    {
        var text_three_div_style_str = '';

        if (this.m_display_div_borders)
        {
            text_three_div_style_str = text_three_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_text_three.length > 0)
        {
            text_three_div_style_str = text_three_div_style_str + '; ' + this.m_style_text_three;
        }

        var text_three_inner_html = 'Place holder div for text three';

        return UtilHtml.getDivElementLeafStyleString(this.getIdTextThreeDiv(), text_three_div_style_str, text_three_inner_html, i_n_tabs+1);

    } // getTextThreeDivHtmlString

    // Returns the identity of the text four div
    getIdTextFourDiv()
    {
        return 'id_text_four_div_' + this.m_id_my_fctn_str;

    } // getIdTextFourDiv

    // Returns the element text four div
    getElementTextFourDiv()
    {
        return document.getElementById(this.getIdTextFourDiv());
    }

    // Hide element div text four div
    hideElementTextFourDiv()
    {
        this.getElementTextFourDiv().style.display = "none";

    } // hideElementTextFourDiv

    // Display element div text four div
    displayElementTextFourDiv()
    {
        this.getElementTextFourDiv().style.display = "block";
        
    } // hideElementTextFourDiv

    // Get the HTML string defining the text four div
    getTextFourDivHtmlString(i_n_tabs)
    {
        var text_four_div_style_str = '';

        if (this.m_display_div_borders)
        {
            text_four_div_style_str = text_four_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_text_four.length > 0)
        {
            text_four_div_style_str = text_four_div_style_str + '; ' + this.m_style_text_four;
        }

        var text_four_inner_html = 'Place holder div for text four';

        return UtilHtml.getDivElementLeafStyleString(this.getIdTextFourDiv(), text_four_div_style_str, text_four_inner_html, i_n_tabs+1);

    } // getTextFourDivHtmlString


    // Returns the identity of the icon one
    getIdIconOneDiv()
    {
        return 'id_icon_one_div_' + this.m_id_my_fctn_str;

    } // getIdIconOneDiv

    // Returns the element icon one
    getElementIconOneDiv()
    {
        return document.getElementById(this.getIdIconOneDiv());
    }

    // Hide element div icon one
    hideElementIconOneDiv()
    {
        this.getElementIconOneDiv().style.display = "none";

    } // hideElementIconOneDiv

    // Display element div icon one
    displayElementIconOneDiv()
    {
        this.getElementIconOneDiv().style.display = "block";
        
    } // hideElementIconOneDiv

    // Get the HTML string defining the div icon one
    getIconOneDivHtmlString(i_n_tabs)
    {
        var icon_one_div_style_str = 'width: auto';

        if (this.m_display_div_borders)
        {
            icon_one_div_style_str = icon_one_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_icon_one.length > 0)
        {
            icon_one_div_style_str = icon_one_div_style_str + '; ' + this.m_style_icon_one;
        }

        var image_width = this.m_icon_one_width;

        var icon_id = '';
        var icon_styles_str = 'cursor: pointer';

        var icon_one_inner_html = UtilHtml.getDivElementIconStyleString(icon_id, icon_styles_str, this.m_icon_one_file_name, image_width, this.m_onclick_icon_one_function_name, '', i_n_tabs+1)

        return UtilHtml.getDivElementLeafStyleString(this.getIdIconOneDiv(), icon_one_div_style_str, icon_one_inner_html, i_n_tabs+1);

    } // getIconOneDivHtmlString

    // Returns the identity of the icon two
    getIdIconTwoDiv()
    {
        return 'id_icon_two_div_' + this.m_id_my_fctn_str;

    } // getIdIconTwoDiv

    // Returns the element icon two
    getElementIconTwoDiv()
    {
        return document.getElementById(this.getIdIconTwoDiv());
    }

    // Hide element div icon two
    hideElementIconTwoDiv()
    {
        this.getElementIconTwoDiv().style.display = "none";

    } // hideElementIconTwoDiv

    // Display element div icon two
    displayElementIconTwoDiv()
    {
        this.getElementIconTwoDiv().style.display = "block";
        
    } // hideElementIconTwoDiv

    // Get the HTML string defining the div icon two
    getIconTwoDivHtmlString(i_n_tabs)
    {
        var icon_two_div_style_str = 'width: auto';
    
        if (this.m_display_div_borders)
        {
            icon_two_div_style_str = icon_two_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_icon_two.length > 0)
        {
            icon_two_div_style_str = icon_two_div_style_str + '; ' + this.m_style_icon_two;
        }

        var image_width = this.m_icon_two_width;

        var icon_id = '';
        var icon_styles_str = 'cursor: pointer';

        var icon_two_inner_html = UtilHtml.getDivElementIconStyleString(icon_id, icon_styles_str, this.m_icon_two_file_name, image_width, this.m_onclick_icon_two_function_name, '', i_n_tabs+1)

        return UtilHtml.getDivElementLeafStyleString(this.getIdIconTwoDiv(), icon_two_div_style_str, icon_two_inner_html, i_n_tabs+1);

    } // getIconTwoDivHtmlString

    // Returns the identity of the icon three
    getIdIconThreeDiv()
    {
        return 'id_icon_three_div_' + this.m_id_my_fctn_str;

    } // getIdIconThreeDiv

    // Returns the element icon three
    getElementIconThreeDiv()
    {
        return document.getElementById(this.getIdIconThreeDiv());
    }

    // Hide element div icon three
    hideElementIconThreeDiv()
    {
        this.getElementIconThreeDiv().style.display = "none";

    } // hideElementIconThreeDiv

    // Display element div icon three
    displayElementIconThreeDiv()
    {
        this.getElementIconThreeDiv().style.display = "block";
        
    } // hideElementIconThreeDiv

    // Get the HTML string defining the div icon three
    getIconThreeDivHtmlString(i_n_tabs)
    {
        var icon_three_div_style_str = 'width: auto';

        if (this.m_display_div_borders)
        {
            icon_three_div_style_str = icon_three_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_icon_three.length > 0)
        {
            icon_three_div_style_str = icon_three_div_style_str + '; ' + this.m_style_icon_three;
        }

        var image_width = this.m_icon_three_width;

        var icon_id = '';
        var icon_styles_str = 'cursor: pointer';

        var icon_three_inner_html = UtilHtml.getDivElementIconStyleString(icon_id, icon_styles_str, this.m_icon_three_file_name, image_width, this.m_onclick_icon_three_function_name, '', i_n_tabs+1)

        return UtilHtml.getDivElementLeafStyleString(this.getIdIconThreeDiv(), icon_three_div_style_str, icon_three_inner_html, i_n_tabs+1);

    } // getIconThreeDivHtmlString

    // Returns the identity of the icon four
    getIdIconFourDiv()
    {
        return 'id_icon_four_div_' + this.m_id_my_fctn_str;

    } // getIdIconFourDiv

    // Returns the element icon four
    getElementIconFourDiv()
    {
        return document.getElementById(this.getIdIconFourDiv());
    }

    // Hide element div icon four
    hideElementIconFourDiv()
    {
        this.getElementIconFourDiv().style.display = "none";

    } // hideElementIconFourDiv

    // Display element div icon four
    displayElementIconFourDiv()
    {
        this.getElementIconFourDiv().style.display = "block";
        
    } // hideElementIconFourDiv

    // Get the HTML string defining the div icon four
    getIconFourDivHtmlString(i_n_tabs)
    {
        var icon_four_div_style_str = 'width: auto';

        if (this.m_display_div_borders)
        {
            icon_four_div_style_str = icon_four_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_icon_four.length > 0)
        {
            icon_four_div_style_str = icon_four_div_style_str + '; ' + this.m_style_icon_four;
        }

        var image_width = this.m_icon_four_width;

        var icon_id = '';
        var icon_styles_str = 'cursor: pointer';

        var icon_four_inner_html = UtilHtml.getDivElementIconStyleString(icon_id, icon_styles_str, this.m_icon_four_file_name, image_width, this.m_onclick_icon_four_function_name, '', i_n_tabs+1)

        return UtilHtml.getDivElementLeafStyleString(this.getIdIconFourDiv(), icon_four_div_style_str, icon_four_inner_html, i_n_tabs+1);

    } // getIconFourDivHtmlString


    // Returns the identity of the icon five
    getIdIconFiveDiv()
    {
        return 'id_icon_five_div_' + this.m_id_my_fctn_str;

    } // getIdIconFiveDiv

    // Returns the element icon five
    getElementIconFiveDiv()
    {
        return document.getElementById(this.getIdIconFiveDiv());
    }

    // Hide element div icon five
    hideElementIconFiveDiv()
    {
        this.getElementIconFiveDiv().style.display = "none";

    } // hideElementIconFiveDiv

    // Display element div icon five
    displayElementIconFiveDiv()
    {
        this.getElementIconFiveDiv().style.display = "block";
        
    } // hideElementIconFiveDiv

    // Get the HTML string defining the div icon five
    getIconFiveDivHtmlString(i_n_tabs)
    {
        var icon_five_div_style_str = 'width: auto';

        if (this.m_display_div_borders)
        {
            icon_five_div_style_str = icon_five_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_icon_five.length > 0)
        {
            icon_five_div_style_str = icon_five_div_style_str + '; ' + this.m_style_icon_five;
        }

        var image_width = this.m_icon_five_width;

        var icon_id = '';
        var icon_styles_str = 'cursor: pointer';

        var icon_five_inner_html = UtilHtml.getDivElementIconStyleString(icon_id, icon_styles_str, this.m_icon_five_file_name, image_width, this.m_onclick_icon_five_function_name, '', i_n_tabs+1)

        return UtilHtml.getDivElementLeafStyleString(this.getIdIconFiveDiv(), icon_five_div_style_str, icon_five_inner_html, i_n_tabs+1);

    } // getIconFiveDivHtmlString

    // Returns the identity of the icon six
    getIdIconSixDiv()
    {
        return 'id_icon_six_div_' + this.m_id_my_fctn_str;

    } // getIdIconSixDiv

    // Returns the element icon six
    getElementIconSixDiv()
    {
        return document.getElementById(this.getIdIconSixDiv());
    }

    // Hide element div icon six
    hideElementIconSixDiv()
    {
        this.getElementIconSixDiv().style.display = "none";

    } // hideElementIconSixDiv

    // Display element div icon six
    displayElementIconSixDiv()
    {
        this.getElementIconSixDiv().style.display = "block";
        
    } // hideElementIconSixDiv

    // Get the HTML string defining the div icon six
    getIconSixDivHtmlString(i_n_tabs)
    {
        var icon_six_div_style_str = 'width: auto';

        if (this.m_display_div_borders)
        {
            icon_six_div_style_str = icon_six_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_icon_six.length > 0)
        {
            icon_six_div_style_str = icon_six_div_style_str + '; ' + this.m_style_icon_six;
        }

        var image_width = this.m_icon_six_width;

        var icon_id = '';
        var icon_styles_str = 'cursor: pointer';

        var icon_six_inner_html = UtilHtml.getDivElementIconStyleString(icon_id, icon_styles_str, this.m_icon_six_file_name, image_width, this.m_onclick_icon_six_function_name, '', i_n_tabs+1)

        return UtilHtml.getDivElementLeafStyleString(this.getIdIconSixDiv(), icon_six_div_style_str, icon_six_inner_html, i_n_tabs+1);

    } // getIconSixDivHtmlString

    // Returns the identity of the icons group div
    getIdIconsGroupDiv()
    {
        return 'id_icons_group_div_' + this.m_id_my_fctn_str;

    } // getIdIconsGroupDiv

    // Returns the element icons group div
    getElementIconsGroupDiv()
    {
        return document.getElementById(this.getIdIconsGroupDiv());
    }

    // Hide element div icons group div
    hideElementIconsGroupDiv()
    {
        this.getElementIconsGroupDiv().style.display = "none";

    } // hideElementIconsGroupDiv

    // Display element div icons group div
    displayElementIconsGroupDiv()
    {
        this.getElementIconsGroupDiv().style.display = "block";
        
    } // hideElementIconsGroupDiv

    // Get the HTML string defining the div icons group div
    getIconsGroupDivHtmlString(i_n_tabs)
    {
        var icons_group_div_style_str = 'width: auto';

        if (this.m_display_div_borders)
        {
            icons_group_div_style_str = icons_group_div_style_str + '; border: 1px solid yellow';
        }

        if (this.m_style_icons_group.length > 0)
        {
            icons_group_div_style_str = icons_group_div_style_str + '; ' + this.m_style_icons_group;
        }

        var icons_group_inner_html = '';

        icons_group_inner_html = icons_group_inner_html + this.getIconOneDivHtmlString(i_n_tabs+1);

        icons_group_inner_html = icons_group_inner_html + this.getIconTwoDivHtmlString(i_n_tabs+1);

        icons_group_inner_html = icons_group_inner_html + this.getIconThreeDivHtmlString(i_n_tabs+1);

        icons_group_inner_html = icons_group_inner_html + this.getIconFourDivHtmlString(i_n_tabs+1);

        icons_group_inner_html = icons_group_inner_html + this.getIconFiveDivHtmlString(i_n_tabs+1);

        icons_group_inner_html = icons_group_inner_html + this.getIconSixDivHtmlString(i_n_tabs+1);

        return UtilHtml.getDivElementLeafStyleString(this.getIdIconsGroupDiv(), icons_group_div_style_str, icons_group_inner_html, i_n_tabs+1);

    } // getIconsGroupDivHtmlString

    // Set flag telling if div borders shall be displayed for debugging to true
    displayDivBorders()
    {
        this.m_display_div_borders = true;

    } // setDisplayDivBorders

    // Set flag telling if div borders shall be displayed for debugging to false
    hideDivBorders()
    {
        this.m_display_div_borders = false;

    } // setDisplayDivBorders

    checkInputData()
    {
        // TODO
        return true;

    } // checkInputData

    // Returns the string that defines the HTML display image string
    getHtmlString(i_n_tabs)
    {
        if (!this.checkInputData())
        {
            return '';
        }

        var ret_html_str = '';

        var ret_html_str = ret_html_str + this.getIconsGroupDivHtmlString(i_n_tabs);

        var ret_html_str = ret_html_str + this.getPictureHtmlString(i_n_tabs);

        ret_html_str = ret_html_str + this.getTextGroupAllDivHtmlString(i_n_tabs);

        return ret_html_str;

    } // getHtmlString

} // DisplayImage

// Functions for scaling and positioning of an image in an image container div
class UtilImage
{
    // Replace an image in a <div> container. 
    // The image will be scaled to fit the container and the picture will be centered
    // horizontally and vertically
    // 1. Check input file name
    // 2. Get existing element in the div container. Call of UtilImage.getImageElement
    // 3. Create an image element
    // 4. Load the image, i.e. set attribute src that takes some time before it is finished
    //    Call replaceImageInDivContainerAfterLoad with function setTimeout
    static replaceImageInDivContainer(i_image_file_name, i_el_div_container)
    {
        console.log("UtilImage.replaceImageInDivContainer i_image_file_name= " + i_image_file_name);

        if (i_image_file_name.length < 4)
        {
            alert("UtilImage.replaceImageInDivContainer Image file name is not defined");

            return;
        }

        var el_image_in_div = UtilImage.getImageElement(i_el_div_container);

        if (null == el_image_in_div)
        {
            return;
        }

        var el_new_image = new Image();

        el_new_image.src = i_image_file_name;

        setTimeout(UtilImage.replaceImageInDivContainerAfterLoad, 500, el_new_image, el_image_in_div, i_el_div_container);

    } // replaceImageInDivContainer

    // Replace an image in a <div> container after load of the new picture 
    static replaceImageInDivContainerAfterLoad(i_el_new_image, i_el_image_in_div, i_el_div_container)
    {
        console.log("UtilImage.replaceImageInDivContainerAfterLoad Enter ");

        var scale_factor = UtilImage.getFitImageToDivScaleFactor(i_el_new_image, i_el_div_container);

        console.log("UtilImage.replaceImageInDivContainerAfterLoad scale_factor= " + scale_factor.toString());

        var new_image_width = i_el_new_image.naturalWidth;
    
        var new_image_height = i_el_new_image.naturalHeight;

        console.log("UtilImage.replaceImageInDivContainerAfterLoad new_image_width= " + new_image_width.toString());
    
        var new_image_width_scaled = parseInt(new_image_width*scale_factor);
    
        var new_image_height_scaled = parseInt(new_image_height*scale_factor);

        console.log("UtilImage.replaceImageInDivContainerAfterLoad new_image_width_scaled= " + new_image_width_scaled.toString());

        i_el_image_in_div.src =i_el_new_image.src; 

        i_el_image_in_div.width = new_image_width_scaled;

        i_el_image_in_div.height = new_image_height_scaled;

        UtilImage.centerImage(i_el_image_in_div, i_el_div_container);

    } // replaceImageInDivContainerAfterLoad

    // Place the picture in the center. Vertically and horizontally
    static centerImage(i_el_image_in_div, i_el_div_container)
    {
        var div_image_container_height = i_el_div_container.offsetHeight - 10; // px Adjusted with 10
        
        var image_height = i_el_image_in_div.height;

        console.log("UtilImage.centerImage image_height= " + image_height.toString());

        var el_image = UtilImage.getImageElement(i_el_div_container);

        if (div_image_container_height - image_height > 50)
        {
            var translate_y = parseInt((div_image_container_height - image_height)/2.0);

            console.log("UtilImage.replaceImageInDivContainerAfterLoad translate_y= " + translate_y.toString());

            el_image.style.transform = 'translateY(' + translate_y.toString() + 'px)';
        }
        else
        {
            el_image.style.transform = 'none';

            i_el_image_in_div.style.marginTop ="2px";
        }

        i_el_image_in_div.style.display ="block";

        i_el_image_in_div.style.marginLeft ="auto";

        i_el_image_in_div.style.marginRight ="auto";
        
    } // centerImage

    // Returns the image element of the image container div
    static getImageElement(i_el_div_container)
    {
        var img_list = i_el_div_container.getElementsByTagName("img");

        if (null == img_list || 0 == img_list.length)
        {
            alert("UtilImage.getImageElement There is no image in the image container");

            return null;            
        }

        if (img_list.length > 1)
        {
            alert("UtilImage.getImageElement There are multiple images in the div container");

            return null;                    
        }

        console.log("UtilImage.getImageElement Exit ");

        return img_list[0];

    } // getImageElement

    // Returns the scale factor for an image that makes it fit to a given div element
    // Copied from Utility.js
    static getFitImageToDivScaleFactor(i_el_image, i_el_div_container)
    {
        var ret_scale_factor = -0.23456789;
     
        var div_photo_container_height = i_el_div_container.offsetHeight - 10; // px Adjusted with 10
    
        var div_photo_container_width = i_el_div_container.offsetWidth - 10; // px Adjusted with 10
    
        var modal_photo_height = i_el_image.naturalHeight;
    
        var modal_photo_width = i_el_image.naturalWidth;
    
        var scale_height = div_photo_container_height/modal_photo_height;
    
        var scale_width = div_photo_container_width/modal_photo_width;
    
        if (scale_height < scale_width)
        {
            ret_scale_factor = scale_height;
        }
        else
        {
            ret_scale_factor = scale_width;
        }

        console.log("UtilImage.getFitImageToDivScaleFactor ret_scale_factor.width= " + ret_scale_factor.toString());
    
        return ret_scale_factor;
    
    } // getFitImageToDivScaleFactor

} // UtilImage