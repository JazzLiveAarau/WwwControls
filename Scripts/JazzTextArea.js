// File: JazzTextArea.js
// Date: 2024-01-12
// Author: Gunnar Lidén

// File content
// =============
//
// Class JazzTextArea

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Control Text Area /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class that creates a textarea
// The code that will be generated is 
// <label for="id_text_box">Label text</label>
// <textarea id="id_text_area" rows="20" cols="30" title="Tip ...">value</textarea>  
// 
// Input data
// i_id_text_area:     Identity of the text area
// i_id_div_container: Identity of the container. Normally a div
// i_n_rows:           Number of rows as string
// i_n_cols:           Number of columns as string
// 
// Here is a sample how an object of the class can be created:
// var img_textarea = new JazzTextArea("id_text_area", "i_id_container", "3", "50")
class JazzTextArea
{
    // Function that is executed when an object of this class is created
    constructor(i_id_text_area, i_id_div_container, i_n_rows, i_n_cols)
    {
        // Member variables
        // ================

        // The identity of the text area
        this.m_id_text_area = i_id_text_area;

        // The identity of the container for the text area
        this.m_id_div_container = i_id_div_container;

        // Number of rows
        this.m_n_rows = i_n_rows;

        // Number of columns
        this.m_n_cols = i_n_cols;

        // The container element for the text area
        this.m_el_div_container = null;

        // The class for the text box
        this.m_class = '';
    
        // The value of the text box
        this.m_value = '';

        // The oninput function name. Only the name is input
        this.m_oninput_function = '';

        // Flag telling if the text box shall be read only
        this.m_read_only_flag = false;        

        // Label text
        this.m_label_text = '';

        // Label position relative the text box
        // left: Left of box right: Right of box above: Above box
        // Default is left of the text box
        this.m_label_text_position = 'left'; 

        // Size of the text box. Size is the number of characters
        // If size not is set there will be no attribute size= "20"
        // Then the default value for the browser application will be the size
        this.m_text_box_size = '';

        // Maximum length (number of characters) of the input string 
        // If the maximum length not is defined there will be no attribute maxlength= "30"
        // Then the default value for the browser application will be the maximum length
        this.m_maxlength = '';

        // The title attribute specifies extra information about an element.
        // The information is most often shown as a tooltip text when the mouse 
        // moves over the element.
        this.m_title = '';

        // Initialization
        // ==============        

        this.setDivContainerElement();

        this.setControl();

    } // constructor

    // Set and get functions
    // =====================

    // Sets the value for the text box 
    setValue(i_value) 
    {
      this.m_value = i_value;

      var element_html = this.getHtmlElement();

      element_html.value = this.m_value;

    } // setValue

    // Returns the value of the text box
    getValue()
    {
        var element_html = this.getHtmlElement();

        var value = element_html.value;

        this.setValue(value);

        return this.m_value;

    } // getValue    

    // Set focus
    setFocus()
    {
        var element_html = this.getHtmlElement();

        if (null != element_html)
        {
            element_html.focus();
        }

    } // setFocus

    // Lose focus
    loseFocus()
    {
        var element_html = this.getHtmlElement();

        if (null != element_html)
        {
            element_html.blur();
        }

    } // loseFocus

    // Set functions for the layout member variables
    // =============================================

    // Set the oninput function name. Only the name is input
    setOninputFunctionName(i_oninput_function)
    {
        this.m_oninput_function = i_oninput_function;

        this.setControl();

    } // setOninputFunctionName

    // Sets the class for the text box 
    // There will be no class attribute if this function not is called
    setClass(i_class) 
    {
      this.m_class = i_class;

      this.setControl();

    } // setClass

    // Sets the label text for the text box 
    // There will be no label if the text not is set
    setLabelText(i_label_text) 
    {
      this.m_label_text = i_label_text;

      this.setControl();

    } // setLabelText    

    // Sets the label text to the left of the text box
    setLabelTextPositionLeft(i_label_text) 
    {
        this.m_label_text_position = 'left'; 

        this.setControl();

    } // setLabelTextPositionLeft

    // Sets the label text to the right of the text box
    setLabelTextPositionRight() 
    {
        this.m_label_text_position = 'right'; 

        this.setControl();

    } // setLabelTextPositionRight
    
    // Sets the label text above the text box
    setLabelTextPositionAbove() 
    {
        this.m_label_text_position = 'above'; 

        this.setControl();

    } // setLabelTextPositionAbove

    // Set read only flag to false or true
    setReadOnlyFlag(i_read_only_flag)
    {
        this.m_read_only_flag = i_read_only_flag; 

        this.setControl();

    } // setReadOnlyFlag

    // Sets the title of this HTML element. The title can be a tool tip
    // In a desktop computer the title is displayed when the mouse is
    // over the HTML element
    setTitle(i_title) 
    {
        this.m_title = i_title; 

        this.setControl();

    } // setTitle

    // Utility functions
    // =================

    // Sets the div element container
    setDivContainerElement()
    {
        this.m_el_div_container = document.getElementById(this.m_id_div_container);

    } // setDivContainerElement

    // Checks
    checkContainerElement()
    {
        var ret_b_check = true;

        if (null == this.m_el_div_container)
        {
            alert("JazzTextBox error: HTML element with id= " + this.m_id_div_container + " does not exist.");

            ret_b_check = false;
        }   
        
        return ret_b_check;

    } // checkContainerElement

    // Sets the control
    // Append if the input div element had elements
    setControl()
    {
        if (!this.checkContainerElement())
        {
            return;
        }

        var html_str = this.getHtmlString();

        this.m_el_div_container.innerHTML = html_str;

    } // setControl

    // Returns the HTML text box element 
    getHtmlElement()
    {
        return document.getElementById(this.m_id_text_area);

    } // getHtmlElement


    // Returns the string that defines the HTML text area string
    // <textarea id="id_text_area" rows="20" cols="30" title="Tip ...">value</textarea>  
    getHtmlString()
    {
        var ret_html_str = '';

        if (this.m_label_text.length > 0 && this.m_label_text_position == 'left')
        {
            ret_html_str = ret_html_str + 
                getHtmlElementLabelString(this.m_label_text, this.m_id_text_area, this.m_title);
        }

        if (this.m_label_text.length > 0 && this.m_label_text_position == 'above')
        {
            ret_html_str = ret_html_str + 
                getHtmlElementLabelString(this.m_label_text, this.m_id_text_area, this.m_title) + '<br>';
        }

        ret_html_str = ret_html_str + '<textarea id="' + this.m_id_text_area + '" ';

        if (this.m_class.length > 0)
        {
            ret_html_str = ret_html_str + ' class="' + this.m_class + '" ';
        }

        if (this.m_n_rows.length > 0)
        {
            ret_html_str = ret_html_str + ' rows="' + this.m_n_rows + '" ';
        }
        else
        {
            alert("JazzTextArea.getHtmlString Error Number of rows is not set");

            return;
        }

        if (this.m_n_cols.length > 0)
        {
            ret_html_str = ret_html_str + ' cols="' + this.m_n_cols + '" ';
        }
        else
        {
            alert("JazzTextArea.getHtmlString Error Number of columns is not set");

            return;
        }

        if (this.m_oninput_function.length > 0)
        {
            ret_html_str = ret_html_str + ' oninput="' + this.m_oninput_function + '()" ';
        }

        if (this.m_title.length > 0)
        {
            ret_html_str = ret_html_str + ' title="' + this.m_title + '" ';
        }

        if (this.m_read_only_flag)
        {
            ret_html_str = ret_html_str + ' readonly';
        }

        ret_html_str = ret_html_str + '>';

        ret_html_str = ret_html_str + this.m_value;

        ret_html_str = ret_html_str + '</textarea>';

        if (this.m_label_text.length > 0 && this.m_label_text_position == 'right')
        {
            ret_html_str = ret_html_str + 
                getHtmlElementLabelString(this.m_label_text, this.m_id_text_area, this.m_title);
        }

        return ret_html_str;

    } // getHtmlString

} // JazzTextArea



///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Control Text Area ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////