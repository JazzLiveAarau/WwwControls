// File: JazzUploadImage.js
// Date: 2025-04-10
// Author: Gunnar Lidén

// Content
// ========
//
// Control for the upload of a photo to the JAZZ live AARAU server.

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Control Upload Image //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Input data for JazzUploadImage
// i_upload_file_name:      The name of the file to be uploaded without extension
// i_upload_file_extension: The extension of the file to be uploaded
// i_upload_path:           The server absolute path (URL) for the file to be uploaded
// i_image_max_size_mb:     Maximum image size in MByte. If bigger the image will be compressed
// i_default_img:           URL for the default (start) image in the image container <div>
// i_caption_select_img:    Caption for the select image button
// i_img_loaded_callback:   Callback function when an image is loaded (displayed)
//                          A boolean parameter tells if it is the default image that
//                          was loaded
class JazzUploadImageInput
{
    // Creates the instance of the class
    constructor(i_upload_file_name, i_upload_file_extension, i_upload_path, i_image_max_size_mb, 
                i_default_img, i_caption_select_img, i_img_loaded_callback)
    {
        // Name of the upload file without extension, e.g. Image_2024mmddhhmmss
        this.m_upload_file_name = i_upload_file_name;

        // Extension of the upload file,e.g. .jpg
        this.m_upload_file_extension = i_upload_file_extension;

        // The server absolute path for m_upload_file_name
        this.m_upload_path = i_upload_path;

        // Maximum image size in MByte. If bigger the image will be compressed
        this.m_image_max_size_mb = i_image_max_size_mb;

        // URL for the default image, i.e. an start image that is diplayed in the image container
        this.m_default_img = i_default_img;

        // Caption for the select image button (actually a label)
        this.m_caption_select_img = i_caption_select_img;

        // Callback function when image has been loaded
        this.m_img_loaded_callback = i_img_loaded_callback;
    }

     // Set the server absolute path for m_upload_file_name
    setImageFilePath(i_upload_path)
    {
        this.m_upload_path = i_upload_path;        
    }

    // Sets the name of the upload file without extension, e.g. Image_yyymmddhhmmss
    setImageFileName(i_upload_file_name)
    {
        this.m_upload_file_name = i_upload_file_name; 

    } // setImageFileName

    // Sets the extension of the upload file, e.g. .jpg
    setImageFileExtension(i_upload_file_extension)
    {
        this.m_upload_file_extension = i_upload_file_extension;

    } // setImageFileExtension

    // Sets the extension of the upload file from another file, e.g. .jpg
    setFileExtensionFromAnotherFile(i_image_file)
    {
        var last_index_point = i_image_file.lastIndexOf('.');

        if (last_index_point < 0)
        {
            alert("JazzUploadImageInput.setImageFileExtension No file extension: " + i_image_file);

            return;
        }

        var extension_str = i_image_file.substring(last_index_point);

        this.m_upload_file_extension = extension_str;

    } // setFileExtensionFromAnotherFile

    // Set the extension from a File object type
    setFileExtensionFromObjectFileType(i_file_object)
    {
        var file_type_str = i_file_object.type;

        var index_image = file_type_str.indexOf('image');

        if (index_image < 0)
        {
            alert("JazzUploadImageInput.setFileExtensionFromObjectFileType Not an image");

            return;
        }
        var index_jpg = file_type_str.indexOf('jpg');

        var index_jpeg = file_type_str.indexOf('jpeg');

        var index_png = file_type_str.indexOf('png');

        var index_gif = file_type_str.indexOf('gif');

        var index_bmp = file_type_str.indexOf('bmp');

        var extension_str = '';

        if (index_jpg >= 0)
        {
            extension_str = '.jpg';
        }
        else if (index_jpeg >= 0)
        {
            extension_str = '.jpg';
        }
        else if (index_png >= 0)
        {
            extension_str = '.png';
        }
        else if (index_gif >= 0)
        {
            extension_str = '.gif';
        }
        else if (index_bmp >= 0)
        {
            extension_str = '.bmp';
        }
        else
        {
            extension_str = '.jpg';

            var warning_message = "JazzUploadImageInput.setFileExtensionFromObjectFileType Warning Image type not jpg, jpeg, png, gif or bmp. Type= " + file_type_str;

            alert(warning_message);

            console.log(warning_message);
        }

        this.m_upload_file_extension = extension_str;

    } // setFileExtensionFromObjectFileType

    // Returns the server file name (URL) for the file that shall be uploaded
    getImageFileFullName()
    {
        return this.m_upload_path + this.m_upload_file_name + this.m_upload_file_extension;

    } // getImageFileFullName

} // JazzUploadImageInput

// Class for the upload of an image to the server 
class JazzUploadImage
{
    // Creates the instance of the class
    // Used to construct identities and class names and handling of event functions
    // i_id_div_container:
    // Place holder for all the the upload controls
    // i_input_data:
    // Instance of JazzUploadImageInput with data (settings) for the upload
    constructor(i_id_div_container, i_input_data) 
    {
        // Member variables
        // ================

        // The identity of the container for the upload controls
        this.m_id_div_container = i_id_div_container;

        // Input data object JazzUploadImageInput
        this.m_input_data = i_input_data;

        // The container element object
        this.m_el_div_container = null;

       // Number of uploaded images
       this.m_n_uploaded_images = 0;

        // Initialization
        this.init();

    } // constructor

    // Initialization 
    init()
    {
        this.m_el_div_container = document.getElementById(this.m_id_div_container);

        if (null == this.m_el_div_container)
        {
            alert("JazzUploadImage.init  Error: Container element is null for id= " + this.m_id_div_container);

            return;
        }

        if (this.m_input_data.m_upload_path.length > 0 && !UtilServer.isAbsolutePath(this.m_input_data.m_upload_path))
        {
            alert("JazzUploadImage.init  Error: Not an absolute path m_upload_path= " + this.m_input_data.m_upload_path);

            return;
        }        

        var html_content = this.getHtml();

        this.m_el_div_container.innerHTML = html_content;

        this.addEventListenerForInputFileElement(this, this.m_input_data);

        this.addEventListenerForUploadImageElement(this, this.m_input_data);

        this.m_n_uploaded_images = 0;

    } // init

    // Set the full server file name (URL) for the uploaded image
    // i_full_server_file_name: Absolut full path URL
    // Please note that the URL can be set also as input data to JazzUtilImageInput
    // (Pameters i_upload_file_name, i_upload_file_extension, i_upload_path)
    setUploadFileUrl(i_full_server_file_name)
    { 
        if (!UtilServer.isAbsolutePath(i_full_server_file_name))
        {
            alert("JazzUploadImage.setUploadFileUrl Not an absolute path= " + i_full_server_file_name);

            return;
        }

        this.m_input_data.setImageFilePath(UtilServer.getFilePath(i_full_server_file_name));   
        
        this.m_input_data.setImageFileName(UtilServer.getFileNameWithoutExtension(i_full_server_file_name));  

        this.m_input_data.setImageFileExtension(UtilServer.getFileExtension(i_full_server_file_name));  
       
    } // setUploadFileUrl

    // Get the full server file name (URL) to the uploaded image
    getImageFileFullName(i_full_server_file_name)
    {       
        return this.m_input_data.getImageFileFullName();

    } // getImageFileFullName

    // Get number of uploaded images after initialization
    getNumberOfUploadedImages()
    {
        return this.m_n_uploaded_images;

    } // getNumberOfUploadedImages

    // Adds an event listener for the input file element
    // i_upload_image_object: This JazzUploadImage object
    // i_input_data:          An instance of JazzUploadImageInput
    //
    // Inside this function 'this' is the <input> object that holds the data about
    // the file that shall be uploaded. This data must of course be passed on
    // to the event execution member function userSelectedFiles.
    // The function userSelectedFiles is a member of the JazzUploadImage class. Therefore
    // must the object JazzUploadImageInput i_upload_image_object be input to this function.
    //
    // https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_parameters
    addEventListenerForInputFileElement(i_upload_image_object, i_input_data)
    {
        var input_file_el = JazzUploadImage.getElementFileInput();

        input_file_el.addEventListener("change", function() {
            i_upload_image_object.userSelectedFiles(this, i_input_data);
        });

    } // addEventListenerForInputFileElement

    // Adds an event handler to the <img> element that displays the uploaded image
    addEventListenerForUploadImageElement(i_upload_image_object, i_input_data) 
    {
        var upload_image_el = JazzUploadImage.getElementUploadImage();

        upload_image_el.addEventListener("load", function() {
            i_upload_image_object.imageIsLoaded(this, i_input_data);
        });

    } // addEventListenerForUploadImageElement

    // Event: Image is loaded. The function m_img_loaded_callback will be called
    // with a boolean parameter telling if it was the default image that was loaded
    imageIsLoaded(i_input_object, i_input_data)
    {
        var upload_image_el = JazzUploadImage.getElementUploadImage();

        var uploaded_img_url = upload_image_el.src;

        var b_default_image = false;

        if (uploaded_img_url == i_input_data.m_default_img )
        {
            b_default_image = true;
        }
        else
        {
            this.m_n_uploaded_images = this.m_n_uploaded_images + 1;
        }

        i_input_data.m_img_loaded_callback(b_default_image);

    } // imageIsLoaded

    // Event function when the user selected files with the input element, type file
    // i_input_object: Element <input> holding the data about the file that shall be uploaded
    // i_input_data:   An instance of JazzUploadImageInput holding data for the upload
    async userSelectedFiles(i_input_object, i_input_data)
    {
        JazzUploadImage.debugAppend("userSelectedFiles Enter");

        if (i_input_object.files.length == 0)
        {
            JazzUploadImage.debugAppend("userSelectedFiles User did not select any file");

            return;
        }

        this.resetDefaultImage();

        JazzUploadImage.debugAppend("userSelectedFiles After resetDefaultImage");
        
        var max_size_mb = i_input_data.m_image_max_size_mb;

        var image_file = i_input_object.files[0];

        var file_name_orig = image_file.name;

        var file_name_el = JazzUploadImage.getElementDivFileName();

        file_name_el.innerHTML = file_name_orig;
    
        if (!JazzUploadImage.fileIsOfTypeImage(image_file))
        {
            alert("JazzUploadImage.userSelectedFiles The file is not an image.");
    
            return;
        }
        else
        {
            console.log("JazzUploadImage.userSelectedFiles The input file is an image");
        }
    
        var original_size = image_file.size/1000000.0;

        console.log("Original image size is " + original_size.toString());

        var full_server_file_name = '';

        if (original_size < max_size_mb)
        {
            console.log("JazzUploadImage.userSelectedFiles The original image is not changed");

            var file_name = image_file.name;

            i_input_data.setFileExtensionFromAnotherFile(file_name); // Really needed?

            full_server_file_name = i_input_data.getImageFileFullName();

            JazzUploadImage.debugAppend("userSelectedFiles The original image will not be compressed");

            var file_type = JazzUploadImage.getFileTypeImage(image_file);

            if (file_type != "image/jpeg" && file_type != "image/jpg" && !UtilServer.isSafari())
            {
                JazzUploadImage.debugAppend("JazzUploadImage.userSelectedFiles The original image will be converted");

                var converted_file = await JazzUploadImage.getConvertedImageFile(image_file);

                console.log("JazzUploadImage.userSelectedFiles The image was converted");

                i_input_data.setFileExtensionFromObjectFileType(converted_file);

                full_server_file_name = i_input_data.getImageFileFullName();

                JazzUploadImage.debugAppend("JazzUploadImage.userSelectedFiles The input image was converted. File name= " + full_server_file_name);

                UtilServer.uploadFile(image_file, full_server_file_name, JazzUploadImage.displayUploadedImage);
            }
            else
            {
                UtilServer.uploadFile(image_file, full_server_file_name, JazzUploadImage.displayUploadedImage);
            }
            
        }
        else
        {
            // Note again that this. not cannot be used for getCompressedImageFile, i.e. this
            // function must be static
            var compressed_file = await JazzUploadImage.getCompressedImageFile(image_file, max_size_mb);

            console.log("JazzUploadImage.userSelectedFiles The image was compressed");

            i_input_data.setFileExtensionFromObjectFileType(compressed_file);

            full_server_file_name = i_input_data.getImageFileFullName();

            JazzUploadImage.debugAppend("userSelectedFiles The input image was compressed");

            UtilServer.uploadFile(image_file, full_server_file_name, JazzUploadImage.displayUploadedImage);
        }

    } // userSelectedFiles

    // Reset the default image
    async resetDefaultImage()
    {
        var url_default_image = this.m_input_data.m_default_img;

        UtilImage.replaceImageInDivContainer(url_default_image, JazzUploadImage.getElementDivImageContainer());
        
        JazzUploadImage.debugAppend("resetDefaultImage Default image was set");

    } // resetDefaultImage

    // Display the uploaded image. 
    static async displayUploadedImage(i_file_name)
    {
        JazzUploadImage.debugAppend("displayUploadedImage i_file_name= " + i_file_name);

        UtilImage.replaceImageInDivContainer(i_file_name, JazzUploadImage.getElementDivImageContainer());

        JazzUploadImage.debugAppend("displayUploadedImage UtilImage.replaceImageInDivContainer was called");

    } // displayUploadedImage

    // Get image file that has been converted to type jpeg
    static async getConvertedImageFile(i_image_file)
    {
        if (UtilServer.isSafari())
        {
            alert("JazzUploadImage.getConvertedImageFile Browser is Apple Safari. Function compressImage does not work");

            return null;
        }

        if (!JazzUploadImage.fileIsOfTypeImage(i_image_file))
        {
            alert("JazzUploadImage.getConvertedImageFile The file is not an image.");

            return null;
        }

        var file_type = JazzUploadImage.getFileTypeImage(i_image_file);

        if (file_type == "image/jpeg" || file_type == "image/jpg" )
        {
            alert("JazzUploadImage.getConvertedImageFile The file is already type image/jpeg or image/jpg");

            return null;            
        }

        var scale_factor = 1.0;

        console.log("JazzUploadImage.getConvertedImageFile Scaling factor " + scale_factor.toString());

        JazzUploadImage.debugAppend("getConvertedImageFile Scaling factor= " + scale_factor.toString());

        var file_type_str = 'image/jpeg';

        const converted_file = await compressImage(i_image_file, {
            quality: scale_factor,
            type: file_type_str,
        });

        if (null == converted_file)
        {
            alert("JazzUploadImage.getConvertedImageFile Converted image file is null");
            
            return null;
        }

        JazzUploadImage.debugAppend("getConvertedImageFile Exit");

        return converted_file;

    } // getConvertedImageFile
    
    // Get a compressed image if bigger as the input maximum size in Megabyte
    static async getCompressedImageFile(i_image_file, i_max_size_mb)
    {
        if (!JazzUploadImage.fileIsOfTypeImage(i_image_file))
        {
            alert("JazzUploadImage.getCompressedImageFile The file is not an image.");

            return null;
        }
        else
        {
            console.log("JazzUploadImage.getCompressedImageFile The input file is an image");
        }

        var original_size = i_image_file.size/1000000.0;

        console.log("JazzUploadImage.getCompressedImageFile Original image size is " + original_size.toString());

        if (original_size < i_max_size_mb)
        {
            console.log("JazzUploadImage.getCompressedImageFile The original image is not changed");

            return i_image_file;
        }

        var scale_factor = i_max_size_mb/original_size;
        
        console.log("JazzUploadImage.getCompressedImageFile Scaling factor " + scale_factor.toString());

        JazzUploadImage.debugAppend("getCompressedImageFile Scaling factor= " + scale_factor.toString());

        // The ouput type could be equal to the input type, but files get very big and the preferred type is jpeg
        // Please refer to function getInputHtml() for the allowed (accept=) input types 
        //var file_type_str = JazzUploadImage.getFileTypeImage(i_image_file);
        //console.log("JazzUploadImage.getCompressedImageFile Image type= " + file_type_str);
        //JazzUploadImage.debugAppend("getCompressedImageFile Image type= " + file_type_str);

        var file_type_str = 'image/jpeg';

        const compressed_file = await compressImage(i_image_file, {
            quality: scale_factor,
            type: file_type_str,
        });

        if (null == compressed_file)
        {
            alert("JazzUploadImage.getCompressedImageFile Compressed image file is null");
            
            return null;
        }

        JazzUploadImage.debugAppend("getCompressedImageFile Exit");

        return compressed_file;

    } // getCompressedImageFile

    // Returns true if the input file is of type image
    // Type of image is for instance 'image/jpeg'
    static fileIsOfTypeImage(i_file)
    {
        var file_type_str = i_file.type;

        var index_image = file_type_str.indexOf('image');

        if (index_image >= 0)
        {
            return true;
        }
        else
        {
            return false;
        }

    } // fileIsOfTypeImage

    // Returns the Image file type of the input File
    // Uncertain how the returned string 
    static getFileTypeImage(i_file)
    {
        if (!JazzUploadImage.fileIsOfTypeImage(i_file))
        {
            alert("JazzUploadImage.getFileTypeImage Not an image");

            return '';
        }

        var file_type_str = i_file.type;

        var index_jpg = file_type_str.indexOf('jpg');

        var index_jpeg = file_type_str.indexOf('jpeg');

        var index_png = file_type_str.indexOf('png');

        var index_gif = file_type_str.indexOf('gif');

        var index_bmp = file_type_str.indexOf('bmp');

        var ret_type_str = '';

        if (index_jpg >= 0)
        {
            ret_type_str = 'image/jpg';
        }
        else if (index_jpeg >= 0)
        {
            ret_type_str = 'image/jpeg';
        }
        else if (index_png >= 0)
        {
            ret_type_str = 'image/png';
        }
        else if (index_gif >= 0)
        {
            ret_type_str = 'image/gif';
        }
        else if (index_bmp >= 0)
        {
            ret_type_str = 'image/bmp';
        }
        else
        {
            ret_type_str = file_type_str;

            var warning_message = "JazzUploadImage.getFileTypeImage Warning Image type not jpg, jpeg, png, gif or bmp. Type= " + file_type_str;

            alert(warning_message);

            console.log(warning_message);
        }

        return ret_type_str;

    } // getFileTypeImage

    // Get the HTML string defining the content of i_id_div_container
    getHtml()
    {
        var ret_html = '';

        const tabs_two = 2;

        var id_div_input = JazzUploadImage.getIdDivFileInput();

        //20250406 var input_styles_str = 'overflow: hidden; clear: both; text-align: center;';

        var input_styles_str = 'overflow: hidden; clear: both; margin-top: 5px; text-align: center; height: 14%';

        var div_input_inner_html = this.getInputHtml();

        var div_input_html = UtilHtml.getDivElementLeafStyleString(id_div_input, input_styles_str, div_input_inner_html, tabs_two);

        var id_div_label_name = JazzUploadImage.getIdDivFileName();

        //20250406 var file_name_styles_str = 'border: solid 1px grey; margin-top: 10px; clear: both;text-align: center;';

        var file_name_styles_str = 'border: solid 1px grey; margin-top: 10px; margin-left: 2%; margin-right: 2%;  clear: both;text-align: center; height: 9%';

        var div_file_name_inner_html = '...'; 

        var div_file_name_html = UtilHtml.getDivElementLeafStyleString(id_div_label_name, file_name_styles_str, div_file_name_inner_html, tabs_two);

        var id_div_image_container = JazzUploadImage.getIdDivImageContainer();

        //20250406 var image_container_styles_str = 'border: solid 1px blue;  margin-top: 10px; clear: both;'; // TODO Must have a border, otherwise it disappears ??

        // It is necessary to set the height. Calling changeDefaultImageFile multiple times made the container height smaller and smaller
        var image_container_styles_str = ' margin-top: 10px; height: 60%; clear: both;'; 

        var id_div_upload_image = JazzUploadImage.getIdDivUploadImage();

        var image_styles_str = '';

        var image_width = '98%';

        var event_fctn = '';

        var file_name_icon = this.m_input_data.m_default_img;

        var image_title = '';

        //20250406 var upload_image_html = UtilHtml.getDivElementIconStyleString(id_upload_image, image_styles_str, file_name_icon, image_width, event_fctn, image_title, tabs_two+1);
        var upload_image_html = UtilHtml.getDivElementImageString(id_div_upload_image, image_styles_str, file_name_icon, 'Image', image_width, event_fctn, image_title, tabs_two+1)
        
        var div_image_container_html = UtilHtml.getDivElementLeafStyleString(id_div_image_container, image_container_styles_str, upload_image_html, tabs_two);

        ret_html = ret_html + div_input_html;

        ret_html = ret_html + div_file_name_html;

        ret_html = ret_html + div_image_container_html;

        return ret_html;

    } // getHtml

    // Get the HTML string as defined below
    // <input id="id_fileupload" type="file" accept="image/png, image/jpeg, image/jpg" /> 
    // <label for="id_fileupload">Bild wählen</label> 
    getInputHtml()
    {
        var ret_input_html = '';

        var input_style_str = '';

        input_style_str = input_style_str + ' style= "';

        input_style_str = input_style_str + 'width: 0; ';
        input_style_str = input_style_str + 'height: 0; ';
        input_style_str = input_style_str + 'z-index: -1; ';
        input_style_str = input_style_str + 'position: absolute; ';
        input_style_str = input_style_str + 'overflow: hidden; ';
        input_style_str = input_style_str + 'opacity: 0 ';

        input_style_str = input_style_str + '" ';

        var label_style_str = '';

        // https://www.w3docs.com/snippets/css/how-to-control-the-width-of-the-label-tag.html
        label_style_str =  label_style_str + ' style= "';
     
        label_style_str =  label_style_str + 'display: inline-block; '; 
        label_style_str =  label_style_str + 'width: 95%; '; 
        label_style_str =  label_style_str + 'border: solid 2px black; ';
        label_style_str =  label_style_str + 'padding-top: 5px; ';
        label_style_str =  label_style_str + 'padding-bottom: 5px; ';
        label_style_str =  label_style_str + 'margin-left: 0px;';
        label_style_str =  label_style_str + 'background-color: rgb(229, 225, 218);';
        label_style_str =  label_style_str + 'cursor: pointer ';

        label_style_str =  label_style_str + '" ';

        var id_input_str = JazzUploadImage.getIdFileInput();

        ret_input_html = ret_input_html + '<input id="' + id_input_str + '" type="file" accept="image/png, image/jpeg, image/jpg, image/gif, image/bmp"';

        ret_input_html = ret_input_html + input_style_str + '/>';

        ret_input_html = ret_input_html + '<label for="' + id_input_str + '" ';

        ret_input_html = ret_input_html + label_style_str + '>' + this.m_input_data.m_caption_select_img + '</label>';

        return ret_input_html;
        
    } // getInputHtml

    // Set image and image file name for an image on the server, i.e. not an uploaded image
    // 1. Get elements image and file name container.
    //    Call of getElementDivImageContainer and getElementDivFileName
    // 2. Get only the file name and set the file name
    //    Call of UtilServer.getFileName and set innerHTML for the file name container
    // 3. Replace the image with the input window
    //    Call of UtilImage.replaceImageInDivContainer
    changeDefaultImageFile(i_url_image)
    {
        var image_container_el = JazzUploadImage.getElementDivImageContainer();

        var file_name_container = JazzUploadImage.getElementDivFileName();

        var file_name = UtilServer.getFileName(i_url_image);

        file_name_container.innerHTML = file_name;

        UtilImage.replaceImageInDivContainer(i_url_image, image_container_el);

    } // changeDefaultImageFile

    // Returns the <input> element
    static getElementFileInput()
    {
        return document.getElementById(JazzUploadImage.getIdFileInput());

    } // getElementFileInput

    // Returns the identity string for the <input> element
    static getIdFileInput()
    {
        return 'id_jazzuploadimage_fileupload';

    } // getIdFileInput

    // Returns the identity string for the <div> that has the <input> element
    static getIdDivFileInput()
    {
        return 'id_div_jazzuploadimage_fileupload';

    } // getIdDivFileInput

    // Returns the div element file name
    static getElementDivFileName()
    {
        return document.getElementById(JazzUploadImage.getIdDivFileName());

    } // getElementDivFileName

    // Returns the identity string for the file name <div>
    static getIdDivFileName()
    {
        return 'id_div_jazzuploadimage_file_name';

    } // getIdDivFileName

    // Returns the div element image container
    static getElementDivImageContainer()
    {
        return document.getElementById(JazzUploadImage.getIdDivImageContainer());

    } // getElementDivImageContainer

    // Returns the identity string for the image container <div>
    static getIdDivImageContainer()
    {
        return 'id_div_jazzuploadimage_image_container';

    } // getIdDivImageContainer

    // Returns the <img> element
    static getElementUploadImage()
    {
        var div_img_el = JazzUploadImage.getElementDivUploadImage();

        var img_elements = div_img_el.getElementsByTagName('img');

        return img_elements[0];

    } // getElementUploadImage

    // Returns the the div element for upload <img>
    static getElementDivUploadImage()
    {
        return document.getElementById(JazzUploadImage.getIdDivUploadImage());

    } // getElementDivUploadImage

    // Returns the identity string for the upload <img>
    static getIdDivUploadImage()
    {
        return 'id_div_jazzuploadimage_upload_image';

    } // getIdUploadImage

    // Returns the debug file name
    static getDebugFilename()
    {
        return  'JazzUploadImage';

        // return  'NoDebug';

    } // getDebugFilename

    // Create a new debug file
    static initDebugFile()
    {
        var b_execute_server = UtilServer.execApplicationOnServer();

        if (!b_execute_server)
        {
            return;
        }

        if (JazzUploadImage.getDebugFilename() == 'NoDebug')
        {
            return;
        }

        UtilServer.initDebugFile(JazzUploadImage.getDebugFilename());

    } // initDebugFile

    // Append to debug file
    static debugAppend(i_msg_str)
    {
        var b_execute_server = UtilServer.execApplicationOnServer();

        if (!b_execute_server)
        {
            return;
        }
        
        if (JazzUploadImage.getDebugFilename() == 'NoDebug')
        {
            return;
        }
        
        if (JazzUploadImage.getDebugFilename() == 'NoDebug')
        {
            return;
        }

        UtilServer.appendDebugFile(i_msg_str, JazzUploadImage.getDebugFilename());

    } // debugAppend

} // JazzUploadImage


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Control Upload Image ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
