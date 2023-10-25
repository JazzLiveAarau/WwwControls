// File: UtilityHtml.js
// Date: 2023-10-24
// Author: Gunnar Lidén

// File content
// =============
//
// Class UtilHtml with string functions for the generation of HTML code

// This class should replace UtilityGenerateHtml.js

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Control Grid List /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Static string functions for the generation of HTML code
class UtilHtml 
{
    ///////////////////////////////////////////////////////////////////////////
    /////// Start Group Div Elements //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get the string that defines the div for a group of div elements
    static getDivElementGroupString(i_id_div_group, i_cl_div_group, i_div_inner_html_array, i_n_tabs)
    {
        var ret_div_group_str = '';
        
        ret_div_group_str = ret_div_group_str + this.getTabs(i_n_tabs);
    
        ret_div_group_str = ret_div_group_str + this.getDivStartString(i_id_div_group, i_cl_div_group);
    
        ret_div_group_str = ret_div_group_str + this.getNewLine();
    
        for (var div_index=0; div_index < i_div_inner_html_array.length; div_index++)
        {
            ret_div_group_str = ret_div_group_str + i_div_inner_html_array[div_index];
        }
        
        ret_div_group_str = ret_div_group_str + this.getTabs(i_n_tabs);
    
        ret_div_group_str = ret_div_group_str + this.getDivEndString(i_id_div_group, i_cl_div_group);
    
        ret_div_group_str = ret_div_group_str + this.getNewLine() + this.getNewLine();
    
        return ret_div_group_str;
    
    } // getDivElementGroupString

    // Get the string that defines the div for a group of div elements. Styles as string is input data
    static getDivElementGroupStyleString(i_id_div_group, i_styles_str, i_div_inner_html_array, i_n_tabs)
    {
        var ret_div_group_str = '';
        
        ret_div_group_str = ret_div_group_str + this.getTabs(i_n_tabs);
    
        ret_div_group_str = ret_div_group_str + this.getDivStartStyleString(i_id_div_group, i_styles_str);
    
        ret_div_group_str = ret_div_group_str + this.getNewLine();
    
        for (var div_index=0; div_index < i_div_inner_html_array.length; div_index++)
        {
            ret_div_group_str = ret_div_group_str + i_div_inner_html_array[div_index];
        }
        
        ret_div_group_str = ret_div_group_str + this.getTabs(i_n_tabs);
    
        ret_div_group_str = ret_div_group_str + this.getDivEndStyleString(i_id_div_group, i_styles_str);
    
        ret_div_group_str = ret_div_group_str + this.getNewLine() + this.getNewLine();
    
        return ret_div_group_str;
    
    } // getDivElementGroupStyleString

    // Get the string that defines the div for a group of div elements. 
    // Styles as string is input data and also an event statement like oncklick= "onClickRecord(4)" where 4 is a record number
    static getDivElementGroupStyleEventString(i_id_div_group, i_styles_str, i_event_str, i_div_inner_html_array, i_n_tabs)
    {
        var ret_div_group_str = '';
        
        ret_div_group_str = ret_div_group_str + this.getTabs(i_n_tabs);
    
        ret_div_group_str = ret_div_group_str + this.getDivStartStyleEventString(i_id_div_group, i_styles_str, i_event_str);
    
        ret_div_group_str = ret_div_group_str + this.getNewLine();
    
        for (var div_index=0; div_index < i_div_inner_html_array.length; div_index++)
        {
            ret_div_group_str = ret_div_group_str + i_div_inner_html_array[div_index];
        }
        
        ret_div_group_str = ret_div_group_str + this.getTabs(i_n_tabs);
    
        ret_div_group_str = ret_div_group_str + this.getDivEndStyleString(i_id_div_group, i_styles_str);
    
        ret_div_group_str = ret_div_group_str + this.getNewLine() + this.getNewLine();
    
        return ret_div_group_str;
    
    } // getDivElementGroupStyleEventString

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Group Div Elements //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Leaf Div Element ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get the HTML string that defines a leaf div element
    // Returned string is 
    // <div id= "i_id_element_leaf" class= "i_cl_element_leaf" >i_inner_html</div>
    // The returned string has i_n_tabs tabs and ends with a new line
    // Input identity i_id_element_leaf and class i_cl_element_leaf may be empty
    // Also the inner HTML i_inner_html may be empty 
    static getDivElementLeafString(i_id_element_leaf, i_cl_element_leaf, i_inner_html, i_n_tabs)
    {
        var ret_leaf_str = '';
    
        ret_leaf_str = ret_leaf_str + this.getTabs(i_n_tabs) +  this.getDivIdEqualString(i_id_element_leaf);
    
        ret_leaf_str = ret_leaf_str + this.getClassEqualString(i_cl_element_leaf);
    
        ret_leaf_str = ret_leaf_str + ' >';
    
        ret_leaf_str = ret_leaf_str + i_inner_html;
    
        ret_leaf_str = ret_leaf_str + this.getDivEndString('', '');
    
        ret_leaf_str = ret_leaf_str + this.getNewLine();
    
        return ret_leaf_str;
    
    } // getDivElementLeafString

    // Get the HTML string that defines a leaf div element
    // Returned string is 
    // <div id= "i_id_element_leaf" style= "i_styles_str" >i_inner_html</div>
    // The returned string has i_n_tabs tabs and ends with a new line
    // Input identity i_id_element_leaf and class i_styles_str may be empty
    // Also the inner HTML i_inner_html may be empty 
    static getDivElementLeafStyleString(i_id_element_leaf, i_styles_str, i_inner_html, i_n_tabs)
    {
        var ret_leaf_str = '';
    
        ret_leaf_str = ret_leaf_str + this.getTabs(i_n_tabs) +  this.getDivIdEqualString(i_id_element_leaf);
    
        ret_leaf_str = ret_leaf_str + this.getStyleEqualString(i_styles_str);
    
        ret_leaf_str = ret_leaf_str + ' >';
    
        ret_leaf_str = ret_leaf_str + i_inner_html;
    
        ret_leaf_str = ret_leaf_str + this.getDivEndString('', '');
    
        ret_leaf_str = ret_leaf_str + this.getNewLine();
    
        return ret_leaf_str;
    
    } // getDivElementLeafStyleString

    // Get the HTML string that defines a div icon element string
    // Returned string is
    // 
    // <div id= "i_id_div_el_icon" class= "i_cl_div_el_icon" >
    //    <img src= "i_file_name_icon" width= "i_width" onclick= "i_event_fctn" title= "i_title">
    // </div  <!-- i_cl_div_el_icon -->
    //
    // The returned string has i_n_tabs tabs and ends with a new line
    // Input identity i_id_div_el_icon and class i_cl_div_el_icon may be empty
    // Identity and calls are for the div element. Icon image has no identity and no class
    static getDivElementIconString(i_id_div_el_icon, i_cl_div_el_icon, i_file_name_icon, i_width, i_event_fctn, i_title, i_n_tabs)
    {
        var ret_icon_str = '';
    
        var image_str = this.getImgString(i_file_name_icon, 'Icon', '', '', i_width, i_event_fctn, i_title);
    
        ret_icon_str = ret_icon_str + this.getTabs(i_n_tabs) +  this.getDivIdEqualString(i_id_div_el_icon);
    
        ret_icon_str = ret_icon_str + this.getClassEqualString(i_cl_div_el_icon);
    
        ret_icon_str = ret_icon_str + ' >';
        
        ret_icon_str = ret_icon_str + this.getNewLine();	
    
        ret_icon_str = ret_icon_str + this.getTabs(i_n_tabs + 1);
        
        ret_icon_str = ret_icon_str + image_str;
       
        ret_icon_str = ret_icon_str + this.getNewLine();	
    
        ret_icon_str = ret_icon_str + this.getTabs(i_n_tabs);
    
        ret_icon_str = ret_icon_str + this.getDivEndString('', i_cl_div_el_icon);
    
        ret_icon_str = ret_icon_str + this.getNewLine();
    
        return ret_icon_str;
    
    } // getDivElementIconString

    // Get the HTML string that defines a div icon element string
    // Returned string is
    // 
    // <div id= "i_id_div_el_icon" style= "i_styles_str" >
    //    <img src= "i_file_name_icon" width= "i_width" onclick= "i_event_fctn" title= "i_title">
    // </div  <!-- i_styles_str -->
    //
    // The returned string has i_n_tabs tabs and ends with a new line
    // Input identity i_id_div_el_icon and style i_styles_str may be empty
    // Identity and calls are for the div element. Icon image has no identity and no class
    static getDivElementIconStyleString(i_id_div_el_icon, i_styles_str, i_file_name_icon, i_width, i_event_fctn, i_title, i_n_tabs)
    {
        var ret_icon_str = '';
    
        var image_str = this.getImgString(i_file_name_icon, 'Icon', '', '', i_width, i_event_fctn, i_title);
    
        ret_icon_str = ret_icon_str + this.getTabs(i_n_tabs) +  this.getDivIdEqualString(i_id_div_el_icon);
    
        ret_icon_str = ret_icon_str + this.getStyleEqualString(i_styles_str);
    
        ret_icon_str = ret_icon_str + ' >';
        
        ret_icon_str = ret_icon_str + this.getNewLine();	
    
        ret_icon_str = ret_icon_str + this.getTabs(i_n_tabs + 1);
        
        ret_icon_str = ret_icon_str + image_str;
       
        ret_icon_str = ret_icon_str + this.getNewLine();	
    
        ret_icon_str = ret_icon_str + this.getTabs(i_n_tabs);
    
        ret_icon_str = ret_icon_str + this.getDivEndStyleString('', i_styles_str);
    
        ret_icon_str = ret_icon_str + this.getNewLine();
    
        return ret_icon_str;
    
    } // getDivElementIconStyleString

    // Same as getDivElementIconString but with the additional input parameters:
    // Identity and class for the image and image height
    static getDivElementIconImageString(i_id_div_el_icon, i_cl_div_el_icon, i_id_el_icon, i_cl_el_icon, i_file_name_icon, i_width, i_height, i_event_fctn, i_title, i_n_tabs)
    {
        var ret_icon_str = '';
    
        // var image_str = getImgString(i_file_name_icon, 'Icon', '', '', i_width, i_event_fctn, i_title);
    
        var image_str = this.getImgWidthHeightString(i_file_name_icon, 'Icon', i_id_el_icon, i_cl_el_icon, i_width, i_height, i_event_fctn, i_title);
    
        ret_icon_str = ret_icon_str + this.getTabs(i_n_tabs) +  this.getDivIdEqualString(i_id_div_el_icon);
    
        ret_icon_str = ret_icon_str + this.getClassEqualString(i_cl_div_el_icon);
    
        ret_icon_str = ret_icon_str + ' >';
        
        ret_icon_str = ret_icon_str + this.getNewLine();	
    
        ret_icon_str = ret_icon_str + this.getTabs(i_n_tabs + 1);
        
        ret_icon_str = ret_icon_str + image_str;
       
        ret_icon_str = ret_icon_str + this.getNewLine();	
    
        ret_icon_str = ret_icon_str + this.getTabs(i_n_tabs);
    
        ret_icon_str = ret_icon_str + this.getDivEndString('', i_cl_div_el_icon);
    
        ret_icon_str = ret_icon_str + this.getNewLine();
    
        return ret_icon_str;
    
    } // getDivElementIconImageString

    // The returned string has i_n_tabs tabs and ends with a new line
    // Input identity i_id_div_el_image and class i_cl_div_el_image may be empty
    // Identity and calls are for the div element.
    // Input is an string defining an image element
    static getDivElementImageSimpleString(i_id_div_el_image, i_cl_div_el_image, i_el_image_str, i_n_tabs)
    {
        var ret_image_str = '';
    
        ret_image_str = ret_image_str + this.getTabs(i_n_tabs) +  this.getDivIdEqualString(i_id_div_el_image);
    
        ret_image_str = ret_image_str + this.getClassEqualString(i_cl_div_el_image);
    
        ret_image_str = ret_image_str + ' >';
        
        ret_image_str = ret_image_str + this.getNewLine();	
    
        ret_image_str = ret_image_str + this.getTabs(i_n_tabs + 1);
        
        ret_image_str = ret_image_str + i_el_image_str;
    
        ret_image_str = ret_image_str + this.getDivEndString('', i_cl_div_el_image);
    
        ret_image_str = ret_image_str + this.getNewLine();
    
        return ret_image_str;
    
    } // getDivElementImageSimpleString

    // The returned string has i_n_tabs tabs and ends with a new line
    // Input identity i_id_div_el_image and class i_cl_div_el_image may be empty
    // Identity and calls are for the div element. Image has no identity and no class
    static getDivElementImageString(i_id_div_el_image, i_cl_div_el_image, i_file_name_image, i_alt, i_width, i_event_fctn, i_title, i_n_tabs)
    {
        var ret_image_str = '';
    
        var image_str = this.getImgString(i_file_name_image, i_alt, '', '', i_width, i_event_fctn, i_title);
    
        ret_image_str = ret_image_str + this.getTabs(i_n_tabs) +  this.getDivIdEqualString(i_id_div_el_image);
    
        ret_image_str = ret_image_str + this.getClassEqualString(i_cl_div_el_image);
    
        ret_image_str = ret_image_str + ' >';
        
        ret_image_str = ret_image_str + this.getNewLine();	
    
        ret_image_str = ret_image_str + this.getTabs(i_n_tabs + 1);
        
        ret_image_str = ret_image_str + image_str;
    
        ret_image_str = ret_image_str + this.getDivEndString('', i_cl_div_el_image);
    
        ret_image_str = ret_image_str + this.getNewLine();
    
        return ret_image_str;
    
    } // getDivElementImageString

    ///////////////////////////////////////////////////////////////////////////
    /////// End Leaf Div Element //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Dropdown Element ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the HTML code (string) for a dropdown element
    static getElementDropDownString(i_dropdown_name_array, i_dropdown_number_array, i_id_dropdown, i_cl_dropdown, i_name_dropdown, i_event_fctn, i_n_tabs)
    {
        // https://www.w3schools.com/tags/att_select_name.asp
        
        var ret_dropdown_str = '';
    
        if (!this.getClassEqualStringcheckgetElementDropDownArrays(i_dropdown_name_array, i_dropdown_number_array))
        {
            return ret_dropdown_str;
        }
    
        var select_start_str = this.getStartSelectString(i_id_dropdown, i_cl_dropdown, i_name_dropdown, i_event_fctn, i_n_tabs + 1);
        if (select_start_str.length == 0)
        {
            return ret_dropdown_str;
        }
    
        var select_end_str = this.getEndSelectString(i_n_tabs);
    
        ret_dropdown_str = ret_dropdown_str + select_start_str;
    
        for (var index_option=0; index_option < i_dropdown_name_array.length; index_option++)
        {
            var dropdown_name = i_dropdown_name_array[index_option];
    
            var dropdown_number = i_dropdown_number_array[index_option];
    
            ret_dropdown_str = ret_dropdown_str + this.getSelectOptionString(dropdown_name, dropdown_number, i_n_tabs + 1);
        }
    
        ret_dropdown_str = ret_dropdown_str + select_end_str;
    
        return ret_dropdown_str;
    
    } // getElementDropDownString

    // '<select class= "custom_select" id= "id_dropdown_concerts" name="dropdown_concerts"  onchange= "eventSelectConcertDropDown()" ><br>';
    // Returns the selection start tag with attributes
    // Returns empty string if input data not is valid
    static getStartSelectString(i_id_dropdown, i_cl_dropdown, i_name_dropdown, i_event_fctn, i_n_tabs)
    {
        var ret_selection_str = '';
    
        if (!this.checkStartSelectInput(i_id_dropdown, i_cl_dropdown, i_name_dropdown, i_event_fctn))
        {
            return ret_selection_str;
        }
    
        ret_selection_str = ret_selection_str + this.getTabs(i_n_tabs);
    
        ret_selection_str = ret_selection_str + '<select ';
    
        ret_selection_str = ret_selection_str + this.getDivIdEqualString(i_id_dropdown);
    
        ret_selection_str = ret_selection_str + this.getClassEqualString(i_cl_dropdown);
    
        ret_selection_str = ret_selection_str + this.getNameEqualString(i_name_dropdown);
    
        ret_selection_str = ret_selection_str + this.getEventOnchangeEqualString(i_event_fctn);
    
        ret_selection_str = ret_selection_str + ' >';
    
        ret_selection_str = ret_selection_str + this.getNewLine();
    
        return ret_selection_str;
    
    } // getStartSelectString

    // Returns </select>
    static getEndSelectString(i_n_tabs)
    {
        return this.getTabs(i_n_tabs) + '</select>' + getNewLine();
    
    } // getEndSelectString

    // var option_str = '<option value="' + g_drop_down_concert_number_array[index_dropdown].toString() + '">' + g_drop_down_concert_name_array[index_dropdown] + '</option><br>';
    // Returns select option string
    // Returns empty string if input data not is OK
    static getSelectOptionString(i_dropdown_name, i_dropdown_number, i_n_tabs)
    {
        var ret_option_str = '';
    
        if (i_dropdown_name.length == 0)
        {
            alert("UtilHtml.getSelectOptionString Input name is not defined");
    
            return ret_option_str;
        }
    
        var dropdown_number_str = i_dropdown_number.toString();
    
        if (dropdown_number_str.length == 0)
        {
            alert("UtilHtml.getSelectOptionString Input number is not defined");
    
            return ret_option_str;
        }
    
        ret_option_str = ret_option_str + this.getTabs(i_n_tabs);
    
        ret_option_str = ret_option_str + '<option value="' + dropdown_number_str + '" >'
    
        ret_option_str = ret_option_str + i_dropdown_name;
    
        ret_option_str = ret_option_str + '</option>';
    
        ret_option_str = ret_option_str + this.getNewLine();
    
        return ret_option_str;
    
    } // getSelectOptionString

    // Returns true if start selection input data is OK
    static checkStartSelectInput(i_id_dropdown, i_cl_dropdown, i_name_dropdown, i_event_fctn)
    {
        var ret_b_selection = true;
    
        if (i_id_dropdown.length == 0)
        {
            alert("UtilHtml.checkStartSelectInput Identity is not defined");
    
            ret_b_selection = false;
        }
    
        if (i_cl_dropdown.length == 0)
        {
            alert("UtilHtml.checkStartSelectInput Class is not defined");
    
            ret_b_selection = false;
        }
    
        if (i_name_dropdown.length == 0)
        {
            alert("UtilHtml.checkStartSelectInput Name is not defined");
    
            ret_b_selection = false;
        }
    
        if (i_event_fctn.length == 0)
        {
            alert("UtilHtml.checkStartSelectInput Event function is not defined");
    
            ret_b_selection = false;
        }
    
        return ret_b_selection;
    
    } // checkStartSelectInput
    
    // Returns true if the arrays are OK
    static checkgetElementDropDownArrays(i_dropdown_name_array, i_dropdown_number_array)
    {
        var ret_b_arrays = false;
    
        if (null == i_dropdown_name_array || null == i_dropdown_number_array)
        {
            alert("UtilHtml.checkgetElementDropDownArrays i_dropdown_name_array or i_dropdown_number_array is null");
    
            return ret_b_arrays;
        }
    
        if (i_dropdown_name_array.length == 0)
        {
            alert("UtilHtml.checkgetElementDropDownArrays i_dropdown_name_array has no elements");
    
            return ret_b_arrays;
        }
        
        if (i_dropdown_number_array.length == 0)
        {
            alert("UtilHtml.checkgetElementDropDownArrays i_dropdown_number_array has no elements");
    
            return ret_b_arrays;
        }
    
        if (i_dropdown_name_array.length != i_dropdown_number_array.length)
        {
            alert("UtilHtml.checkgetElementDropDownArrays i_dropdown_name_array and i_dropdown_number_array do not have the same number of elements");
    
            return ret_b_arrays;
        }    
    
        ret_b_arrays = true;
    
        return ret_b_arrays;
    
    } // checkgetElementDropDownArrays

    ///////////////////////////////////////////////////////////////////////////
    /////// End Dropdown Element //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Image Elements //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns string for an image
    // Input parameters
    // i_file_name:  File name with path of the image 
    // i_alt:        Alternative image text
    // i_id:         Element identity 
    // i_class:      Class 
    // i_width:      Image width
    // i_height:     Image height
    // i_event_fctn: Event function string
    // i_title       Title string will be tooltip in desktop computers
    static getImgWidthHeightString(i_file_name, i_alt, i_id, i_class, i_width, i_height, i_event_fctn, i_title)
    {
        var ret_img_str = '';
    
        if (i_file_name.length == 0)
        {
            alert("getImgWidthHeightString No input image file name");
    
            return ret_img_str;
        }
    
        if (i_alt.length == 0)
        {
            alert("getImgWidthHeightString Input alternative text is empty");
    
            return ret_img_str;
        }
    
        ret_img_str =  ret_img_str + '<img '; 
    
        ret_img_str =  ret_img_str + 'src= "' + i_file_name + '" ';
    
        ret_img_str =  ret_img_str + 'alt= "' + i_alt + '" ';
    
        if (i_id.length > 0)
        {
            ret_img_str =  ret_img_str + 'id= "' + i_id + '" ';
        }
    
        if (i_class.length > 0)
        {
            ret_img_str =  ret_img_str + 'class= "' + i_class + '" ';
        }
    
        if (i_width.length > 0)
        {
            ret_img_str =  ret_img_str + 'width= "' + i_width + '" ';
        }
    
        if (i_height.length > 0)
        {
            ret_img_str =  ret_img_str + 'height= "' + i_height + '" ';
        }    
    
        if (i_event_fctn.length > 0)
        {
            ret_img_str =  ret_img_str + 'onclick= "' + i_event_fctn + '" ';
        }
    
        if (i_title.length > 0)
        {
            ret_img_str =  ret_img_str + 'title= "' + i_title + '" ';
        }    
    
        ret_img_str =  ret_img_str + ' >'; 
    
        return ret_img_str;
    
    } // getImgWidthHeightString

    // Returns string for an image
    // Input parameters
    // i_file_name:  File name with path of the image 
    // i_alt:        Alternative image text
    // i_id:         Element identity 
    // i_class:      Class 
    // i_width:      Image width
    // i_event_fctn: Event function string
    // i_title       Title string will be tooltip in desktop computers
    static getImgString(i_file_name, i_alt, i_id, i_class, i_width, i_event_fctn, i_title)
    {
        var ret_img_str = '';
    
        if (i_file_name.length == 0)
        {
            alert("getImgString No input image file name");
    
            return ret_img_str;
        }
    
        if (i_alt.length == 0)
        {
            alert("getImgString Input alternative text is empty");
    
            return ret_img_str;
        }
    
        ret_img_str =  ret_img_str + '<img '; 
    
        ret_img_str =  ret_img_str + 'src= "' + i_file_name + '" ';
    
        ret_img_str =  ret_img_str + 'alt= "' + i_alt + '" ';
    
        if (i_id.length > 0)
        {
            ret_img_str =  ret_img_str + 'id= "' + i_id + '" ';
        }
    
        if (i_class.length > 0)
        {
            ret_img_str =  ret_img_str + 'class= "' + i_class + '" ';
        }
    
        if (i_width.length > 0)
        {
            ret_img_str =  ret_img_str + 'width= "' + i_width + '" ';
        }
    
        if (i_event_fctn.length > 0)
        {
            ret_img_str =  ret_img_str + 'onclick= "' + i_event_fctn + '" ';
        }
    
        if (i_title.length > 0)
        {
            ret_img_str =  ret_img_str + 'title= "' + i_title + '" ';
        }    
    
        ret_img_str =  ret_img_str + ' >'; 
    
        return ret_img_str;
    
    } // getImgString

    ///////////////////////////////////////////////////////////////////////////
    /////// End Image Elements ////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////////////////////
    /////// Start Div Sub Elements ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns start div + id + equal + id_element
    // If input id string is empty only div start is returned
    static getDivIdEqualString(i_id_element)
    {
        if (i_id_element.length == 0)
        {
            return '<div ';
        }
    
        return '<div id= ' + '"' + i_id_element + '"';
    
    } // getDivIdEqualString

    // Returns start div tag. Input data is identity of the div and the class of the div
    // Empty identity and/or class string is allowed
    static getDivStartString(i_id_element, i_cl_element)
    {
        var ret_div_start_str = '';
    
        if (i_id_element.length > 0)
        {
            ret_div_start_str = ret_div_start_str + this.getDivIdEqual();
    
            ret_div_start_str = ret_div_start_str + '"' + i_id_element + '" ';
        }
        else
        {
            ret_div_start_str = ret_div_start_str + '<div';
        }
    
        if (i_cl_element.length > 0)
        {
            ret_div_start_str = ret_div_start_str + this.getClassEqual();
    
            ret_div_start_str = ret_div_start_str + '"' + i_cl_element + '" ';
        }
     
        ret_div_start_str = ret_div_start_str + '>';
    
        return ret_div_start_str;
    
    } // getDivStartString    

    // Returns start div tag. Input data is identity of the div and a style string for the div
    // Empty identity and/or style string is allowed
    static getDivStartStyleString(i_id_element, i_styles_str)
    {
        var ret_div_start_str = '';
    
        if (i_id_element.length > 0)
        {
            ret_div_start_str = ret_div_start_str + getDivIdEqual();
    
            ret_div_start_str = ret_div_start_str + '"' + i_id_element + '" ';
        }
        else
        {
            ret_div_start_str = ret_div_start_str + '<div';
        }
    
        if (i_styles_str.length > 0)
        {
            ret_div_start_str = ret_div_start_str + getStyleEqual();
    
            ret_div_start_str = ret_div_start_str + '"' + i_styles_str + '" ';
        }
     
        ret_div_start_str = ret_div_start_str + '>';
    
        return ret_div_start_str;
    
    } // getDivStartStyleString

    // Returns start div tag. 
    // Input data is identity of the div, a style string for the div and an event statement
    // Empty identity and/or style string is allowed
    static getDivStartStyleEventString(i_id_element, i_styles_str, i_event_str)
    {
        var ret_div_start_str = '';
    
        if (i_id_element.length > 0 && i_event_str.length > 0)
        {
            ret_div_start_str = ret_div_start_str + getDivIdEqual();
    
            ret_div_start_str = ret_div_start_str + '"' + i_id_element + '" ';

            ret_div_start_str = ret_div_start_str + ' ' + i_event_str + ' ';
        }
        else if (i_id_element.length > 0)
        {
            ret_div_start_str = ret_div_start_str + getDivIdEqual();
    
            ret_div_start_str = ret_div_start_str + '"' + i_id_element + '" ';
        }
        else
        {
            ret_div_start_str = ret_div_start_str + '<div';
        }
    
        if (i_styles_str.length > 0)
        {
            ret_div_start_str = ret_div_start_str + getStyleEqual();
    
            ret_div_start_str = ret_div_start_str + '"' + i_styles_str + '" ';
        }
     
        ret_div_start_str = ret_div_start_str + '>';
    
        return ret_div_start_str;
    
    } // getDivStartStyleEventString

    // Returns end div tag. Input data is identity of the div and the class of the div
    // Output is the class name or the identity as a comment
    // Empty identity and/or class string is allowed
    static getDivEndString(i_id_element, i_cl_element)
    {
        var ret_div_end_str = '';
        
        ret_div_end_str = ret_div_end_str + this.getDivEnd();
        
        var start_comment_str = '  <!-- ';
        
        var end_comment_str = '  -->';
        
        if (i_cl_element.length > 0)
        {
            ret_div_end_str = ret_div_end_str + start_comment_str + i_cl_element + end_comment_str;
        }
        else if (i_id_element.length > 0)
        {
            ret_div_end_str = ret_div_end_str + start_comment_str + i_id_element + end_comment_str;
        }
    
        return ret_div_end_str;
    
    } // getDivEndString

    // Returns end div tag. Input data is identity of the div and the class of the div
    // Output is the style string or the identity as a comment
    // Empty identity and/or style string is allowed
    static getDivEndStyleString(i_id_element, i_styles_str)
    {
        var ret_div_end_str = '';
        
        ret_div_end_str = ret_div_end_str + this.getDivEnd();
        
        var start_comment_str = '  <!-- ';
        
        var end_comment_str = '  -->';
        
        if (i_id_element.length > 0)
        {
            ret_div_end_str = ret_div_end_str + start_comment_str + i_id_element + end_comment_str;
        }
        else if (i_styles_str.length > 0)
        {
            ret_div_end_str = ret_div_end_str + start_comment_str + i_styles_str + end_comment_str;
        }
    
        return ret_div_end_str;
    
    } // getDivEndStyleString

    // Returns the div end tag
    static getDivEnd()
    {
        return '</div>';
    
    } // getDivEnd

    // Returns class + equal + cl_element
    // If the input class name is empty an empty string will be returned
    static getClassEqualString(i_cl_element)
    {
        if (i_cl_element.length > 0)
        {
            return ' class= ' + '"' + i_cl_element + '" ';
        }
        else
        {
            return '';
        }
    
    } // getClassEqualString

    // Returns style + equal + cl_element
    // If the input style string is empty an empty string will be returned
    static getStyleEqualString(i_styles_str)
    {
        if (i_styles_str.length > 0)
        {
            return ' style= ' + '"' + i_styles_str + '" ';
        }
        else
        {
            return '';
        }
    
    } // getStyleEqualString

    // Returns name + equal + cl_element
    // If the input name is empty an empty string will be returned
    static getNameEqualString(i_name)
    {
        if (i_name.length > 0)
        {
            return ' name= ' + '"' + i_name + '" ';
        }
        else
        {
            return '';
        }
    
    } // getNameEqualString

    // Returns onhange + equal + cl_element
    // If the input name is empty an empty string will be returned
    static getEventOnchangeEqualString(i_event_fctn)
    {
        if (i_event_fctn.length > 0)
        {
            return ' onchange= ' + '"' + i_event_fctn + '" ';
        }
        else
        {
            return '';
        }
    
    } // getEventOnchangeEqualString

    ///////////////////////////////////////////////////////////////////////////
    /////// End Div Sub Elements /////////////((///////////////////////////////
    ///////////////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////////////////////
    /////// Start Basic String Functions //////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns a new line
    static getNewLine()
    { 
        var ret_new_line_str = '\n';
     
        return ret_new_line_str;
    
    } // getNewLine

    // Returns tab as spaces
    static getTabs(i_number_tabs)
    {
        var ret_tabs = '';
    
        for (var i_tab=1; i_tab<=i_number_tabs; i_tab++)
        {
            for (var i_space=1; i_space<=g_tab_number_spaces; i_space++ )
            {
                ret_tabs = ret_tabs + ' ';
            } 
        }
    
        return ret_tabs;
    
    } // getTabs

    ///////////////////////////////////////////////////////////////////////////
    /////// End Basic String Functions ////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

} // UtilHtml