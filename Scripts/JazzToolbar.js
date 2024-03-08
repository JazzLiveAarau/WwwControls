// File: JazzToolbar.js
// Date: 2024-03-08
// Author: Gunnar Lidén

// File content
// =============
//
// Class for a toolbar with icons, buttons and checkboxes

// Holds data for an icon element
class JazzToolbarData
{
    constructor(i_class_name)
    {
        // Class name
        this.m_class_name = i_class_name;

        // Object
        this.m_object = null;

        // Image URL for class JazzIcon
        this.m_image_url = '';

        // Image alternative for class JazzIcon
        this.m_image_alt = '';

        // Caption for class JazzButton
        this.m_caption = '';

        // Element width
        this.m_width = '';

        // Element height
        this.m_height = '';

        // Element identity
        this.m_id = '';

        // Container div element identity
        this.m_div_id = '';

        // The on click function name.
        this.m_onclick_function = '';

        // Label text for the element
        this.m_label_text = '';

        // Image padding left for label above and below
        this.m_image_padding = '0px';

        // Title (tool tips)
        this.m_title = '';

    }

    // Set image URL for class JazzIcon
    setImageUrl(i_image_url)
    {
        this.m_image_url = i_image_url;

    } // setImageUrl

    // Set image alternative for class JazzIcon
    setImageAlt(i_image_alt)
    {
        this.m_image_alt = i_image_alt;

    } // setImageAlt

    // Set caption for class JazzButton
    setCaption(i_caption)
    {
        this.m_caption = i_caption;

    } // setCaption

    // Set element width
    setWidth(i_width)
    {
        this.m_width = i_width;

    } // setWidth

    // Set element height
    setHeight(i_height)
    {
        this.m_height = i_height;

    } // setHeight

    // Set the element container div identity
    setDivId(i_element_number, i_id_my_fctn_str)
    {
        this.m_div_id = 'id_div_' + this.m_class_name + '_' + i_element_number + '_' + i_id_my_fctn_str;

    } // setDivId

    // Set the element identity
    setId(i_element_number, i_id_my_fctn_str)
    {
        this.m_id = 'id_' + this.m_class_name + '_' + i_element_number + '_' + i_id_my_fctn_str;

    } // setId

    // Sets the on click function name.
    setOnclickFunctionName(i_onclick_function) 
    {
      this.m_onclick_function = i_onclick_function;

    } // setOnchangeFunctionName    

    // Sets the label text for the icon
    // There will be no label if the text not is set
    setLabelText(i_label_text) 
    {
      this.m_label_text = i_label_text;

    } // setLabelText

   // Set padding left for the image (icon)
   setImagePadding(i_image_padding)
   {
       this.m_image_padding = i_image_padding;

   } // setImagePadding

    // Set title (tool tips)
    setTitle(i_title)
    {
        this.m_title = i_title;

    } // setTitle

} // JazzToolbarIcon

// Creates a toolbar
class JazzToolbar
{
    // i_toolbar_data_array: 
    // Array of JazzToolbarData objects
    // i_id_my_fctn_str: 
    // Application unique string for the calling function. 
    // Used to construct identities and class names
    // i_id_div_container:
    // Place holder for the DisplayImage element
    constructor(i_toolbar_data_array, i_id_my_fctn_str, i_id_div_container) 
    {
        // Member variables
        // ================

        // Array of JazzToolbarData objects
        this.m_toolbar_data_array = i_toolbar_data_array;

        // String used to construct identities and class names that are
        // unique for an application
        this.m_id_my_fctn_str = i_id_my_fctn_str;

        // The identity of the container for the control
        this.m_id_div_container = i_id_div_container;

        // Object div wit identity m_id_div_container
        this.m_el_div_container = null;

        // Flag telling if it is a horzontal toolbar.
        // If false a vertical toolbar will be created
        this.m_horizontal = true;

        // Font size
        this.m_font_size = '10px';

        // Font color
        this.m_font_color = 'black';

        // Font weight
        this.m_font_weight = 'bold';

        // Label padding for label left and right
        this.m_label_padding = '4px';

        // Background color
        this.m_bg_color = '';

        // Margin left for the icon/label container elements
        this.m_margin_left = '5px';

        // Margin right for the icon/label container elements
        this.m_margin_right = '';

        // Margin bottom for the icon/label container elements
        this.m_margin_bottom = '';

        // Margin top for the icon/label container elements
        this.m_margin_top = '';

        // Style for the icon/label container elements
        // Set by function setStyles
        this.m_style = '';

        // Label case: none, left, right, above or below
        this.m_label_case = 'none';

        this.init();

    } // constructor

    // Initialization and check of input data
    init()
    {
        this.m_el_div_container = document.getElementById(this.m_id_div_container);

        if (null == this.m_el_div_container)
        {
            alert("JazzToolbar.init Not element witd id= " + this.m_id_div_container);

            return;
        }

        if (!this.setIdentities())
        {
            return;
        }

    } // init

    // Set the style (m_style) for the icon/label container elements 
    setStyles()
    {
        this.m_style = '';

        if (this.m_horizontal)
        {
            this.m_style = UtilHtml.appendLeftStyle(this.m_style);
        }
        else
        {
            this.m_style = UtilHtml.appendClearStyle(this.m_style);

            this.m_style = UtilHtml.appendOverflowHiddenStyle(this.m_style)
        }

        if (this.m_margin_left.length > 0)
        {
            this.m_style = UtilHtml.appendMarginLeftStyle(this.m_style, this.m_margin_left);
        }

        if (this.m_margin_right.length > 0)
        {
            this.m_style = UtilHtml.appendMarginRightStyle(this.m_style, this.m_margin_right);
        }

        if (this.m_margin_bottom.length > 0)
        {
            this.m_style = UtilHtml.appendMarginBottomStyle(this.m_style, this.m_margin_bottom);
        }

        if (this.m_margin_top.length > 0)
        {
            this.m_style = UtilHtml.appendMarginTopStyle(this.m_style, this.m_margin_top);
        }

        if (this.m_font_size.length > 0)
        {
            this.m_style = UtilHtml.appendFontSizeStyle(this.m_style, this.m_font_size);
        }

        if (this.m_font_color.length > 0)
        {
            this.m_style = UtilHtml.appendFontColorStyle(this.m_style, this.m_font_color);
        }

        if (this.m_font_weight == 'bold')
        {
            this.m_style = UtilHtml.appendFontBoldStyle(this.m_style);
        }

        if (this.m_bg_color.length > 0)
        {
            this.m_style = UtilHtml.appendBackgroundStyle(this.m_style, this.m_bg_color);
        }

        console.log("JazzToolbar.setStyles= " + this.m_style);

    } // setStyles()

    // Set margin left for the icon/label container elements
    setMarginLeft(i_dist_str)
    {
        this.m_margin_left = i_dist_str;

        console.log("JazzToolbar.setMarginLeft m_margin_left= " + this.m_margin_left);

    } // setMarginLeft

    // Set margin right for the icon/label container elements
    setMarginRight(i_dist_str)
    {
        this.m_margin_right = i_dist_str;

    } // setMarginRight

    // Set margin bottom for the icon/label container elements
    setMarginBottom(i_dist_str)
    {
        this.m_margin_bottom = i_dist_str;

    } // setMarginBottom

    // Set margin top for the icon/label container elements
    setMarginTop(i_dist_str)
    {
        this.m_margin_top = i_dist_str;

    } // setMarginTop

    // Set font size
    setFontSize(i_font_size)
    {
        this.m_font_size = i_font_size;

    } // setFontSize

    // Set font color
    setFontColor(i_font_color)
    {
        this.m_font_color = i_font_color;

    } // setFontColor

    // Set font weight
    setFontWeight(i_font_weight)
    {
        this.m_font_weight = i_font_weight;

    } // setFontColor

    // Set label padding
    setLabelPadding(i_label_padding)
    {
        this.m_label_padding = i_label_padding;

    } // setLabelPadding

    // Set background color
    setBackgroundColor(i_bg_color)
    {
        this.m_bg_color = i_bg_color;

    } // setBackgroundColor

     // Set label case: none, left, right, above or below
    setLabelCase(i_label_case)
    {
        if (i_label_case != 'none' && i_label_case != 'left' && i_label_case != 'right' && i_label_case != 'above'  && i_label_case != 'below')
        {
            alert("JazzToolbar.setLabelCase Unvalid case= " + i_label_case);

            return;

        }

        this.m_label_case = i_label_case;

        console.log("JazzToolbar.setLabelCase m_label_case= " + this.m_label_case);

    } // setLabelCase

    // Set flag telling that it shall be a horizontal toolbar
    setHorizontalToTrue()
    {
        this.m_horizontal = true;

    } // setHorizontalToTrue

    // Set flag telling that it shall be a vartical toolbar
    setVerticalToTrue()
    {
        this.m_horizontal = false;

    } // setVerticalToTrue

    // Set font size
    setFontSize(i_font_size)
    {
        this.m_font_size = i_font_size;
    }

    // Set font color
    setFontColor(i_font_color)
    {
        this.m_font_color = i_font_color;

    } // setFontColor

    // Set the identities
    setIdentities()
    {
        var n_elements = this.m_toolbar_data_array.length;

        for (var element_number=1; element_number <= n_elements; element_number++)
        {
            var current_element = this.m_toolbar_data_array[element_number - 1];

            current_element.setId(element_number, this.m_id_my_fctn_str);

            current_element.setDivId(element_number, this.m_id_my_fctn_str);

        } // element_number

        console.log("JazzToolbar.setIdentities Exit");

        return true;

    } // setIdentities

    // Add element containers
    addElementContainers()
    {
        var n_elements = this.m_toolbar_data_array.length;

        var container_elements_html = '';

        for (var element_number=1; element_number <= n_elements; element_number++)
        {
            var current_element = this.m_toolbar_data_array[element_number - 1];

            container_elements_html = container_elements_html + this.getContainerDivString(current_element.m_div_id);

        } // element_number

        this.m_el_div_container.innerHTML = container_elements_html;

        console.log("JazzToolbar.addElementContainers Exit");

        return true;

    } // addElementContainers

    // Get the string defining the div for the icon and label element 
    getContainerDivString(id_container_div)
    {
        var ret_str = '<div id= "' + id_container_div + '" style= "' + this.m_style + '" ' + '></div>'

        console.log("JazzToolbar.getContainerDivString Returned string:");
        console.log(ret_str);

        return ret_str;

    } // getContainerDivString

    // Set the identities and create objects
    instantiate()
    {
        console.log("JazzToolbar.instantiate Enter");

        this.setStyles();

        this.addElementContainers();

        var n_elements = this.m_toolbar_data_array.length;

        for (var element_number=1; element_number <= n_elements; element_number++)
        {
            var current_element = this.m_toolbar_data_array[element_number - 1];

            if (current_element.m_class_name == 'JazzIcon')
            {

                current_element.m_object = new JazzIcon(current_element.m_image_url, current_element.m_id,  current_element.m_div_id);

                current_element.m_object.setAlt(current_element.m_image_alt)

                current_element.m_object.setWidth(current_element.m_width);

                current_element.m_object.setHeight(current_element.m_height);

                current_element.m_object.setOnclickFunctionName(current_element.m_onclick_function);

                if (current_element.m_label_text.length > 0)
                {
                    current_element.m_object.setLabelText(current_element.m_label_text);
                }
                else
                {
                    current_element.m_object.setLabelText('&nbsp;');
                }

                current_element.m_object.setTitle(current_element.m_title);

                if (this.m_label_case == 'none')
                {
                    current_element.m_object.setLabelText('');
                }
                else if (this.m_label_case == 'left')
                {
                    current_element.m_object.setLabelTextPositionLeft();

                    current_element.m_object.setLabelPadding(this.m_label_padding);
                }
                else if (this.m_label_case == 'right')
                {
                    current_element.m_object.setLabelTextPositionRight();

                    current_element.m_object.setLabelPadding(this.m_label_padding);
                }
                else if (this.m_label_case == 'above')
                {
                    current_element.m_object.setLabelTextPositionAbove();

                    current_element.m_object.setImagePadding(current_element.m_image_padding);
                }
                else if (this.m_label_case == 'below')
                {
                    current_element.m_object.setLabelTextPositionBelow();

                    current_element.m_object.setImagePadding(current_element.m_image_padding);
                }

                current_element.m_object.setLabelBackgroundColor(this.m_bg_color);

                current_element.m_object.instantiate();
            }
            else
            {
                alert("JazzToolbar.instantiate Not yet an implemented class= " + current_element.m_class_name);

                return false;
            }
        }

        console.log("JazzToolbar.instantiate Exit");

        return true;

    } // instantiate

} // JazzToolbar