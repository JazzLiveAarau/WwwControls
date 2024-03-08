// File: JazzIcon.js
// Date: 2024-03-08
// Author: Gunnar Lidén

// File content
// =============
//
// Class JazzIcon
//
// Please note that instantiate must be called after the creation of JazzIcon
// var icon_object= new JazzIcon(i_image, i_id_icon, i_id_div_container);
// icon_object.set....
// icon_object.set....
// icon_object.instantiate()

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Control Icon //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// // Class that creates an icon control
class JazzIcon 
{
    // Creates the instance of the class
    constructor(i_image, i_id_icon, i_id_div_container) 
    {
        // Member variables
        // ================

        // The image for the icon
        this.m_image = i_image;

        // The identity of the icon control
        this.m_id_icon = i_id_icon;

        // The identity of the container for the icon control
        this.m_id_div_container = i_id_div_container;

        // The container element for the icon control
        this.m_el_div_container = null;

        // The style for the image
        this.m_img_style = '';

        // The style for the label
        this.m_label_style = '';

        // The onclick function name. Only the name is input
        this.m_onclick_function = '';

        // The width of the icon
        this.m_width = '';

        // The height of the icon
        this.m_height = '';

        // Alternate text for the icon
        this.m_alt = '';

        // Label text
        this.m_label_text = '';

        // Label position relative the text box
        // left: Left of box right: Right of box above: Above box
        // none: Label div element will not be created
        // Default is left of the text box
        this.m_label_text_position = 'left'; 

        // Padding top for label div
        this.m_label_padding = '3px';

        // Padding left for image (icon)
        this.m_image_padding = '0px';

        // Color for label div
        this.m_label_bg_color = 'white'; 

        // The title attribute specifies extra information about an element.
        // The information is most often shown as a tooltip text when the mouse 
        // moves over the element.
        this.m_title = '';
        
        // Initialization
        // ==============

        this.setDivContainerElement();

    } // constructor

    // Set functions for the layout member variables
    // =============================================

    // Sets the image style for the icon control 
    setImgStyle(i_img_style) 
    {
        this.m_img_style = i_img_style;

    } // setImgStyle

    // Set the style for the label
    setLabelStyle(i_label_style) 
    {
        this.m_label_style = i_label_style;

    } // setLabelStyle

    // Set padding top for label div
    setLabelPadding(i_label_padding)
    {
        this.m_label_padding = i_label_padding;

    } // setLabelPadding

   // Set padding left for the image (icon)
   setImagePadding(i_image_padding)
   {
       this.m_image_padding = i_image_padding;

   } // setImagePadding

    // Set backgroundcolor for label div
    setLabelBackgroundColor(i_label_bg_color)
    {
        this.m_label_bg_color = i_label_bg_color;

    } // setLabelBackgroundColor

    // Sets the image for the icon control 
    setImage(i_image) 
    {
      this.m_image = i_image;

    } // setImage    

    // Sets the width of an icon
    setWidth(i_width)
    {
        this.m_width = i_width;

    } // setWidth

    // Sets the height of an icon
    setHeight(i_height)
    {
        this.m_height = i_height;

    } // setHeight

    // Set alternate text for the icon
    setAlt(i_alt)
    {
        this.m_alt = i_alt;

    } // setAlt

    // Sets the label text for the icon
    // There will be no label if the text not is set
    setLabelText(i_label_text) 
    {
      this.m_label_text = i_label_text;

    } // setLabelText    

    // Sets the label text to the left of the icon
    setLabelTextPositionLeft() 
    {
        this.m_label_text_position = 'left'; 

    } // setLabelTextPositionLeft

    // Sets the label text to the right of the icon
    setLabelTextPositionRight() 
    {
        this.m_label_text_position = 'right'; 

    } // setLabelTextPositionRight
    
    // Sets the label text above the icon
    setLabelTextPositionAbove() 
    {
        this.m_label_text_position = 'above'; 

    } // setLabelTextPositionAbove    

    // Sets the label text below the icon
    setLabelTextPositionBelow() 
    {
        this.m_label_text_position = 'below'; 

    } // setLabelTextPositionBelow  

    // The label div element will not be created
    setLabelTextPositionNone() 
    {
        this.m_label_text_position = 'none'; 

    } // setLabelTextPositionNone

     // Sets the title of this HTML element. The title can be a tool tip
    // In a desktop computer the title is displayed when the mouse is
    // over the HTML element
    setTitle(i_title) 
    {
        this.m_title = i_title; 

    } // setTitle
    
    // Sets the div element container
    setDivContainerElement()
    {
        this.m_el_div_container = document.getElementById(this.m_id_div_container);

    } // setDivContainerElement

    // Returns the icon element
    getIconElement()
    {
        return document.getElementById(this.m_id_icon);

    } // getIconElement

    // Hide the icon
    hideIcon()
    {
        this.getIconElement().style.display = 'none';

    } // hideIcon

 
    // Display the icon
    showIcon()
    {
        this.getIconElement().style.display = 'block';

    } // showIcon   

    // Sets the onchange function name. Only the name is input
    setOnclickFunctionName(i_onclick_function) 
    {
      this.m_onclick_function = i_onclick_function;

    } // setOnchangeFunctionName     

    // Checks
    checkContainerElement()
    {
        var ret_b_check = true;

        if (null == this.m_el_div_container)
        {
            alert("JazzIcon error: HTML element with id= " + this.m_id_div_container + " does not exist.");

            ret_b_check = false;
        }   
        
        return ret_b_check;

    } // checkContainerElement

    // Create the element
    instantiate()
    {
        if (!this.checkContainerElement())
        {
            return;
        }

        if (this.m_image.length < 4)
        {
            alert("JazzIcon.instantiate Error: Image is not defined.  this.m_image= " + this.m_image);

            return;            
        }

        var html_str = this.getHtmlString();

        this.m_el_div_container.innerHTML = html_str;

    } // instantiate
        
    // Returns the string that defines the HTML img string
    // <img id="id_icon" class="cl_icon" onclick= "eventXyz" title="Tip ...">
    getHtmlString()
    {
        var ret_html_str = '';

        var img_styles = this.m_img_style;

        var label_styles =  this.m_label_style;

        label_styles = UtilHtml.appendBackgroundStyle(label_styles, this.m_label_bg_color);

        if (this.m_label_text_position == 'left' || this.m_label_text_position == 'right')
        {
            img_styles = UtilHtml.appendLeftStyle(img_styles);

            label_styles = UtilHtml.appendLeftStyle(label_styles);

            label_styles = UtilHtml.appendPaddingTopStyle(label_styles, this.m_label_padding);
        }
        else if (this.m_label_text_position == 'above' || this.m_label_text_position == 'below')
        {
            img_styles = UtilHtml.appendClearStyle(img_styles);

            img_styles = UtilHtml.appendPaddingLeftStyle(img_styles, this.m_image_padding);

            label_styles = UtilHtml.appendClearStyle(label_styles);         
        }
        else if (this.m_label_text_position == 'none')
        {
            img_styles = UtilHtml.appendClearStyle(img_styles);    
        }

        if (this.m_onclick_function.length > 0)
        {
            img_styles = UtilHtml.appendCursorStyle(img_styles);

            label_styles = UtilHtml.appendCursorStyle(label_styles);            
        }

        var icon_html = UtilHtml.getImgAllStyleString(this.m_image, this.m_alt, this.m_id_icon, 
                    img_styles, this.m_width, this.m_height, this.m_onclick_function, this.m_title);

        if (this.m_label_text_position == 'none')
        {
            ret_html_str = ret_html_str + icon_html;

            return ret_html_str;
        }
  
        var n_tabs = 2;

        var id_element_leaf = '';

        var label_div_html = UtilHtml.getDivElementLeafStyleClickString(id_element_leaf, label_styles, 
                            this.m_onclick_function, this.m_label_text, n_tabs);

        if (this.m_label_text_position == 'left')
        {
            ret_html_str = ret_html_str + label_div_html + icon_html;
        }
        else if (this.m_label_text_position == 'right')
        {
            ret_html_str = ret_html_str + icon_html + label_div_html;
        }
        else if (this.m_label_text_position == 'above')
        {
            ret_html_str = ret_html_str + label_div_html + icon_html;
        }
        else if (this.m_label_text_position == 'below')
        {
            ret_html_str = ret_html_str + icon_html + label_div_html;
        }
        else
        {
            alert("JazzIcon.getHtmlString Programming error");

            return 'JazzIcon.getHtmlString Programming error';
        }

        // console.log("JazzIcon.getHtmlString html_str= " + ret_html_str);

        return ret_html_str;

    } // getHtmlString

} // JazzIcon

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Control Icon ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
