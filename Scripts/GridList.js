// File: GridList.js
// Date: 2023-10-25
// Author: Gunnar Lidén

// File content
// =============
//
// Class GridList

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Control Grid List /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// // Class that creates a grid list control
class GridList 
{
    // Creates the instance of the class
    // i_id_my_fctn_str: 
    // Application unique string for the calling function. 
    // Used to construct identities and class names
    // i_id_div_container:
    // Place holder for the gridlist
    constructor(i_id_my_fctn_str, i_id_div_container) 
    {
        // Member variables
        // ================

        // String used to construct identities and class names that are
        // unique for an application
        this.m_id_my_fctn_str = i_id_my_fctn_str;

        // The identity of the container for the grid list control
        this.m_id_div_container = i_id_div_container;

        // Grid list case
        this.m_grid_list_case = 'case_one';

        // Array of record numbers defining the records and used for m_onclick_function
        // that can get additional data about the record from another the the original
        // source like for instance the JazzGuestsXml XML object (file JazzGuests.xml).
        this.m_rec_number_array = null;

        // Array of icon get function names. No icons if null
        this.m_rec_icon_name_array = null;

        // Array of texts for field one. No field one if null
        this.m_rec_text_field_one_array = null;

        // Array of texts for field two. No field two if null
        this.m_rec_text_field_two_array = null;
        
        // Array of texts for field three. No field three if null
        this.m_rec_text_field_three_array = null;

        // The number of columns
        this.m_n_columns = 3;

        // Position before grid row of icon display all record rows
        this.m_row_pos_all_rec_icon = 2;

        // Styles for grid list element. Separate with semicolon
        this.m_style_grid_list = 'padding-bottom: 10px';

        // Styles for grid list row. Separate with semicolon
        this.m_style_row = 'padding-bottom: 10px';

        // Styles for grid list record. Separate with semicolon
        this.m_style_record = 'padding: 10px';

        // Styles for grid list record icon. Separate with semicolon
        this.m_style_record_icon = 'padding: 10px';

        // Styles for grid list record field one. Separate with semicolon
        this.m_style_record_field_one = 'font-size: 10px; font-weight: bold';

        // Styles for grid list record field one. Separate with semicolon
        this.m_style_record_field_two = 'font-size: 10px; font-style: italic';

        // Styles for grid list record field one. Separate with semicolon
        this.m_style_record_field_three = 'font-size: 10px; font-style: italic';

        // The container element for the grid list control
        this.m_el_div_container = null;

        // The onclick record function name. Only the name is input
        // The function gets record number from m_rec_number_array as input
        this.m_onclick_function = '';

        // The grid list record height
        this.m_rec_height = '30px';

        // The grid list text record width 
        this.m_rec_text_width = '210px';

        // The grid list icon record width 
        this.m_rec_icon_width = '30px';

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

    // Set grid list record case to one
    setRecordCaseOne()
    {
        this.m_grid_list_case = 'case_one';

    } // setRecordCaseOne

    // Set grid list record case to two
    setRecordCaseTwo()
    {
        this.m_grid_list_case = 'case_two';

    } // setRecordCaseTwo

    // Returns true if grid list record case is one
    isRecordCaseOne()
    {
        if (this.m_grid_list_case == 'case_one')
        {
            return true;
        }
        else
        {
            return false;
        }

    } // isRecordCaseOne

    // Returns true if grid list record case is two
    isRecordCaseTwo()
    {
        if (this.m_grid_list_case == 'case_two')
        {
            return true;
        }
        else
        {
            return false;
        }

    } // isRecordCaseTwo

    // Sets the grid list record height
    setRecordHeight(I_rec_height) 
    {
      this.m_rec_height = i_rec_height;

    } // setRecHeight    

    // Sets the grid list text record width
    setRecordTextWidth(i_rec_text_width)
    {
        this.m_rec_text_width = i_rec_text_width;

    } // setRecordTextWidth

    // Sets the grid list icon record width
    setRecordIconWidth(i_rec_icon_width)
    {
        this.m_rec_icon_width = i_rec_icon_width;

    } // setRecordIconWidth

    // Set styles for grid list element. Separate with semicolon
    setStyleGridListString(i_style_grid_list)
    {
        this.m_style_grid_list = i_style_grid_list;

    } // setStyleGridListString  

    // Set styles for grid list row. Separate with semicolon
    setStyleRowString(i_style_row)
    {
        this.m_style_row = i_style_row;

    } // setStyleRowString  

    // Set styles for grid list record. Separate with semicolon
    setStyleRecordString(i_style_record)
    {
        this.m_style_record = i_style_record;

    } // setStyleRecordString

    // Set styles for grid list record icon. Separate with semicolon
    setStyleRecordIconString(i_style_record_icon)
    {
        this.m_style_record_icon = i_style_record_icon;

    } // setStyleRecordIconString

    // Set styles for grid list record field one. Separate with semicolon
    setStyleRecordFieldOneString(i_style_record_field_one)
    {
        this.m_style_record_field_one = i_style_record_field_one;

    } // setStyleRecordFieldOneString

    // Set styles for grid list record field two. Separate with semicolon
    setStyleRecordFieldTwoString(i_style_record_field_two)
    {
        this.m_style_record_field_two = i_style_record_field_two;

    } // setStyleRecordFieldTwoString

    // Set styles for grid list record field two. Separate with semicolon
    setStyleRecordFieldThreeString(i_style_record_field_three)
    {
        this.m_style_record_field_three = i_style_record_field_three;

    } // setStyleRecordFieldThreeString 

    // Set array of record numbers defining the records and used for m_onclick_function
    setRecordNumberArray(i_rec_number_array)
    {
        this.m_rec_number_array = i_rec_number_array;

    } // setRecordNumberArray

    // Set array of icon get function names.
    setRecordIconNameArray(i_rec_icon_name_array)
    {
        this.m_rec_icon_name_array = i_rec_icon_name_array;

    } // setRecordIconNameArray

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

    // Set the number of columns
    setNumberOfColumns(i_n_columns)
    {
        this.m_n_columns = i_n_columns;

    } // setNumberOfColumns

    // Set the position before grid row of icon display all record rows
    setRowPosForAllRecIcon(i_row_pos_all_rec_icon)
    {
        this.m_row_pos_all_rec_icon = i_row_pos_all_rec_icon;

    } // setRowPosForAllRecIcon

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

    // Sets the onchange function name. Only the name is input
    // If not defined the records are not clickable
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
            alert("GridList error: HTML element with id= " + this.m_id_div_container + " does not exist.");

            ret_b_check = false;
        }   
        
        return ret_b_check;

    } // checkContainerElement

    // Returns HTML string for field one, two or three for a given record index
    // Please not that arrays m_rec_text_field_one_array, _two_ and _three_
    // normally not are all records from the original XML object source. The
    // array m_rec_number_array hold the references for the original source 
    getFieldString(i_record_index, i_field, i_n_tabs)
    {
        var ret_field_str = '';

        if (i_field <= 0 || i_field >= 4)
        {
            alert("GridList.getFieldString i_field= " + i_field.toString() + " is not implemented");

            return ret_field_str;
        }            
      
        var field_style_str = '';

        if (this.m_grid_list_case == 'case_one')
        {
            field_style_str = 'clear: both';
        }
        else if (this.m_grid_list_case == 'case_two')
        {
            field_style_str = 'float: left';
        }
        else
        {
            alert("GridList.getFieldString Case " + this.m_grid_list_case + " is not implemented");

            return ret_field_str;
        }

        var inner_html = '';

        if (i_field == 1 && this.m_style_record_field_one.length > 0)
        {
            field_style_str = field_style_str + '; ' + this.m_style_record_field_one;

            if (this.m_rec_text_field_one_array != null)
            {
                inner_html = this.m_rec_text_field_one_array[i_record_index];
            }
        }
        else if (i_field == 2 && this.m_style_record_field_two.length > 0)
        {
            field_style_str = field_style_str + ';' + this.m_style_record_field_two;

            if (this.m_rec_text_field_two_array != null)
            {
                inner_html = this.m_rec_text_field_two_array[i_record_index];
            }
        }
        else if (i_field == 3 && this.m_style_record_field_three.length > 0)
        {
            field_style_str = field_style_str + '; ' + this.m_style_record_field_three;

            if (this.m_rec_text_field_three_array != null)
            {
                inner_html = this.m_rec_text_field_three_array[i_record_index];
            }
        }

        if (inner_html.length == 0)
        {
            return ret_field_str;
        }

        ret_field_str = ret_field_str +
        UtilHtml.getDivElementLeafStyleString('', field_style_str, inner_html, i_n_tabs);

        return ret_field_str;

    } // getFieldString

    // Returns element record
    getElementRecord(i_record_index)
    {
        return document.getElementById(getIdRecord(i_record_index));

    } // getElementRecord

    // Returns the identity string for the record element
    getIdRecord(i_record_index)
    {
        var ret_id_record_str = 'id_grid_list';

        ret_id_record_str = ret_id_record_str + this.m_id_my_fctn_str;

        ret_id_record_str = ret_id_record_str + '_rec_' + i_record_index.toString();

        return ret_id_record_str;
        
    } // getIdRecord

    // Returns a on click statement. Input record number ist the reference number for
    // the original XML object source for the data, for example JazzGuests.
    // These record numbers are stored in array m_rec_number_array
    getClickEventStatementString(i_record_number)
    {
        if (this.m_onclick_function.length == 0)
        {
            return '';
        }

        return 'onclick= "' + this.m_onclick_function + '(' + i_record_number.toString() + ')"';

    } // getClickEventStyleString

    // Returns element row
    getElementRow(i_row_number)
    {
        return document.getElementById(getIdRow(i_row_number));

    } // getElementRow

    // Returns the identity string for the row element
    getIdRow(i_row_number)
    {
        var ret_id_row_str = 'id_grid_list';

        ret_id_row_str = ret_id_row_str + this.m_id_my_fctn_str;

        ret_id_row_str = ret_id_row_str + '_row_' + i_row_number.toString();

        return ret_id_row_str;
        
    } // getIdRow

    // Returns the HTML string that defines the field one element
    // Please note that getFieldString set styles depending on grid case
    getFieldOneString(i_record_index, i_n_tabs)
    {
        return this.getFieldString(i_record_index, 1, i_n_tabs+1); 

    } // getFieldOneString

    // Returns the HTML string that defines the field two element
    // Please note that getFieldString set styles depending on grid case
    getFieldTwoString(i_record_index, i_n_tabs)
    {
        return this.getFieldString(i_record_index, 2, i_n_tabs+1); 

    } // getFieldTwoString

    // Returns the HTML string that defines the field three element
    // Please note that getFieldString set styles depending on grid case
    getFieldThreeString(i_record_index, i_n_tabs)
    {
        return this.getFieldString(i_record_index, 3, i_n_tabs+1); 

    } // getFieldThreeString

    // Returns the HTML string that defines the group element for case one
    getGroupCaseOneString(i_record_index, i_n_tabs)
    {
        var div_inner_html_array = [];

        var index_out = -1;

        var field_one_str = this.getFieldOneString(i_record_index, i_n_tabs+1);

        var field_two_str = this.getFieldTwoString(i_record_index, i_n_tabs+1);

        var field_three_str = this.getFieldThreeString(i_record_index, i_n_tabs+1);

        if (field_one_str.length > 0)
        {
            index_out = index_out + 1;

            div_inner_html_array[index_out] = field_one_str;
        }

        if (field_two_str.length > 0)
        {
            index_out = index_out + 1;

            div_inner_html_array[index_out] = field_two_str;
        }       

        if (field_three_str.length > 0)
        {
            index_out = index_out + 1;

            div_inner_html_array[index_out] = field_three_str;
        }   
        
        if (index_out < 0)
        {
            // alert("GridList.getGroupCaseOneString Warning No text fields are defined");

            return '';
        }

        var styles_group_txt_str = 'float: left; margin-left: 10px; width: ' + this.m_rec_text_width;

        return UtilHtml.getDivElementGroupStyleString('', styles_group_txt_str, div_inner_html_array, i_n_tabs);

    } // getGroupCaseOneString

    // Returns HTML string for the icon
    getIconString(i_record_index, i_n_tabs)
    {
        var ret_icon_str = '';

        if (this.m_rec_icon_name_array == null)
        {
            return ret_icon_str;
        }

        var file_name_icon = this.m_rec_icon_name_array[i_record_index];

        if (file_name_icon.length == 0)
        {
            return ret_icon_str;
        }

        var id_div_el_icon = '';

        var styles_str =  'float: left; margin-right: 4px';

        var icon_width = this.m_rec_icon_width;

        var event_fctn =  '';

        var icon_title =  '';

        ret_icon_str = ret_icon_str +

        UtilHtml.getDivElementIconStyleString(id_div_el_icon, styles_str, file_name_icon, icon_width, event_fctn, icon_title, i_n_tabs);

        return ret_icon_str;

    } // getIconString

    // Returns the HTML string that defines the record element for case one
    getRecordCaseOne(i_record_index, i_n_tabs)
    {
        var rec_styles_str =  'float: left; margin-right: 4px; cursor: pointer'; // border: 1px solid blue;

        var icon_str = this.getIconString(i_record_index, i_n_tabs+1);

        var group_str =  this.getGroupCaseOneString(i_record_index, i_n_tabs+1);

        var div_inner_html_array = [];

        var index_out = -1;

        if (icon_str.length > 0)
        {
            index_out = index_out + 1;

            div_inner_html_array[index_out] = icon_str;

        }

        if (group_str.length > 0)
        {
            index_out = index_out + 1;

            div_inner_html_array[index_out] = group_str;
        }

        if (index_out < 0)
        {
            alert("GridList.getRecordCaseOne No icon and no group with text elements are defined");

            return '';
        }

        var record_number = this.m_rec_number_array[i_record_index];

        var event_str = this.getClickEventStatementString(record_number);

        return UtilHtml.getDivElementGroupStyleEventString(this.getIdRecord(i_record_index), rec_styles_str, event_str, div_inner_html_array, i_n_tabs);
        
    } // getRecordCaseOne

    // Returns the HTML string that defines one row element for case one
    getRowCaseOne(i_row_number, i_start_record_index, i_end_record_index, i_n_tabs)
    {
        if (i_start_record_index < i_end_record_index)
        {
            alert("GridList.getRowCaseOne Record start index " + 
            i_start_record_index.toString() + " is less than end index " +
            i_end_record_index.toString());

            return '';
        }

        var row_styles_str =  'overflow: hidden; margin-top: 5px; clear: both; border'; // : 1px solid black;

        var div_inner_html_array = [];

        var index_out = 0;

        for (var rec_index=i_start_record_index; rec_index >= i_end_record_index; rec_index--)
        {
            div_inner_html_array[index_out] = this.getRecordCaseOne(rec_index, i_n_tabs+1);

            index_out = index_out + 1;
        }

        return UtilHtml.getDivElementGroupStyleString(this.getIdRow(i_row_number), row_styles_str, div_inner_html_array, i_n_tabs+1);

    } // getRowCaseOne

    // Returns the HTML string that defines the grid list case one element
    getGridListCaseOneString(i_n_tabs)
    {
        var div_inner_html_array = [];

        var index_out = -1;

        var n_records = this.m_rec_number_array.length;

        var start_record_index = n_records - 1;

        var end_row_number = parseInt(n_records/this.m_n_columns) + 1;

        for (var row_number=1; row_number <= end_row_number; row_number++)
        {
            var end_record_index = start_record_index - this.m_n_columns + 1;

            if (end_record_index < 0)
            {
                end_record_index = 0;
            }

            var row_str = this.getRowCaseOne(row_number, start_record_index, end_record_index, i_n_tabs+1);

            if (row_str.length > 0)
            {
                index_out = index_out + 1;

                div_inner_html_array[index_out] = row_str;

                start_record_index = end_record_index - 1;

                if (start_record_index < 0)
                {
                    break;
                }
            }
            else
            {
                break;
            }

        } // row_number

        var id_grid_list = 'id_div_grid_list_' + this.m_id_my_fctn_str;

        var grid_list_styles_str =  'clear: both; ' + this.m_style_grid_list;

        return UtilHtml.getDivElementGroupStyleString(id_grid_list, grid_list_styles_str, div_inner_html_array, i_n_tabs+1);

    } // getGridListCaseOneString

    // Returns false if input data not is OK
    checkInputData()
    {
        if (this.m_rec_number_array == null || this.m_rec_number_array.length == 0)
        {
            alert("GridList.checkInputData Record number array is not defined");

            return false;
        }

        var n_records = this.m_rec_number_array.length;

        var n_defined_data_arrays = 0;

        if (this.m_rec_text_field_one_array != null)
        {
            n_defined_data_arrays = n_defined_data_arrays + 1;

            if (n_records != this.m_rec_text_field_one_array.length)
            {
                alert("GridList.checkInputData The number of records in array m_rec_text_field_one_array is not equal to the number in array m_rec_number_array");

                return false;
            }
        }
        
        if (this.m_rec_text_field_two_array != null)
        {
            n_defined_data_arrays = n_defined_data_arrays + 1;

            if (n_records != this.m_rec_text_field_two_array.length)
            {
                alert("GridList.checkInputData The number of records in array m_rec_text_field_two_array is not equal to the number in array m_rec_number_array");

                return false;
            }
        }

        if (this.m_rec_text_field_three_array != null)
        {
            n_defined_data_arrays = n_defined_data_arrays + 1;

            if (n_records != this.m_rec_text_field_three_array.length)
            {
                alert("GridList.checkInputData The number of records in array m_rec_text_field_three_array is not equal to the number in array m_rec_number_array");

                return false;
            }
        }

        if (this.m_rec_icon_name_array != null)
        {
            n_defined_data_arrays = n_defined_data_arrays + 1;

            if (n_records != this.m_rec_icon_name_array.length)
            {
                alert("GridList.checkInputData The number of records in array m_rec_icon_name_array is not equal to the number in array m_rec_number_array");

                return false;
            }
        }

        if (0 == n_defined_data_arrays)
        {
            alert("GridList.checkInputData At least one text or icon array must be defined");

            return false;            
        }

        return true;

    } // checkInputData

    // Returns the string that defines the HTML grid list string
    getHtmlString(i_n_tabs)
    {
        if (!this.checkInputData())
        {
            return '';
        }

        var ret_html_str = '';

        var n_tabs = 2;

        var ret_html_str = this.getGridListCaseOneString(n_tabs);


        /*

        */

        return ret_html_str;

    } // getHtmlString

} // GridList

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Control Grid List ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
