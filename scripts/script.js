$(document).ready(function(){
  
  
  $.getJSON('http://api.npr.org/query?id=1001&numResults=10&apiKey=MDIwMDA2OTAyMDE0MzgxODI1Mjk2OThmZg001&output=json', function(result) {
           
//            var article_title = result. ;
//            var article_author = result. ;
              var paragraph = result.list.story[9].text.paragraph;
    var i = 0;
    for (i = 0; i<= paragraph.length; i++) {
         var article_story = result.list.story[9].text.paragraph[i].$text;
      console.log(article_story);
    };
    
           // defines vars in terms of JSON
    
//            console.log(article_title);
//            console.log(article_author);
           // console.log(article_story);
           // prints vars to console to make sure they are right vals
    
//            $('#article-heading').html(article_title + "by" + article_author)
            $('#article-div').html(article_story);
           // changes html of divs with info in JSON
    
   // see if we can set a var = to article = using JSON, get url of article, and pass that into get function
  
  });
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
});