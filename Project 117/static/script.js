$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    let date = new Date()
    let current_date = date.toDateString()

    //  display the date on the HTML page using JQUERY and JS
    $('').text('Date : ' + current_date)

    let emotion = ""
    let emoji_url = ""

    //  write an event, when Submit button is clicked
    $('').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : '',

            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                emotion = result.sentiment
                emoji_url = result.path

                //  update the DOM elements
                $("#prediction").html(emotion)
                $('#prediction').css("display", "block");
                

                //  show them
                $("#emo_img_url").attr('src', emoji_url);
                $('#emo_img_url').css("display", "block");
                
            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})