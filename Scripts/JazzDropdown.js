// File: JazzDropdown.js
// Date: 2024-12-22
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Class for standard dropdown 
//
// Reference: https://www.w3schools.com/js/js_classes.asp


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Control Dropdown //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// // Class that creates a dropdown control
class JazzDropdown 
{
    // Creates the instance of the class
    constructor(i_id_drop_down, i_id_div_container) 
    {
        // Member variables
        // ================

        // The identity of the dropdown control
        this.m_id_drop_down = i_id_drop_down;

        // The identity of the container for the dropdown control
        this.m_id_div_container = i_id_div_container;

        // The container element for the dropdown control
        this.m_el_div_container = null;

        // The class for the dropdown control
        this.m_class = '';        

        // The input dropdown name array
        this.m_drop_down_name_array = [];

        // The corresponding number array
        this.m_drop_down_number_array = [];

        // Append string that is added to the dropdown name array
        this.m_append_str = '';

        // The onchange function name. Only the name is input
        this.m_onchange_function = '';

        // Label text
        this.m_label_text = '';

        // Label position relative the text box
        // left: Left of box right: Right of box above: Above box
        // Default is left of the text box
        this.m_label_text_position = 'left';         

        // The dropdown (select element) option number 
        this.m_select_option_number = -12345;

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
    // ======================

    // Sets the member variable and also the the dropdown element
    setSelectOptionNumber(i_select_option_number) 
    {

        this.m_select_option_number = i_select_option_number;

        var element_dropdown = this.getSelectionElement();

        element_dropdown.value = this.m_select_option_number;

    } // setSelectOptionNumber

   // Gets the select option number from the dropdown (select) element.
   // (Also the member variable m_select_option_number is set)
   getSelectOptionNumber() 
   {
        var element_dropdown = this.getSelectionElement();
        
        this.m_select_option_number =  element_dropdown.value;

        return this.m_select_option_number;

   } // setSelectOptionNumber
   
   // Returns true if the selected option number is for the append item
   selectedOptionNumberIsAppendItem(i_select_option_number)
   {
       var b_append = false;

       if (this.m_append_str.length == 0)
       {
           return b_append;
       }

       var name_array_input_length = this.m_drop_down_name_array.length;

       if (i_select_option_number == name_array_input_length + 1)
       {
            b_append = true;
       }
    
       return b_append;

   } // selectedOptionNumberIsAppendItem
        
    // Set functions for the layout member variables
    // =============================================

    // Sets the class for the dropdown control 
    // There will be no class attribute if this function not is called
    setClass(i_class) 
    {
      this.m_class = i_class;

      this.setControl();

    } // setClass

    // Sets the name array for the dropdown control 
    setNameArray(i_drop_down_name_array) 
    {
      this.m_drop_down_name_array = i_drop_down_name_array;

      this.setNumberArray();

      this.setControl();

    } // setNameArray

    // Sets the append string that is added to the dropdown name array
    setAppendString(i_append_str)
    {
        this.m_append_str = i_append_str;

        this.setControl();

    } // setAppendString

    // Sets the onchange function name. Only the name is input
    setOnchangeFunctionName(i_onchange_function) 
    {
      this.m_onchange_function = i_onchange_function;

      this.setControl();

    } // setOnchangeFunctionName 

    // Sets the label text for the dropdown control
    // There will be no label if the text not is set
    setLabelText(i_label_text) 
    {
      this.m_label_text = i_label_text;

      this.setControl();

    } // setLabelText    

    // Sets the label text to the left of the dropdown control
    setLabelTextPositionLeft(i_label_text) 
    {
        this.m_label_text_position = 'left'; 

        this.setControl();

    } // setLabelTextPositionLeft

    // Sets the label text to the right of the dropdown control
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

    // Returns the selection element
    getSelectionElement()
    {
        return document.getElementById(this.m_id_drop_down);

    } // getSelectionElement

    // Checks
    checkContainerElement()
    {
        var ret_b_check = true;

        if (null == this.m_el_div_container)
        {
            alert("JazzDropdown error: HTML element with id= " + this.m_id_div_container + " does not exist.");

            ret_b_check = false;
        }   
        
        return ret_b_check;

    } // checkContainerElement

    // Sets the control
    setControl()
    {
        if (!this.checkContainerElement())
        {
            return;
        }

        var html_str = this.getHtmlString();

        this.m_el_div_container.innerHTML = html_str;        

    } // setControl
    
    // Sets the number array 
    setNumberArray()
    {
        this.m_drop_down_number_array = [];

        var array_number = 0;
        
        for (var index_name=0; index_name < this.m_drop_down_name_array.length; index_name++)
        {
            array_number = array_number + 1;

            this.m_drop_down_number_array[index_name] = array_number;
        }

    } // setNumberArray

    // Returns the string that defines the HTML dropdown string
    // <select id="id_drop_down" class="cl_drop_down" onchange= "eventNewTask" title="Tip ...">  
    // <option value="1" >A0001</option>
    // <option value="2" >A0002</option>    
    // </select>
    getHtmlString()
    {
        var ret_html_str = '';

        if (this.m_label_text.length > 0 && this.m_label_text_position == 'left')
        {
            ret_html_str = ret_html_str + 
                getHtmlElementLabelString(this.m_label_text, this.m_id_drop_down, this.m_title);
        }

        if (this.m_label_text.length > 0 && this.m_label_text_position == 'above')
        {
            ret_html_str = ret_html_str + 
                getHtmlElementLabelString(this.m_label_text, this.m_id_drop_down, this.m_title) + '<br>';
        }

        ret_html_str = ret_html_str +  '<select  id="' + this.m_id_drop_down + '" ';

        if (this.m_class.length > 0)
        {
            ret_html_str = ret_html_str + ' class="' + this.m_class + '" ';
        }

        if (this.m_onchange_function.length > 0)
        {
            ret_html_str = ret_html_str + ' onchange="' + this.m_onchange_function + '()" ';
        }

        if (this.m_title.length > 0)
        {
            ret_html_str = ret_html_str + ' title="' + this.m_title + '" ';
        }

        ret_html_str = ret_html_str + '>'; 

        var n_options = this.m_drop_down_name_array.length;

        if (this.m_append_str.length > 0)
        {
            n_options = n_options + 1;
        }

        for (var index_name=0; index_name < n_options; index_name++)
        {
            var current_name = '';

            var current_number_str = '';

            if (index_name < this.m_drop_down_name_array.length)
            {
                current_name = this.m_drop_down_name_array[index_name];

                current_number_str = this.m_drop_down_number_array[index_name].toString();
            }
            else
            {
                current_name = this.m_append_str;

                current_number_str = n_options.toString();
            }

            var option_str = '<option value="' + current_number_str + '">' +
                                    current_name + '</option>';

            ret_html_str = ret_html_str + option_str;  
        }        

        ret_html_str = ret_html_str + '</select>';
        
        if (this.m_label_text.length > 0 && this.m_label_text_position == 'right')
        {
            ret_html_str = ret_html_str + 
                getHtmlElementLabelString(this.m_label_text, this.m_id_drop_down, this.m_title);
        } 
        
        return ret_html_str;

    } // getHtmlString

} // JazzDropdown

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Control Dropdown ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
