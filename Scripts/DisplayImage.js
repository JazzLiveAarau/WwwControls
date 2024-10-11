// File: DisplayImage.js
// Date: 2024-10-11
// Author: Gunnar Lidén

// File content
// =============
//
// Class DisplayImage
// Creation of a display image control
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

        // The container element
        this.m_el_div_container = null;

        // Defines the active index record for arrays m_rec_image_file_name_array,
        // m_rec_text_field_one_array, m_rec_text_field_two_array, ........
        //  i.e. the image and the text that shall be displayed
        this.m_active_index_record = 0;

        // Image container height
        this.m_image_container_height = '650px';

        // Array of record numbers defining the records and used for m_onclick_function
        // that can get additional data about the record from another the the original
        // source like for instance the JazzGuestsXml XML object (file JazzGuests.xml).
        this.m_rec_number_array = null;

        // Array of image file name (URLs)
        this.m_rec_image_file_name_array = null;

        // Array of texts for field one. No field one if null
        this.m_rec_text_field_one_array = null;

        // Array of texts for field two. No field two if null
        this.m_rec_text_field_two_array = null;
        
        // Array of texts for field three. No field three if null
        this.m_rec_text_field_three_array = null;

        // Array of texts for field four. No field four if null
        this.m_rec_text_field_four_array = null;

        // The onclick icon next image function name. Only the name is input
        this.m_onclick_icon_next_image_function_name = '';

        // The onclick icon previous image function name. Only the name is input
        this.m_onclick_icon_prev_image_function_name = '';

        // The onclick icon full screen image function name. Only the name is input
        this.m_onclick_icon_full_screen_image_function_name = '';

        // The onclick icon close image function name. Only the name is input
        this.m_onclick_icon_close_image_function_name = '';

        // Image file name
        this.m_image_file_name = '';    

        // Image default/undefined file name
        this.m_image_deault_file_name = 'https://jazzliveaarau.ch/Homepage/Icons/jazz_photo_undefined.png';

        // Styles for a display image picture container element. Separate with semicolon
        // Function sets clear:both; height: m_image_container_height
        this.m_style_picture_container = '';

        // Width of the image picture container element
        this.m_width_picture_container = '92%';

        // Instance of class DisplayImageText
        this.m_display_image_text = null;

        // Instance of class JazzToolbar for the left toolbar
        this.m_left_toolbar = null;

        // Instance of class JazzToolbar for the right toolbar
        this.m_right_toolbar = null;

        // Event function name for mouse over toolbar
        this.m_on_mouse_over_function_name = '';

        // Event function name for mouse out toolbar
        this.m_on_mouse_out_function_name = '';

        // Flag telling if div borders shall be displayed for debugging
        this.m_display_div_borders = false;

        // Initialization
        this.init()

    } // constructor

    // Initialization
    init()
    {
        this.m_el_div_container = document.getElementById(this.m_id_div_container);

        if (null == this.m_el_div_container)
        {
            alert("DisplayImage.init m_el_div_container= null")

            return;
        }

        this.m_display_image_text = new DisplayImageText(this.m_id_my_fctn_str, this.getIdDisplayImageTextContainer());

    } // init

    // Create the image-text control
    instantiate()
    {
        var n_tabs = 1;

        this.m_el_div_container.innerHTML = this.getHtmlString(n_tabs);

        this.createToolbars();

        var index_max = this.m_rec_image_file_name_array.length - 1;

        this.setActiveIndexRecord(index_max);

        this.setDisplayActiveRecord();

        this.hideImageToolbars();

    } // instantiate

    // Get the active record number
    getActiveRecordNumber()
    {
        return this.m_rec_number_array[this.m_active_index_record];
        
    } // getActiveRecordNumber()

    ///////////////////////////////////////////////////////////////
    ////// Active record set functions ////////////////////////////
    ///////////////////////////////////////////////////////////////

    // Defines the active index record for arrays m_rec_image_file_name_array,
    // m_rec_text_field_one_array, m_rec_text_field_two_array, ........
    //  i.e. the image and the text that shall be displayed
    setActiveIndexRecord(i_active_index_record)
    {
        var index_max = this.m_rec_image_file_name_array.length - 1;

        if (i_active_index_record < 0 || i_active_index_record > index_max)
        {
            alert("DisplayImage.setActiveIndexRecord Index not between 0 and " + index_max.toString());

            return;
        }

        this.m_active_index_record = i_active_index_record;

        this.hideDisplayNextPreviousImageIcons();

    } // setActiveIndexRecord

    // Set image and texts for the active image record (m_active_index_record)
    // and display the data
    setDisplayActiveRecord()
    {
        var image_url = this.m_rec_image_file_name_array[this.m_active_index_record];

        var text_one = this.m_rec_text_field_one_array[this.m_active_index_record];

        var text_two = this.m_rec_text_field_two_array[this.m_active_index_record];

        var text_three = this.m_rec_text_field_three_array[this.m_active_index_record];

        var text_four = this.m_rec_text_field_four_array[this.m_active_index_record];

        this.setScalePositionDisplayImage(image_url);

        this.m_display_image_text.setTextOne(text_one);

        this.m_display_image_text.setTextTwo(text_two);

        this.m_display_image_text.setTextThree(text_three);

        this.m_display_image_text.setTextFour(text_four);

    } // setDisplayActiveRecord

    // Set and display the previous jazz guest record
    setAndDisplayPreviousRecord()
    {
        if (this.m_active_index_record >= 1)
        {
            this.m_active_index_record = this.m_active_index_record - 1;
        }
        else
        {
            console.log("this.m_active_index_record Error m_active_index_record= " 
                            + this.m_active_index_record.toString());

            return;
        }

        this.hideDisplayNextPreviousImageIcons();

        this.setDisplayActiveRecord();

    } // setAndDisplayPreviousRecord

    // Set and display the next jazz guest record
    setAndDisplayNextRecord()
    {
        var index_max = this.m_rec_image_file_name_array.length - 1;

        if (this.m_active_index_record <= index_max - 1)
        {
            this.m_active_index_record = this.m_active_index_record + 1;
        }
        else
        {
            console.log("this.setAndDisplayNextRecord Error m_active_index_record= " 
                            + this.m_active_index_record.toString() + 
                            ' index_max= ' + index_max.toString());

            return;
        }

        this.hideDisplayNextPreviousImageIcons();

        this.setDisplayActiveRecord();

    } // setAndDisplayNextRecord


    ///////////////////////////////////////////////////////////////
    ////// Image functions ////////////////////////////////////////
    ///////////////////////////////////////////////////////////////

    // Set the image file name, scale, position and display image
    setScalePositionDisplayImage(i_image_file_name)
    {
        console.log("DisplayImage.setScalePositionDisplayImage i_image_file_name= " + i_image_file_name);

        this.m_image_file_name = i_image_file_name;   

        var el_div_container = this.getElementPictureContainer();

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

    // Hide or display the next and previous image icons
    hideDisplayNextPreviousImageIcons()
    {
        var index_max = this.m_rec_image_file_name_array.length - 1;

        if (this.m_active_index_record == 0)
        {
            this.m_left_toolbar.displayIcon(2);

            this.m_right_toolbar.hideIcon(2);     

        }
        else if (this.m_active_index_record == index_max)
        {
            this.m_left_toolbar.hideIcon(2);

            this.m_right_toolbar.displayIcon(2);        
        }
        else
        {
            this.m_left_toolbar.displayIcon(2);

            this.m_right_toolbar.displayIcon(2);
        }

    } // hideDisplayNextPreviousImageIcons

    // Set image height
    setImageContainerHeight(i_image_container_height)
    {
      this.m_image_container_height = i_image_container_height;   

    } // setImageContainerHeight

    ///////////////////////////////////////////////////////////////
    ////// Left And Right Toolbar /////////////////////////////////
    ///////////////////////////////////////////////////////////////

    // Create the left and right toolbar
    createToolbars()
    {
        var object_left_one = new JazzToolbarData('JazzIcon');

        object_left_one.setImageUrl('https://jazzliveaarau.ch/Homepage/Icons/icon_slideshow_increase_screen.png');

        object_left_one.setOnclickFunctionName(this.m_onclick_icon_full_screen_image_function_name);

        object_left_one.setLabelText(''); // No label

        object_left_one.setTitle('Bild auf Vollschirm anschauen');

        object_left_one.setImageAlt('Vollschirm icon');

        object_left_one.setWidth('11px');


        var object_left_two = new JazzToolbarData('JazzIcon');

        object_left_two.setImageUrl('https://jazzliveaarau.ch/Homepage/Icons/icon_slideshow_back.png');

        object_left_two.setOnclickFunctionName(this.m_onclick_icon_next_image_function_name);

        object_left_two.setLabelText(''); // No label

        object_left_two.setTitle('Nächtes Bild');

        object_left_two.setImageAlt('Nächste Icon');

        object_left_two.setWidth('11px');


        var object_right_one = new JazzToolbarData('JazzIcon');

        object_right_one.setImageUrl('https://jazzliveaarau.ch/Homepage/Icons/icon_slideshow_exit.png');

        object_right_one.setOnclickFunctionName(this.m_onclick_icon_close_image_function_name);

        object_right_one.setLabelText(''); // No label

        object_right_one.setTitle('Bild zu machen');

        object_right_one.setImageAlt('X Icon');

        object_right_one.setWidth('15px');


        var object_right_two = new JazzToolbarData('JazzIcon');

        object_right_two.setImageUrl('https://jazzliveaarau.ch/Homepage/Icons/icon_slideshow_forward.png');

        object_right_two.setOnclickFunctionName(this.m_onclick_icon_prev_image_function_name);

        object_right_two.setLabelText(''); // No label

        object_right_two.setTitle('Voriges Bild');

        object_right_two.setImageAlt('Zurück Icon');

        object_right_two.setWidth('11px');


        var left_toolbar_data_array = [];

        left_toolbar_data_array[0] = object_left_one;
    
        left_toolbar_data_array[1] = object_left_two;

        var left_unique_str = 'left_' + this.m_id_my_fctn_str;

        this.m_left_toolbar = new JazzToolbar(left_toolbar_data_array, left_unique_str, this.getIdLeftImageToolbarContainer());

        this.m_left_toolbar.setMarginLeft('0px')
        
        this.m_left_toolbar.setMarginTop('5px')

        this.m_left_toolbar.setMarginBottom('100px')
    
        this.m_left_toolbar.setBackgroundColor('black');
    
        this.m_left_toolbar.setVerticalToTrue();

        this.m_left_toolbar.instantiate();


        var right_toolbar_data_array = [];

        right_toolbar_data_array[0] = object_right_one;
    
        right_toolbar_data_array[1] = object_right_two;

        var right_unique_str = 'right_' + this.m_id_my_fctn_str;

        this.m_right_toolbar = new JazzToolbar(right_toolbar_data_array, right_unique_str, this.getIdRightImageToolbarContainer());

        this.m_right_toolbar.setMarginLeft('0px')
        
        this.m_right_toolbar.setMarginTop('5px')

        this.m_right_toolbar.setMarginBottom('100px')
    
        this.m_right_toolbar.setBackgroundColor('black');
    
        this.m_right_toolbar.setVerticalToTrue();

        this.m_right_toolbar.instantiate();

    } // createToolbars

    // Hide image toolbars
    hideImageToolbars()
    {
        this.m_left_toolbar.hideAllIconsInheritBackgroundColor();

        this.m_right_toolbar.hideAllIconsInheritBackgroundColor();

    } // hideImageToolbars

    // Display image toolbars
    displayImageToolbars()
    {
        this.m_left_toolbar.displayAllIcons();

        this.m_right_toolbar.displayAllIcons();

        this.hideDisplayNextPreviousImageIcons();

    } // displayImageToolbars

    // Set the event function name for mouse over
    setMouseOverFunctionName(i_on_mouse_over_function_name)
    {
        this.m_on_mouse_over_function_name = i_on_mouse_over_function_name;

    } // setMouseOverFunctionName

     // Set the event function name for mouse out
    setMouseOutFunctionName(i_on_mouse_out_function_name)
    {
        this.m_on_mouse_out_function_name = i_on_mouse_out_function_name;
        
    } // setMouseOutFunctionName       

    ///////////////////////////////////////////////////////////////
    ////// Input data arrays //////////////////////////////////////
    ///////////////////////////////////////////////////////////////

    // Set array of record numbers defining the records
    setRecordNumberArray(i_rec_number_array)
    {
        this.m_rec_number_array = i_rec_number_array;

    } // setRecordNumberArray

    // Set array of image file name (URLs)
    setRecordImageFileNameArray(i_rec_image_file_name_array)
    {
        this.m_rec_image_file_name_array = i_rec_image_file_name_array;

    } // setRecordImageFileNameArray

    // Set array of texts for field one.
    setRecordTextFieldOneArray(i_rec_text_field_one_array)
    {
        this.m_rec_text_field_one_array = i_rec_text_field_one_array;

    } // setRecordTextFieldOneArray

    // Set array of texts for field two.
    setRecordTextFieldTwoArray(i_rec_text_field_two_array)
    {
        this.m_rec_text_field_two_array = i_rec_text_field_two_array;

    } // setRecordTextFieldTwoArray    

    // Set array of texts for field three.
    setRecordTextFieldThreeArray(i_rec_text_field_three_array)
    {
        this.m_rec_text_field_three_array = i_rec_text_field_three_array;

    } // setRecordTextFieldThreeArray    

    // Set array of texts for field four.
    setRecordTextFieldFourArray(i_rec_text_field_four_array)
    {
        this.m_rec_text_field_four_array = i_rec_text_field_four_array;

    } // setRecordTextFieldFourArray    

    ///////////////////////////////////////////////////////////////
    ////// Event functions ////////////////////////////////////////
    ///////////////////////////////////////////////////////////////

    // Sets the onclick icon next image function name. Only the name is input
    setOnclickNextImageFunctionName(i_onclick_icon_next_image_function_name) 
    {
      this.m_onclick_icon_next_image_function_name = i_onclick_icon_next_image_function_name;

    } // setOnclickIconOneFunctionName  

    // Sets the onclick icon previous image function name. Only the name is input
    setOnclickPrevImageFunctionName(i_onclick_icon_prev_image_function_name) 
    {
      this.m_onclick_icon_prev_image_function_name = i_onclick_icon_prev_image_function_name;

    } // setOnclickPrevImageFunctionName  

    // Sets the onclick icon full screen image function name. Only the name is input
    setOnclickFullScreenImageFunctionName(i_onclick_icon_full_screen_image_function_name) 
    {
      this.m_onclick_icon_full_screen_image_function_name = i_onclick_icon_full_screen_image_function_name;

    } // setOnclickFullScreenImageFunctionName  

    // Sets the onclick icon close image function name. Only the name is input
    setOnclickCloseImageFunctionName(i_onclick_icon_close_image_function_name) 
    {
      this.m_onclick_icon_close_image_function_name = i_onclick_icon_close_image_function_name;

    } // setOnclickCloseImageFunctionName  

   // Set styles for the display image picture element. Separate with semicolon
    // Function sets clear:both; height: m_image_container_height and 
    // the width (setImageContainerWidth)
    setStylePictureContainerString(i_style_picture_container)
    {
        this.m_style_picture_container = i_style_picture_container;

    } // setStylePictureContainerString    

    // Set the width of the image picture container element
    // Default value ie 92%
    setImageContainerWidth(i_width_picture_container)
    {
        this.m_width_picture_container = i_width_picture_container;

    } // setImageContainerWidth

    ///////////////////////////////////////////////////////////////
    ////// Data for ImageDisplayText //////////////////////////////
    ///////////////////////////////////////////////////////////////

     // Set styles for label all text. Separate with semicolon
     setStyleLabelAllTextString(i_style_label_all_text)
     {
         this.m_display_image_text.m_style_label_all_text = i_style_label_all_text;
 
     } // setStyleLabelAllTextString

     // Set styles for the text group all element. Separate with semicolon
     setStyleTextGroupAll(i_style_text_group_all)
     {
         this.m_display_image_text.m_style_text_group_all = i_style_text_group_all;
 
     } // setStyleTextGroupAll
        
     // Set styles for the text group one element. Separate with semicolon
     setStyleTextGroupOne(i_style_text_group_one)
     {
         this.m_display_image_text.m_style_text_group_one = i_style_text_group_one;
 
     } // setStyleTextGroupOne
 
     // Set styles for the text group two element. Separate with semicolon
     setStyleTextGroupTwo(i_style_text_group_two)
     {
         this.m_display_image_text.m_style_text_group_two = i_style_text_group_two;
 
     } // setStyleTextGroupTwo        
        
     // Set styles for text one. Separate with semicolon
     setStylTextOneString(i_style_text_one)
     {
         this.m_display_image_text.m_style_text_one = i_style_text_one;
 
     } // setStylTextOneString
 
     // Set styles for text two. Separate with semicolon
     setStylTextTwoString(i_style_text_two)
     {
         this.m_display_image_text.m_style_text_two = i_style_text_two;
 
     } // setStylTextTwoString
 
     // Set styles for text three. Separate with semicolon
     setStylTextThreeString(i_style_text_three)
     {
         this.m_display_image_text.m_style_text_three = i_style_text_three;
 
     } // setStylTextThreeString 
 
     // Set styles for text three. Separate with semicolon
     setStylTextFourString(i_style_text_four)
     {
         this.m_display_image_text.m_style_text_four = i_style_text_four;
 
     } // setStylTextFourString 


    ///////////////////////////////////////////////////////////////
    ////// Get HTML String Functions //////////////////////////////
    ///////////////////////////////////////////////////////////////

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

        var ret_html_str = ret_html_str + this.getDisplayImageToolbarsContainerString(i_n_tabs);

        ret_html_str = ret_html_str + this.getDisplayImageTextContainerString(i_n_tabs);

        return ret_html_str;

    } // getHtmlString

    // Returns the HTML string defining the div container with the image element and
    // the two image toolbars
    getDisplayImageToolbarsContainerString(i_n_tabs)
    {
        var toolbar_style_str = 'float: left; width: 12px; background-color: black;  height: ' + this.m_image_container_height;

        // toolbar_style_str = toolbar_style_str + '; border: 1px solid black'; // Debug
        
        var toolbar_inner_html = 'b'; 

        var left_toolbar_html = 
            UtilHtml.getDivElementLeafStyleMouseString(this.getIdLeftImageToolbarContainer(), 
                        toolbar_style_str, 
                        this.m_on_mouse_over_function_name, 
                        this.m_on_mouse_out_function_name,                         
                        toolbar_inner_html, i_n_tabs+2);

        var picture_html = this.getPictureHtmlString(i_n_tabs+2);

        var right_toolbar_html = 
            UtilHtml.getDivElementLeafStyleMouseString(this.getIdRightImageToolbarContainer(), 
                        toolbar_style_str, 
                        this.m_on_mouse_over_function_name, 
                        this.m_on_mouse_out_function_name, 
                        toolbar_inner_html, i_n_tabs+2);


        var image_and_toolbars_style_str = 'clear: both; width: 100%; overflow: hidden';

        // image_and_toolbars_style_str = image_and_toolbars_style_str + '; border: 1px solid red'; // Debug

        var image_and_toolbar_inner_html = left_toolbar_html + picture_html + right_toolbar_html;

        return UtilHtml.getDivElementLeafStyleString(this.getIdDisplayImageToolbarsContainer(), 
                        image_and_toolbars_style_str, image_and_toolbar_inner_html, i_n_tabs+1);

    } // getDisplayImageToolbarsContainerString

    // Returns the HTML string that defines the picture element
    getPictureHtmlString(i_n_tabs)
    {
        var picture_container_style_str = 'float: left; width: ' + this.m_width_picture_container + '; height: ' + this.m_image_container_height;

        if (this.m_style_picture_container.length > 0)
        {
            picture_container_style_str = picture_container_style_str + '; ' + this.m_style_picture_container;
        }

        if (this.m_display_div_borders)
        {
            picture_container_style_str = picture_container_style_str + '; border: 1px solid blue';
        }

        if (this.m_image_file_name.length == 0)
        {
            this.m_image_file_name = this.m_image_deault_file_name;
        }
        
        var image_style_str = ''; // DisplayImage sets these attributes

        // var image_width = this.m_image_container_height; // TODO 

        var image_width = '95%'; //TODO QQQQQQQQQQQQQQQQQQQQQ

        var event_fctn = this.m_onclick_icon_full_screen_image_function_name + "()";

        var inner_html = UtilHtml.getImgStyleString(this.m_image_file_name, 'Guest Image', '', image_style_str, image_width, event_fctn, '');

        return UtilHtml.getDivElementLeafStyleString(this.getIdPictureContainer(), picture_container_style_str, inner_html, i_n_tabs+1);

    } // getPictureHtmlString

    // Returns the HTML string that defines the display image text element
    getDisplayImageTextContainerString(i_n_tabs)
    {
        var text_container_style_str = 'clear: both';

        var inner_html = this.m_display_image_text.getHtmlString(i_n_tabs+1);

        return UtilHtml.getDivElementLeafStyleString(this.getIdDisplayImageTextContainer(), text_container_style_str, inner_html, i_n_tabs+1);

    } // getDisplayImageTextContainerString


    ///////////////////////////////////////////////////////////////
    ////// Identity functions /////////////////////////////////////
    ///////////////////////////////////////////////////////////////

    // Returns the identity for the container for the image and the left and right toolbars
    getIdDisplayImageToolbarsContainer()
    {
        return 'id_div_display_image_toolbars_container_' + this.m_id_my_fctn_str;

    } // getIdDisplayImageToolbarsContainer

    // Returns the picture container element
    getElementPictureContainer()
    {
        return document.getElementById(this.getIdPictureContainer());

    } // getElementPictureContainer

    // Returns the identity string for the picture container element
    getIdPictureContainer()
    {
        return 'id_display_image_' + this.m_id_my_fctn_str;;
        
    } // getIdPictureContainer

    // Returns the identity for the image toolbar left container
    getIdLeftImageToolbarContainer()
    {
        return 'id_container_left_image_toolbar_' + this.m_id_my_fctn_str;

    } // getIdLeftImageToolbarContainer

    // Returns the identity for the image toolbar right container
    getIdRightImageToolbarContainer()
    {
        return 'id_container_right_image_toolbar_' + this.m_id_my_fctn_str;

    } // getIdRightImageToolbarContainer

    // Returns the identity for the DisplayImageText container
    getIdDisplayImageTextContainer()
    {
        return 'id_div_display_image_text_container_' + this.m_id_my_fctn_str;

    } // getIdDisplayImageTextContainer

} // DisplayImage