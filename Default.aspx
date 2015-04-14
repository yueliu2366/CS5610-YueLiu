<!DOCTYPE html>
<html lang="en" class="no-js">

<head>

<!-- title and meta -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
<meta name="description" content="A simple responsive navigation menu using HTML, CSS, and a bit of jQuery." />
<title>Yue Liu's Home Page</title>
    
<!-- css -->
<link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400,700,400italic' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="css/mybase.css" />
<link rel="stylesheet" href="css/mystyle.css" />
<link rel="stylesheet" href="css/mygridlayout.css" />
    
<!-- js -->
<script src="javascript/jquery-1.9.1.min.js"></script>
<script src="javascript/modernizr.custom.js"></script>
<script>
 
</script>


</head>



<body>

<div id="wrapper">

<div id="top-bar">
    <div class="container clearfix">
        <span class="all-labs"><a href="story/index.htm?../experiments/story.txt" target="_blank">Experiments</a></span>
        <span class="back-to-tutorial"><a href="#">Project</a></span>
    </div>
</div><!-- /#top-bar -->

<header>
    <div id="title" class="container">
        <h1>Welcome to YueLiu's Page</h1>
        <h2>CS5610 Web Design</h2>
    </div>
</header><!-- /header -->


<div id="main">
    <div class="container">
        <div id="nav-trigger">
            <span>Menu</span>
        </div>
        <nav id="nav-main">
            <ul>
               <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
               <li><a href="statistics/" target="_blank">Statistics</a></li>
               <li><a href="source/" target="_blank">Source</a></li>
               <li><a href="search/" target="_blank">Search</a></li>
               <li><a href="searchtree/" target="_blank">SearchTree</a></li>
               <li><a href="textview/" target="_blank">TextView</a></li>
               <li><a href="filelist.aspx" target="_blank">FileList</a></li>
               <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
               <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
               <li><a href="blog/" target="_blank">Blog</a></li>
               <li><a href="https://github.com/yueliu2366/CS5610-YueLiu" target="_blank">GitHub</a></li>
            </ul>
        </nav>
        <nav id="nav-mobile"></nav>

		
		<div class="section group">
		  <div class="col span_1_of_3 circle" style="background-image:url('images/me.jpg')"></div>
		  <div class="col span_2_of_3">
          <h1>Hello, I'm Yue Liu!</h1>
          <p> I am a 2nd year graduate student at Northeastern University studying Computer Science. I am interested in Web Development and Design. 
          From this course, I become more comfortable with the web development tools and languages I already know, 
          As well as learn to develop in MEAN(MongoDB, ExpressJS, AngularJS, NodeJs) stack, and more about the server and client interactions.</p>
          </div>
      </div>
      
      
      
    </div>
</div><!-- #main -->


<footer>
<pre>
Copyright © Yue Liu 2015
Northeastern University
</pre>
</footer><!-- /footer -->



</div><!-- /#wrapper -->


</body>
</html>